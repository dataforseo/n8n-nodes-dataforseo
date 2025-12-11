import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveChatGptLlmResponses(ef: IExecuteFunctions, i: number) {
	let messages = ef.getNodeParameter('message_chain', i) as IDataObject;
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/chat_gpt/llm_responses/live',
		body: [{
			user_prompt: ef.getNodeParameter('user_prompt', i),
			model_name: ef.getNodeParameter('model_name', i),
			max_output_tokens: ef.getNodeParameter('max_output_tokens', i) || null,
			temperature: ef.getNodeParameter('temperature', i) || null,
			top_p: ef.getNodeParameter('top_p', i) || null,
			web_search: ef.getNodeParameter('web_search', i),
			force_web_search: ef.getNodeParameter('web_search', i) ? ef.getNodeParameter('force_web_search', i) : null,
			web_search_country_iso_code: ef.getNodeParameter('web_search_country_iso_code', i) || null,
			web_search_city: ef.getNodeParameter('web_search_city', i) || null,
			system_message: ef.getNodeParameter('system_message', i) || null,
			message_chain: messages.values || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveChatGptLlmResultsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/chat_gpt/llm_scraper/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			force_web_search: ef.getNodeParameter('force_web_search', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveChatGptLlmResultsHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/chat_gpt/llm_scraper/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			force_web_search: ef.getNodeParameter('force_web_search', i),
			expand_citations: ef.getNodeParameter('expand_citations', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function geChatGptLlmResultsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/chat_gpt/llm_scraper/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			force_web_search: ef.getNodeParameter('force_web_search', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/ai_optimization/chat_gpt/llm_scraper/task_get/advanced/');
}

export async function geChatGptLlmResultsHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/chat_gpt/llm_scraper/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			force_web_search: ef.getNodeParameter('force_web_search', i),
			expand_citations: ef.getNodeParameter('expand_citations', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/ai_optimization/chat_gpt/llm_scraper/task_get/html/');
}
