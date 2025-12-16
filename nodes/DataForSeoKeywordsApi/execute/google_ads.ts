import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveGoogleSearchVolume(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i),
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleSearchVolume(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i),
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/google_ads/search_volume/task_get/');
}

export async function getLiveGoogleKeywordsForSite(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/keywords_for_site/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			target_type: ef.getNodeParameter('target_type', i) || null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleKeywordsForSite(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/keywords_for_site/task_post',
		body: [{
			target: ef.getNodeParameter('target', i),
			target_type: ef.getNodeParameter('target_type', i) || null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/google_ads/keywords_for_site/task_get/');
}

export async function getLiveGoogleKeywordsForKeywords(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_for_keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_for_keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/keywords_for_keywords/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleKeywordsForKeywords(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords_for_keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_for_keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/keywords_for_keywords/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/google_ads/keywords_for_keywords/task_get/');
}

export async function getLiveGoogleTrafficByKeywords(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/ad_traffic_by_keywords/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			bid: ef.getNodeParameter('bid', i) || null,
			match: ef.getNodeParameter('match', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			date_from: ef.getNodeParameter('date_from_traffic', i) || null,
			date_to: ef.getNodeParameter('date_to_traffic', i) || null,
			date_interval: ef.getNodeParameter('date_interval', i) || null,
			sort_by: ef.getNodeParameter('sort_by_traffic', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleTrafficByKeywords(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/ad_traffic_by_keywords/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			bid: ef.getNodeParameter('bid', i) || null,
			match: ef.getNodeParameter('match', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			date_from: ef.getNodeParameter('date_from_traffic', i) || null,
			date_to: ef.getNodeParameter('date_to_traffic', i) || null,
			date_interval: ef.getNodeParameter('date_interval', i) || null,
			sort_by: ef.getNodeParameter('sort_by_traffic', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/google_ads/ad_traffic_by_keywords/task_get/');
}

