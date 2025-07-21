import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function searchTrustpilotBusinessInfo(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/trustpilot/search/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority:  ef.getNodeParameter('priority', i) || null,
			depth:  ef.getNodeParameter('depth', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/trustpilot/search/task_get/');
}

export async function getTrustpilotReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/trustpilot/reviews/task_post',
		body: [{
			domain: ef.getNodeParameter('domain', i),
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			priority:  ef.getNodeParameter('priority', i) || null,
			depth:  ef.getNodeParameter('depth_reviews', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/trustpilot/reviews/task_get/');
}
