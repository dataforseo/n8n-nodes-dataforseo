import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseFilters, parseLlmMentionsTarget, parseOrderByString } from '../../../functions/generalFunctions';

export async function getLiveLlmMentions(ef: IExecuteFunctions, i: number) {
	const target = ef.getNodeParameter('target', i) as IDataObject;
	const parsedTarget = parseLlmMentionsTarget(target);

	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	if (filters) {
		try {
			parsedFilters = parseFilters(filters);
		} catch {
			throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
		}
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/llm_mentions/search/live',
		body: [{
			target: parsedTarget,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			platform: ef.getNodeParameter('platform', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveLlmMentionsTopPages(ef: IExecuteFunctions, i: number) {
	const target = ef.getNodeParameter('target', i) as IDataObject;
	const parsedTarget = parseLlmMentionsTarget(target);

	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	if (filters) {
		try {
			parsedFilters = parseFilters(filters);
		} catch {
			throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
		}
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/llm_mentions/top_pages/live',
		body: [{
			target: parsedTarget,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			platform: ef.getNodeParameter('platform', i) || null,
			links_scope: ef.getNodeParameter('links_scope', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			items_list_limit: ef.getNodeParameter('items_list_limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveLlmMentionsTopDomains(ef: IExecuteFunctions, i: number) {
	const target = ef.getNodeParameter('target', i) as IDataObject;
	const parsedTarget = parseLlmMentionsTarget(target);

	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	if (filters) {
		try {
			parsedFilters = parseFilters(filters);
		} catch {
			throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
		}
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/llm_mentions/top_domains/live',
		body: [{
			target: parsedTarget,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			platform: ef.getNodeParameter('platform', i) || null,
			links_scope: ef.getNodeParameter('links_scope', i) || null,
			initial_dataset_filters: parsedFilters.length ? parseFilters : null,
			items_list_limit: ef.getNodeParameter('items_list_limit', i) || null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveLlmMentionsAggregatedMetrics(ef: IExecuteFunctions, i: number) {
	const target = ef.getNodeParameter('target', i) as IDataObject;
	const parsedTarget = parseLlmMentionsTarget(target);

	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	if (filters) {
		try {
			parsedFilters = parseFilters(filters);
		} catch {
			throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
		}
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/llm_mentions/aggregated_metrics/live',
		body: [{
			target: parsedTarget,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			platform: ef.getNodeParameter('platform', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveLlmMentionsCrossAggregatedMetrics(ef: IExecuteFunctions, i: number) {
	const targets = [];

	const key1 = ef.getNodeParameter('aggregation_key1', i) || null;
	if (key1) {
		const target1 = ef.getNodeParameter('target1', i) as IDataObject;
		targets.push({
			aggregation_key: key1,
			target: parseLlmMentionsTarget(target1)
		});
	}

	const key2 = ef.getNodeParameter('aggregation_key2', i) || null;
	if (key2) {
		const target2 = ef.getNodeParameter('target2', i) as IDataObject;
		targets.push({
			aggregation_key: key2,
			target: parseLlmMentionsTarget(target2)
		});
	}

	const key3 = ef.getNodeParameter('aggregation_key3', i) || null;
	if (key3) {
		const target3 = ef.getNodeParameter('target3', i) as IDataObject;
		targets.push({
			aggregation_key: key3,
			target: parseLlmMentionsTarget(target3)
		});
	}

	const key4 = ef.getNodeParameter('aggregation_key4', i) || null;
	if (key4) {
		const target4 = ef.getNodeParameter('target4', i) as IDataObject;
		targets.push({
			aggregation_key: key4,
			target: parseLlmMentionsTarget(target4)
		});
	}

	const key5 = ef.getNodeParameter('aggregation_key5', i) || null;
	if (key5) {
		const target5 = ef.getNodeParameter('target5', i) as IDataObject;
		targets.push({
			aggregation_key: key5,
			target: parseLlmMentionsTarget(target5)
		});
	}

	const filters = ef.getNodeParameter('initial_dataset_filters', i) as unknown as string;
	let parsedFilters = [];
	if (filters) {
		try {
			parsedFilters = parseFilters(filters);
		} catch {
			throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
		}
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/llm_mentions/cross_aggregated_metrics/live',
		body: [{
			targets: targets,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			platform: ef.getNodeParameter('platform', i) || null,
			initial_dataset_filters: parsedFilters.length ? parsedFilters : null,
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
