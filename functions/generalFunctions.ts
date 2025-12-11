import { IDataObject } from "n8n-workflow";

export function parseFilters(
	filters: string
) {
	let parsedFilters = [];
	if (filters && filters.trim().length) {
		parsedFilters = JSON.parse(filters);
	}

	return parsedFilters;
}

export function parseMultiOptionItems(
	items:IDataObject
) {
	let values = items.values as Array<any>;
	let parsedItems = [];
	if (values && values.length) {
		parsedItems = values.reduce(function(result, item) {
			result.push(item['value']);
			return result;
		}, []);
	}

	return parsedItems;
}

export function parseOrderByString(
	orderBy: IDataObject
) {
	let values = orderBy.values as Array<any>;
	let parsedOrderBy = new Array<string>;
	for (const key in values) {
		if (Object.prototype.hasOwnProperty.call(values, key) && values[key] && values[key]['fieldName']) {
			parsedOrderBy.push(values[key]['fieldName'] + ',' + values[key]['direction']);
		}
	}

	return parsedOrderBy;
}

export function parseCheckThreshold(
	checkThreshold: IDataObject
) {
	let thresholdValues = checkThreshold.thresholdValues as Array<any>;
	let parsedThreshold = {};
	if (thresholdValues && thresholdValues.length) {
		parsedThreshold = thresholdValues.reduce(function(result, item) {
			let key1 = Object.keys(item)[0];
			let key2 = Object.keys(item)[1];
			result[item[key1]] = item[key2];
			return result;
		}, {});
	}
	return parsedThreshold;
}

export function parseKeywordFields(
	keywordFields: IDataObject
) {
	let fieldsdValues = keywordFields.values as Array<any>;
	let parsedFields = {};
	if (fieldsdValues && fieldsdValues.length) {
		parsedFields = fieldsdValues.reduce(function(result, item) {
			let key1 = Object.keys(item)[0];
			let key2 = Object.keys(item)[1];
			result[item[key1]] = item[key2];
			return result;
		}, {});
	}

	if (!Object.keys(parsedFields).length) {
		return null;
	}

	return parsedFields;
}

export function parseSpecifications(
	specifications: IDataObject
) {
	let fieldsdValues = specifications.values as Array<any>;
	let parsedFields = {};
	if (fieldsdValues && fieldsdValues.length) {
		parsedFields = fieldsdValues.reduce(function(result, item) {
			let key1 = Object.keys(item)[0];
			let key2 = Object.keys(item)[1];
			result[item[key1]] = item[key2];
			return result;
		}, {});
	}

	if (!Object.keys(parsedFields).length) {
		return null;
	}

	return parsedFields;
}

export function parseLlmMentionsTarget(
	target: IDataObject
) {
	let values = target.values as Array<any>;
	let parsedTarget = [];
	if (values && values.length) {
		parsedTarget = values.reduce(function(result, item) {
			if (item['domain']) {
				result.push({
					domain: item['domain'],
					search_filter: item['search_filter'] ? item['search_filter'] : null,
					search_scope: item['search_scope'].length ? item['search_scope'] : null,
					include_subdomains: item['include_subdomains']
				});
			} else {
				result.push({
					keyword: item['keyword'] ? item['keyword'] : null,
					search_filter: item['search_filter'] ? item['search_filter'] : null,
					search_scope: item['search_scope'].length ? item['search_scope'] : null,
					match_type: item['match_type'] ? item['match_type'] : null
				});
			}

			return result;
		}, []);
	}

	return parsedTarget;
}
