import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { getGoogleKeywordsForKeywords, getGoogleKeywordsForSite, getGoogleSearchVolume, getGoogleTrafficByKeywords, getLiveGoogleKeywordsForKeywords, getLiveGoogleKeywordsForSite, getLiveGoogleSearchVolume, getLiveGoogleTrafficByKeywords } from './execute/google_ads';
import { GoogleAdsOperations } from './resources/google_ads';
import { getBingAudienceEstimation, getBingKeywordperformance, getBingKeywordsForKeywords, getBingKeywordsForSite, getBingKeywordSuggestionsForUrl, getBingSearchVolume, getBingSearchVolumeHistory, getLiveBingAudienceEstimation, getLiveBingKeywordperformance, getLiveBingKeywordsForKeywords, getLiveBingKeywordsForSite, getLiveBingKeywordSuggestionsForUrl, getLiveBingSearchVolume, getLiveBingSearchVolumeHistory } from './execute/bing_ads';
import { BingAdsOperations } from './resources/bing_ads';
import { getGoogleTrendsExplore, getLiveGoogleTrendsExplore } from './execute/google_trends';
import { GoogleTrendsOperations } from './resources/google_trends';
import { DataforseoTrendsOperations } from './resources/dataforseo_trends';
import { getLiveDataForSeoTrendsDemography, getLiveDataForSeoTrendsExplore, getLiveDataForSeoTrendsMergedData, getLiveDataForSeoTrendsSubregionInterests } from './execute/dataforseo_trends';
import { getLiveBulkClickstreamSearchVolume, getLiveClickstreamSearchVolume, getLiveGlobalSearchVolume } from './execute/clickstream_data';
import { ClickstreamDataOperations } from './resources/clickstream_data';

export class DataForSeoKeywordsApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Keywords Data API',
		name: 'dataForSeoKeywordsApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO Keywords Data API',
		defaults: {
				name: 'DataForSeo Keywords Data API',
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
							// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
							name: 'Google Ads',
							value: 'google_ads',
						},
						{
							name: 'Bing Ads',
							value: 'bing_ads',
						},
						{
							name: 'Google Trends',
							value: 'google_trends',
						},
						{
							name: 'DataForSEO Trends',
							value: 'dataforseo_trends',
						},
						{
							name: 'Clickstream Data',
							value: 'clickstream_data',
						}
				],
				default: 'google_ads',
			},
			...GoogleAdsOperations,
			...BingAdsOperations,
			...GoogleTrendsOperations,
			...DataforseoTrendsOperations,
			...ClickstreamDataOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'google_ads': {
				'get-live-google-search-volume': getLiveGoogleSearchVolume,
				'get-google-search-volume': getGoogleSearchVolume,
				'get-live-google-keywords-for-site': getLiveGoogleKeywordsForSite,
				'get-google-keywords-for-site': getGoogleKeywordsForSite,
				'get-live-google-keywords-for-keywords': getLiveGoogleKeywordsForKeywords,
				'get-google-keywords-for-keywords': getGoogleKeywordsForKeywords,
				'get-live-google-ad-traffic-by-keywords': getLiveGoogleTrafficByKeywords,
				'get-google-ad-traffic-by-keywords': getGoogleTrafficByKeywords
			},
			'bing_ads': {
				'get-live-bing-search-volume': getLiveBingSearchVolume,
				'get-bing-search-volume': getBingSearchVolume,
				'get-live-bing-search-volume-history': getLiveBingSearchVolumeHistory,
				'get-bing-search-volume-history': getBingSearchVolumeHistory,
				'get-live-bing-keywords-for-site': getLiveBingKeywordsForSite,
				'get-bing-keywords-for-site': getBingKeywordsForSite,
				'get-live-bing-keywords-for-keywords': getLiveBingKeywordsForKeywords,
				'get-bing-keywords-for-keywords': getBingKeywordsForKeywords,
				'get-live-bing-keyword-performance': getLiveBingKeywordperformance,
				'get-bing-keyword-performance': getBingKeywordperformance,
				'get-live-bing-keyword-suggestions-for-url': getLiveBingKeywordSuggestionsForUrl,
				'get-bing-keyword-suggestions-for-url': getBingKeywordSuggestionsForUrl,
				'get-live-bing-ads-audience-estimation': getLiveBingAudienceEstimation,
				'get-bing-ads-audience-estimation': getBingAudienceEstimation
			},
			'google_trends': {
				'get-live-google-trends-explore': getLiveGoogleTrendsExplore,
				'get-google-trends-explore': getGoogleTrendsExplore
			},
			'dataforseo_trends': {
				'get-live-dataforseo-trends-explore': getLiveDataForSeoTrendsExplore,
				'get-live-dataforseo-trends-subregion-interests': getLiveDataForSeoTrendsSubregionInterests,
				'get-live-dataforseo-trends-demography': getLiveDataForSeoTrendsDemography,
				'get-live-dataforseo-trends-merged-data': getLiveDataForSeoTrendsMergedData
			},
			'clickstream_data': {
				'get-live-dataforseo-search-volume': getLiveClickstreamSearchVolume,
				'get-live-clickstream-global-search-volume': getLiveGlobalSearchVolume,
				'get-live-bulk-clickstream-search-volume': getLiveBulkClickstreamSearchVolume
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
