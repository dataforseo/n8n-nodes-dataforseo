import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
	NodeOperationError,
} from 'n8n-workflow';
import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getAiKeywordSearchVolume(ef: IExecuteFunctions, i: number) {
	const keywords = ef.getNodeParameter('keywords', i) as IDataObject;
	const parsedKeywords = parseMultiOptionItems(keywords);

	if (parsedKeywords.length > 1000) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than 1000 keywords");
	}

	const params: IHttpRequestOptions = {
		url: '/ai_optimization/ai_keyword_data/keywords_search_volume/live',
		body: [{
			keywords: parsedKeywords.length ? parsedKeywords : null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}
