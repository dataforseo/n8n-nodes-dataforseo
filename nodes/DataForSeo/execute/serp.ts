import {
	IExecuteFunctions,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function getParsedSerp(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/live/regular',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device', i),
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			target: ef.getNodeParameter('target', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getFinanceExplore(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_explore/live/advanced',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			news_type: ef.getNodeParameter('news_type', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getFinanceMarkets(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_markets/live/advanced',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			market_type: ef.getNodeParameter('market_type', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getFinanceQuote(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_quote/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			window: ef.getNodeParameter('window', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function searchGoogleFinanceTickers(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_ticker_search/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance_search', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			category: ef.getNodeParameter('category', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleAIModeSerp(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ai_mode/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			calculate_rectangles	: ef.getNodeParameter('calculate_rectangles', i),
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
