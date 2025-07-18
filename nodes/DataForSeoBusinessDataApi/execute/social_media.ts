import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseMultiOptionItems } from '../../../functions/generalFunctions';

export async function getPinterestData(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/business_data/social_media/pinterest/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getFacebookData(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/business_data/social_media/facebook/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getRedditData(ef: IExecuteFunctions, i: number) {
	const targets = ef.getNodeParameter('targets', i) as IDataObject;
	const parsedTargets = parseMultiOptionItems(targets);

	const params: IHttpRequestOptions = {
		url: '/business_data/social_media/reddit/live',
		body: [{
			targets: parsedTargets.length ? parsedTargets : null
		}]
	};

	return dataForSeoRequest(ef, params);
}
