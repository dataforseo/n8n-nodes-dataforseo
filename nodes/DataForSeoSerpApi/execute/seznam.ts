import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getSeznamOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/seznam/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/seznam/organic/task_get/regular/');
}

export async function getSeznamOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/seznam/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/seznam/organic/task_get/advanced/');
}

export async function getSeznamOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/seznam/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/seznam/organic/task_get/html/');
}
