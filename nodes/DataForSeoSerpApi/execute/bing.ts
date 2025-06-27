import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest, dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveBingOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/live/regular',
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

export async function getLiveBingOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/live/advanced',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveBingOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/live/html',
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

export async function getBingOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/task_post',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/bing/organic/task_get/regular/');
}

export async function getBingOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/task_post',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/bing/organic/task_get/advanced/');
}

export async function getBingOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/organic/task_post',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/bing/organic/task_get/html/');
}

export async function getLiveBingLocalPackSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/local_pack/live/regular',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveBingLocalPackSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/local_pack/live/regular',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingLocalPackSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/local_pack/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/bing/local_pack/task_get/regular/');
}

export async function getBingLocalPackSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/bing/local_pack/task_post',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/bing/local_pack/task_get/html/');
}
