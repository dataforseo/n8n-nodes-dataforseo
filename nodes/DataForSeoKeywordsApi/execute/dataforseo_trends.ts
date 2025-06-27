import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveDataForSeoTrendsExplore(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/dataforseo_trends/explore/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: ef.getNodeParameter('time_range', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDataForSeoTrendsSubregionInterests(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/dataforseo_trends/subregion_interests/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: ef.getNodeParameter('time_range', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDataForSeoTrendsDemography(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/dataforseo_trends/demography/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: ef.getNodeParameter('time_range', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveDataForSeoTrendsMergedData(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/dataforseo_trends/merged_data/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			type: ef.getNodeParameter('type', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			time_range: ef.getNodeParameter('time_range', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

