import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { GoogleOperations } from '../DataForSeoLabsApi/resources/google';
import { getBulkTrafficEstimation, getCategoriesForDomain, getCompetitorsDomain, getCategoriesForKeywords, getDomainIntersection, getDomainMetricsByCtaegories, getDomainRankOverview, getHistoricalBulkTrafficEstimation, getHistoricalKeywordData, getHistoricalRankOverview, getHistoricalSerps, getKeywordDifficulty, getKeywordIdeas, getKeywordOverview, getKeywordsForCategories, getKeywordsForSite, getKeywordSuggestions, getPageIntersection, getRankedKeywords, getRelatedKeywords, getRelevantPages, getSearchIntent, getSerpCompetitors, getSubdomains, getTopSearches } from './execute/google';
import { getAmazonRankedKeywords, getAmazonRelatedKeywords, getBulkSearchVolume, getProductCompetitors, getProductKeywordIntersections, getProductRankOverview } from './execute/amazon';
import { AmazonOperations } from './resources/amazon';

export class DataForSeoLabsApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Labs API',
		name: 'dataForSeoLabsApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Labs API',
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
							name: 'Amazon',
							value: 'amazon',
						},
						{
							name: 'Bing',
							value: 'bing',
						},
						{
							name: 'Google Play',
							value: 'google_paly',
						},
						{
							name: 'App Store',
							value: 'app_store',
						}
				],
				default: 'google',
			},
			...GoogleOperations,
			...AmazonOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'google': {
				'get-keywords-for-site': getKeywordsForSite,
				'get-related-keywords': getRelatedKeywords,
				'get-keyword-suggestions': getKeywordSuggestions,
				'get-keyword-ideas': getKeywordIdeas,
				'get-keyword-difficulty': getKeywordDifficulty,
				'get-search-intent': getSearchIntent,
				'get-keyword-overview': getKeywordOverview,
				'get-historical-keyword-data': getHistoricalKeywordData,
				'get-categories-for-domain': getCategoriesForDomain,
				'get-categories-for-keywords': getCategoriesForKeywords,
				'get-keywords-for-categories': getKeywordsForCategories,
				'get-domain-metrics-by-categories': getDomainMetricsByCtaegories,
				'get-top-searches': getTopSearches,
				'get-serp-competitors': getSerpCompetitors,
				'get-ranked-keywords': getRankedKeywords,
				'get-competitors-domain': getCompetitorsDomain,
				'get-domain-intersection': getDomainIntersection,
				'get-subdomains': getSubdomains,
				'get-relevant-pages': getRelevantPages,
				'get-domain-rank-overview': getDomainRankOverview,
				'get-historical-serps': getHistoricalSerps,
				'get-historical-rank-overview': getHistoricalRankOverview,
				'get-page-intersection': getPageIntersection,
				'get-bulk-traffic-estimation': getBulkTrafficEstimation,
				'get-historical-bulk-traffic-estimation': getHistoricalBulkTrafficEstimation
			},
			'amazon': {
				'get-bulk-search-volume': getBulkSearchVolume,
				'get-amazon-related-keywords': getAmazonRelatedKeywords,
				'get-amazon-ranked-keywords': getAmazonRankedKeywords,
				'get-product-rank-overview': getProductRankOverview,
				'get-product-competitors': getProductCompetitors,
				'get-product-keyword-intersections': getProductKeywordIntersections
			},
			'bing': {
			},
			'google_paly': {
			},
			'app_store': {
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
