import {
	IExecuteFunctions,
	IHttpRequestOptions,
	IDataObject
} from 'n8n-workflow';

import { parseMultiOptionItems} from '../../../functions/generalFunctions';
import { dataForSeoRequest } from '../../../functions/dataForSeoRequest';

export async function generateTextFromInitialInput(ef: IExecuteFunctions, i: number) {
	const avoidWords = ef.getNodeParameter('avoid_words', i) as IDataObject;
	const parsedAvoidWords = parseMultiOptionItems(avoidWords);

	const avoidStartingWords = ef.getNodeParameter('avoid_starting_words', i) as IDataObject;
	const parsedAvoidStartingWords = parseMultiOptionItems(avoidStartingWords);

	const stopWords = ef.getNodeParameter('stop_words', i) as IDataObject;
	const parsedStopWords = parseMultiOptionItems(stopWords);

	const params: IHttpRequestOptions = {
		url: '/content_generation/generate/live',
		body: [{
			text: ef.getNodeParameter('text', i),
			max_new_tokens: ef.getNodeParameter('max_new_tokens', i) || null,
			max_tokens: ef.getNodeParameter('max_tokens', i) || null,
			creativity_index: ef.getNodeParameter('creativity_index', i) || null,
			token_repetition_penalty: ef.getNodeParameter('token_repetition_penalty', i) || null,
			top_k: ef.getNodeParameter('top_k', i) || null,
			top_p: ef.getNodeParameter('top_p', i) || null,
			temperature: ef.getNodeParameter('temperature', i) || null,
			avoid_words: parsedAvoidWords.length ? parsedAvoidWords : null,
			avoid_starting_words: parsedAvoidStartingWords.length ? parsedAvoidStartingWords : null,
			stop_words: parsedStopWords.length ? parsedStopWords : null,
			supplement_token: ef.getNodeParameter('supplement_token', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function generateTextByTopic(ef: IExecuteFunctions, i: number) {
	const subTopics = ef.getNodeParameter('sub_topics', i) as IDataObject;
	const parsedSubTopics = parseMultiOptionItems(subTopics);

	const metaKeywords = ef.getNodeParameter('meta_keywords', i) as IDataObject;
	const parsedMetaKeywords = parseMultiOptionItems(metaKeywords);

	const params: IHttpRequestOptions = {
		url: '/content_generation/generate_text/live',
		body: [{
			topic: ef.getNodeParameter('topic', i),
			word_count: ef.getNodeParameter('word_count', i),
			sub_topics: parsedSubTopics.length ? parsedSubTopics : null,
			description: ef.getNodeParameter('description', i) || null,
			meta_keywords: parsedMetaKeywords.length ? parsedMetaKeywords : null,
			creativity_index: ef.getNodeParameter('creativity_index', i) || null,
			include_conclusion: ef.getNodeParameter('include_conclusion', i),
			supplement_token: ef.getNodeParameter('supplement_token', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function generateMetaTags(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/content_generation/generate_meta_tags/live',
		body: [{
			text: ef.getNodeParameter('text', i),
			creativity_index: ef.getNodeParameter('creativity_index', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function generateSubTopics(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/content_generation/generate_sub_topics/live',
		body: [{
			topic: ef.getNodeParameter('topic', i),
			creativity_index: ef.getNodeParameter('creativity_index', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function paraphraseText(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/content_generation/paraphrase/live',
		body: [{
			text: ef.getNodeParameter('text', i),
			creativity_index: ef.getNodeParameter('creativity_index_required', i) || null
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function checkGrammar(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/content_generation/check_grammar/live',
		body: [{
			text: ef.getNodeParameter('text', i),
			language_name: ef.getNodeParameter('language_name', i)
		}]
	};

	return dataForSeoRequest(ef, params);
}

export async function getTextSummary(ef: IExecuteFunctions, i: number) {
	const params: IHttpRequestOptions = {
		url: '/content_generation/text_summary/live',
		body: [{
			text: ef.getNodeParameter('text', i),
			language_name: ef.getNodeParameter('language_name_summary', i),
			internal_list_limit: ef.getNodeParameter('internal_list_limit', i) || null,
		}]
	};

	return dataForSeoRequest(ef, params);
}
