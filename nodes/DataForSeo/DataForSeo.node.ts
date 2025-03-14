import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { BacklinksOperations } from './resources/backlinks';
import { SerpOperations } from './resources/serp';
import { BusinessDataOperations } from './resources/business_data';
import { OnPageOperations } from './resources/on_page';
import { KeywordsDataOperations } from './resources/keywords_data';
import { LabsOperations } from './resources/labs';
import {
	getBacklinks,
	getBacklinkSummary,
	getBacklinksPageSummary,
	getBulkBacklinkRank,
	getBulkBacklinkStats,
	getBulkRefferingDomainStats,
	getBulkSpamScores,
	getHistoricalBacklinkSummary,
	getRefferingDomains,
 } from './execute/backlinks';
import { getBusinessListings, getBusinessListingsCategoriesAggregation, getGoogleReviews } from './execute/business_data';
import { getGoogleSearchVolume, getKeywordsForKeywords } from './execute/keywords_data';
import {
	getDomainRankOverview,
	getHistorycalTrafficStats,
	getKeywordDifficulty,
	getKeywordIdeas,
	getKeywordSuggestions,
	getOrganicTrafficStats,
	getRankedKeywords,
 } from './execute/labs';
import { getPageAuditCheck, parsePageContent } from './execute/on_page';
import { getFinanceExplore, getFinanceMarkets, getFinanceQuote, getParsedSerp, searchGoogleFinanceTickers } from './execute/serp';

export class DataForSeo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO',
		name: 'dataForSeo',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo',
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
							name: 'Backlink',
							value: 'backlinks',
						},
						{
							name: 'SERP',
							value: 'serp',
						},
						{
							name: 'Business Data',
							value: 'business_data',
						},
						{
							name: 'On Page',
							value: 'on_page',
						},
						{
							name: 'Keywords Data',
							value: 'keywords_data',
						},
						{
							name: 'Labs',
							value: 'labs',
						},
				],
				default: 'backlinks',
			},
			...BacklinksOperations,
			...SerpOperations,
			...BusinessDataOperations,
			...OnPageOperations,
			...KeywordsDataOperations,
			...LabsOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'backlinks': {
				'get-backlinks': getBacklinks,
				'get-backlink-summary': getBacklinkSummary,
				'get-historical-backlink-summary': getHistoricalBacklinkSummary,
				'get-bulk-backlink-rank': getBulkBacklinkRank,
				'get-bulk-backlink-stats': getBulkBacklinkStats,
				'get-backlinks-page-summary': getBacklinksPageSummary,
				'get-bulk-referring-domain-stats': getBulkRefferingDomainStats,
				'get-referring-domains': getRefferingDomains,
				'get-bulk-spam-scores': getBulkSpamScores,
			},
			'business_data': {
				'get-business-listings': getBusinessListings,
				'get-business-listings-categories-aggregation': getBusinessListingsCategoriesAggregation,
				'get-google-reviews': getGoogleReviews,
			},
			'keywords_data': {
				'get-google-search-volume': getGoogleSearchVolume,
				'get-keywords-for-keywords': getKeywordsForKeywords,
			},
			'labs': {
				'get-domain-rank-overview': getDomainRankOverview,
				'get-keyword-suggestions': getKeywordSuggestions,
				'get-ranked-keywords': getRankedKeywords,
				'get-keyword-difficulty': getKeywordDifficulty,
				'get-organic-traffic-stats': getOrganicTrafficStats,
				'get-historical-traffic-stats': getHistorycalTrafficStats,
				'get-keyword-ideas': getKeywordIdeas,
			},
			'on_page': {
				'get-page-audit-check': getPageAuditCheck,
				'parse-page-content': parsePageContent,
			},
			'serp': {
				'get-parsed-serp': getParsedSerp,
				'get-finance-explore': getFinanceExplore,
				'get-finance-markets': getFinanceMarkets,
				'get-finance-quote': getFinanceQuote,
				'search-google-finance-tickers': searchGoogleFinanceTickers
			},
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
