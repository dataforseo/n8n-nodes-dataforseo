import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { GoogleOperations } from './resources/google';
import { getAppInfoAdvanced, getAppInfoHtml, getAppListAdvanced, getAppListHtml, getAppListingSearch, getAppReviews, searchAppsAdvanced, searchAppsHtml } from './execute/google';
import { getAppInfo, getAppleAppReviews, getAppList, searchApps } from './execute/apple';
import { AppleOperations } from './resources/apple';

export class DataForSeoAppDataApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO App Data API',
		name: 'dataForSeoAppDataApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo App Data API',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],

		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		requestDefaults: {
			method: 'POST',
			baseURL: 'https://api.dataforseo.com/v3',
			headers: {
					'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
						{
							name: 'Google',
							value: 'google',
						},
						{
							name: 'Apple',
							value: 'apple',
						}
				],
				default: 'google',
			},
			...GoogleOperations,
			...AppleOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'google': {
					'search-apps-advanced': searchAppsAdvanced,
					'search-apps-html': searchAppsHtml,
					'get-app-list-advanced': getAppListAdvanced,
					'get-app-list-html': getAppListHtml,
					'get-app-info-advanced': getAppInfoAdvanced,
					'get-app-info-html': getAppInfoHtml,
					'get-app-reviews': getAppReviews,
					'get-app-listing-search': getAppListingSearch
			},
			'apple': {
					'search-apps': searchApps,
					'get-app-list': getAppList,
					'get-app-info': getAppInfo,
					'get-apple-app-reviews': getAppleAppReviews,
					'get-apple-app-listings-search': getAppListingSearch
			}
		};

		const fn = mapping[resource][operation];
		if (!fn) {
			throw new NodeOperationError(this.getNode(), "Something went wrong");
		}

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				responseData.push(await fn(this, i));
			}
		} catch (e) {
			throw e;
			/*if (e instanceof NodeOperationError) {
				throw e;
			} else {
				throw new NodeOperationError(this.getNode(), "Something went wrong");
			}*/
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>;
	}
};
