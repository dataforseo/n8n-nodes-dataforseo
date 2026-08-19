import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { GoogleShoppingOperations } from './resources/google_shopping';
import { getAmazonProductAsinsAdvnced, getAmazonProductAsinsHtml, getAmazonProductsAdvnced, getAmazonProductsHtml, getAmazonSellersAdvnced, getAmazonSellersHtml } from './execute/amazon';
import { getProductInfo, getProductReviews, getProductsAdvnced, getProductsHTML, getSellersAdvnced } from './execute/google_shopping';
import { AmazonOperations } from './resources/amazon';

export class DataForSeoMerchantApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Merchant API',
		name: 'dataForSeoMerchantApi',
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo Merchant API',
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
							name: 'Google Shopping',
							value: 'google_shopping',
						},
						{
							name: 'Amazon',
							value: 'amazon',
						}
				],
				default: 'google_shopping',
			},
			...GoogleShoppingOperations,
			...AmazonOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'google_shopping': {
				'get-products-advanced': getProductsAdvnced,
				'get-products-html': getProductsHTML,
				'get-sellers-advanced': getSellersAdvnced,
				'get-product-info': getProductInfo,
				'get-product-reviews': getProductReviews
			},
			'amazon': {
				'get-amazon-products-advanced': getAmazonProductsAdvnced,
				'get-amazon-products-html': getAmazonProductsHtml,
				'get-amazon-product-asins-advanced': getAmazonProductAsinsAdvnced,
				'get-amazon-product-asins-html': getAmazonProductAsinsHtml,
				'get-amazon-sellers-advanced': getAmazonSellersAdvnced,
				'get-amazon-sellers-html': getAmazonSellersHtml
			}
		};

		if (
			resource == 'google_shopping'
			&& (operation == 'get-sellers-html' || operation == 'get-product-specification-advanced' || operation == 'get-product-specification-html')
		) {
			throw new NodeOperationError(this.getNode(), "This function is no longer available");
		}

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
