import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from './generalFunctions';
import { dataForSeoRequest } from './dataForSeoRequest';

export async function getDomainRankOverview(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/domain_rank_overview/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordSuggestions(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as Array<string>;
	if (orderBy.length > 3) {
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
		url: '/dataforseo_labs/google/keyword_suggestions/live',
		body: [{
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			keyword: ef.getNodeParameter('keyword', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			order_by: orderBy.length ? orderBy : null,
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRankedKeywords(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const orderBy = ef.getNodeParameter('order_by_ranked', i) as Array<string>;
	if (orderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/ranked_keywords/live',
		body: [{
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			target: ef.getNodeParameter('target', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			order_by: orderBy.length ? orderBy : null,
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordDifficulty(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/bulk_keyword_difficulty/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getOrganicTrafficStats(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/bulk_traffic_estimation/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistorycalTrafficStats(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/historical_bulk_traffic_estimation/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}


export async function getKeywordIdeas(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_ideas', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by_string', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);

	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/keyword_ideas/live',
		body: [{
			keywords: parsedKeywords.length? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			closely_variants: ef.getNodeParameter('closely_variants', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}
