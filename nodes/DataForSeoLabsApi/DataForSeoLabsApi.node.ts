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
import { getBingBulkKeywordDifficulty, getBingBulkTrafficEstimation, getBingCompetitorsDomain, getBingDomainIntersection, getBingDomainRankOverview, getBingPageIntersection, getBingRelatedKeywords, getBingRelevantPages, getBingSerpCompetitors, getBingSubdomains } from './execute/bing';
import { BingOperations } from './resources/bing';
import { getGooglePlayAppCompetitors, getGooglePlayAppIntersection, getGooglePlayBulkAppMetrics, getGooglePlayKeywordsForApp } from './execute/google_play';
import { GooglePlayOperations } from './resources/google_play';
import { AppStoreOperations } from './resources/app_store';
import { getAppStoreAppCompetitors, getAppStoreAppIntersection, getAppStoreBulkAppMetrics, getAppStoreKeywordsForApp } from './execute/app_store';

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
							value: 'google_play',
						},
						{
							name: 'App Store',
							value: 'app_store',
						}
				],
				default: 'google',
			},
			...GoogleOperations,
			...AmazonOperations,
			...BingOperations,
			...GooglePlayOperations,
			...AppStoreOperations
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
				'get-bing-bulk-keyword-difficulty': getBingBulkKeywordDifficulty,
				'get-bing-bulk-traffic-estimation': getBingBulkTrafficEstimation,
				'get-bing-competitors-domain': getBingCompetitorsDomain,
				'get-bing-domain-intersection': getBingDomainIntersection,
				'get-bing-domain-rank-overview': getBingDomainRankOverview,
				'get-bing-page-intersection': getBingPageIntersection,
				'get-bing-related-keywords': getBingRelatedKeywords,
				'get-bing-relevant-pages': getBingRelevantPages,
				'get-bing-serp-competitors': getBingSerpCompetitors,
				'get-bing-subdomains': getBingSubdomains
			},
			'google_play': {
				'get-google-play-bulk-app-metrics': getGooglePlayBulkAppMetrics,
				'get-google-play-keywords-for-app': getGooglePlayKeywordsForApp,
				'get-google-play-app-competitors': getGooglePlayAppCompetitors,
				'get-google-play-app-intersection': getGooglePlayAppIntersection
			},
			'app_store': {
				'get-app-store-bulk-app-metrics': getAppStoreBulkAppMetrics,
				'get-app-store-keywords-for-app': getAppStoreKeywordsForApp,
				'get-app-store-app-competitors': getAppStoreAppCompetitors,
				'get-app-store-app-intersection': getAppStoreAppIntersection
			}
		};

		const fn = mapping[resource][operation];
		if (!fn) {
			throw new NodeOperationError(this.getNode(), "Something went wrong");
		}

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
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
