import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest, dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

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

export async function getLiveGeminiLlmScraperResultsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/gemini/llm_scraper/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGeminiLlmScraperResultsHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/gemini/llm_scraper/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			expand_citations: ef.getNodeParameter('expand_citations', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGeminiLlmScraperResultsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/gemini/llm_scraper/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/ai_optimization/gemini/llm_scraper/task_get/advanced/');
}

export async function getGeminiLlmScraperResultsHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/ai_optimization/gemini/llm_scraper/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name	: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			expand_citations: ef.getNodeParameter('expand_citations', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/ai_optimization/gemini/llm_scraper/task_get/html/');
}
