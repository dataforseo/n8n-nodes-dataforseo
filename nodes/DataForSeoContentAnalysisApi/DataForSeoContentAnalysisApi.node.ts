import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { ContentAnalysisOperations } from './resources/content_analysis';
import { getCategoryTrends, getPhraseTrends, getRatingDistribution, getSearchResults, getSentimentAnalysis, getSummary } from './execute/content_analysis';

export class DataForSeoContentAnalysisApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Content Analysis API',
		name: 'dataForSeoContentAnalysisApi',
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo Content Analysis API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		properties: [
			...ContentAnalysisOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const responseData = [];
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'get-search-results': getSearchResults,
			'get-summary': getSummary,
			'get-sentiment-analysis': getSentimentAnalysis,
			'get-rating-distribution': getRatingDistribution,
			'get-phrase-trends': getPhraseTrends,
			'get-category-trends': getCategoryTrends
		};

		const fn = mapping[operation];
		if (!fn) {
			throw new NodeOperationError(this.getNode(), "Something went wrong");
		}

		const items = this.getInputData();

		for (let i = 0; i < items.length; i++) {
			try {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
			} catch (error) {
				if (this.continueOnFail()) {
					responseData.push({ json: items[i].json, error, pairedItem: i });
				} else {
					if (error.context) {
						error.context.itemIndex = i;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex: i,
					});
				}
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<IDataObject>
};
