import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { GoogleShoppingOperations } from './resources/google_shopping';
import { getAmazonProductAsinsAdvnced, getAmazonProductAsinsHtml, getAmazonProductsAdvnced, getAmazonProductsHtml, getAmazonSellersAdvnced, getAmazonSellersHtml } from './execute/amazon';
import { getProductInfo, getProductReviews, getProductsAdvnced, getProductsHTML, getSellersAdvnced } from './execute/google_shopping';
import { AmazonOperations } from './resources/amazon';

export class DataForSeoMerchantApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Merchant API',
		name: 'dataForSeoMerchantApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Merchant API',
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
		let responseData = [];
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

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				responseData.push(await fn(this, i));
			}
		} catch (e) {
			if (e instanceof NodeOperationError) {
				throw e;
			} else {
				throw new NodeOperationError(this.getNode(), "Something went wrong");
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>;
	}
};
