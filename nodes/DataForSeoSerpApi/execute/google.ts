import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';
import { parseMultiOptionItems } from '../../../functions/generalFunctions';
import { dataForSeoRequest, dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';


export async function getLiveGoogleOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/live/regular',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			target: ef.getNodeParameter('target', i) || null,
			group_organic_results: ef.getNodeParameter('group_organic_results', i),
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const removeFromUrl = ef.getNodeParameter('remove_from_url', i) as IDataObject;
	const parsedRemoveFromUrl = parseMultiOptionItems(removeFromUrl);

	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			target: ef.getNodeParameter('target', i) || null,
			group_organic_results: ef.getNodeParameter('group_organic_results', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			people_also_ask_click_depth: ef.getNodeParameter('people_also_ask_click_depth', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			remove_from_url: parsedRemoveFromUrl.length ? parsedRemoveFromUrl : null,
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/live/html',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i) || null,
			expand_ai_overview: ef.getNodeParameter('expand_ai_overview', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleOrganicSERPRegular(ef: IExecuteFunctions, i: number) {
	const removeFromUrl = ef.getNodeParameter('remove_from_url', i) as IDataObject;
	const parsedRemoveFromUrl = parseMultiOptionItems(removeFromUrl);

	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			group_organic_results: ef.getNodeParameter('group_organic_results', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			people_also_ask_click_depth: ef.getNodeParameter('people_also_ask_click_depth', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i) || null,
			expand_ai_overview: ef.getNodeParameter('expand_ai_overview', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			remove_from_url: parsedRemoveFromUrl.length ? parsedRemoveFromUrl : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/organic/task_get/regular/');
}

export async function getGoogleOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const removeFromUrl = ef.getNodeParameter('remove_from_url', i) as IDataObject;
	const parsedRemoveFromUrl = parseMultiOptionItems(removeFromUrl);

	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			group_organic_results: ef.getNodeParameter('group_organic_results', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			people_also_ask_click_depth: ef.getNodeParameter('people_also_ask_click_depth', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i) || null,
			expand_ai_overview: ef.getNodeParameter('expand_ai_overview', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			remove_from_url: parsedRemoveFromUrl.length ? parsedRemoveFromUrl : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/organic/task_get/advanced/');
}

export async function getGoogleOrganicSERPHTML(ef: IExecuteFunctions, i: number) {
	const removeFromUrl = ef.getNodeParameter('remove_from_url', i) as IDataObject;
	const parsedRemoveFromUrl = parseMultiOptionItems(removeFromUrl);

	const params: IHttpRequestOptions = {
		url: '/serp/google/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			group_organic_results: ef.getNodeParameter('group_organic_results', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			people_also_ask_click_depth: ef.getNodeParameter('people_also_ask_click_depth', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i) || null,
			expand_ai_overview: ef.getNodeParameter('expand_ai_overview', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			remove_from_url: parsedRemoveFromUrl.length ? parsedRemoveFromUrl : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/organic/task_get/html/');
}

export async function getLiveGoogleAiModeSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ai_mode/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name_ai', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleAiModeSERPHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ai_mode/live/html',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name_ai', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null,
			load_async_ai_overview: ef.getNodeParameter('load_async_ai_overview', i),
			expand_ai_overview: ef.getNodeParameter('expand_ai_overview', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleAiModeSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ai_mode/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name_ai', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/ai_mode/task_get/advanced/');
}

export async function getGoogleAiModeSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ai_mode/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name_ai', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/ai_mode/task_get/html/');
}

export async function getLiveGoogleMapsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/maps/live/advanced',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_this_area: ef.getNodeParameter('search_this_area', i),
			search_places: ef.getNodeParameter('search_places', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleMapsSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/maps/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_this_area: ef.getNodeParameter('search_this_area', i),
			search_places: ef.getNodeParameter('search_places', i)
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/maps/task_get/advanced/');
}

export async function getLiveGoogleLocalFinderSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/local_finder/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) ||  null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			min_rating: ef.getNodeParameter('min_rating', i) || null,
			time_filter: ef.getNodeParameter('time_filter', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleLocalFinderSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/local_finder/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) ||  null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			min_rating: ef.getNodeParameter('min_rating', i) || null,
			time_filter: ef.getNodeParameter('time_filter', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleLocalFinderSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/local_finder/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			min_rating: ef.getNodeParameter('min_rating', i) || null,
			time_filter: ef.getNodeParameter('time_filter', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/local_finder/task_get/advanced/');
}

export async function getGoogleLocalFinderSERPHTML(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/local_finder/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			min_rating: ef.getNodeParameter('min_rating', i) || null,
			time_filter: ef.getNodeParameter('time_filter', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/local_finder/task_get/html/');
}

export async function getLiveGoogleNewsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/news/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleNewsSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/news/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleNewsSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/news/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/news/task_get/advanced/');
}

export async function getGoogleNewsSERPHTML(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/news/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/news/task_get/html/');
}

export async function getLiveGoogleEventsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/events/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			date_range: ef.getNodeParameter('date_range', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleEventsSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/events/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			date_range: ef.getNodeParameter('date_range', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/events/task_get/advanced/');
}

export async function getLiveGoogleImagesSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/images/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleImagesSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/images/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleImagesSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/images/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/images/task_get/advanced/');
}

export async function getGoogleImagesSERPHTML(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/images/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			url: ef.getNodeParameter('url', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/images/task_get/html/');
}

export async function getGoogleSearchByImageSERPAdvanced(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/search_by_image/task_post',
		body: [{
			image_url: ef.getNodeParameter('image_url', i),
			priority: ef.getNodeParameter('priority', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/search_by_image/task_get/advanced/');
}

export async function getGoogleSearchByImageSERPHTML(ef: IExecuteFunctions, i: number) {

	const params: IHttpRequestOptions = {
		url: '/serp/google/search_by_image/task_post',
		body: [{
			image_url: ef.getNodeParameter('image_url', i),
			priority: ef.getNodeParameter('priority', i) || null,
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate: ef.getNodeParameter('location_coordinate', i) || null,
			se_domain: ef.getNodeParameter('se_domain', i) || null,
			calculate_rectangles: ef.getNodeParameter('calculate_rectangles', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_resolution_ratio: ef.getNodeParameter('browser_screen_resolution_ratio', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/search_by_image/task_get/html/');
}

export async function getGoogleJobsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const employmentType = ef.getNodeParameter('employment_type', i) as IDataObject;
	const parsedEmploymentType = parseMultiOptionItems(employmentType);

	const params: IHttpRequestOptions = {
		url: '/serp/google/jobs/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('jobs_location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_radius: ef.getNodeParameter('location_radius', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			employment_type: parsedEmploymentType.length ? parsedEmploymentType : null,
			date_posted: ef.getNodeParameter('date_posted', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/jobs/task_get/advanced/');
}

export async function getGoogleJobsSERPHTML(ef: IExecuteFunctions, i: number) {
	const employmentType = ef.getNodeParameter('employment_type', i) as IDataObject;
	const parsedEmploymentType = parseMultiOptionItems(employmentType);

	const params: IHttpRequestOptions = {
		url: '/serp/google/jobs/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('jobs_location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_radius: ef.getNodeParameter('location_radius', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			employment_type: parsedEmploymentType.length ? parsedEmploymentType : null,
			date_posted: ef.getNodeParameter('date_posted', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/jobs/task_get/html/');
}

export async function getLiveGoogleAutocompleteSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/autocomplete/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			cursor_pointer: ef.getNodeParameter('cursor_pointer', i) || null,
			depclientth: ef.getNodeParameter('client', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleAutocompleteSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/autocomplete/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			cursor_pointer: ef.getNodeParameter('cursor_pointer', i) || null,
			depclientth: ef.getNodeParameter('client', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/autocomplete/task_get/advanced/');
}

export async function getLiveGoogleDatasetSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const topics = ef.getNodeParameter('topics', i) as IDataObject;
	const parsedTopics = parseMultiOptionItems(topics);
	let language = ef.getNodeParameter('dataset_language_name', i) ?? null;
	if (language == '') {
		language = null;
	}

	const params: IHttpRequestOptions = {
		url: '/serp/google/dataset_search/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			language_name: language,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			last_updated: ef.getNodeParameter('last_updated', i) || null,
			file_formats: ef.getNodeParameter('file_formats', i) || null,
			usage_rights: ef.getNodeParameter('usage_rights', i) || null,
			is_free: ef.getNodeParameter('is_free', i) || null,
			topics: parsedTopics.length ? parsedTopics : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleDatasetSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const topics = ef.getNodeParameter('topics', i) as IDataObject;
	const parsedTopics = parseMultiOptionItems(topics);
	let language = ef.getNodeParameter('dataset_language_name', i) ?? null;
	if (language == '') {
		language = null;
	}

	const params: IHttpRequestOptions = {
		url: '/serp/google/dataset_search/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			priority: ef.getNodeParameter('priority', i) || null,
			language_name: language,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			last_updated: ef.getNodeParameter('last_updated', i) || null,
			file_formats: ef.getNodeParameter('file_formats', i) || null,
			usage_rights: ef.getNodeParameter('usage_rights', i) || null,
			is_free: ef.getNodeParameter('is_free', i) || null,
			topics: parsedTopics.length ? parsedTopics : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/dataset_search/task_get/advanced/');
}

export async function getLiveGoogleDatasetInfoAdvanced(ef: IExecuteFunctions, i: number) {
	let language = ef.getNodeParameter('dataset_language_name', i) ?? null;
	if (language == '') {
		language = null;
	}

	const params: IHttpRequestOptions = {
		url: '/serp/google/dataset_info/live/advanced',
		body: [{
			dataset_id: ef.getNodeParameter('dataset_id', i),
			language_name: language,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleDatasetInfoAdvanced(ef: IExecuteFunctions, i: number) {
	let language = ef.getNodeParameter('dataset_language_name', i) ?? null;
	if (language == '') {
		language = null;
	}

	const params: IHttpRequestOptions = {
		url: '/serp/google/dataset_info/task_post',
		body: [{
			dataset_id: ef.getNodeParameter('dataset_id', i),
			language_name: language,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/dataset_info/task_get/advanced/');
}

export async function getLiveGoogleAdsAdvertisersSERPInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ads_advertisers/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('ads_location_name', i) ?? null,
			location_coordinate: ef.getNodeParameter('ads_location_coordinate', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleAdsAdvertisersSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/ads_advertisers/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('ads_location_name', i) ?? null,
			location_coordinate: ef.getNodeParameter('ads_location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/ads_advertisers/task_get/advanced/');
}

export async function getLiveGoogleAdsSearchAdvanced(ef: IExecuteFunctions, i: number) {
	const adsIDs = ef.getNodeParameter('advertiser_ids', i) as IDataObject;;
	const parsedAdsIDs = parseMultiOptionItems(adsIDs);

	const params: IHttpRequestOptions = {
		url: '/serp/google/ads_search/live/advanced',
		body: [{
			target: ef.getNodeParameter('target', i) || null,
			advertiser_ids: parsedAdsIDs.length ? parsedAdsIDs : null,
			location_name: ef.getNodeParameter('ads_search_location_name', i) ?? null,
			location_coordinate: ef.getNodeParameter('ads_location_coordinate', i) || null,
			platform: ef.getNodeParameter('platform', i) || null,
			format: ef.getNodeParameter('format', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleAdsSearchAdvanced(ef: IExecuteFunctions, i: number) {
	const adsIDs = ef.getNodeParameter('advertiser_ids', i) as IDataObject;;
	const parsedAdsIDs = parseMultiOptionItems(adsIDs);

	const params: IHttpRequestOptions = {
		url: '/serp/google/ads_search/task_post',
		body: [{
			target: ef.getNodeParameter('target', i) || null,
			advertiser_ids: parsedAdsIDs.length ? parsedAdsIDs : null,
			location_name: ef.getNodeParameter('ads_search_location_name', i) ?? null,
			location_coordinate: ef.getNodeParameter('ads_location_coordinate', i) || null,
			platform: ef.getNodeParameter('platform', i) || null,
			format: ef.getNodeParameter('format', i) || null,
			date_from: ef.getNodeParameter('date_from', i) || null,
			date_to: ef.getNodeParameter('date_to', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/ads_search/task_get/advanced/');
}

export async function getLiveGoogleFinanceExploreSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_explore/live/advanced',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			news_type: ef.getNodeParameter('news_type', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleFinanceExploreSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_explore/live/html',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			news_type: ef.getNodeParameter('news_type', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleFinanceExploreSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_explore/task_post',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			news_type: ef.getNodeParameter('news_type', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_explore/task_get/advanced/');
}

export async function getGoogleFinanceExploreSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_explore/task_post',
		body: [{
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			news_type: ef.getNodeParameter('news_type', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_explore/task_get/html/');
}

export async function getLiveGoogleFinanceMarketsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_markets/live/advanced',
		body: [{
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			market_type: ef.getNodeParameter('market_type', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleFinanceMarketsSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_markets/live/html',
		body: [{
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			market_type: ef.getNodeParameter('market_type', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleFinanceMarketsSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_markets/task_post',
		body: [{
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			market_type: ef.getNodeParameter('market_type', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_markets/task_get/advanced/');
}

export async function getGoogleFinanceMarketsSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_markets/task_post',
		body: [{
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			market_type: ef.getNodeParameter('market_type', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_markets/task_get/html/');
}

export async function getLiveGoogleFinanceQuoteSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_quote/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			window: ef.getNodeParameter('window', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleFinanceQuoteSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_quote/live/html',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			window: ef.getNodeParameter('window', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleFinanceQuoteSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_quote/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			window: ef.getNodeParameter('window', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_quote/task_get/advanced/');
}

export async function getGoogleFinanceQuoteSERPHTML(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_quote/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword_finance', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_windows_only', i) || null,
			window: ef.getNodeParameter('window', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_quote/task_get/html/');
}


export async function getLiveGoogleFinanceTickerSearchAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_ticker_search/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword_ticker_search', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			category: ef.getNodeParameter('category', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleFinanceTickerSearchAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/google/finance_ticker_search/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword_ticker_search', i),
			location_name: ef.getNodeParameter('location_name', i) ?? null,
			language_name: ef.getNodeParameter('language_name', i) ?? null,
			category: ef.getNodeParameter('category', i) || null,
			priority: ef.getNodeParameter('priority', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/google/finance_ticker_search/task_get/advanced/');
}
