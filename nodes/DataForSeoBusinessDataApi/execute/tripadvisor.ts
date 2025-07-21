import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function searchTripadvisorBusinessData(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/tripadvisor/search/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			priority:  ef.getNodeParameter('priority', i) || null,
			depth:  ef.getNodeParameter('depth', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/tripadvisor/search/task_get/');
}

export async function getTripadvisorReviews(ef: IExecuteFunctions, i: number) {
	const ratings = ef.getNodeParameter('ratings', i) as Array<String>;
	const visitType = ef.getNodeParameter('visit_type', i) as Array<String>;
	const months = ef.getNodeParameter('months', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/business_data/tripadvisor/reviews/task_post',
		body: [{
			url_path: ef.getNodeParameter('url_path', i) ?? null,
			keyword: ef.getNodeParameter('keyword_reviews', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i) || null,
			priority:  ef.getNodeParameter('priority', i) || null,
			depth:  ef.getNodeParameter('depth_reviews', i) || null,
			ratings: ratings.length ? ratings : null,
			visit_type: visitType.length ? visitType : null,
			months: months.length ? months : null,
			search_reviews_keyword:  ef.getNodeParameter('search_reviews_keyword', i) || null,
			sort_by:  ef.getNodeParameter('sort_by', i) || null,
			translate_reviews:  ef.getNodeParameter('translate_reviews', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/tripadvisor/reviews/task_get/');
}
