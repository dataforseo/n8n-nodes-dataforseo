import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
	NodeOperationError
} from 'n8n-workflow';
import { parseFilters, parseOrderByString} from '../../../functions/generalFunctions';
import {  dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveDomainWhoisOverview(ef: IExecuteFunctions, i: number) {
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
		url: '/domain_analytics/whois/overview/live',
		body: [{
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return dataForSeoRequest(ef, params);
}
