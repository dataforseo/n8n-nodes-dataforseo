import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
	NodeOperationError
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems} from '../../../functions/generalFunctions';
import {  dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveAggregationTechnologies(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as Array<string>;
	if (orderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/aggregation_technologies/live',
		body: [{
			group: ef.getNodeParameter('group', i) || null,
			category: ef.getNodeParameter('category', i) || null,
			technology: ef.getNodeParameter('technology', i) || null,
			keyword: ef.getNodeParameter('keyword', i) || null,
			mode: ef.getNodeParameter('mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: orderBy.length ? orderBy : null,
			internal_groups_list_limit: ef.getNodeParameter('internal_groups_list_limit', i) || null,
			internal_categories_list_limit: ef.getNodeParameter('internal_categories_list_limit', i) || null,
			internal_technologies_list_limit: ef.getNodeParameter('internal_technologies_list_limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveTechnologiesSummary(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const groups = ef.getNodeParameter('groups', i) as IDataObject;
	const parsedGroups = parseMultiOptionItems(groups);

	const categories = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);

	const technologies = ef.getNodeParameter('technologies', i) as IDataObject;
	const parsedTechnologies = parseMultiOptionItems(technologies);

	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const path = ef.getNodeParameter('technology_paths', i) as IDataObject;

	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/technologies_summary/live',
		body: [{
			technology_paths: path.values || null,
			groups: parsedGroups.length ? parsedGroups: null,
			categories: parsedCategories.length ? parsedCategories : null,
			technologies: parsedTechnologies.length ? parsedTechnologies : null,
			keywords: parsedKeywords.length ? parsedKeywords : null,
			mode: ef.getNodeParameter('mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveTechnologyStats(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/technology_stats/live',
		body: [{
			technology: ef.getNodeParameter('technology_stats', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDomainsByTechnology(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const groups = ef.getNodeParameter('groups', i) as IDataObject;
	const parsedGroups = parseMultiOptionItems(groups);

	const categories = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedCategories = parseMultiOptionItems(categories);

	const technologies = ef.getNodeParameter('technologies', i) as IDataObject;
	const parsedTechnologies = parseMultiOptionItems(technologies);

	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const orderBy = ef.getNodeParameter('order_by_domains', i) as Array<string>;
	if (orderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const path = ef.getNodeParameter('technology_paths', i) as IDataObject;

	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/domains_by_technology/live',
		body: [{
			technology_paths: path.values || null,
			groups: parsedGroups.length ? parsedGroups: null,
			categories: parsedCategories.length ? parsedCategories : null,
			technologies: parsedTechnologies.length ? parsedTechnologies : null,
			keywords: parsedKeywords.length ? parsedKeywords : null,
			mode: ef.getNodeParameter('mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: orderBy.length ? orderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDomainsByHTMLTerms(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const terms = ef.getNodeParameter('search_terms', i) as IDataObject;
	const parsedTerms = parseMultiOptionItems(terms);

	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const orderBy = ef.getNodeParameter('order_by_domains', i) as Array<string>;
	if (orderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/domains_by_html_terms/live',
		body: [{
			search_terms: parsedTerms.length ? parsedTerms : null,
			keywords: parsedKeywords.length ? parsedKeywords : null,
			mode: ef.getNodeParameter('mode_html', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: orderBy.length ? orderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDomainTechnologies(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/domain_analytics/technologies/domain_technologies/live',
		body: [{
			target: ef.getNodeParameter('target', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}
