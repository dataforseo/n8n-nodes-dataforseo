import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLivePerplexityLlmResponses(ef: IExecuteFunctions, i: number) {
	let messages = ef.getNodeParameter('message_chain', i) as IDataObject;
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/perplexity/llm_responses/live',
		body: [{
			user_prompt: ef.getNodeParameter('user_prompt', i),
			model_name: ef.getNodeParameter('model_name', i),
			max_output_tokens: ef.getNodeParameter('max_output_tokens', i) || null,
			temperature: ef.getNodeParameter('temperature', i) || null,
			top_p: ef.getNodeParameter('top_p', i) || null,
			web_search_country_iso_code: ef.getNodeParameter('web_search_country_iso_code', i) || null,
			system_message: ef.getNodeParameter('system_message', i) || null,
			message_chain: messages.values || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
