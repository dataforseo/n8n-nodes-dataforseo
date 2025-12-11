import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseMultiOptionItems } from '../../../functions/generalFunctions';

export async function getAiKeywordSearchVolume(ef: IExecuteFunctions, i: number) {
	let mode = ef.getNodeParameter('mode', i);
	let keywordsArr;

	if (mode == 'manual') {
		let keywords = ef.getNodeParameter('keywords', i) as IDataObject;
		keywordsArr = parseMultiOptionItems(keywords);
	} else {
		keywordsArr = ef.getNodeParameter('keywords_json', i);
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/ai_keyword_data/keywords_search_volume/live',
		body: [{
			keywords: keywordsArr,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}
