import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleTrendsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['google_trends'],
				},
		},
		options: [
			{
				name: 'Get Live Google Trends Explore',
				value: 'get-live-google-trends-explore',
				action: 'Get live google trends explore',
				description: 'Get keyword popularity data from the ‘Explore’ feature of Google Trends (live)',
			},
			{
				name: 'Get Google Trends Explore',
				value: 'get-google-trends-explore',
				action: 'Get google trends explore',
				description: 'Get keyword popularity data from the ‘Explore’ feature of Google Trends',
			}
		],
		default: 'get-live-google-trends-explore',
	},

	{
		displayName: 'Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>5</b>',
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
						hint: 'The maximum number of characters for each keyword: <b>100</b>.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-google-trends-explore',
					'get-google-trends-explore'
				],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_trends/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-trends-explore',
							'get-google-trends-explore'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_trends/languages/?bash">Supported languages</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-trends-explore',
							'get-google-trends-explore'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Google Trends Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Froogle',
				value: 'froogle',
			},
			{
				name: 'Images',
				value: 'images',
			},
			{
				name: 'News',
				value: 'news',
			},
			{
				name: 'Web',
				value: 'web',
			},
			{
				name: 'Youtube',
				value: 'youtube',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-google-trends-explore',
						'get-google-trends-explore'
					],
			},
		},
		default: 'web',
	},
	{
		displayName: 'Google Trends Search Category',
		name: 'category_code',
		type: 'string',
		hint: 'You can find the supported categories in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/google_trends/categories/?bash">Supported categories</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-trends-explore',
							'get-google-trends-explore'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimal value for the web type: 2004-01-01. Minimal value for other types: 2008-01-01',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-trends-explore',
					'get-google-trends-explore'
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
		hint: 'If you don’t specify this field, the today’s date will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-trends-explore',
					'get-google-trends-explore'
				]
			}
		},
	},
	{
		displayName: 'Preset Time Ranges',
		name: 'time_range',
		type: 'options',
		options: [
			{
				name: '',
				value: '',
			},
			{
				name: '01 - Past Hour',
				value: 'past_hour',
			},
			{
				name: '02 - Past 4 Hours',
				value: 'past_4_hours',
			},
			{
				name: '03 - Past Day',
				value: 'past_day',
			},
			{
				name: '04 - Past 7 Days',
				value: 'past_7_days',
			},
			{
				name: '05 - Past 30 Days',
				value: 'past_30_days',
			},
			{
				name: '06 - Past 90 Days',
				value: 'past_90_days',
			},
			{
				name: '07 - Past 12 Months',
				value: 'past_12_months',
			},
			{
				name: '08 - Past 5 Years',
				value: 'past_5_years',
			},
			{
				name: '09 - 2004 - Present (Web Only)',
				value: '2004_present',
			},
			{
				name: '10 - 2008 - Present (for News, Youtube, Images, Froogle)',
				value: '2008_present',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-google-trends-explore',
						'get-google-trends-explore'
					],
			},
		},
		default: '',
	},
	{
		displayName: 'Types of Items Returned',
		name: 'item_types',
		placeholder: 'Add item type',
		type: 'fixedCollection',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Item Type',
				values: [
					{
						displayName: 'Item Type',
						name: 'value',
						type: 'options',
						hint: 'To obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword in the keywords field.',
						options: [
							{
								name: 'Google Trends Graph',
								value: 'google_trends_graph'
							},
							{
								name: 'Google Trends Map',
								value: 'google_trends_map'
							},
							{
								name: 'Google Trends Topics List',
								value: 'google_trends_topics_list'
							},
							{
								name: 'Google Trends Queries List',
								value: 'google_trends_queries_list'
							}
						],
						default: 'google_trends_graph',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-google-trends-explore',
					'get-google-trends-explore'
				],
			},
		},
	},
];
