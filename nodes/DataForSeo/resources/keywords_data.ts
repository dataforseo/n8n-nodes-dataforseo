import {
	INodeProperties,
} from 'n8n-workflow';

export const KeywordsDataOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['keywords_data'],
				},
		},
		options: [
			{
				name: 'Get Google Search Volume',
				value: 'get-google-search-volume',
				action: 'Get google search volume',
				description: 'Get search volume, CPC, and competition for keywords',
			},
			{
				name: 'Get Keywords for Keywords',
				value: 'get-keywords-for-keywords',
				action: 'Get keywords for keywords',
				description: 'Get relevant keyword suggestions for the specified terms',
			},
		],
		default: 'get-google-search-volume',
	},

	// Parameters
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
						hint: 'The maximum number of characters for each keyword: <b>80</b>. The maximum number of words for each keyword phrase: <b>10</b>. The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['get-google-search-volume'],
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_for_keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>20</b>',
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
						hint: 'The maximum number of characters for each keyword: <b>80</b>. The keywords you specify will be converted to a lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['get-keywords-for-keywords'],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: ['get-google-search-volume'],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		default: '',
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: ['get-google-search-volume'],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name_required',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: ['get-keywords-for-keywords'],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name_required',
		type: 'string',
		required: true,
		default: '',
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: ['get-keywords-for-keywords'],
			},
		},
	},
	{
		displayName: 'Include Google Search Partners?',
		name: 'search_partners',
		type: 'boolean',
		default: false,
		hint: 'If you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search. Default value: false - results are returned for Google search sites.',
		displayOptions: {
				show: {
						operation: ['get-google-search-volume', 'get-keywords-for-keywords'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Include keywords associated with adult content?',
		name: 'include_adult_keywords',
		type: 'boolean',
		default: false,
		hint: 'If set to true, adult keywords will be included in the response.',
		displayOptions: {
				show: {
						operation: ['get-google-search-volume', 'get-keywords-for-keywords'],
				},
		},
	},
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimal value: 4 years from the current date. By default, data is returned for the past 12 months.',
		displayOptions: {
			show: {
				operation: [
					'get-google-search-volume',
					'get-keywords-for-keywords',
				]
			}
		},
	},
	{
		displayName: 'Date To',
		name: 'date_to',
		type: 'dateTime',
		default: null,
		description: 'Ending date of the time range',
		hint: 'The indicated date cannot be greater than the past month, Google Ads does not return data on the current month. If you don\'t specify this field, yesterday\'s date will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-google-search-volume',
					'get-keywords-for-keywords',
				]
			}
		},
	},
	{
		displayName: 'Sort By',
		name: 'sort_by',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Relevance',
				value: 'relevance',
			},
			{
				name: 'Search Volume',
				value: 'search_volume',
			},
			{
				name: 'Competition Index',
				value: 'competition_index',
			},
			{
				name: 'Low Top Of Page Bid',
				value: 'low_top_of_page_bid',
			},
			{
				name: 'High Top Of Page Bid',
				value: 'high_top_of_page_bid',
			},
		],
		displayOptions: {
			show: {
					operation: ['get-google-search-volume', 'get-keywords-for-keywords'],
			},
		},
		default: '',
	},
];
