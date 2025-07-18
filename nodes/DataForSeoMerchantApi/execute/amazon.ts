import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getAmazonProductsAdvnced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/products/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			department: ef.getNodeParameter('department', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			price_min: ef.getNodeParameter('price_min', i) || null,
			price_max: ef.getNodeParameter('price_max', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/products/task_get/advanced/');
}

export async function getAmazonProductsHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/products/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			department: ef.getNodeParameter('department', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			price_min: ef.getNodeParameter('price_min', i) || null,
			price_max: ef.getNodeParameter('price_max', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/products/task_get/html/');
}

export async function getAmazonProductAsinsAdvnced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/asin/task_post',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			load_more_local_reviews: ef.getNodeParameter('load_more_local_reviews', i),
			local_reviews_sort: ef.getNodeParameter('local_reviews_sort', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/asin/task_get/advanced/');
}

export async function getAmazonProductAsinsHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/asin/task_post',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			load_more_local_reviews: ef.getNodeParameter('load_more_local_reviews', i),
			local_reviews_sort: ef.getNodeParameter('local_reviews_sort', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/asin/task_get/html/');
}

export async function getAmazonSellersAdvnced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/sellers/task_post',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/sellers/task_get/advanced/');
}

export async function getAmazonSellersHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/amazon/sellers/task_post',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/amazon/sellers/task_get/html/');
}
