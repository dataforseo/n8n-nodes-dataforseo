import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject,
	sleep
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

export async function dataForSeoPOSTGETRequest(ef: IExecuteFunctions, options: IHttpRequestOptions, getPath: string) {
	let responseData = await dataForSeoRequest(ef, options);

	const taskStatus = responseData['tasks'][0]['status_code'];
	if (taskStatus !== 20100) {
		return responseData;
	}

	const taskId = responseData['tasks'][0]['id'] as String;
	if (taskId) {
		const taskOptions: IHttpRequestOptions = {
			method: 'GET',
			url: getPath + taskId,
		};
		let responseReceived = false;
		let j = 0;
		let statusCode;
		while (j<100 || !responseReceived) {
			sleep(200);
			responseData = await dataForSeoRequest(ef, taskOptions)
			statusCode = responseData['tasks'][0]['status_code'];
			responseReceived = statusCode != 40601 && statusCode != 40602 && statusCode != 20100;
			j++;
		}
	}

	return responseData;
}
