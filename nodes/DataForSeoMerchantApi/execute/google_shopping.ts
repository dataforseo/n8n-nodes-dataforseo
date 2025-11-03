import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseSpecifications} from '../../../functions/generalFunctions';
import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getProductsAdvnced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/google/products/task_post',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			price_min: ef.getNodeParameter('price_min', i) || null,
			price_max: ef.getNodeParameter('price_max', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/google/products/task_get/advanced/');
}

export async function getProductsHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/google/products/task_post',
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
			search_param: ef.getNodeParameter('search_param', i) || null,
			price_min: ef.getNodeParameter('price_min', i) || null,
			price_max: ef.getNodeParameter('price_max', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/google/products/task_get/html/');
}

export async function getSellersAdvnced(ef: IExecuteFunctions, i: number) {
	const specifications = ef.getNodeParameter('additional_specifications', i) as IDataObject;
	const parsedSpecifications = parseSpecifications(specifications);

	const params: IHttpRequestOptions = {
		url: '/merchant/google/sellers/task_post',
		body: [{
			product_id: ef.getNodeParameter('product_id', i) || null,
			data_docid: ef.getNodeParameter('data_docid', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			get_shops_on_google: ef.getNodeParameter('get_shops_on_google', i),
			additional_specifications: parsedSpecifications
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/google/sellers/task_get/advanced/');
}

export async function getProductInfo(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/google/product_info/task_post',
		body: [{
			product_id: ef.getNodeParameter('product_id', i) || null,
			data_docid: ef.getNodeParameter('data_docid', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/google/product_info/task_get/advanced/');
}

export async function getProductReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/merchant/google/reviews/task_post',
		body: [{
			product_id: ef.getNodeParameter('product_id', i) || null,
			data_docid: ef.getNodeParameter('data_docid', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth_reviews', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/merchant/google/reviews/task_get/advanced/');
}
