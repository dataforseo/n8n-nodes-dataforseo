import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest, dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveYahooOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/live/regular',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveYahooOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/live/advanced',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveYahooOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/live/html',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getYahooOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/yahoo/organic/task_get/regular/');
}

export async function getYahooOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/yahoo/organic/task_get/advanced/');
}

export async function getYahooOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/yahoo/organic/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/yahoo/organic/task_get/html/');
}
