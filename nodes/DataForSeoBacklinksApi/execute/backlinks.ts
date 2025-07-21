import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject
} from 'n8n-workflow';
import { parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getBacklinksSummary(ef: IExecuteFunctions, i: number) {
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
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			backlinks_filters: parsedFilters.length ? parsedFilters : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getHistoricalBacklinksSummary(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/backlinks/history/live',
		body: [{
			target: ef.getNodeParameter('target_domain', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBacklinks(ef: IExecuteFunctions, i: number) {
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

	const params: IHttpRequestOptions = {
		url: '/backlinks/backlinks/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			mode: ef.getNodeParameter('mode', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getAnchors(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/anchors/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getDomainPages(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/domain_pages/live',
		body: [{
			target: ef.getNodeParameter('target_domain', i),
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getDomainPagesSummary(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/domain_pages_summary/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
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
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/referring_domains/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRefferingNetworks(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/backlinks/referring_networks/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			network_address_type: ef.getNodeParameter('network_address_type', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getCompetitros(ef: IExecuteFunctions, i: number) {
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

	const params: IHttpRequestOptions = {
		url: '/backlinks/competitors/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			main_domain: ef.getNodeParameter('main_domain', i),
			exclude_large_domains: ef.getNodeParameter('exclude_large_domains', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getDomainIntersection(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const backlinksFilters = ef.getNodeParameter('backlinks_filters', i) as unknown as string;
	let parsedBacklinksFilters = [];
	try {
		parsedBacklinksFilters = parseFilters(backlinksFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const values = targets.values as Array<any>;
	let parsedTargets = {};
	let index;
	for (const key in values) {
		index = parseInt(key) + 1;
		Object.defineProperty(
			parsedTargets,
			index.toString(),
			{
				value: values[key]['value'],
				writable: true,
				enumerable: true,
				configurable: true
			}
		);
	}

	const excludeTargets = ef.getNodeParameter('exclude_targets', i) as IDataObject;
	const parsedExcludeTargets = parseMultiOptionItems(excludeTargets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/domain_intersection/live',
		body: [{
			targets: parsedTargets,
			exclude_targets: parsedExcludeTargets.length ? parsedExcludeTargets : null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			backlinks_filters: parsedBacklinksFilters.length ? parsedBacklinksFilters : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			intersection_mode: ef.getNodeParameter('intersection_mode', i) || null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getPageIntersection(ef: IExecuteFunctions, i: number) {
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

	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const values = targets.values as Array<any>;
	let parsedTargets = {};
	let index;
	for (const key in values) {
		index = parseInt(key) + 1;
		Object.defineProperty(
			parsedTargets,
			index.toString(),
			{
				value: values[key]['value'],
				writable: true,
				enumerable: true,
				configurable: true
			}
		);
	}

	const excludeTargets = ef.getNodeParameter('exclude_targets', i) as IDataObject;
	const parsedExcludeTargets = parseMultiOptionItems(excludeTargets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/page_intersection/live',
		body: [{
			targets: parsedTargets,
			exclude_targets: parsedExcludeTargets.length ? parsedExcludeTargets : null,
			backlinks_status_type: ef.getNodeParameter('backlinks_status_type', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			offset: ef.getNodeParameter('offset', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			include_indirect_links: ef.getNodeParameter('include_indirect_links', i),
			exclude_internal_backlinks: ef.getNodeParameter('exclude_internal_backlinks', i),
			intersection_mode: ef.getNodeParameter('intersection_mode', i) || null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBacklinksTimeseriesSummary(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/backlinks/timeseries_summary/live',
		body: [{
			target: ef.getNodeParameter('target_domain', i),
			date_from: ef.getNodeParameter('date_from_min_2019_01_30', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			group_range: ef.getNodeParameter('group_range', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i) || null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getNewAndLostBacklinksTimeseriesSummary(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/backlinks/timeseries_new_lost_summary/live',
		body: [{
			target: ef.getNodeParameter('target_domain', i),
			date_from: ef.getNodeParameter('date_from_min_2019_01_30', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			group_range: ef.getNodeParameter('group_range', i) || null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkRanks(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_ranks/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkBacklinks(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_backlinks/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkSpamScores(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_spam_score/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkReferringDomains(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_referring_domains/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkNewAndLostBacklinks(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_new_lost_backlinks/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			date_from: ef.getNodeParameter('date_from_for_bulk_new_and_lost', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkNewAndLostReferringDomains(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_new_lost_referring_domains/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			date_from: ef.getNodeParameter('date_from_for_bulk_new_and_lost', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBulkPagesSummary(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets_1000', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/backlinks/bulk_pages_summary/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null,
			include_subdomains: ef.getNodeParameter('include_subdomains', i),
			rank_scale: ef.getNodeParameter('rank_scale', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
