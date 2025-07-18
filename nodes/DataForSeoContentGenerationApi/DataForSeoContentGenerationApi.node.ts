import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { ContentGenerationOperations } from './resources/content_generation';
import { checkGrammar, generateMetaTags, generateSubTopics, generateTextByTopic, generateTextFromInitialInput, getTextSummary, paraphraseText } from './execute/content_generation';

export class DataForSeoContentGenerationApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Content Generation API',
		name: 'dataForSeoContentGenerationApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Content Generation API',
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
			...ContentGenerationOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
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

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				responseData.push(await fn(this, i));
			}
		} catch (e) {
			throw e;
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
