import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DataForSeoApi implements ICredentialType {
	name = 'dataForSeoApi';
	displayName = 'DataForSEO API';
	documentationUrl = 'https://docs.dataforseo.com/v3/auth/?bash';
	properties: INodeProperties[] = [
		{
			displayName: 'API Login',
			name: 'apiLogin',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Password',
			name: 'apiPassword',
			type: 'string',
			typeOptions: {
				password: true
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.apiLogin}}',
				password: '={{$credentials.apiPassword}}',
				sendImmediately: true,
			}
		},
	};

	test: ICredentialTestRequest | undefined = {
		request: {
			baseURL: 'https://api.dataforseo.com/v3',
			url: '/appendix/user_data',
		},
	};
}
