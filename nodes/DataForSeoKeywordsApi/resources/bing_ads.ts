import {
	INodeProperties,
} from 'n8n-workflow';

export const BingAdsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['bing_ads'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live Bing Search Volume',
				value: 'get-live-bing-search-volume',
				action: 'Get live bing search volume',
				description: 'Get Bing search volume data for the last month, search volume trend for up to 24 past months, current cost-per-click and competition values for paid search (live)',
			},
			{
				name: 'Get Bing Search Volume',
				value: 'get-bing-search-volume',
				action: 'Get bing search volume',
				description: 'Get Bing search volume data for the last month, search volume trend for up to 24 past months, current cost-per-click and competition values for paid search',
			},
			{
				name: 'Get Live Bing Search Volume History',
				value: 'get-live-bing-search-volume-history',
				action: 'Get live bing search volume history',
				description: 'Get Bing historical search volume data for up to 1000 keywords in one request (live)',
			},
			{
				name: 'Get Bing Search Volume History',
				value: 'get-bing-search-volume-history',
				action: 'Get bing search volume history',
				description: 'Get Bing historical search volume data for up to 1000 keywords in one request',
			},
			{
				name: 'Get Live Bing Keywords for Site',
				value: 'get-live-bing-keywords-for-site',
				action: 'Get live bing keywords for site',
				description: 'Get a list of keywords relevant to the specified website along with their search volume for the last month, search volume trend for up to 24 past months, current cost-per-click and competition level for paid search (live)',
			},
			{
				name: 'Get Bing Keywords for Site',
				value: 'get-bing-keywords-for-site',
				action: 'Get bing keywords for site',
				description: 'Get a list of keywords relevant to the specified website along with their search volume for the last month, search volume trend for up to 24 past months, current cost-per-click and competition level for paid search',
			},
			{
				name: 'Get Live Bing Keywords for Keywords',
				value: 'get-live-bing-keywords-for-keywords',
				action: 'Get live bing keywords for keywords',
				description: 'Get relevant keyword suggestions for the specified terms (live)',
			},
			{
				name: 'Get Bing Keywords for Keywords',
				value: 'get-bing-keywords-for-keywords',
				action: 'Get bing keywords for keywords',
				description: 'Get relevant keyword suggestions for the specified terms',
			},
			{
				name: 'Get Live Bing Keyword Performance',
				value: 'get-live-bing-keyword-performance',
				action: 'Get live bing keyword performance',
				description: 'Get a set of keyword performance stats for a group of keywords depending on the specified match type, location and language parameters (live)',
			},
			{
				name: 'Get Bing Keyword Performance',
				value: 'get-bing-keyword-performance',
				action: 'Get bing keyword performance',
				description: 'Get a set of keyword performance stats for a group of keywords depending on the specified match type, location and language parameters',
			},
			{
				name: 'Get Live Bing Keyword Suggestions for URL',
				value: 'get-live-bing-keyword-suggestions-for-url',
				action: 'Get live bing keyword suggestions for url',
				description: 'Get keyword suggestions based on the content of a given webpage URL (live)',
			},
			{
				name: 'Get Bing Keyword Suggestions for URL',
				value: 'get-bing-keyword-suggestions-for-url',
				action: 'Get bing keyword suggestions for url',
				description: 'Get keyword suggestions based on the content of a given webpage URL',
			},
			{
				name: 'Get Live Bing Ads Audience Estimation',
				value: 'get-live-bing-ads-audience-estimation',
				action: 'Get live bing ads audience estimation',
				description: 'Get estimated audience size for an ad campaign based on specified targeting criteria (live)',
			},
			{
				name: 'Get Bing Ads Audience Estimation',
				value: 'get-bing-ads-audience-estimation',
				action: 'Get bing ads audience estimation',
				description: 'Get estimated audience size for an ad campaign based on specified targeting criteria',
			}
		],
		default: 'get-live-bing-search-volume',
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
						hint: 'The maximum number of characters for each keyword: <b>100</b>.The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
				],
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_for_keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>200</b>',
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
						hint: 'The maximum number of characters for each keyword: <b>100</b>.The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords'
				],
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_performance',
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
						hint: 'The maximum number of characters for each keyword: <b>80</b>. The maximum number of words for each keyword phrase: 10. The keywords you specify will be converted to a lowercase format.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keyword-performance',
					'get-bing-keyword-performance'
				],
			}
		},
	},
	{
		displayName: 'Domain or URL',
		name: 'target',
		type: 'string',
		description: 'The URL of the webpage or the domain to scan for possible keywords',
		displayOptions: {
				show: {
					operation: [
						'get-live-bing-keywords-for-site',
						'get-bing-keywords-for-site'
					],
				},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Target URL of the Webpage to Scan for Possible Keywords',
		name: 'target_for_url',
		type: 'string',
		description: 'Maximum length: 2000 characters',
		displayOptions: {
				show: {
					operation: [
						'get-live-bing-keyword-suggestions-for-url',
						'get-bing-keyword-suggestions-for-url'
					],
				},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Location',
		name: 'location_name_sv',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-bing-search-volume-history',
							'get-bing-search-volume-history',
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name_sv',
		type: 'string',
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history'
				],
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-bing-keywords-for-site',
							'get-bing-keywords-for-site',
							'get-live-bing-ads-audience-estimation',
							'get-bing-ads-audience-estimation',
							'get-live-bing-search-volume',
							'get-bing-search-volume',
							'get-live-bing-keywords-for-keywords',
							'get-bing-keywords-for-keywords'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'options',
		default: 'English',
		options: [
			{
				name: 'English',
				value: 'English'
			},
			{
				name: 'French',
				value: 'French'
			},
			{
				name: 'German',
				value: 'German'
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-search-volume',
					'get-bing-search-volume',
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
				],
			},
		},
	},
		{
		displayName: 'Location',
		name: 'location_name_performance',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-bing-keyword-performance',
							'get-bing-keyword-performance'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name_performance',
		type: 'string',
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keyword-performance',
					'get-bing-keyword-performance'
				],
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Language',
		name: 'language_name_for_url',
		type: 'string',
		description: 'Full name of the search engine language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/keyword_suggestions_for_url/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keyword-suggestions-for-url',
					'get-bing-keyword-suggestions-for-url'
				],
			},
		},
		required: true,
		default: ''
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
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history',
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-keyword-performance',
					'get-bing-keyword-performance',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate_audience',
		type: 'string',
		default: '',
		hint: 'Parameter should be specified in the “latitude,longitude,radius (in km)” format. Example: 53.476225,-2.243572,100',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			},
		},
	},
	{
		displayName: 'Keywords Negative Array',
		name: 'keywords_negative',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		hint: 'These keywords will be ignored in the results array. You can specify a maximum of 200 terms that you want to exclude from the results. The specified keywords will be converted to lowercase format.',
		default: null,
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
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
				],
			}
		},
	},
	{
		displayName: 'Device Types',
		name: 'device_sv',
		placeholder: 'Add device type',
		type: 'fixedCollection',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Device Type',
				values: [
					{
						displayName: 'Device Type',
						name: 'value',
						type: 'options',
						// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
						options: [
							{
								name: 'Mobile',
								value: 'mobile'
							},
							{
								name: 'Desktop',
								value: 'desktop'
							},
							{
								name: 'Tablet',
								value: 'tablet'
							},
							{
								name: 'Non Smartphones',
								value: 'non_smartphones'
							}
						],
						default: 'mobile',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history'
				],
			},
		},
	},
	{
		displayName: 'Device Type',
		name: 'device',
		type: 'options',
		default: 'all',
		options: [
			{
				name: 'All',
				value: 'all'
			},
			{
				name: 'Mobile',
				value: 'mobile'
			},
			{
				name: 'Desktop',
				value: 'desktop'
			},
			{
				name: 'Tablet',
				value: 'tablet'
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-keyword-performance',
					'get-bing-keyword-performance',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
				],
			},
		},
	},
	{
		displayName: 'Keywords Match Type',
		name: 'match',
		type: 'options',
		default: 'aggregate',
		options: [
			{
				name: 'Aggregate',
				value: 'aggregate'
			},
			{
				name: 'Broad',
				value: 'broad'
			},
			{
				name: 'Phrase',
				value: 'phrase'
			},
			{
				name: 'Exact',
				value: 'exact'
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keyword-performance',
					'get-bing-keyword-performance'
				],
			},
		},
	},
	{
		displayName: 'Aggregates the Returned Data to a Certain Time Period',
		name: 'period',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Data up to Past 24 Months',
				value: 'monthly',
			},
			{
				name: 'Data up to Past 15 Weeks',
				value: 'weekly',
			},
			{
				name: 'Data up to Past 45 Days',
				value: 'daily',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-bing-search-volume-history',
						'get-bing-search-volume-history'
					],
			},
		},
		default: '',
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
				name: 'Search Volume',
				value: 'search_volume',
			},
			{
				name: 'CPC',
				value: 'cpc',
			},
			{
				name: 'Competition',
				value: 'competition',
			},
			{
				name: 'Relevance',
				value: 'relevance',
			},
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-bing-keywords-for-site',
						'get-bing-keywords-for-site',
						'get-live-bing-keywords-for-keywords',
						'get-bing-keywords-for-keywords',
						'get-live-bing-search-volume',
						'get-bing-search-volume'
					],
			},
		},
		default: '',
	},
	{
		displayName: 'Date From',
		name: 'date_from_sv',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimal value: two years back from today’s date. Maximum value: one day from today’s date.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history'
				]
			}
		},
	},
	{
		displayName: 'Date To',
		name: 'date_to_sv',
		type: 'dateTime',
		default: null,
		description: 'Ending date of the time range',
		hint: 'Minimum value: two years back from today’s date. Maximum value: one day from today’s date.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-search-volume-history',
					'get-bing-search-volume-history'
				]
			}
		},
	},
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'If you don’t specify this field, data will be provided for the last 12 months.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
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
		hint: 'If you don’t specify this field, data will be provided for the last 12 months. Minimum value: two years back from today’s date. Maximum value: one month from today’s date.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
				]
			}
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
					'get-live-bing-keywords-for-site',
					'get-bing-keywords-for-site',
					'get-live-bing-keywords-for-keywords',
					'get-bing-keywords-for-keywords',
					'get-live-bing-search-volume',
					'get-bing-search-volume'
				],
			},
		},
	},
	{
		displayName: 'Determines Whether the Results Exclude Brand Keywords?',
		name: 'exclude_brands',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-keyword-suggestions-for-url',
					'get-bing-keyword-suggestions-for-url'
				],
			},
		},
	},
	{
		displayName: 'Age Ranges for Targeting',
		name: 'age',
		placeholder: 'Add age',
		type: 'fixedCollection',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Age',
				values: [
					{
						displayName: 'Age',
						name: 'value',
						type: 'options',
						// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
						options: [
							{
								name: '18 - 24',
								value: 'eighteen_to_twenty_four'
							},
							{
								name: '50 - 64',
								value: 'fifty_to_sixty_four'
							},
							{
								name: '65+',
								value: 'sixty_five_and_above'
							},
							{
								name: '13 - 17',
								value: 'thirteen_to_seventeen'
							},
							{
								name: '35 - 49',
								value: 'thirty_five_to_forty_nine'
							},
							{
								name: '25 - 34',
								value: 'twenty_five_to_thirty_four'
							},
							{
								name: 'Unknown',
								value: 'unknown'
							},
							{
								name: '0 - 12',
								value: 'zero_to_twelve'
							}
						],
						default: 'eighteen_to_twenty_four',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			},
		},
	},
	{
		displayName: 'Desired Bid Aetting Value in USD',
		name: 'bid',
		type: 'number',
		typeOptions: {
			numberPrecision: 2,
			maxValue: 1000
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Daily Campaign Budge Value in USD',
		name: 'daily_budget',
		type: 'number',
		typeOptions: {
			numberPrecision: 2,
			maxValue: 10000
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Gender to Target',
		name: 'gender',
		placeholder: 'Add gender',
		type: 'fixedCollection',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Gender',
				values: [
					{
						displayName: 'Gender',
						name: 'value',
						type: 'options',
						// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
						options: [
							{
								name: 'Male',
								value: 'male'
							},
							{
								name: 'Female',
								value: 'female'
							},
							{
								name: 'Unknown',
								value: 'unknown'
							}
						],
						default: 'unknown',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			},
		},
	},
	{
		displayName: 'Industry of LinkedIn Profile Targeting',
		name: 'industry',
		placeholder: 'Add Industry',
		type: 'fixedCollection',
		required: true,
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Industry',
				values: [
					{
						displayName: 'Industry',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the supported industries in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/audience_estimation/industries/?bash">Supported industries</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			}
		},
	},
	{
		displayName: 'Job Function of LinkedIn Profile Targeting',
		name: 'job_function',
		placeholder: 'Add function',
		type: 'fixedCollection',
		required: true,
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Job Function',
				values: [
					{
						displayName: 'Job Function',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the supported job functions in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/bing/audience_estimation/job_functions/?bash">Supported job functions</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-ads-audience-estimation',
					'get-bing-ads-audience-estimation'
				],
			}
		},
	},
];
