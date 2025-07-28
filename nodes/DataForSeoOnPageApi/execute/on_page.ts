import {
	IExecuteFunctions,
	IHttpRequestOptions,
	NodeOperationError,
	IDataObject,
	sleep
} from 'n8n-workflow';
import { parseCheckThreshold, parseFilters, parseMultiOptionItems, parseOrderByString} from '../../../functions/generalFunctions';
import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';

async function getResponse(ef: IExecuteFunctions, i: number, options: IHttpRequestOptions) {
	const priorityUrls = ef.getNodeParameter('priority_urls', i) as IDataObject;
	const parsedPriorityUrls = parseMultiOptionItems(priorityUrls);

	const allowedSubdomains = ef.getNodeParameter('allowed_subdomains', i) as IDataObject;
	const parsedAllowedSubdomains = parseMultiOptionItems(allowedSubdomains);

	const disallowedSubdomains = ef.getNodeParameter('disallowed_subdomains', i) as IDataObject;
	const parsedDisallowedSubdomains = parseMultiOptionItems(disallowedSubdomains);

	const checkSpellExeptions = ef.getNodeParameter('check_spell_exceptions', i) as IDataObject;
	const parsedCheckSpellExeptions = parseMultiOptionItems(checkSpellExeptions);

	const checkTreshold = ef.getNodeParameter('checks_threshold', i) as IDataObject;
	const parsedCheckTreshold = parseCheckThreshold(checkTreshold);

	const disablePageChecks = ef.getNodeParameter('disable_page_checks', i) as IDataObject;
	const parsedDisablePageChecks = parseMultiOptionItems(disablePageChecks);

	const disableSitewideChecks = ef.getNodeParameter('disable_sitewide_checks', i) as Array<string>;

	const params: IHttpRequestOptions = {
		url: '/on_page/task_post',
		body: [{
			target: ef.getNodeParameter('target', i),
			max_crawl_pages: ef.getNodeParameter('max_crawl_pages', i),
			start_url: ef.getNodeParameter('start_url', i) || null,
			force_sitewide_checks: ef.getNodeParameter('force_sitewide_checks', i),
			priority_urls: parsedPriorityUrls.length ? parsedPriorityUrls : null,
			max_crawl_depth: ef.getNodeParameter('max_crawl_depth', i) || null,
			crawl_delay: ef.getNodeParameter('crawl_delay', i) || null,
			store_raw_html: ef.getNodeParameter('store_raw_html', i),
			enable_content_parsing: ef.getNodeParameter('enable_content_parsing', i),
			support_cookies: ef.getNodeParameter('support_cookies', i),
			accept_language: ef.getNodeParameter('accept_language', i) || null,
			custom_robots_txt: ef.getNodeParameter('custom_robots_txt', i) || null,
			robots_txt_merge_mode: ef.getNodeParameter('robots_txt_merge_mode', i) || null,
			custom_user_agent: ef.getNodeParameter('custom_user_agent', i) || null,
			browser_preset: ef.getNodeParameter('browser_preset', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_scale_factor: ef.getNodeParameter('browser_screen_scale_factor', i) || null,
			respect_sitemap: ef.getNodeParameter('respect_sitemap', i),
			custom_sitemap: ef.getNodeParameter('custom_sitemap', i) || null,
			crawl_sitemap_only: ef.getNodeParameter('crawl_sitemap_only', i),
			load_resources: ef.getNodeParameter('load_resources', i),
			enable_www_redirect_check: ef.getNodeParameter('enable_www_redirect_check', i),
			enable_javascript: ef.getNodeParameter('enable_javascript', i),
			enable_xhr: ef.getNodeParameter('enable_xhr', i),
			enable_browser_rendering: ef.getNodeParameter('enable_browser_rendering', i),
			disable_cookie_popup: ef.getNodeParameter('disable_cookie_popup', i),
			custom_js: ef.getNodeParameter('custom_js', i) || null,
			validate_micromarkup: ef.getNodeParameter('validate_micromarkup', i),
			allow_subdomains: ef.getNodeParameter('allow_subdomains', i),
			allowed_subdomains: parsedAllowedSubdomains.length ? parsedAllowedSubdomains : null,
			disallowed_subdomains: parsedDisallowedSubdomains.length ? parsedDisallowedSubdomains : null,
			check_spell: ef.getNodeParameter('check_spell', i),
			check_spell_language: ef.getNodeParameter('check_spell_language', i) || null,
			check_spell_exceptions: parsedCheckSpellExeptions.length ? parsedCheckSpellExeptions : null,
			calculate_keyword_density: ef.getNodeParameter('calculate_keyword_density', i),
			checks_threshold: Object.keys(parsedCheckTreshold).length ? parsedCheckTreshold : null,
			disable_sitewide_checks: disableSitewideChecks.length ? disableSitewideChecks : null,
			disable_page_checks: parsedDisablePageChecks.length ? parsedDisablePageChecks : null,
			switch_pool: ef.getNodeParameter('switch_pool', i),
			return_despite_timeout: ef.getNodeParameter('return_despite_timeout', i)
		}]
	};

	let responseData = await dataForSeoRequest(ef, params);

	const taskStatus = responseData['tasks'][0]['status_code'];
	if (taskStatus !== 20100) {
		return responseData;
	}

	const taskId = responseData['tasks'][0]['id'] as String;
	options.body[0].id = taskId;
	let responseReceived = false;
	let j = 0;
	let statusCode;
	while (j<100 || !responseReceived) {
		sleep(200);
		responseData = await dataForSeoRequest(ef, options)
		statusCode = responseData['tasks'][0]['status_code'];
		responseReceived = statusCode != 40601 && statusCode != 40602 && statusCode != 20100;
		j++;
	}

	return responseData;
}

export async function getPages(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/pages',
		body: [{
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getPagesByResource(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/pages_by_resource',
		body: [{
			url: ef.getNodeParameter('url_resource', i),
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getResources(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const relevantPagesFilters = ef.getNodeParameter('relevant_pages_filters', i) as unknown as string;
	let parsedRelevantPagesFilters = [];
	try {
		parsedRelevantPagesFilters = parseFilters(relevantPagesFilters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/resources',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			relevant_pages_filters: parsedRelevantPagesFilters.length ? parsedRelevantPagesFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getDuplicateTags(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/duplicate_tags',
		body: [{
			type: ef.getNodeParameter('type', i),
			accumulator: ef.getNodeParameter('accumulator', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getDuplicateContent(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/duplicate_content',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			similarity: ef.getNodeParameter('similarity', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getLinks(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/links',
		body: [{
			page_from: ef.getNodeParameter('page_from', i) || null,
			page_to: ef.getNodeParameter('page_to', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return getResponse(ef, i, params);
}

export async function getRedirectChains(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/redirect_chains',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return getResponse(ef, i, params);
}

export async function getNonIndexablePages(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/non_indexable',
		body: [{
			limit: ef.getNodeParameter('limit', i) || null,
			offset: ef.getNodeParameter('offset', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
		}]
	};

	return getResponse(ef, i, params);
}

export async function getWaterfall(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/waterfall',
		body: [{
			url: ef.getNodeParameter('url_required', i)
		}]
	};

	return getResponse(ef, i, params);
}

export async function getKeywordDensity(ef: IExecuteFunctions, i: number) {
	const filters = ef.getNodeParameter('filters', i) as unknown as string;
	let parsedFilters = [];
	try {
		parsedFilters = parseFilters(filters);
	} catch (e) {
		throw new NodeOperationError(ef.getNode(), "Invalid Filters value");
	}

	const orderBy = ef.getNodeParameter('order_by', i) as IDataObject;
	const parsedOrderBy = parseOrderByString(orderBy);
	if (parsedOrderBy.length > 3) {
		throw new NodeOperationError(ef.getNode(), "You can set no more than three sorting rules");
	}

	const params: IHttpRequestOptions = {
		url: '/on_page/keyword_density',
		body: [{
			url: ef.getNodeParameter('url', i) || null,
			keyword_length: ef.getNodeParameter('keyword_length', i),
			limit: ef.getNodeParameter('limit', i) || null,
			filters: parsedFilters.length ? parsedFilters : null,
			order_by: parsedOrderBy.length ? parsedOrderBy : null
		}]
	};

	return getResponse(ef, i, params);
}

export async function getMicrodata(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/microdata',
		body: [{
			url: ef.getNodeParameter('url_required', i)
		}]
	};

	return getResponse(ef, i, params);
}

export async function getRawHtml(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/raw_html',
		body: [{
			url: ef.getNodeParameter('url_required', i)
		}]
	};

	return getResponse(ef, i, params);
}

export async function getPageScreenshot(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/page_screenshot',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			accept_language: ef.getNodeParameter('accept_language', i) || null,
			custom_user_agent: ef.getNodeParameter('custom_user_agent', i) || null,
			browser_preset: ef.getNodeParameter('browser_preset', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_scale_factor: ef.getNodeParameter('browser_screen_scale_factor', i) || null,
			full_page_screenshot: ef.getNodeParameter('full_page_screenshot', i),
			disable_cookie_popup: ef.getNodeParameter('disable_cookie_popup', i),
			switch_pool: ef.getNodeParameter('switch_pool', i),
			ip_pool_for_scan: ef.getNodeParameter('ip_pool_for_scan', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getParsedContent(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/content_parsing',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			markdown_view: ef.getNodeParameter('markdown_view', i)
		}]
	};

	return getResponse(ef, i, params);
}

export async function getLiveParsedContent(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/on_page/content_parsing/live',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			custom_user_agent: ef.getNodeParameter('custom_user_agent', i) || null,
			browser_preset: ef.getNodeParameter('browser_preset', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_scale_factor: ef.getNodeParameter('browser_screen_scale_factor', i) || null,
			store_raw_html: ef.getNodeParameter('store_raw_html', i),
			disable_cookie_popup: ef.getNodeParameter('disable_cookie_popup', i),
			accept_language: ef.getNodeParameter('accept_language', i),
			enable_javascript: ef.getNodeParameter('enable_javascript', i),
			enable_browser_rendering: ef.getNodeParameter('enable_browser_rendering', i),
			enable_xhr: ef.getNodeParameter('enable_xhr', i),
			switch_pool: ef.getNodeParameter('switch_pool', i),
			ip_pool_for_scan: ef.getNodeParameter('ip_pool_for_scan', i) || null,
			markdown_view: ef.getNodeParameter('markdown_view', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveInstantPages(ef: IExecuteFunctions, i: number) {
	const checkTreshold = ef.getNodeParameter('checks_threshold', i) as IDataObject;
	const parsedCheckTreshold = parseCheckThreshold(checkTreshold);

	const params: IHttpRequestOptions = {
		url: '/on_page/instant_pages',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			custom_user_agent: ef.getNodeParameter('custom_user_agent', i) || null,
			browser_preset: ef.getNodeParameter('browser_preset', i) || null,
			browser_screen_width: ef.getNodeParameter('browser_screen_width', i) || null,
			browser_screen_height: ef.getNodeParameter('browser_screen_height', i) || null,
			browser_screen_scale_factor: ef.getNodeParameter('browser_screen_scale_factor', i) || null,
			store_raw_html: ef.getNodeParameter('store_raw_html', i),
			accept_language: ef.getNodeParameter('accept_language', i),
			load_resources: ef.getNodeParameter('load_resources', i),
			enable_javascript: ef.getNodeParameter('enable_javascript', i),
			enable_browser_rendering: ef.getNodeParameter('enable_browser_rendering', i),
			disable_cookie_popup: ef.getNodeParameter('disable_cookie_popup', i),
			return_despite_timeout: ef.getNodeParameter('return_despite_timeout', i),
			enable_xhr: ef.getNodeParameter('enable_xhr', i),
			custom_js: ef.getNodeParameter('custom_js', i) || null,
			validate_micromarkup: ef.getNodeParameter('validate_micromarkup', i),
			check_spell: ef.getNodeParameter('check_spell', i),
			checks_threshold: Object.keys(parsedCheckTreshold).length ? parsedCheckTreshold : null,
			switch_pool: ef.getNodeParameter('switch_pool', i),
			ip_pool_for_scan: ef.getNodeParameter('ip_pool_for_scan', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLighthouseAuditResults(ef: IExecuteFunctions, i: number) {
	const categories =  ef.getNodeParameter('categories', i) as Array<String>;

	const audits = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedAudits = parseMultiOptionItems(audits);

	const params: IHttpRequestOptions = {
		url: '/on_page/lighthouse/task_post',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			for_mobile: ef.getNodeParameter('for_mobile', i),
			categories: categories.length ? categories : null,
			audits: parsedAudits.length ? parsedAudits : null,
			version: ef.getNodeParameter('version', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/on_page/lighthouse/task_get/json/');
}

export async function getLiveLighthouseAuditResults(ef: IExecuteFunctions, i: number) {
	const categories =  ef.getNodeParameter('categories', i) as Array<String>;

	const audits = ef.getNodeParameter('categories', i) as IDataObject;
	const parsedAudits = parseMultiOptionItems(audits);

	const params: IHttpRequestOptions = {
		url: '/on_page/lighthouse/live/json',
		body: [{
			url: ef.getNodeParameter('url_required', i),
			for_mobile: ef.getNodeParameter('for_mobile', i),
			categories: categories.length ? categories : null,
			audits: parsedAudits.length ? parsedAudits : null,
			version: ef.getNodeParameter('version', i) || null,
			language_name: ef.getNodeParameter('language_name', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}
