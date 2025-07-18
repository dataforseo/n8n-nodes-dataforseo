import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getAppStoreBulkAppMetrics(ef: IExecuteFunctions, i: number) {
	const ids = ef.getNodeParameter('app_ids', i) as IDataObject;
	const parsedIds = parseMultiOptionItems(ids);

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/apple/bulk_app_metrics/live',
		body: [{
			app_ids: parsedIds.length ? parsedIds : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAppStoreKeywordsForApp(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/apple/keywords_for_app/live',
		body: [{
			app_id: ef.getNodeParameter('app_id', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAppStoreAppCompetitors(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/apple/app_competitors/live',
		body: [{
			app_id: ef.getNodeParameter('app_id', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAppStoreAppIntersection(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const ids = ef.getNodeParameter('app_ids_20', i) as IDataObject;
	const values = ids.values as Array<any>;
	let parsedIds = {};
	let index;
	for (const key in values) {
		index = parseInt(key) + 1;
		Object.defineProperty(
			parsedIds,
			index.toString(),
			{
				value: values[key]['value'],
				writable: true,
				enumerable: true,
				configurable: true
			}
		);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/apple/app_intersection/live',
		body: [{
			app_ids: parsedIds,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
