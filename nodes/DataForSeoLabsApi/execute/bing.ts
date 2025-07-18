import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getBingBulkKeywordDifficulty(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/bulk_keyword_difficulty/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingBulkTrafficEstimation(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/bulk_traffic_estimation/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingCompetitorsDomain(ef: IExecuteFunctions, i: number) {
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

	const intersectingDomains = ef.getNodeParameter('intersecting_domains', i) as IDataObject;
	const parsedIntersectingDomains = parseMultiOptionItems(intersectingDomains);

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/competitors_domain/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			max_rank_group: ef.getNodeParameter('max_rank_group', i) || null,
			exclude_top_domains: ef.getNodeParameter('exclude_top_domains', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			intersecting_domains: parsedIntersectingDomains.length ? parsedIntersectingDomains : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingDomainIntersection(ef: IExecuteFunctions, i: number) {
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

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/domain_intersection/live',
		body: [{
			target1: ef.getNodeParameter('target1', i),
			target2: ef.getNodeParameter('target2', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			intersections: ef.getNodeParameter('intersections', i),
			item_types: itemTypes.length ? itemTypes : null,
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingDomainRankOverview(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/domain_rank_overview/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingPageIntersection(ef: IExecuteFunctions, i: number) {
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

	const excludePages = ef.getNodeParameter('exclude_pages', i) as IDataObject;
	const parsedExcludePages = parseMultiOptionItems(excludePages);

	const pages = ef.getNodeParameter('pages', i) as IDataObject;
	const values = pages.values as Array<any>;
	let parsedPages = {};
	let index;
	for (const key in values) {
		index = parseInt(key) + 1;
		Object.defineProperty(
			parsedPages,
			index.toString(),
			{
				value: values[key]['value'],
				writable: true,
				enumerable: true,
				configurable: true
			}
		);
	}

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/page_intersection/live',
		body: [{
			pages: parsedPages,
			exclude_pages: parsedExcludePages.length ? parsedExcludePages : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			intersection_mode: ef.getNodeParameter('intersection_mode', i) || null,
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingRankedKeywords(ef: IExecuteFunctions, i: number) {
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

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/ranked_keywords/live',
		body: [{
			target: ef.getNodeParameter('target_any', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			load_rank_absolute: ef.getNodeParameter('load_rank_absolute', i),
			historical_serp_mode: ef.getNodeParameter('historical_serp_mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingRelatedKeywords(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/bing/related_keywords/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			depth: ef.getNodeParameter('depth', i) || null,
			include_seed_keyword: ef.getNodeParameter('include_seed_keyword', i),
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			replace_with_core_keyword: ef.getNodeParameter('replace_with_core_keyword', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingRelevantPages(ef: IExecuteFunctions, i: number) {
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

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/relevant_pages/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			historical_serp_mode: ef.getNodeParameter('historical_serp_mode', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingSerpCompetitors(ef: IExecuteFunctions, i: number) {
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

	const keywords = ef.getNodeParameter('keywords_200', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/serp_competitors/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			item_types: itemTypes.length ? itemTypes : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingSubdomains(ef: IExecuteFunctions, i: number) {
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

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/bing/subdomains/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			historical_serp_mode: ef.getNodeParameter('historical_serp_mode', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
