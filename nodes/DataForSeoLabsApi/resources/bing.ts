/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const BingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bing'],
			},
		},
		options: [
			{
				name: 'Get Bulk Keyword Difficulty',
				value: 'get-bing-bulk-keyword-difficulty',
				action: 'Get bulk keyword difficulty',
				description: 'Get the Keyword Difficulty metric for a maximum of 1,000 keywords',
			}
		],
		default: 'get-bing-bulk-keyword-difficulty',
	},

	// Parameters
	{
		displayName: 'Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 1000.',
		default: [],
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
						hint: 'The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-bing-bulk-keyword-difficulty'
				],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name_required',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: [
							'get-bing-bulk-keyword-difficulty'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name_required',
		type: 'string',
		required: true,
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported languages</a>',
		displayOptions: {
			show: {
				operation: [
					'get-bing-bulk-keyword-difficulty'
				],
			},
		},
		default: '',
	},
];
