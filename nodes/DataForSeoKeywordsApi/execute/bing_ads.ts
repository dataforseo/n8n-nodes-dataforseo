import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveBingSearchVolume(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingSearchVolume(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/search_volume/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/search_volume/task_get/');
}

export async function getLiveBingSearchVolumeHistory(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const devices = ef.getNodeParameter('device_sv', i) as IDataObject;
	const parsedDevices = parseMultiOptionItems(devices);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/search_volume_history/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_sv', i),
			language_name: ef.getNodeParameter('language_name_sv', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: parsedDevices.length ? parsedDevices : null,
			period: ef.getNodeParameter('period', i) || null,
			date_from: ef.getNodeParameter('date_from_sv', i) || null,
			date_to: ef.getNodeParameter('date_to_sv', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingSearchVolumeHistory(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const devices = ef.getNodeParameter('device_sv', i) as IDataObject;
	const parsedDevices = parseMultiOptionItems(devices);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/search_volume_history/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_sv', i),
			language_name: ef.getNodeParameter('language_name_sv', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: parsedDevices.length ? parsedDevices : null,
			period: ef.getNodeParameter('period', i) || null,
			date_from: ef.getNodeParameter('date_from_sv', i) || null,
			date_to: ef.getNodeParameter('date_to_sv', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/search_volume_history/task_get/');
}

export async function getLiveBingKeywordsForSite(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_negative', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keywords_for_site/live',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			keywords_negative: parsedKeywords.length ? parsedKeywords : null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingKeywordsForSite(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_negative', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keywords_for_site/task_post',
		body: [{
			target: ef.getNodeParameter('target', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			keywords_negative: parsedKeywords.length ? parsedKeywords : null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/keywords_for_site/task_get/');
}

export async function getLiveBingKeywordsForKeywords(ef: IExecuteFunctions, i: number) {
	const keywordsNegaive = ef.getNodeParameter('keywords_negative', i) as IDataObject;
	const parsedKeywordsNegative = parseMultiOptionItems(keywordsNegaive);

	const keywords = ef.getNodeParameter('keywords_for_keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keywords_for_keywords/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			keywords_negative: parsedKeywordsNegative.length ? parsedKeywordsNegative : null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingKeywordsForKeywords(ef: IExecuteFunctions, i: number) {
	const keywordsNegaive = ef.getNodeParameter('keywords_negative', i) as IDataObject;
	const parsedKeywordsNegative = parseMultiOptionItems(keywordsNegaive);

	const keywords = ef.getNodeParameter('keywords_for_keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keywords_for_keywords/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			keywords_negative: parsedKeywordsNegative.length ? parsedKeywordsNegative : null,
			device: ef.getNodeParameter('device', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/keywords_for_keywords/task_get/');
}

export async function getLiveBingKeywordperformance(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_performance', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keyword_performance/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			device: ef.getNodeParameter('device', i) || null,
			match: ef.getNodeParameter('match', i) || null,
			location_name: ef.getNodeParameter('location_name_performance', i),
			language_name: ef.getNodeParameter('language_name_performance', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingKeywordperformance(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_performance', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keyword_performance/task_post',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			device: ef.getNodeParameter('device', i) || null,
			match: ef.getNodeParameter('match', i) || null,
			location_name: ef.getNodeParameter('location_name_performance', i),
			language_name: ef.getNodeParameter('language_name_performance', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/keyword_performance/task_get/');
}

export async function getLiveBingKeywordSuggestionsForUrl(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keyword_suggestions_for_url/live',
		body: [{
			target: ef.getNodeParameter('target_for_url', i),
			language_name: ef.getNodeParameter('language_name_for_url', i),
			exclude_brands: ef.getNodeParameter('exclude_brands', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingKeywordSuggestionsForUrl(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/keyword_suggestions_for_url/task_post',
		body: [{
			target: ef.getNodeParameter('target_for_url', i),
			language_name: ef.getNodeParameter('language_name_for_url', i),
			exclude_brands: ef.getNodeParameter('exclude_brands', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/keyword_suggestions_for_url/task_get/');
}

export async function getLiveBingAudienceEstimation(ef: IExecuteFunctions, i: number) {
	const ages = ef.getNodeParameter('age', i) as IDataObject;
	const parsedAges = parseMultiOptionItems(ages);

	const gender = ef.getNodeParameter('gender', i) as IDataObject;
	const parsedGenders = parseMultiOptionItems(gender);

	const industries = ef.getNodeParameter('industry', i) as IDataObject;
	const parsedIndustries = parseMultiOptionItems(industries);

	const jobFunction = ef.getNodeParameter('job_function', i) as IDataObject;
	const parsedJobFunction = parseMultiOptionItems(jobFunction);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/audience_estimation/live',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate_audience', i) || null,
			age: parsedAges.length ? parsedAges : null,
			bid: ef.getNodeParameter('bid', i) || null,
			daily_budget: ef.getNodeParameter('daily_budget', i) || null,
			gender: parsedGenders.length ? parsedGenders : null,
			industry: parsedIndustries.length ? parsedIndustries : null,
			job_function: parsedJobFunction.length ? parsedJobFunction : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getBingAudienceEstimation(ef: IExecuteFunctions, i: number) {
	const ages = ef.getNodeParameter('age', i) as IDataObject;
	const parsedAges = parseMultiOptionItems(ages);

	const gender = ef.getNodeParameter('gender', i) as IDataObject;
	const parsedGenders = parseMultiOptionItems(gender);

	const industries = ef.getNodeParameter('industry', i) as IDataObject;
	const parsedIndustries = parseMultiOptionItems(industries);

	const jobFunction = ef.getNodeParameter('job_function', i) as IDataObject;
	const parsedJobFunction = parseMultiOptionItems(jobFunction);
	const params: IHttpRequestOptions = {
		url: '/keywords_data/bing/audience_estimation/task_post',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate_audience', i) || null,
			age: parsedAges.length ? parsedAges : null,
			bid: ef.getNodeParameter('bid', i) || null,
			daily_budget: ef.getNodeParameter('daily_budget', i) || null,
			gender: parsedGenders.length ? parsedGenders : null,
			industry: parsedIndustries.length ? parsedIndustries : null,
			job_function: parsedJobFunction.length ? parsedJobFunction : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/keywords_data/bing/audience_estimation/task_get/');
}

