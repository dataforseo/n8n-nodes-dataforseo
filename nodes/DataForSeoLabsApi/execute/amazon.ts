import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getBulkSearchVolume(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/amazon/bulk_search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAmazonRelatedKeywords(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/amazon/related_keywords/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			depth: ef.getNodeParameter('depth', i) || null,
			include_seed_keyword: ef.getNodeParameter('include_seed_keyword', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAmazonRankedKeywords(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/amazon/ranked_keywords/live',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getProductRankOverview(ef: IExecuteFunctions, i: number) {
	const asins = ef.getNodeParameter('asins', i) as IDataObject;
	const parsedAsins = parseMultiOptionItems(asins);

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/amazon/product_rank_overview/live',
		body: [{
			asins: parsedAsins.length ? parsedAsins : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getProductCompetitors(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/amazon/product_competitors/live',
		body: [{
			asin: ef.getNodeParameter('asin', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getProductKeywordIntersections(ef: IExecuteFunctions, i: number) {
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

	const asins = ef.getNodeParameter('asins_for_intersection', i) as IDataObject;
	const values = asins.values as Array<any>;
	let parsedAsins = {};
	let index;
	for (const key in values) {
		index = parseInt(key) + 1;
		Object.defineProperty(
			parsedAsins,
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
		url: '/dataforseo_labs/amazon/product_keyword_intersections/live',
		body: [{
			asins: parsedAsins,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			intersection_mode: ef.getNodeParameter('intersection_mode', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}
