import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveGeminiLlmResponses(ef: IExecuteFunctions, i: number) {
	let messages = ef.getNodeParameter('message_chain', i) as IDataObject;
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/gemini/llm_responses/live',
		body: [{
			user_prompt: ef.getNodeParameter('user_prompt', i),
			model_name: ef.getNodeParameter('model_name', i),
			max_output_tokens: ef.getNodeParameter('max_output_tokens', i) || null,
			temperature: ef.getNodeParameter('temperature', i) || null,
			top_p: ef.getNodeParameter('top_p', i) || null,
			web_search: ef.getNodeParameter('web_search', i),
			system_message: ef.getNodeParameter('system_message', i) || null,
			message_chain: messages.values || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
