import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleAdsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['google_ads'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live Google Search Volume',
				value: 'get-live-google-search-volume',
				action: 'Get live google search volume',
				description: 'Get Google search volume, CPC, and competition for keywords (live)',
			},
			{
				name: 'Get Google Search Volume',
				value: 'get-google-search-volume',
				action: 'Get google search volume',
				description: 'Get Google search volume, CPC, and competition for keywords',
			},
			{
				name: 'Get Live Google Keywords for Site',
				value: 'get-live-google-keywords-for-site',
				action: 'Get live google keywords for site',
				description: 'Get a list of keywords relevant to the specified domain (live)',
			},
			{
				name: 'Get Google Keywords for Site',
				value: 'get-google-keywords-for-site',
				action: 'Get google keywords for site',
				description: 'Get a list of keywords relevant to the specified domain',
			},
			{
				name: 'Get Live Google Keywords for Keywords',
				value: 'get-live-google-keywords-for-keywords',
				action: 'Get live google keywords for keywords',
				description: 'Get relevant keyword suggestions for the specified terms (live)',
			},
			{
				name: 'Get Google Keywords for Keywords',
				value: 'get-google-keywords-for-keywords',
				action: 'Get google keywords for keywords',
				description: 'Get relevant keyword suggestions for the specified terms',
			},
			{
				name: 'Get Live Google Ad Traffic By Keywords',
				value: 'get-live-google-ad-traffic-by-keywords',
				action: 'Get live google ad traffic by keywords',
				description: 'Get a set of stats for estimating impressions, CPC, and clicks (live)',
			},
			{
				name: 'Get Google Ad Traffic By Keywords',
				value: 'get-google-ad-traffic-by-keywords',
				action: 'Get google ad traffic by keywords',
				description: 'Get a set of stats for estimating impressions, CPC, and clicks',
			}
		],
		default: 'get-google-search-volume',
	},

	// Parameters
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
					'get-live-google-search-volume',
					'get-google-search-volume',
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords',
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords'
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
						hint: 'The maximum number of characters for each keyword: <b>80</b>. The maximum number of words for each keyword phrase: <b>10</b>. The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-google-search-volume',
					'get-google-search-volume',
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
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
		hint: 'The maximum number of characters for each keyword: <b>80</b>. The maximum number of words for each keyword phrase: <b>10</b>. The keywords you specify will be converted to a lowercase format.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-search-volume',
					'get-google-search-volume',
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'The Maximum Custom Bid',
		name: 'bid',
		type: 'number',
		typeOptions: {
			numberPrecision: 2,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				],
			},
		},
		required: true,
		default: null
	},
	{
		displayName: 'Keywords Match-Type',
		name: 'match',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Exact',
				value: 'exact',
			},
			{
				name: 'Broad',
				value: 'broad',
			},
			{
				name: 'Phrase',
				value: 'phrase',
			}
		],
		default: 'exact',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				],
			},
		},
		required: true
	},
	{
		displayName: 'Domain or Page',
		name: 'target',
		type: 'string',
		description: 'The domain name of the target website or the URL of the target page',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-keywords-for-site',
							'get-google-keywords-for-site'
						],
				},
		},
		default: '',
		required: true
	},
	{
		displayName: 'Search Keywords for Site or for URL',
		name: 'target_type',
		type: 'options',
		options: [
			{
				name: 'Site',
				value: 'site',
			},
			{
				name: 'Page',
				value: 'page',
			},
		],
		default: 'page',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-keywords-for-site',
					'get-google-keywords-for-site'
				],
			},
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
				operation: [
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords'
				],
				input_mode: ['manual']
			}
		},
	},
		{
		displayName: 'Keywords JSON Array',
		name: 'keywords_for_keywords_json',
		type: 'json',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>20</b>',
		hint: 'The maximum number of characters for each keyword: <b>80</b>. The keywords you specify will be converted to a lowercase format.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Target Website',
		name: 'target_keywords_for_keywords',
		type: 'string',
		description: 'Specify a website or URL to get a list of keywords relevant to it',
		displayOptions: {
				show: {
					operation: [
						'get-google-keywords-for-keywords'
					],
				},
		},
		default: ''
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-google-search-volume',
							'get-live-google-search-volume',
							'get-live-google-keywords-for-site',
							'get-google-keywords-for-site',
							'get-live-google-keywords-for-keywords',
							'get-google-keywords-for-keywords',
							'get-live-google-ad-traffic-by-keywords',
							'get-google-ad-traffic-by-keywords'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		default: '',
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_ads/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-google-search-volume',
					'get-live-google-search-volume',
					'get-live-google-keywords-for-site',
					'get-google-keywords-for-site',
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords',
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate',
		type: 'string',
		default: '',
		hint: 'Example: 53.476225,-2.243572',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-search-volume',
					'get-google-search-volume',
					'get-live-google-keywords-for-site',
					'get-google-keywords-for-site',
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords',
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				],
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
						operation: [
							'get-google-search-volume',
							'get-live-google-search-volume',
							'get-live-google-keywords-for-site',
							'get-google-keywords-for-site',
							'get-live-google-keywords-for-keywords',
							'get-google-keywords-for-keywords',
							'get-live-google-ad-traffic-by-keywords',
							'get-google-ad-traffic-by-keywords'
						],
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
						operation: [
							'get-google-search-volume',
							'get-live-google-search-volume' ,
							'get-live-google-keywords-for-site',
							'get-google-keywords-for-site',
							'get-live-google-keywords-for-keywords',
							'get-google-keywords-for-keywords'
						],
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
					'get-live-google-search-volume',
					'get-live-google-keywords-for-site',
					'get-google-keywords-for-site',
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords'
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
					'get-live-google-search-volume',
					'get-live-google-keywords-for-site',
					'get-google-keywords-for-site',
					'get-live-google-keywords-for-keywords',
					'get-google-keywords-for-keywords'
				]
			}
		},
	},
	{
		displayName: 'Date From',
		name: 'date_from_traffic',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the forecasting time range',
		hint: 'Minimum value is tomorrow’s date.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				]
			}
		},
	},
	{
		displayName: 'Date To',
		name: 'date_to_traffic',
		type: 'dateTime',
		default: null,
		description: 'Ending date of the forecasting time range',
		hint: 'Minimum value is date_from +1 day. Maximum value is current day and month of the next year.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ad-traffic-by-keywords',
					'get-google-ad-traffic-by-keywords'
				]
			}
		},
	},
	{
		displayName: 'Forecasting Date Interval',
		name: 'date_interval',
		description: 'If you specify date_interval, you don’t need to indicate date_from and date_to',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Next Week',
				value: 'next_week',
			},
			{
				name: 'Next Month',
				value: 'next_month',
			},
			{
				name: 'Next Quarter',
				value: 'next_quarter',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-google-ad-traffic-by-keywords',
						'get-google-ad-traffic-by-keywords'
					],
			},
		},
		default: '',
	},
	{
		displayName: 'Sort By',
		name: 'sort_by_traffic',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Relevance',
				value: 'relevance',
			},
			{
				name: 'Impressions',
				value: 'impressions',
			},
			{
				name: 'CTR',
				value: 'ctr',
			},
			{
				name: 'Average CPC',
				value: 'average_cpc',
			},
			{
				name: 'Cost',
				value: 'cost',
			},
			{
				name: 'Clicks',
				value: 'clicks',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-google-ad-traffic-by-keywords',
						'get-google-ad-traffic-by-keywords'
					],
			},
		},
		default: 'relevance',
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
					operation: [
						'get-google-search-volume',
						'get-live-google-search-volume',
						'get-live-google-keywords-for-site',
						'get-google-keywords-for-site',
						'get-live-google-keywords-for-keywords',
						'get-google-keywords-for-keywords'
					],
			},
		},
		default: '',
	},
];
