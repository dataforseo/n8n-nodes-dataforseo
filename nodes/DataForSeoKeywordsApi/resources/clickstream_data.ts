import {
	INodeProperties,
} from 'n8n-workflow';

export const ClickstreamDataOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['clickstream_data'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live DataForSEO Search Volume',
				value: 'get-live-dataforseo-search-volume',
				action: 'Get live dataforseo search volume',
				description: 'Get search volume normalized with Bing search volume data or clickstream data for up to 1000 keywords in a single request (live)',
			},
			{
				name: 'Get Live Clickstream Global Search Volume',
				value: 'get-live-clickstream-global-search-volume',
				action: 'Get live clickstream global search volume',
				description: 'Get clickstream-based search volume data for up to 1000 keywords in a single request (live)',
			},
			{
				name: 'Get Live Bulk Clickstream Search Volume',
				value: 'get-live-bulk-clickstream-search-volume',
				action: 'Get live bulk clickstream search volume',
				description: 'Get clickstream-based search volume data and historical search volume values for up to 1000 keywords in a single request (live)',
			}
		],
		default: 'get-live-dataforseo-search-volume',
	},

	{
		displayName: 'Input Mode',
		name: 'input_mode',
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
					'get-live-dataforseo-search-volume',
					'get-live-clickstream-global-search-volume',
					'get-live-bulk-clickstream-search-volume'
				]
			},
		},
		required: true,
		default: 'manual',
	},
	{
		displayName: 'Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>1000</b>',
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
						hint: 'The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-search-volume',
					'get-live-clickstream-global-search-volume',
					'get-live-bulk-clickstream-search-volume'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'Keywords JSON Array',
		name: 'keywords_json',
		type: 'json',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>1000</b>',
		hint: 'The keywords you specify will be converted to a lowercase format.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-search-volume',
					'get-live-clickstream-global-search-volume',
					'get-live-bulk-clickstream-search-volume'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-dataforseo-search-volume',
							'get-live-bulk-clickstream-search-volume'
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
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-search-volume'
				],
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Use Clickstream Data to Provide Results?',
		name: 'use_clickstream',
		type: 'boolean',
		default: true,
		hint: 'If set to true, you will get DataForSEO search volume values based on clickstream data. If set to false, Bing search volume data will be used to calculate DataForSEO search volume.',
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-search-volume'
				],
			},
		},
	},
];
