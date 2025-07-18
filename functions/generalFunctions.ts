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

export function parseCheckTreshold(
	checkTreshold: IDataObject
) {
	let tresholdValues = checkTreshold.tresholdValues as Array<any>;
	let parsedTreshold = {};
	if (tresholdValues && tresholdValues.length) {
		parsedTreshold = tresholdValues.reduce(function(result, item) {
			let key1 = Object.keys(item)[0];
			let key2 = Object.keys(item)[1];
			result[item[key1]] = item[key2];
			return result;
		}, {});
	}
	return parsedTreshold;
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
