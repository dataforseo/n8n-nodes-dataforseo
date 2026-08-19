import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { ContentGenerationOperations } from './resources/content_generation';
import { checkGrammar, generateMetaTags, generateSubTopics, generateTextByTopic, generateTextFromInitialInput, getTextSummary, paraphraseText } from './execute/content_generation';

export class DataForSeoContentGenerationApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Content Generation API',
		name: 'dataForSeoContentGenerationApi',
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo Content Generation API',
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
			...ContentGenerationOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const responseData = [];
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'generate-text-from-initial-input': generateTextFromInitialInput,
			'generate-text-by-topic': generateTextByTopic,
			'generate-meta-tags': generateMetaTags,
			'generate-sub-topics': generateSubTopics,
			'paraphrase-text': paraphraseText,
			'check-grammar': checkGrammar,
			'get-text-summary': getTextSummary
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
