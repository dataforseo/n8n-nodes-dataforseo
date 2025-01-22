import {
	IExecuteFunctions,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { dataForSeoRequest } from './dataForSeoRequest';

export async function getParsedSerp(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/live/regular',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device', i),
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			target: ef.getNodeParameter('target', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}
