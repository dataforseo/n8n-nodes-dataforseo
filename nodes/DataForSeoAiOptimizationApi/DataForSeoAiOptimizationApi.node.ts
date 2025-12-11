import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { KeywordDataOperations } from './resources/keyword_data';
import { getAiKeywordSearchVolume } from './execute/keyword_data';
import { geChatGptLlmResultsAdvanced, geChatGptLlmResultsHTML, getLiveChatGptLlmResponses, getLiveChatGptLlmResultsAdvanced, getLiveChatGptLlmResultsHTML } from './execute/chat_gpt';
import { ChatGptOperations } from './resources/chat_gpt';
import { ClaudeOperations } from './resources/claude';
import { getLiveClaudeLlmResponses } from './execute/claude';
import { getLiveGeminiLlmResponses } from './execute/gemini';
import { GeminiOperations } from './resources/gemini';
import { getLivePerplexityLlmResponses } from './execute/perplexity';
import { LlmMentionsOperations } from './resources/llm_mentions';
import { getLiveLlmMentions, getLiveLlmMentionsAggregatedMetrics, getLiveLlmMentionsCrossAggregatedMetrics, getLiveLlmMentionsTopDomains, getLiveLlmMentionsTopPages } from './execute/llm_mentions';
import { PerplexityOperations } from './resources/perplexity';

export class DataForSeoAiOptimizationApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO AI Optimization API',
		name: 'dataForSeoAiOptimizationApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo AI Optimization API',
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
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
						{
							name: 'Keyword Data',
							value: 'keyword_data',
						},
						{
							name: 'ChatGPT',
							value: 'chat_gpt',
						},
						{
							name: 'Claude',
							value: 'claude',
						},
						{
							name: 'Gemini',
							value: 'gemini',
						},
						{
							name: 'Perplexity',
							value: 'perplexity',
						},
						{
							name: 'LLM Mentions',
							value: 'llm_mentions',
						}
				],
				default: 'keyword_data',
			},
			...KeywordDataOperations,
			...ChatGptOperations,
			...ClaudeOperations,
			...GeminiOperations,
			...PerplexityOperations,
			...LlmMentionsOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'keyword_data': {
				'get-ai-keyword-search-volume': getAiKeywordSearchVolume
			},
			'chat_gpt': {
				'get-live-chat-gpt-llm-responses': getLiveChatGptLlmResponses,
				'get-live-chat-gpt-llm-results-advanced': getLiveChatGptLlmResultsAdvanced,
				'get-live-chat-gpt-llm-results-html': getLiveChatGptLlmResultsHTML,
				'get-chat-gpt-llm-results-advanced': geChatGptLlmResultsAdvanced,
				'get-chat-gpt-llm-results-html': geChatGptLlmResultsHTML
			},
			'claude': {
				'get-live-claude-llm-responses': getLiveClaudeLlmResponses,
			},
			'gemini': {
				'get-live-gemini-llm-responses': getLiveGeminiLlmResponses
			},
			'perplexity': {
				'get-live-perplexity-llm-responses': getLivePerplexityLlmResponses
			},
			'llm_mentions': {
				'get-live-llm-mentions': getLiveLlmMentions,
				'get-live-llm-mentions-top-pages': getLiveLlmMentionsTopPages,
				'get-live-llm-mentions-top-domains': getLiveLlmMentionsTopDomains,
				'get-live-llm-mentions-aggregated-metrics': getLiveLlmMentionsAggregatedMetrics,
				'get-live-llm-mentions-cross-aggregated-metrics': getLiveLlmMentionsCrossAggregatedMetrics
			}
		};

		const fn = mapping[resource][operation];
		if (!fn) {
			throw new NodeOperationError(this.getNode(), "Something went wrong");
		}

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
			}
		} catch (e) {
			if (e instanceof NodeOperationError) {
				throw e;
			} else {
				throw new NodeOperationError(this.getNode(), e);
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>;
	}
};
