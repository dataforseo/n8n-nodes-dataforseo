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
	const values = (items.values as Array<{ value: string }>) ?? [];
	if (values && values.length) {
  	const parsedItems: string[] = values.map((item) => item.value);
		return parsedItems;
	}

	return [];
}

export function parseOrderByString(
	orderBy: IDataObject
) {
	type OrderByItem = { fieldName?: string; direction?: string };

	const values = (orderBy.values as OrderByItem[]) ?? [];

	const parsedOrderBy = new Array<string>;
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
	const thresholdValues = checkThreshold.thresholdValues as  Record<string, number>[] ?? [];

	let parsedThreshold = {};
	if (thresholdValues && thresholdValues.length) {
		parsedThreshold = thresholdValues.reduce(function(result, item) {
			const key1 = Object.keys(item)[0];
			const key2 = Object.keys(item)[1];
			result[item[key1]] = item[key2];
			return result;
		}, {});
	}

	return parsedThreshold;
}

export function parseKeywordFields(
	keywordFields: IDataObject
) {
	const fieldsdValues = keywordFields.values as Record<string, string | number>[] ?? [];
	let parsedFields = {};
	if (fieldsdValues && fieldsdValues.length) {
		parsedFields = fieldsdValues.reduce(function(result, item) {
			const key1 = Object.keys(item)[0];
			const key2 = Object.keys(item)[1];
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
	const fieldsdValues = specifications.values as Record<string, string | number>[] ?? [];
	let parsedFields = {};
	if (fieldsdValues && fieldsdValues.length) {
		parsedFields = fieldsdValues.reduce(function(result, item) {
			const key1 = Object.keys(item)[0];
			const key2 = Object.keys(item)[1];
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
	type TargetItem = {
		domain?: string;
		keyword?: string;
		search_filter?: string;
		search_scope?: string;
		include_subdomains?: boolean;
		match_type?: string;
	};

	type ParsedTarget =
	| {
			domain: string;
			search_filter: string | null;
			search_scope: string | null;
			include_subdomains?: boolean;
	  }
	| {
			keyword: string | null;
			search_filter: string | null;
			search_scope: string | null;
			match_type: string | null;
	  };

	const values = (target.values as TargetItem[]) ?? [];
	let parsedTarget: ParsedTarget[] = [];
	if (values && values.length) {
		parsedTarget = values.reduce<ParsedTarget[]>(function(result, item) {
			if (item['domain']) {
				result.push({
					domain: item['domain'],
					search_filter: item['search_filter'] ? item['search_filter'] : null,
					search_scope: item['search_scope']?.length ? item['search_scope'] : null,
					include_subdomains: item['include_subdomains']
				});
			} else {
				result.push({
					keyword: item['keyword'] ? item['keyword'] : null,
					search_filter: item['search_filter'] ? item['search_filter'] : null,
					search_scope: item['search_scope']?.length ? item['search_scope'] : null,
					match_type: item['match_type'] ? item['match_type'] : null
				});
			}

			return result;
		}, []);
	}

	return parsedTarget;
}
