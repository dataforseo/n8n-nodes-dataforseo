import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import {  dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveClickstreamSearchVolume(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/clickstream_data/dataforseo_search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			use_clickstream: ef.getNodeParameter('use_clickstream', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGlobalSearchVolume(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/clickstream_data/global_search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveBulkClickstreamSearchVolume(ef: IExecuteFunctions, i: number) {
	const input_mode = ef.getNodeParameter('input_mode', i) || 'manual';
	let parsedKeywords;

	if (input_mode == 'manual') {
		const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	  parsedKeywords = parseMultiOptionItems(keywords);
	} else {
		parsedKeywords = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/keywords_data/clickstream_data/bulk_search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}
