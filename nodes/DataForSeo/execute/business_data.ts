import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	sleep,
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems} from './generalFunctions';
import { dataForSeoRequest } from './dataForSeoRequest';

export async function getBusinessListings(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const categories = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);
	if (parsedCategories.length > 10) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than 10 categories");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as Array<string>;
	if (orderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/business_data/business_listings/search/live',
		body: [{
			categories: parsedCategories.length ? parsedCategories : null,
			description:  ef.getNodeParameter('description', i) || null,
			title:  ef.getNodeParameter('title', i) || null,
			is_claimed:  ef.getNodeParameter('is_claimed', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: orderBy.length ? orderBy : null,
			limit:  ef.getNodeParameter('limit', i) || null,
			offset:  ef.getNodeParameter('offset', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBusinessListingsCategoriesAggregation(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Initial Dataset Filters value");
	}

	const categories = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);
	if (parsedCategories.length > 10) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than 10 categories");
	}

	const params: IHttpRequestOptions = {
		url: '/business_data/business_listings/categories_aggregation/live',
		body: [{
			categories: parsedCategories.length ? parsedCategories : null,
			description:  ef.getNodeParameter('description', i) || null,
			title:  ef.getNodeParameter('title', i) || null,
			is_claimed:  ef.getNodeParameter('is_claimed', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			limit:  ef.getNodeParameter('limit', i) || null,
			offset:  ef.getNodeParameter('offset', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/reviews/task_post',
		body: [{
			keyword: ef.getNodeParameter('search_by', i) == 'keyword' ?  ef.getNodeParameter('keyword', i) : null,
			cid: ef.getNodeParameter('search_by', i) == 'cid' ?  ef.getNodeParameter('keyword', i) : null,
			place_id: ef.getNodeParameter('search_by', i) == 'place_id' ?  ef.getNodeParameter('keyword', i) : null,
			task_priority: ef.getNodeParameter('task_priority', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			depth: ef.getNodeParameter('depth', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	let responseData = await dataForSeoRequest(ef, params);

	const taskId = responseData['tasks'][0]['id'] as String;
	if (taskId) {
		const taskOptions: IHttpRequestOptions = {
			method: 'GET',
			url: '/business_data/google/reviews/task_get/' + taskId,
		};
		let responseReceived = false;
		let j = 0;
		let statusCode;
		while (j<100 || !responseReceived) {
			sleep(200);
			responseData = await dataForSeoRequest(ef, taskOptions)
			statusCode = responseData['tasks'][0]['status_code'];
			responseReceived = statusCode != 40601 && statusCode != 40602 && statusCode != 20100;
			j++;
		}
	}

	return responseData;
}
