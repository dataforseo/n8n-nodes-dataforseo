import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString } from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getBacklinks(ef: IExecuteFunctions, i: number) {
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
		url: '/backlinks/backlinks/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			mode: ef.getNodeParameter('mode', i),
			limit: ef.getNodeParameter('limit', i),
			offset: ef.getNodeParameter('offset', i),
			order_by: orderBy.length ? orderBy : null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i),
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBacklinkSummary(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/summary/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i),
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i),
			backlinks_filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalBacklinkSummary(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/backlinks/history/live',
		body: [{
			target: ef.getNodeParameter('target_domain', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkBacklinkRank(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);
	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_ranks/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkBacklinkStats(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);
	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_backlinks/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBacklinksPageSummary(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);
	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_pages_summary/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkRefferingDomainStats(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);
	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_referring_domains/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRefferingDomains(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = null;
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Backlinks Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by_string', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/referring_domains/live',
		body: [{
			target:  ef.getNodeParameter('target', i),
			limit:  ef.getNodeParameter('limit', i) || null,
			offset:  ef.getNodeParameter('offset', i) || null,
			internal_list_limit:  ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type:  ef.getNodeParameter('backlinks_status_type', i),
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			include_subdomains:  ef.getNodeParameter('include_subdomains', i),
			include_indirect_links:  ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks:  ef.getNodeParameter('exclude_internal_backlinks', i),
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkSpamScores(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);
	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_spam_score/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}
