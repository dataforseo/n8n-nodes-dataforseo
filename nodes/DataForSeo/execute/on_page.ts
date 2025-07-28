import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
} from 'n8n-workflow';
import { parseCheckThreshold} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getPageAuditCheck(ef: IExecuteFunctions, i: number) {
	let checksTreshold;

	const additionalFields  = ef.getNodeParameter('additionalFieldsPageAudit', i) as IDataObject;
	const data = {
		url: ef.getNodeParameter('url', i),
		load_resources: ef.getNodeParameter('load_resources', i),
		enable_javascript: ef.getNodeParameter('enable_javascript', i),
		enable_browser_rendering: ef.getNodeParameter('enable_browser_rendering', i),
		enable_xhr: ef.getNodeParameter('enable_xhr', i),
	};

	for (let key in additionalFields) {
		if (key == 'checks_threshold') {
			checksTreshold = additionalFields.checks_threshold as IDataObject;
			Object.assign(data, {checks_threshold: parseCheckThreshold(checksTreshold)});
		} else {
			Object.assign(data, {[key]: additionalFields[key]});
		}
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/instant_pages',
		body: [data]
	};

	return dataForSeoRequest(ef, params);
}

export async function parsePageContent(ef: IExecuteFunctions, i: number) {
	const additionalFields  = ef.getNodeParameter('additionalFieldsParsePage', i) as IDataObject;
	const data = {
		url: ef.getNodeParameter('url', i),
		enable_javascript: ef.getNodeParameter('enable_javascript', i),
		enable_browser_rendering: ef.getNodeParameter('enable_browser_rendering', i),
		enable_xhr: ef.getNodeParameter('enable_xhr', i),
	};

	for (let key in additionalFields) {
		Object.assign(data, {[key]: additionalFields[key]});
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/content_parsing/live',
		body: [data]
	};

	return dataForSeoRequest(ef, params);
}
