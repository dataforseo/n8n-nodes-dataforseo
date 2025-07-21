import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions
} from 'n8n-workflow';

import { dataForSeoPOSTGETRequest, dataForSeoRequest } from '../../../functions/dataForSeoRequest';
import { parseMultiOptionItems } from '../../../functions/generalFunctions';

export async function getGoogleBusinessInfoLive(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/my_business_info/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleBusinessInfo(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/my_business_info/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			priority:  ef.getNodeParameter('priority', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/google/my_business_info/task_get/');
}

export async function getGoogleBusinessUpdates(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/my_business_updates/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			priority:  ef.getNodeParameter('priority', i) || null,
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/google/my_business_updates/task_get/');
}

export async function getGoogleHotelSearchesLive(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const stars = ef.getNodeParameter('stars', i) as IDataObject;
	const parsedStars = parseMultiOptionItems(stars);

	const amenities = ef.getNodeParameter('amenities', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_searches/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			depth:  ef.getNodeParameter('depth_hotels', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null,
			stars:  parsedStars.length ? parsedStars : null,
			min_rating:  ef.getNodeParameter('min_rating', i) || null,
			sort_by:  ef.getNodeParameter('sort_by', i) || null,
			min_price:  ef.getNodeParameter('min_price', i) || null,
			max_price:  ef.getNodeParameter('max_price', i) || null,
			free_cancellation:  ef.getNodeParameter('free_cancellation', i),
			is_vacation_rentals:  ef.getNodeParameter('is_vacation_rentals', i),
			amenities: amenities.length ? amenities : null
		}]
	};

	return dataForSeoRequest(ef, params)
}

export async function getGoogleHotelSearches(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const stars = ef.getNodeParameter('stars', i) as IDataObject;
	const parsedStars = parseMultiOptionItems(stars);

	const amenities = ef.getNodeParameter('amenities', i) as Array<String>;

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_searches/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i),
			depth:  ef.getNodeParameter('depth_hotels', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null,
			stars:  parsedStars.length ? parsedStars : null,
			min_rating:  ef.getNodeParameter('min_rating', i) || null,
			sort_by:  ef.getNodeParameter('sort_by', i) || null,
			min_price:  ef.getNodeParameter('min_price', i) || null,
			max_price:  ef.getNodeParameter('max_price', i) || null,
			free_cancellation:  ef.getNodeParameter('free_cancellation', i),
			is_vacation_rentals:  ef.getNodeParameter('is_vacation_rentals', i),
			amenities: amenities.length ? amenities : null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/google/hotel_searches/task_get/');
}

export async function getLiveGoogleHotelInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_info/live/advanced',
		body: [{
			hotel_identifier: ef.getNodeParameter('hotel_identifier', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null,
			load_prices_by_dates:  ef.getNodeParameter('load_prices_by_dates', i),
			prices_start_date:  ef.getNodeParameter('prices_start_date', i) || null,
			prices_end_date:  ef.getNodeParameter('prices_end_date', i) || null,
			prices_date_range:  ef.getNodeParameter('prices_date_range', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getLiveGoogleHotelInfoHtml(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_info/live/html',
		body: [{
			hotel_identifier: ef.getNodeParameter('hotel_identifier', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getGoogleHotelInfoAdvanced(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_info/task_post',
		body: [{
			hotel_identifier: ef.getNodeParameter('hotel_identifier', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null,
			load_prices_by_dates:  ef.getNodeParameter('load_prices_by_dates', i),
			prices_start_date:  ef.getNodeParameter('prices_start_date', i) || null,
			prices_end_date:  ef.getNodeParameter('prices_end_date', i) || null,
			prices_date_range:  ef.getNodeParameter('prices_date_range', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/google/hotel_info/task_get/advanced/');
}

export async function getGoogleHotelInfoHtml(ef: IExecuteFunctions, i: number) {
	const children = ef.getNodeParameter('children', i) as IDataObject;
	const parsedChildren = parseMultiOptionItems(children);

	const params: IHttpRequestOptions = {
		url: '/business_data/google/hotel_info/task_post',
		body: [{
			hotel_identifier: ef.getNodeParameter('hotel_identifier', i),
			location_name:  ef.getNodeParameter('location_name', i),
			language_name:  ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			check_in:  ef.getNodeParameter('check_in', i) || null,
			check_out:  ef.getNodeParameter('check_out', i) || null,
			currency:  ef.getNodeParameter('currency', i) || null,
			adults:  ef.getNodeParameter('adults', i) || null,
			children:  parsedChildren.length ? parsedChildren : null,
			load_prices_by_dates:  ef.getNodeParameter('load_prices_by_dates', i),
			prices_start_date:  ef.getNodeParameter('prices_start_date', i) || null,
			prices_end_date:  ef.getNodeParameter('prices_end_date', i) || null,
			prices_date_range:  ef.getNodeParameter('prices_date_range', i) || null
		}]
	};

	return dataForSeoPOSTGETRequest(ef, params, '/business_data/google/hotel_info/task_get/html/');
}

export async function getGoogleReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/reviews/task_post',
		body: [{
			keyword: ef.getNodeParameter('search_by', i) == 'keyword' ?  ef.getNodeParameter('keyword', i) : null,
			cid: ef.getNodeParameter('search_by', i) == 'cid' ?  ef.getNodeParameter('keyword', i) : null,
			place_id: ef.getNodeParameter('search_by', i) == 'place_id' ?  ef.getNodeParameter('keyword', i) : null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			depth: ef.getNodeParameter('depth', i) || null,
			sort_by: ef.getNodeParameter('sort_by_reviews', i) || null,
		}]
	};

	return  dataForSeoPOSTGETRequest(ef, params, '/business_data/google/reviews/task_get/');
}

export async function getExtendedGoogleReviews(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/extended_reviews/task_post',
		body: [{
			keyword: ef.getNodeParameter('search_by', i) == 'keyword' ?  ef.getNodeParameter('keyword', i) : null,
			cid: ef.getNodeParameter('search_by', i) == 'cid' ?  ef.getNodeParameter('keyword', i) : null,
			place_id: ef.getNodeParameter('search_by', i) == 'place_id' ?  ef.getNodeParameter('keyword', i) : null,
			priority: ef.getNodeParameter('priority', i) || null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			depth: ef.getNodeParameter('depth_extended_reviews', i) || null
		}]
	};

	return  dataForSeoPOSTGETRequest(ef, params, '/business_data/google/extended_reviews/task_get/');
}

export async function getBusinessQuestionsAndAnswers(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/questions_and_answers/task_post',
		body: [{
			keyword: ef.getNodeParameter('keyword', i) ||  null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			priority: ef.getNodeParameter('priority', i) || null,
			depth: ef.getNodeParameter('depth_questions', i) || null
		}]
	};

	return  dataForSeoPOSTGETRequest(ef, params, '/business_data/google/questions_and_answers/task_get/');
}

export async function getLiveBusinessQuestionsAndAnswers(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/business_data/google/questions_and_answers/live',
		body: [{
			keyword: ef.getNodeParameter('keyword', i) ||  null,
			location_name: ef.getNodeParameter('location_name', i),
			language_name: ef.getNodeParameter('language_name', i),
			location_coordinate:  ef.getNodeParameter('location_coordinate', i) || null,
			depth: ef.getNodeParameter('depth_questions', i) || null
		}]
	};

	return  dataForSeoRequest(ef, params);
}
