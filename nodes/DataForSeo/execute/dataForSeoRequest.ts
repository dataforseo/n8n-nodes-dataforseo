import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
} from 'n8n-workflow';

export async function dataForSeoRequest(ef: IExecuteFunctions, options: IHttpRequestOptions) {
	const credentials = await ef.getCredentials('dataForSeoApi') as IDataObject;
	const baseUrl = 'https://api.dataforseo.com/v3';

	const requestOptions: IHttpRequestOptions = {
		method: options.method ? options.method : 'POST',
		headers: {
			'Accept': 'application/json',
			'Authorization': 'Basic ' + btoa(credentials.apiLogin + ':' + credentials.apiPassword),
		},
		body: options.body ? options.body : null,
		url: baseUrl + options.url,
		json: true,
	};

	return await ef.helpers.httpRequest(requestOptions);
}
