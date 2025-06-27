import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { GoogleOperations } from './resources/google';

import {
	getGoogleEventsSERPAdvanced,
	getGoogleAdsAdvertisersSERPAdvanced,
	getGoogleAdsSearchAdvanced,
	getGoogleAutocompleteSERPAdvanced,
	getGoogleDatasetInfoAdvanced,
	getGoogleDatasetSERPAdvanced,
	getGoogleFinanceTickerSearchAdvanced,
	getGoogleFinanceMarketsSERPAdvanced,
	getGoogleFinanceMarketsSERPHTML,
	getGoogleFinanceQuoteSERPAdvanced,
	getGoogleFinanceQuoteSERPHTML,
	getGoogleImagesSERPAdvanced,
	getGoogleImagesSERPHTML,
	getGoogleJobsSERPAdvanced,
	getGoogleJobsSERPHTML,
	getGoogleSearchByImageSERPAdvanced,
	getGoogleSearchByImageSERPHTML,
	getLiveGoogleEventsSERPAdvanced,
	getLiveGoogleAdsAdvertisersSERPInfoAdvanced,
	getLiveGoogleAdsSearchAdvanced,
	getLiveGoogleAutocompleteSERPAdvanced,
	getLiveGoogleDatasetInfoAdvanced,
	getLiveGoogleDatasetSERPAdvanced,
	getLiveGoogleFinanceTickerSearchAdvanced,
	getLiveGoogleFinanceMarketsSERPAdvanced,
	getLiveGoogleFinanceMarketsSERPHTML,
	getLiveGoogleFinanceQuoteSERPAdvanced,
	getLiveGoogleFinanceQuoteSERPHTML,
	getLiveGoogleImagesSERPAdvanced,
	getLiveGoogleImagesSERPHTML,
	getLiveGoogleLocalFinderSERPAdvanced,
	getLiveGoogleLocalFinderSERPHTML,
	getLiveGoogleMapsSERPAdvanced,
	getLiveGoogleNewsSERPAdvanced,
	getLiveGoogleNewsSERPHTML,
	getLiveGoogleOrganicSERPAdvanced,
	getLiveGoogleOrganicSERPHTML,
	getLiveGoogleOrganicSERPRegular,
	getGoogleLocalFinderSERPAdvanced,
	getGoogleLocalFinderSERPHTML,
	getGoogleMapsSERPAdvanced,
	getGoogleNewsSERPAdvanced,
	getGoogleNewsSERPHTML,
	getGoogleOrganicSERPAdvanced,
	getGoogleOrganicSERPHTML,
	getGoogleOrganicSERPRegular,
	getLiveGoogleFinanceExploreSERPAdvanced,
	getLiveGoogleFinanceExploreSERPHTML,
	getGoogleFinanceExploreSERPAdvanced,
	getGoogleFinanceExploreSERPHTML
} from './execute/google';
import { getBingLocalPackSERPHTML, getBingLocalPackSERPRegular, getBingOrganicSERPAdvanced, getBingOrganicSERPHTML, getBingOrganicSERPRegular, getLiveBingLocalPackSERPHTML, getLiveBingLocalPackSERPRegular, getLiveBingOrganicSERPAdvanced, getLiveBingOrganicSERPHTML, getLiveBingOrganicSERPRegular } from './execute/bing';
import { BingOperations } from './resources/bing';
import { YouTubeOperations } from './resources/youtube';
import { getLiveYoutubeCommentsAdvanced, getLiveYoutubeOrganicSERPAdvanced, getLiveYoutubeSubtitlesAdvanced, getLiveYoutubeVideoInfoAdvanced, getYoutubeCommentsAdvanced, getYoutubeOrganicSERPAdvanced, getYoutubeSubtitlesAdvanced, getYoutubeVideoInfoAdvanced } from './execute/youtube';
import { getLiveYahooOrganicSERPAdvanced, getLiveYahooOrganicSERPHTML, getLiveYahooOrganicSERPRegular, getYahooOrganicSERPAdvanced, getYahooOrganicSERPHTML, getYahooOrganicSERPRegular } from './execute/yahoo';
import { YahooOperations } from './resources/yahoo';
import { BaiduOperations } from './resources/baidu';
import { getBaiduOrganicSERPAdvanced, getBaiduOrganicSERPHTML, getBaiduOrganicSERPRegular } from './execute/baidu';
import { getNaverOrganicSERPAdvanced, getNaverOrganicSERPHTML, getNaverOrganicSERPRegular } from './execute/naver';
import { NaverOperations } from './resources/naver';
import { SeznamOperations } from './resources/seznam';
import { getSeznamOrganicSERPAdvanced, getSeznamOrganicSERPHTML, getSeznamOrganicSERPRegular } from './execute/seznam';

export class DataForSeoSerpApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO SERP API',
		name: 'dataForSeoSerpApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO SERP API',
		defaults: {
				name: 'DataForSeo SERP API',
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
							name: 'Bing',
							value: 'bing',
						},
						{
							name: 'YouTube',
							value: 'youtube',
						},
						{
							name: 'Yahoo',
							value: 'yahoo',
						},
						{
							name: 'Baidu',
							value: 'baidu',
						},
						{
							name: 'Naver',
							value: 'naver',
						},
						{
							name: 'Seznam',
							value: 'seznam',
						}
				],
				default: 'google',
			},
			...GoogleOperations,
			...BingOperations,
			...YouTubeOperations,
			...YahooOperations,
			...BaiduOperations,
			...NaverOperations,
			...SeznamOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'google': {
				'get-live-google-organic-serp-regular': getLiveGoogleOrganicSERPRegular,
				'get-live-google-organic-serp-advanced': getLiveGoogleOrganicSERPAdvanced,
				'get-live-google-organic-serp-html': getLiveGoogleOrganicSERPHTML,
				'get-google-organic-serp-regular': getGoogleOrganicSERPRegular,
				'get-google-organic-serp-advanced': getGoogleOrganicSERPAdvanced,
				'get-google-organic-serp-html': getGoogleOrganicSERPHTML,
				'get-live-google-maps-serp-advanced': getLiveGoogleMapsSERPAdvanced,
				'get-google-maps-serp-advanced': getGoogleMapsSERPAdvanced,
				'get-live-google-local-finder-serp-advanced': getLiveGoogleLocalFinderSERPAdvanced,
				'get-live-google-local-finder-serp-html': getLiveGoogleLocalFinderSERPHTML,
				'get-google-local-finder-serp-advanced': getGoogleLocalFinderSERPAdvanced,
				'get-google-local-finder-serp-html': getGoogleLocalFinderSERPHTML,
				'get-live-google-news-serp-advanced':getLiveGoogleNewsSERPAdvanced,
				'get-live-google-news-serp-html': getLiveGoogleNewsSERPHTML,
				'get-google-news-serp-advanced': getGoogleNewsSERPAdvanced,
				'get-google-news-serp-html': getGoogleNewsSERPHTML,
				'get-live-google-events-serp-advanced': getLiveGoogleEventsSERPAdvanced,
				'get-google-events-serp-advanced': getGoogleEventsSERPAdvanced,
				'get-live-google-images-serp-advanced' : getLiveGoogleImagesSERPAdvanced,
				'get-live-google-images-serp-html': getLiveGoogleImagesSERPHTML,
				'get-google-images-serp-advanced': getGoogleImagesSERPAdvanced,
				'get-google-images-serp-html': getGoogleImagesSERPHTML,
				'get-google-search-by-image-serp-advanced': getGoogleSearchByImageSERPAdvanced,
				'get-google-search-by-image-serp-html': getGoogleSearchByImageSERPHTML,
				'get-google-jobs-serp-advanced': getGoogleJobsSERPAdvanced,
				'get-google-jobs-serp-html': getGoogleJobsSERPHTML,
				'get-live-google-autocomplete-serp-advanced': getLiveGoogleAutocompleteSERPAdvanced,
				'get-google-autocomplete-serp-advanced': getGoogleAutocompleteSERPAdvanced,
				'get-live-google-dataset-serp-advanced': getLiveGoogleDatasetSERPAdvanced,
				'get-google-dataset-serp-advanced': getGoogleDatasetSERPAdvanced,
				'get-live-google-dataset-info-advanced': getLiveGoogleDatasetInfoAdvanced,
				'get-google-dataset-info-advanced': getGoogleDatasetInfoAdvanced,
				'get-live-google-ads-advertisers-serp-advanced': getLiveGoogleAdsAdvertisersSERPInfoAdvanced,
				'get-google-ads-advertisers-serp-advanced': getGoogleAdsAdvertisersSERPAdvanced,
				'get-live-google-ads-search-advanced': getLiveGoogleAdsSearchAdvanced,
				'get-google-ads-search-advanced': getGoogleAdsSearchAdvanced,
				'get-live-google-finance-explore-serp-advanced': getLiveGoogleFinanceExploreSERPAdvanced,
				'get-live-google-finance-explore-serp-html': getLiveGoogleFinanceExploreSERPHTML,
				'get-google-finance-explore-serp-advanced': getGoogleFinanceExploreSERPAdvanced,
				'get-google-finance-explore-serp-html': getGoogleFinanceExploreSERPHTML,
				'get-live-google-finance-markets-serp-advanced': getLiveGoogleFinanceMarketsSERPAdvanced,
				'get-live-google-finance-markets-serp-html': getLiveGoogleFinanceMarketsSERPHTML,
				'get-google-finance-markets-serp-advanced': getGoogleFinanceMarketsSERPAdvanced,
				'get-google-finance-markets-serp-html': getGoogleFinanceMarketsSERPHTML,
				'get-live-google-finance-quote-serp-advanced': getLiveGoogleFinanceQuoteSERPAdvanced,
				'get-live-google-finance-quote-serp-html': getLiveGoogleFinanceQuoteSERPHTML,
				'get-google-finance-quote-serp-advanced': getGoogleFinanceQuoteSERPAdvanced,
				'get-google-finance-quote-serp-html': getGoogleFinanceQuoteSERPHTML,
				'get-live-google-finance-ticker-search-advanced': getLiveGoogleFinanceTickerSearchAdvanced,
				'get-google-finance-ticker-search-advanced': getGoogleFinanceTickerSearchAdvanced
			},
			'bing': {
				'get-live-bing-organic-serp-regular': getLiveBingOrganicSERPRegular,
				'get-live-bing-organic-serp-advanced': getLiveBingOrganicSERPAdvanced,
				'get-live-bing-organic-serp-html': getLiveBingOrganicSERPHTML,
				'get-bing-organic-serp-regular': getBingOrganicSERPRegular,
				'get-bing-organic-serp-advanced': getBingOrganicSERPAdvanced,
				'get-bing-organic-serp-html': getBingOrganicSERPHTML,
				'get-live-bing-local-finder-serp-regular': getLiveBingLocalPackSERPRegular,
				'get-live-bing-local-finder-serp-html': getLiveBingLocalPackSERPHTML,
				'get-bing-local-finder-serp-regular': getBingLocalPackSERPRegular,
				'get-bing-local-finder-serp-html': getBingLocalPackSERPHTML
			},
			'youtube': {
				'get-live-youtube-organic-serp-advanced': getLiveYoutubeOrganicSERPAdvanced,
				'get-youtube-organic-serp-advanced': getYoutubeOrganicSERPAdvanced,
				'get-live-youtube-video-info-advanced': getLiveYoutubeVideoInfoAdvanced,
				'get-youtube-video-info-advanced': getYoutubeVideoInfoAdvanced,
				'get-live-youtube-subtitles-advanced': getLiveYoutubeSubtitlesAdvanced,
				'get-youtube-subtitles-advanced': getYoutubeSubtitlesAdvanced,
				'get-live-youtube-comments-advanced': getLiveYoutubeCommentsAdvanced,
				'get-youtube-comments-advanced': getYoutubeCommentsAdvanced
			},
			'yahoo': {
				'get-live-yahoo-organic-serp-regular': getLiveYahooOrganicSERPRegular,
				'get-live-yahoo-organic-serp-advanced': getLiveYahooOrganicSERPAdvanced,
				'get-live-yahoo-organic-serp-html': getLiveYahooOrganicSERPHTML,
				'get-yahoo-organic-serp-regular': getYahooOrganicSERPRegular,
				'get-yahoo-organic-serp-advanced': getYahooOrganicSERPAdvanced,
				'get-yahoo-organic-serp-html': getYahooOrganicSERPHTML
			},
			'baidu': {
				'get-baidu-organic-serp-regular': getBaiduOrganicSERPRegular,
				'get-baidu-organic-serp-advanced': getBaiduOrganicSERPAdvanced,
				'get-baidu-organic-serp-html': getBaiduOrganicSERPHTML
			},
			'naver': {
				'get-naver-organic-serp-regular': getNaverOrganicSERPRegular,
				'get-naver-organic-serp-advanced': getNaverOrganicSERPAdvanced,
				'get-naver-organic-serp-html': getNaverOrganicSERPHTML
			},
			'seznam': {
				'get-seznam-organic-serp-regular': getSeznamOrganicSERPRegular,
				'get-seznam-organic-serp-advanced': getSeznamOrganicSERPAdvanced,
				'get-seznam-organic-serp-html': getSeznamOrganicSERPHTML
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
