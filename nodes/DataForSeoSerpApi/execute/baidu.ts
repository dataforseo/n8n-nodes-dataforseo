import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import {dataForSeoPOSTGETRequest} from '../../../functions/dataForSeoRequest';

export async function getBaiduOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/baidu/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			get_website_url: ef.getNodeParameter('get_website_url', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/baidu/organic/task_get/regular/');
}

export async function getBaiduOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/baidu/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			get_website_url: ef.getNodeParameter('get_website_url', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/baidu/organic/task_get/advanced/');
}

export async function getBaiduOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/baidu/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			get_website_url: ef.getNodeParameter('get_website_url', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/baidu/organic/task_get/html/');
}
