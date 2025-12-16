import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getKeywordsForSite(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy)
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
		url: '/dataforseo_labs/google/keywords_for_site/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name', i) || null,
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_subdomains:  ef.getNodeParameter('include_subdomains', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRelatedKeywords(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy)
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
		url: '/dataforseo_labs/google/related_keywords/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_seed_keyword:  ef.getNodeParameter('include_seed_keyword', i),
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			replace_with_core_keyword:  ef.getNodeParameter('replace_with_core_keyword', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordSuggestions(ef: IExecuteFunctions, i: number) {
	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy)
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
		url: '/dataforseo_labs/google/keyword_suggestions/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			include_seed_keyword:  ef.getNodeParameter('include_seed_keyword', i),
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			exact_match:  ef.getNodeParameter('exact_match', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordIdeas(ef: IExecuteFunctions, i: number) {
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

		const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_200', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_200_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/keyword_ideas/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name', i) || null,
			closely_variants:  ef.getNodeParameter('closely_variants', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			limit: ef.getNodeParameter('limit_ideas', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordDifficulty(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_1000', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_1000_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/bulk_keyword_difficulty/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getSearchIntent(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_1000', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_1000_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/search_intent/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordOverview(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_700', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_700_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/keyword_overview/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalKeywordData(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_700', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_700_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/historical_keyword_data/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getCategoriesForDomain(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/categories_for_domain/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_subcategories:  ef.getNodeParameter('include_subcategories', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			item_types: itemTypes.length ? itemTypes : null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getCategoriesForKeywords(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_1000', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_1000_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/categories_for_keywords/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			language_name: ef.getNodeParameter('language_name_categories_for_keywords', i),
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordsForCategories(ef: IExecuteFunctions, i: number) {
	const categories = ef.getNodeParameter('category_codes', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);

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
		url: '/dataforseo_labs/google/keywords_for_categories/live',
		body: [{
			category_codes: parsedCategories.length ? parsedCategories : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			category_intersection:  ef.getNodeParameter('category_intersection', i),
			include_serp_info:  ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data:  ef.getNodeParameter('include_clickstream_data', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getDomainMetricsByCtaegories(ef: IExecuteFunctions, i: number) {
	const categories = ef.getNodeParameter('category_codes_5', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);

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
		url: '/dataforseo_labs/google/domain_metrics_by_categories/live',
		body: [{
			category_codes: parsedCategories.length ? parsedCategories : null,
			first_date: ef.getNodeParameter('first_date', i),
			second_date: ef.getNodeParameter('second_date', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			top_categories_count: ef.getNodeParameter('top_categories_count', i) || null,
			include_subdomains:  ef.getNodeParameter('include_subdomains', i),
			etv_min:  ef.getNodeParameter('etv_min', i) || null,
			etv_max:  ef.getNodeParameter('etv_max', i) || null,
			correlate:  ef.getNodeParameter('correlate', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getTopSearches(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/top_searches/live',
		body: [{
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
			ignore_synonyms:  ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit_top_searches', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getSerpCompetitors(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_200', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_200_json', i);
	}

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
		url: '/dataforseo_labs/google/serp_competitors/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			item_types: itemTypes.length ? itemTypes : null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRankedKeywords(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/ranked_keywords/live',
		body: [{
			target: ef.getNodeParameter('target_any', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			item_types: itemTypes.length ? itemTypes : null,
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
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

export async function getCompetitorsDomain(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/competitors_domain/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			max_rank_group: ef.getNodeParameter('max_rank_group', i) || null,
			exclude_top_domains: ef.getNodeParameter('exclude_top_domains', i),
			intersecting_domains: parsedIntersectingDomains.length ? parsedIntersectingDomains : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getDomainIntersection(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/domain_intersection/live',
		body: [{
			target1: ef.getNodeParameter('target1', i),
			target2: ef.getNodeParameter('target2', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			intersections: ef.getNodeParameter('intersections', i),
			item_types: itemTypes.length ? itemTypes : null,
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getSubdomains(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/subdomains/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
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

export async function getRelevantPages(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/relevant_pages/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
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

export async function getDomainRankOverview(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/domain_rank_overview/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalSerps(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/historical_serps/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalRankOverview(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/historical_rank_overview/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			correlate: ef.getNodeParameter('correlate', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getPageIntersection(ef: IExecuteFunctions, i: number) {
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
		url: '/dataforseo_labs/google/page_intersection/live',
		body: [{
			pages: parsedPages,
			exclude_pages: parsedExcludePages.length ? parsedExcludePages : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			item_types: itemTypes.length ? itemTypes : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			intersection_mode: ef.getNodeParameter('intersection_mode', i) || null,
			include_serp_info: ef.getNodeParameter('include_serp_info', i),
			include_clickstream_data: ef.getNodeParameter('include_clickstream_data', i),
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i),
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkTrafficEstimation(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedTargets;

	if (input_mode == 'manual') {
		const targets = ef.getNodeParameter('targets', i) as IDataObject;
	  parsedTargets = parseMultiOptionItems(targets);
	} else {
		parsedTargets = ef.getNodeParameter('targets_json', i);
	}

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/bulk_traffic_estimation/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalBulkTrafficEstimation(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedTargets;

	if (input_mode == 'manual') {
		const targets = ef.getNodeParameter('targets', i) as IDataObject;
	  parsedTargets = parseMultiOptionItems(targets);
	} else {
		parsedTargets = ef.getNodeParameter('targets_json', i);
	}

	const itemTypes = ef.getNodeParameter('item_types', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/dataforseo_labs/google/historical_bulk_traffic_estimation/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			dae_to: ef.getNodeParameter('date_to', i) || null,
			item_types: itemTypes.length ? itemTypes : null,
			ignore_synonyms: ef.getNodeParameter('ignore_synonyms', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}
