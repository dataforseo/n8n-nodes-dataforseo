import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseFilters, parseMultiOptionItems, parseOrderByString } from '../../../functions/generalFunctions';

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

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parserdOrderBy = parseOrderByString(orderBy);

	const params: IHttpRequestOptions = {
		url: '/business_data/business_listings/search/live',
		body: [{
			categories: parsedCategories.length ? parsedCategories : null,
			description:  ef.getNodeParameter('description', i) || null,
			title:  ef.getNodeParameter('title', i) || null,
			is_claimed:  ef.getNodeParameter('is_claimed', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parserdOrderBy.length ? parserdOrderBy : null,
			limit:  ef.getNodeParameter('limit', i) || null,
			offset:  ef.getNodeParameter('offset', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getCategoriesAggregation(ef: IExecuteFunctions, i: number) {
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
