import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseFilters, parseMultiOptionItems, parseOrderByString } from '../../../functions/generalFunctions';

export async function searchAppsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_searches/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_searches/task_get/advanced/');
}

export async function searchAppsHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_searches/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_searches/task_get/html/');
}

export async function getAppListAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_list/task_post',
		body: [{
			app_collection: ef.getNodeParameter('app_collection', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth_for_list', i) || null,
			app_category: ef.getNodeParameter('app_category', i) || null,
			age_rating: ef.getNodeParameter('age_rating', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_list/task_get/advanced/');
}

export async function getAppListHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_list/task_post',
		body: [{
			app_collection: ef.getNodeParameter('app_collection', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth_for_list', i) || null,
			app_category: ef.getNodeParameter('app_category', i) || null,
			age_rating: ef.getNodeParameter('age_rating', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_list/task_get/html/');
}

export async function getAppInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_info/task_post',
		body: [{
			app_id: ef.getNodeParameter('app_id', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_info/task_get/advanced/');
}

export async function getAppInfoHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_info/task_post',
		body: [{
			app_id: ef.getNodeParameter('app_id', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_info/task_get/html/');
}

export async function getAppReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_reviews/task_post',
		body: [{
			app_id: ef.getNodeParameter('app_id', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth_reviews', i) || null,
			rating: ef.getNodeParameter('rating', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/app_data/google/app_reviews/task_get/advanced/');
}

export async function getAppListingSearch(ef: IExecuteFunctions, i: number) {
	const categories = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/app_data/google/app_listings/search/live',
		body: [{
			categories: parsedCategories.length ? parsedCategories : null,
			descriptopn: ef.getNodeParameter('description', i) || null,
			title: ef.getNodeParameter('title', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit:  ef.getNodeParameter('limit', i) || null,
			offset:  ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
