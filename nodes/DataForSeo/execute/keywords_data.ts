import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
	NodeOperationError,
} from 'n8n-workflow';
import { parseMultiOptionItems} from './generalFunctions';
import { dataForSeoRequest } from './dataForSeoRequest';

export async function getGoogleSearchVolume(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null,
			search_partners: ef.getNodeParameter('search_partners', i),
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getKeywordsForKeywords(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords_for_keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	if (parsedKeywords.length > 20) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than 20 keywords");
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/google_ads/keywords_for_keywords/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name_required', i),
			language_name: ef.getNodeParameter('language_name_required', i),
			search_partners: ef.getNodeParameter('search_partners', i),
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			sort_by: ef.getNodeParameter('sort_by', i) || null,
			include_adult_keywords: ef.getNodeParameter('include_adult_keywords', i),
		}]
	};

	return dataForSeoRequest(ef, params);
}
