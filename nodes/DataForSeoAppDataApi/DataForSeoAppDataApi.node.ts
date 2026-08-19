import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { GoogleOperations } from './resources/google';
import { getAppInfoAdvanced, getAppInfoHtml, getAppListAdvanced, getAppListHtml, getAppListingSearch, getAppReviews, searchAppsAdvanced, searchAppsHtml } from './execute/google';
import { getAppInfo, getAppleAppReviews, getAppList, searchApps } from './execute/apple';
import { AppleOperations } from './resources/apple';

export class DataForSeoAppDataApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO App Data API',
		name: 'dataForSeoAppDataApi',
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo App Data API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
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
		const responseData = [];
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

		const items = this.getInputData();

		for (let i = 0; i < items.length; i++) {
			try {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
			} catch (error) {
				if (this.continueOnFail()) {
					responseData.push({ json: items[i].json, error, pairedItem: i });
				} else {
					if (error.context) {
						error.context.itemIndex = i;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex: i,
					});
				}
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<IDataObject>;
	}
};
