/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google'],
			},
		},
		options: [
			{
				name: 'Get Keywords For Site',
				value: 'get-keywords-for-site',
				action: 'Get keywords for site',
				description: 'Get a list of keywords relevant to the target domain',
			},
			{
				name: 'Get Related Keywords',
				value: 'get-related-keywords',
				action: 'Get related keywords',
				description: 'Get keywords appearing in the "searches related to" SERP element',
			},
			{
				name: 'Get Keyword Suggestions',
				value: 'get-keyword-suggestions',
				action: 'Get keyword suggestions',
				description: 'Get search terms that are relevant to the product or service categories of all the specified keywords',
			},
			{
				name: 'Get Keyword Ideas',
				value: 'get-keyword-ideas',
				action: 'Get keyword ideas',
				description: 'Get search terms that fall into the same Google product or service category as the specified keywords',
			},
			{
				name: 'Get Keyword Difficulty',
				value: 'get-keyword-difficulty',
				action: 'Get keyword difficulty',
				description: 'Get Keyword Difficulty for the specified keywords',
			},
			{
				name: 'Get Search Intent',
				value: 'get-search-intent',
				action: 'Get search intent',
				description: 'Get search intent data for up to 1,000 keywords',
			},
			{
				name: 'Get Keyword Overview',
				value: 'get-keyword-overview',
				action: 'Get keyword overview',
				description: 'Get current cost-per-click, competition values for paid search, search volume, search intent, monthly searches, SERP and backlink information for specified keywords',
			},
			{
				name: 'Get Historical Keyword Data',
				value: 'get-historical-keyword-data',
				action: 'Get historical keyword data',
				description: 'Get Google historical keyword data for specified keywords, including search volume, cost-per-click, competition values for paid search, monthly searches, and search volume trends',
			},
			{
				name: 'Get Categories For Domain',
				value: 'get-categories-for-domain',
				action: 'Get categories for domain',
				description: 'Get Google product or service categories that include keywords the domain ranks for in search',
			},
			{
				name: 'Get Categories For Keywords',
				value: 'get-categories-for-keywords',
				action: 'Get categories for keywords',
				description: 'Get Google product and service categories related for each specified keyword',
			},
			{
				name: 'Get Keywords For Categories',
				value: 'get-keywords-for-categories',
				action: 'Get keywords for categories',
				description: 'Get a list of keywords relevant to the specified product categories',
			},
			{
				name: 'Get Domain Metrics By Categories',
				value: 'get-domain-metrics-by-categories',
				action: 'Get domain metrics by categories',
				description: 'Get dynamics of change in metrics of domains relevant to the specified product and service categories',
			},
			{
				name: 'Get Top Searches',
				value: 'get-top-searches',
				action: 'Get top searches',
				description: 'Get a set of relevant keyword data with Google Ads metrics, product categories, and Google SERP data',
			},
			{
				name: 'Get SERP Competitors',
				value: 'get-serp-competitors',
				action: 'Get serp competitors',
				description: 'Get a list of domains ranking for the keywords you specify',
			},
			{
				name: 'Get Ranked Keywords',
				value: 'get-ranked-keywords',
				action: 'Get ranked keywords',
				description: 'Get the list of keywords that any domain or webpage is ranking for',
			},
			{
				name: 'Get Competitors Domain',
				value: 'get-competitors-domain',
				action: 'Get competitors domain',
				description: 'Get a full overview of ranking and traffic data of the competitor domains from organic and paid search',
			},
			{
				name: 'Get Domain Intersection',
				value: 'get-domain-intersection',
				action: 'Get domain intersection',
				description: 'Get keywords for which both specified domains rank within the same SERP',
			},
			{
				name: 'Get Subdomains',
				value: 'get-subdomains',
				action: 'Get subdomains',
				description: 'Get the list of subdomains of the specified domain, along with the ranking distribution across organic and paid search',
			},
			{
				name: 'Get Relevant Pages',
				value: 'get-relevant-pages',
				action: 'Get relevant pages',
				description: 'Get rankings and traffic data for the web pages of the specified domain',
			},
			{
				name: 'Get Domain Rank Overview',
				value: 'get-domain-rank-overview',
				action: 'Get domain rank overview',
				description: 'Get ranking and traffic data from organic search for a domain',
			},
			{
				name: 'Get Historical SERPs',
				value: 'get-historical-serps',
				action: 'Get historical serps',
				description: 'Get Google SERPs collected within the specified time frame',
			},
			{
				name: 'Get Historical Rank Overview',
				value: 'get-historical-rank-overview',
				action: 'Get historical rank overview',
				description: 'Get historical data on rankings and traffic of the specified domain, such as domain ranking distribution in SERPs and estimated monthly traffic volume for both organic and paid results',
			},
			{
				name: 'Get Page Intersection',
				value: 'get-page-intersection',
				action: 'Get page intersection',
				description: 'Get the keywords for which specified pages rank within the same SERP',
			},
			{
				name: 'Get Bulk Traffic Estimation',
				value: 'get-bulk-traffic-estimation',
				action: 'Get bulk traffic estimation',
				description: 'Get estimated monthly traffic volumes for up to 1,000 domains, subdomains, or webpages',
			},
			{
				name: 'Get Historical Bulk Traffic Estimation',
				value: 'get-historical-bulk-traffic-estimation',
				action: 'Get historical bulk traffic estimation',
				description: 'Get historical monthly traffic volumes for up to 1,000 domains collected within the specified time range through October 2020',
			},
		],
		default: 'get-keywords-for-site',
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
					'get-keyword-ideas',
					'get-serp-competitors',
					'get-keyword-difficulty',
					'get-search-intent',
					'get-categories-for-keywords',
					'get-keyword-overview',
					'get-historical-keyword-data',
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
				]
			},
		},
		required: true,
		default: 'manual',
	},
	{
		displayName: 'Target Domains, Subdomains and Webpages',
		name: 'targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		description: 'You can set up to 1000 domains, subdomains or webpages',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Domains and subdomains should be specified without <b>https://</b> and <b>www.</b>. Pages should be specified with absolute URL, including <b>https://</b> and <b>www.</b>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'Target Domains, Subdomains and Webpages JSON Array',
		name: 'targets_json',
		type: 'json',
		required: true,
		description: 'You can set up to 1000 domains, subdomains or webpages',
		hint: 'Domains and subdomains should be specified without <b>https://</b> and <b>www.</b>. Pages should be specified with absolute URL, including <b>https://</b> and <b>www.</b>.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Target URLs of Pages',
		name: 'pages',
		placeholder: 'Add page',
		type: 'fixedCollection',
		required: true,
		description: 'You can set up to 20 pages in this object',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Page',
				values: [
					{
						displayName: 'Page',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Page should be specified with absolute URLs (including http:// or https://).',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-page-intersection'
				],
			}
		},
	},
	{
		displayName: 'URLs of Pages You Want to Exclude',
		name: 'exclude_pages',
		placeholder: 'Add page',
		type: 'fixedCollection',
		required: true,
		description: 'You can set up to 10 pages in this array',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Page',
				values: [
					{
						displayName: 'Page',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Page should be specified with absolute URLs (including http:// or https://). Use a wildcard (‘*’) character to specify the search pattern.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-page-intersection'
				],
			}
		},
	},
	{
		displayName: 'The Domain Name of the First Target Website',
		name: 'target1',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
			show: {
				operation: [
					'get-domain-intersection'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'The Domain Name of the Second Target Website',
		name: 'target2',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
			show: {
				operation: [
					'get-domain-intersection'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Domain',
		name: 'target',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
			show: {
				operation: [
					'get-keywords-for-site',
					'get-categories-for-domain',
					'get-competitors-domain',
					'get-subdomains',
					'get-relevant-pages',
					'get-domain-rank-overview',
					'get-historical-rank-overview'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Domain Name or Page URL',
		name: 'target_any',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b> The webpage URL must be specified with <b>https://</b> or <b>www.<b>.',
		displayOptions: {
			show: {
				operation: [
					'get-ranked-keywords'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-historical-serps'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Keywords',
		name: 'keywords_200',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 200.',
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
						hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-keyword-ideas',
					'get-serp-competitors'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'Keywords JSON Array',
		name: 'keywords_200_json',
		type: 'json',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 200.',
		hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
		validateType: 'array',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-keyword-ideas',
					'get-serp-competitors'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_1000',
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
						hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-keyword-difficulty',
					'get-search-intent',
					'get-categories-for-keywords'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'Keywords JSON Array',
		name: 'keywords_1000_json',
		type: 'json',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 1000.',
		hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-keyword-difficulty',
					'get-search-intent',
					'get-categories-for-keywords'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_700',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 700.',
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
						hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-keyword-overview',
					'get-historical-keyword-data'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'Keywords JSON Array',
		name: 'keywords_700_json',
		type: 'json',
		required: true,
		description: 'UTF-8 encoding. Maximum number of keywords you can specify in this array: 700.',
		hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-keyword-overview',
					'get-historical-keyword-data'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'Product and Service Categories',
		name: 'category_codes',
		placeholder: 'Add category code',
		type: 'fixedCollection',
		required: true,
		description: 'Maximum number of keywords you can specify in this array: 20',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Category Code',
				values: [
					{
						displayName: 'Category Code',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the supported categories in the <a href="https://docs.dataforseo.com/v3/dataforseo_labs/categories_list/?bash">DataForSEO documentation.</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-keywords-for-categories'
				],
			}
		},
	},
		{
		displayName: 'Product and Service Categories',
		name: 'category_codes_5',
		placeholder: 'Add category code',
		type: 'fixedCollection',
		required: true,
		description: 'Maximum number of keywords you can specify in this array: 5',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Category Code',
				values: [
					{
						displayName: 'Category Code',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the supported categories in the <a href="https://docs.dataforseo.com/v3/dataforseo_labs/categories_list/?bash">DataForSEO documentation.</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-domain-metrics-by-categories'
				],
			}
		},
	},
	{
		displayName: 'First Date of Comparison Period',
		name: 'first_date',
		type: 'dateTime',
		default: null,
		required: true,
		hint: 'The list available dates is available through the <a href="https://docs.dataforseo.com/v3/dataforseo_labs/google/available_history/live/?bash">available history endpoint</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-domain-metrics-by-categories',
				]
			}
		},
	},
	{
		displayName: 'Second Date of Comparison Period',
		name: 'second_date',
		type: 'dateTime',
		default: null,
		required: true,
		hint: 'The list available dates is available through the <a href="https://docs.dataforseo.com/v3/dataforseo_labs/google/available_history/live/?bash">available history endpoint</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-domain-metrics-by-categories',
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
		displayOptions: {
			show: {
				operation: [
					'get-historical-serps',
					'get-historical-rank-overview',
					'get-historical-bulk-traffic-estimation'
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
		hint: 'If you don’t specify this field, the today’s date will be used by default',
		displayOptions: {
			show: {
				operation: [
					'get-historical-serps',
					'get-historical-rank-overview',
					'get-historical-bulk-traffic-estimation'
				]
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'Example: United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported locations</a>',
		displayOptions: {
			show: {
				operation: [
					'get-keyword-suggestions',
					'get-ranked-keywords',
					'get-subdomains',
					'get-relevant-pages',
					'get-domain-rank-overview',
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
				],
			},
		},
		default: ''
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
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-ideas',
							'get-keyword-difficulty',
							'get-keyword-overview',
							'get-historical-keyword-data',
							'get-categories-for-domain',
							'get-keywords-for-categories',
							'get-domain-metrics-by-categories',
							'get-top-searches',
							'get-serp-competitors',
							'get-competitors-domain',
							'get-domain-intersection',
							'get-historical-serps',
							'get-historical-rank-overview',
							'get-page-intersection'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported languages</a>',
		displayOptions: {
			show: {
				operation: [
					'get-keywords-for-site',
					'get-keyword-suggestions',
					'get-keyword-ideas',
					'get-ranked-keywords',
					'get-subdomains',
					'get-relevant-pages',
					'get-domain-rank-overview',
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
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
					'get-related-keywords',
					'get-keyword-difficulty',
					'get-search-intent',
					'get-keyword-overview',
					'get-historical-keyword-data',
					'get-categories-for-domain',
					'get-keywords-for-categories',
					'get-domain-metrics-by-categories',
					'get-top-searches',
					'get-serp-competitors',
					'get-competitors-domain',
					'get-domain-intersection',
					'get-historical-serps',
					'get-historical-rank-overview',
					'get-page-intersection'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name_categories_for_keywords',
		type: 'string',
		required: true,
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/languages/?bash">Supported languages</a>',
		displayOptions: {
			show: {
				operation: [
					'get-categories-for-keywords'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Keyword Search Depth',
		name: 'depth',
		type: 'options',
		options: [
			{
				name: '0 - The Keyword Set in the Keyword Field',
				value: 0
			},
			{
				name: '1 - 8 Keywords',
				value: 1
			},
			{
				name: '2 - 72 Keywords',
				value: 2
			},
			{
				name: '3 - 584 Keywords',
				value: 3
			},
			{
				name: '4 - 4680 Keywords',
				value: 4
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-related-keywords'
				],
			},
		},
		default: 1,
	},
	{
		displayName: 'Search Mode',
		name: 'closely_variants',
		type: 'boolean',
		default: false,
		hint: 'If set to true, the results will be based on the phrase-match search algorithm. If set to false, the results will be based on the broad-match search algorithm.',
		displayOptions: {
			show: {
					operation: [
						'get-keyword-ideas'
					],
			},
		},
	},
	{
		displayName: 'Domain Intersections in SERP',
		name: 'intersections',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
					operation: [
						'get-domain-intersection'
					],
			},
		},
	},
	{
		displayName: 'Include Subcategories?',
		name: 'include_subcategories',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-categories-for-domain'
						],
				},
		},
	},
	{
		displayName: 'Include Data for The Seed Keyword?',
		name: 'include_seed_keyword',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-related-keywords',
							'get-keyword-suggestions'
						],
				},
		},
	},
	{
		displayName: 'Category Intersections',
		name: 'category_intersection',
		type: 'boolean',
		hint: 'If set to true, you will get keywords featured in all specified categories',
		default: true,
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-categories',
						],
				},
		},
	},
	{
		displayName: 'Intersection Mode for Keywords',
		name: 'intersection_mode',
		type: 'options',
		hint: 'Select Union to get results based on keywords any URL from the pages field ranks for, or select Intersect for results based on keywords all URLs rank for in the same SERP.',
		options: [
			{
				name: 'Empty',
				value: ''
			},
			{
				name: 'Union',
				value: 'union'
			},
			{
				name: 'Intersect',
				value: 'intersect'
			}
		],
		default: '',
		displayOptions: {
				show: {
						operation: [
							'get-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Include SERP Info?',
		name: 'include_serp_info',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-keyword-ideas',
							'get-keyword-overview',
							'get-keywords-for-categories',
							'get-top-searches',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Include Subdomains?',
		name: 'include_subdomains',
		type: 'boolean',
		default: true,
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-domain-metrics-by-categories',
							'get-serp-competitors',
							'get-page-intersection'
						],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Include clickstream-based metrics in the result?',
		name: 'include_clickstream_data',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-keyword-ideas',
							'get-keyword-overview',
							'get-categories-for-domain',
							'get-keywords-for-categories',
							'get-top-searches',
							'get-ranked-keywords',
							'get-competitors-domain',
							'get-domain-intersection',
							'get-subdomains',
							'get-relevant-pages',
							'get-historical-rank-overview',
							'get-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Search for the Exact Phrase?',
		name: 'exact_match',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-keyword-suggestions'
						],
				},
		},
	},
	{
		displayName: 'Ignore Synonyms',
		name: 'ignore_synonyms',
		type: 'boolean',
		default: false,
		hint: 'Ignore highly similar keywords. If set to true, only core keywords will be returned, all highly similar keywords will be excluded.',
		displayOptions: {
			show: {
				operation: [
					'get-related-keywords',
					'get-keyword-suggestions',
					'get-keyword-ideas',
					'get-keywords-for-categories',
					'get-top-searches',
					'get-ranked-keywords',
					'get-competitors-domain',
					'get-subdomains',
					'get-relevant-pages',
					'get-domain-rank-overview',
					'get-historical-rank-overview',
					'get-page-intersection',
					'get-bulk-traffic-estimation',
					'get-historical-bulk-traffic-estimation'
				],
			},
		},
	},
	{
		displayName: 'Return Data for the Core Keyword',
		name: 'replace_with_core_keyword',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-related-keywords'
				],
			},
		},
	},
	{
		displayName: 'Item Types',
		name: 'item_types',
		type: 'multiOptions',
		placeholder: 'Add Item Type',
		hint: 'Indicates the type of search results included in the response',
		options: [
			{
				name: 'Organic',
				value: 'organic'
			},
			{
				name: 'Paid',
				value: 'paid'
			},
			{
				name: 'Featured Snippet',
				value: 'featured_snippet'
			},
			{
				name: 'Local Pack',
				value: 'local_pack'
			},
		],
		displayOptions: {
			show: {
					operation: [
						'get-categories-for-domain',
						'get-domain-metrics-by-categories',
						'get-serp-competitors',
						'get-ranked-keywords',
						'get-competitors-domain',
						'get-domain-intersection',
						'get-subdomains',
						'get-relevant-pages',
						'get-page-intersection',
						'get-bulk-traffic-estimation',
						'get-historical-bulk-traffic-estimation'
					],
			},
		},
		default: [],
	},
	{
		displayName: 'Number of Additional Domain Categories',
		name: 'top_categories_count',
		type: 'number',
		typeOptions: {
			maxValue: 5,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-domain-metrics-by-categories'
						],
				},
		},
		default: null,
	},
	{
		displayName: 'Minimum Current Organic ETV of the Domain',
		name: 'etv_min',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-domain-metrics-by-categories'
						],
				},
		},
		default: null,
	},
	{
		displayName: 'Maximum Current Organic ETV of the Domain',
		name: 'etv_max',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-domain-metrics-by-categories'
						],
				},
		},
		default: null,
	},
	{
		displayName: 'Correlate Data with Previously Obtained Datasets?',
		name: 'correlate',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				operation: [
					'get-domain-metrics-by-categories',
					'get-historical-rank-overview'
				],
			},
		},
	},
	{
		displayName: 'Return Rankings Distribution by Rank_absolute?',
		name: 'load_rank_absolute',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				operation: [
					'get-ranked-keywords'
				],
			},
		},
	},
	{
		displayName: 'Data Collection Mode',
		name: 'historical_serp_mode',
		type: 'options',
		placeholder: 'Add Item',
		options: [
			{
				name: 'All',
				value: 'all'
			},
			{
				name: 'Live',
				value: 'live'
			},
			{
				name: 'Lost',
				value: 'lost'
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-ranked-keywords',
						'get-subdomains',
						'get-relevant-pages'
					],
			},
		},
		default: 'live',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		hint: 'You can find the supported filters in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/filters/?bash">Supported fields</a>',
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-keyword-ideas',
							'get-categories-for-domain',
							'get-keywords-for-categories',
							'get-domain-metrics-by-categories',
							'get-top-searches',
							'get-serp-competitors',
							'get-ranked-keywords',
							'get-competitors-domain',
							'get-domain-intersection',
							'get-subdomains',
							'get-relevant-pages',
							'get-page-intersection'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Sort',
		name: 'order_by',
		type: 'fixedCollection',
		placeholder: 'Add Sorting',
		default: [],
		description: 'You can set no more than <b>three</b> sorting rules',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Sort',
				values: [
					{
						displayName: 'Field Name',
						name: 'fieldName',
						type: 'string',
						required: true,
						hint: 'You can find the supported fields in the <a href="https://docs.dataforseo.com/v3/dataforseo_labs/filters/">DataForSEO documentation</a>',
						default: '',
					},
					{
						displayName: 'Sort Field',
						name: 'direction',
						type: 'options',
						required: true,
						default: 'asc',
						options: [
							{
								name: 'Ascending',
								value: 'asc'
							},
							{
								name: 'Descending',
								value: 'desc'
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-keywords-for-site',
					'get-related-keywords',
					'get-keyword-suggestions',
					'get-keyword-ideas',
					'get-categories-for-domain',
					'get-keywords-for-categories',
					'get-domain-metrics-by-categories',
					'get-top-searches',
					'get-serp-competitors',
					'get-ranked-keywords',
					'get-competitors-domain',
					'get-domain-intersection',
					'get-subdomains',
					'get-relevant-pages',
					'get-page-intersection'
				],
			},
		},
	},
	// eslint-disable-next-line n8n-nodes-base/node-param-description-missing-from-limit
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit',
		type: 'number',
		typeOptions: {
			// eslint-disable-next-line n8n-nodes-base/node-param-type-options-max-value-present
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-categories-for-domain',
							'get-keywords-for-categories',
							'get-domain-metrics-by-categories',
							'get-serp-competitors',
							'get-ranked-keywords',
							'get-competitors-domain',
							'get-domain-intersection',
							'get-subdomains',
							'get-relevant-pages',
							'get-domain-rank-overview',
							'get-page-intersection'
						],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
		default: 100,
	},
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit_ideas',
		type: 'number',
		typeOptions: {
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-keyword-ideas'
						],
				},
		},
		default: 700,
	},
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit_top_searches',
		type: 'number',
		typeOptions: {
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-top-searches'
						],
				},
		},
		default: 1000,
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-keywords-for-site',
							'get-related-keywords',
							'get-keyword-suggestions',
							'get-keyword-ideas',
							'get-categories-for-domain',
							'get-keywords-for-categories',
							'get-domain-metrics-by-categories',
							'get-top-searches',
							'get-serp-competitors',
							'get-ranked-keywords',
							'get-competitors-domain',
							'get-domain-intersection',
							'get-subdomains',
							'get-relevant-pages',
							'get-domain-rank-overview',
							'get-page-intersection'
						],
				},
		},
		default: 0,
	},
	{
		displayName: 'Maximum Rank up to Which Competitors Will Be Considered',
		name: 'max_rank_group',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-competitors-domain'
						],
				},
		},
		default: 100,
	},
	{
		displayName: 'Exclude World’s Largest Websites?',
		name: 'exclude_top_domains',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-competitors-domain'
				],
			},
		},
	},
	{
		displayName: 'Additional Domains for Improving Results Accuracy',
		name: 'intersecting_domains',
		placeholder: 'Add domain',
		type: 'fixedCollection',
		description: 'You can specify up to 20 domains in this array',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Domain',
				values: [
					{
						displayName: 'Domain',
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
					'get-competitors-domain'
				],
			}
		},
	},
];
