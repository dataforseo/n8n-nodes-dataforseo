import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { ContentAnalysisOperations } from './resources/content_analysis';
import { getCategoryTrends, getPhraseTrends, getRatingDistribution, getSearchResults, getSentimentAnalysis, getSummary } from './execute/content_analysis';

export class DataForSeoContentAnalysisApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Content Analysis API',
		name: 'dataForSeoContentAnalysisApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Content Analysis API',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],

		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		requestDefaults: {
			method: 'POST',
			baseURL: 'https://api.dataforseo.com/v3',
			headers: {
					'Content-Type': 'application/json',
			},
		},
		properties: [
			...ContentAnalysisOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
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

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				responseData.push(await fn(this, i));
			}
		} catch (e) {
			if (e instanceof NodeOperationError) {
				throw e;
			} else {
				throw new NodeOperationError(this.getNode(), "Something went wrong");
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>
};
