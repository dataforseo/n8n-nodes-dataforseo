import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getNaverOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/naver/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/naver/organic/task_get/regular/');
}

export async function getNaverOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/naver/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/naver/organic/task_get/advanced/');
}

export async function getNaverOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/naver/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/naver/organic/task_get/html/');
}
