/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const KeywordDataOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['keyword_data'],
			},
		},
		options: [
			{
				name: 'Get AI Keyword Search Volume',
				value: 'get-ai-keyword-search-volume',
				action: 'Get AI keyword search volume',
				description: 'Provides search volume data for your target keywords, reflecting their estimated usage in AI tools',
			}
		],
		default: 'get-ai-keyword-search-volume',
	},

	// Parameters
 {
		displayName: 'Keywords Mode',
		name: 'mode',
		type: 'options',
		options: [
			{
				name: 'Manual',
				value: 'manual'
			},
			{
				name: "JSON",
				value: "json"
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-ai-keyword-search-volume'
				]
			},
		},
		required: true,
		default: 'manual',
	},
	{
		displayName: 'Target Keywords JSON Array',
		name: 'keywords_json',
		type: 'json',
		hint: 'Maximum number of keywords you can specify in this array: 1000.',
		required: true,
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-ai-keyword-search-volume'
				],
				mode: ['json']
			},
		},
	},
	{
		displayName: 'Target Keywords',
		name: 'keywords',
		type: 'fixedCollection',
		hint: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 1000.',
		placeholder: 'Add keyword',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Keyword',
				values: [
					{
						displayName: 'Keyword',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
					},
				],
			},
		],
		required: true,
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-ai-keyword-search-volume'
				],
				mode: ['manual']
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the <a href="https://docs.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages/">DataForSEO documentation</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-ai-keyword-search-volume'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		required: true,
		default: '',
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the <a href="https://docs.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages/">DataForSEO documentation</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-ai-keyword-search-volume'
				],
			},
		},
	}
];
