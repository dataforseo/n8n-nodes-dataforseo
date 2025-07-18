import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseKeywordFields, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getSearchResults(ef: IExecuteFunctions, i: number) {
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

	const keywordFields =  ef.getNodeParameter('keyword_fields', i) as IDataObject;
	const parsedKeywordFields = parseKeywordFields(keywordFields);

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/content_analysis/search/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			keyword_fields: parsedKeywordFields,
			page_type: pageType.length ? pageType : null,
			search_mode: ef.getNodeParameter('search_mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null

		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getSummary(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const keywordFields =  ef.getNodeParameter('keyword_fields', i) as IDataObject;
	const parsedKeywordFields = parseKeywordFields(keywordFields);

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/content_analysis/summary/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			keyword_fields: parsedKeywordFields,
			page_type: pageType.length ? pageType : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			positive_connotation_threshold: ef.getNodeParameter('positive_connotation_threshold', i) || null,
			sentiments_connotation_threshold: ef.getNodeParameter('sentiments_connotation_threshold', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getSentimentAnalysis(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const keywordFields =  ef.getNodeParameter('keyword_fields', i) as IDataObject;
	const parsedKeywordFields = parseKeywordFields(keywordFields);

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/content_analysis/sentiment_analysis/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			keyword_fields: parsedKeywordFields,
			page_type: pageType.length ? pageType : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			positive_connotation_threshold: ef.getNodeParameter('positive_connotation_threshold', i) || null,
			sentiments_connotation_threshold: ef.getNodeParameter('sentiments_connotation_threshold', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRatingDistribution(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const keywordFields =  ef.getNodeParameter('keyword_fields', i) as IDataObject;
	const parsedKeywordFields = parseKeywordFields(keywordFields);

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/content_analysis/rating_distribution/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			keyword_fields: parsedKeywordFields,
			page_type: pageType.length ? pageType : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			search_mode: ef.getNodeParameter('search_mode', i) || null,
			positive_connotation_threshold: ef.getNodeParameter('positive_connotation_threshold', i) || null,
			sentiments_connotation_threshold: ef.getNodeParameter('sentiments_connotation_threshold', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getPhraseTrends(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const keywordFields =  ef.getNodeParameter('keyword_fields', i) as IDataObject;
	const parsedKeywordFields = parseKeywordFields(keywordFields);

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	let dateFrom = ef.getNodeParameter('date_from', i) as String;
	if (dateFrom) {
		dateFrom = dateFrom.split('T')[0];
	}

	let dateTo = ef.getNodeParameter('date_to', i) as String;
	if (dateTo) {
		dateTo = dateTo.split('T')[0];
	}

	const params: IHttpRequestOptions = {
		url: '/content_analysis/phrase_trends/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			keyword_fields: parsedKeywordFields,
			page_type: pageType.length ? pageType : null,
			search_mode: ef.getNodeParameter('search_mode', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			date_from: dateFrom || null,
			date_to: dateTo || null,
			date_group: ef.getNodeParameter('date_group', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getCategoryTrends(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const pageType = ef.getNodeParameter('page_type', i) as Array<String>;

	let dateFrom = ef.getNodeParameter('date_from', i) as String;
	if (dateFrom) {
		dateFrom = dateFrom.split('T')[0];
	}

	let dateTo = ef.getNodeParameter('date_to', i) as String;
	if (dateTo) {
		dateTo = dateTo.split('T')[0];
	}

	const params: IHttpRequestOptions = {
		url: '/content_analysis/category_trends/live',
		body: [{
			category_code: ef.getNodeParameter('category_code', i),
			page_type: pageType.length ? pageType : null,
			search_mode: ef.getNodeParameter('search_mode', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			date_from: dateFrom || null,
			date_to: dateTo || null,
			date_group: ef.getNodeParameter('date_group', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
