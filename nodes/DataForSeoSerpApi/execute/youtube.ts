import {
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoRequest, dataForSeoPOSTGETRequest } from '../../../functions/dataForSeoRequest';

export async function getLiveYoutubeOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/organic/live/advanced',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			block_depth: ef.getNodeParameter('block_depth', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getYoutubeOrganicSERPAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/organic/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device', i) || null,
			os: ef.getNodeParameter('os', i) || null,
			block_depth: ef.getNodeParameter('block_depth', i) || null,
			search_param: ef.getNodeParameter('search_param', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/youtube/organic/task_get/advanced/');
}

export async function getLiveYoutubeVideoInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_info/live/advanced',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getYoutubeVideoInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_info/live/advanced',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/youtube/video_info/task_get/advanced/');
}

export async function getLiveYoutubeSubtitlesAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_subtitles/live/advanced',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			subtitles_language: ef.getNodeParameter('subtitles_language', i) || null,
			subtitles_translate_language: ef.getNodeParameter('subtitles_translate_language', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getYoutubeSubtitlesAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_subtitles/task_post',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			priority: ef.getNodeParameter('priority', i) || null,
			subtitles_language: ef.getNodeParameter('subtitles_language', i) || null,
			subtitles_translate_language: ef.getNodeParameter('subtitles_translate_language', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/youtube/video_subtitles/task_get/advanced/');
}

export async function getLiveYoutubeCommentsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_comments/live/advanced',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getYoutubeCommentsAdvanced(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/serp/youtube/video_comments/task_post',
		body: [{
			video_id: ef.getNodeParameter('video_id', i),
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			device: ef.getNodeParameter('device_desktop_only', i) || null,
			os: ef.getNodeParameter('os_desktop_only', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/serp/youtube/video_comments/task_get/advanced/');
}
