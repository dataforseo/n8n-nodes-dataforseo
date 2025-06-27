import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveGoogleTrendsExplore(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const timeRanges = ef.getNodeParameter('time_range', i) as IDataObject;
	const parsedTimeRanges = parseMultiOptionItems(timeRanges);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_trends/explore/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			category_code: ef.getNodeParameter('category_code', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: parsedTimeRanges.length ? parsedTimeRanges : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleTrendsExplore(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const timeRanges = ef.getNodeParameter('time_range', i) as IDataObject;
	const parsedTimeRanges = parseMultiOptionItems(timeRanges);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_trends/explore/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			category_code: ef.getNodeParameter('category_code', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: parsedTimeRanges.length ? parsedTimeRanges : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/google_trends/explore/task_get/');
}
