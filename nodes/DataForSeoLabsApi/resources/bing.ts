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
			},
			{
				name: 'Get Bulk Traffic Estimation',
				value: 'get-bing-bulk-traffic-estimation',
				action: 'Get bulk traffic estimation',
				description: 'Get estimated monthly traffic volumes for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Competitors Domain',
				value: 'get-bing-competitors-domain',
				action: 'Get competitor domain',
				description: 'Get a full overview of ranking and traffic data of the competitor domains from organic and paid search',
			},
			{
				name: 'Get Domain Intersection',
				value: 'get-bing-domain-intersection',
				action: 'Get domain intersection',
				description: 'Get the keywords for which both specified domains rank within the same SERP',
			},
			{
				name: 'Get Domain Rank Overview',
				value: 'get-bing-domain-rank-overview',
				action: 'Get domain rank overview',
				description: 'Get ranking and traffic data from Bing’s organic and paid search for the specified domain',
			},
			{
				name: 'Get Page Intersection',
				value: 'get-bing-page-intersection',
				action: 'Get page intersection',
				description: 'Get keywords for which specified pages rank within the same Bing SERP',
			},
			{
				name: 'Get Related Keywords',
				value: 'get-bing-related-keywords',
				action: 'Get related keywords',
				description: 'Get keywords appearing in the “searches related to” SERP element',
			},
			{
				name: 'Get Relevant Pages',
				value: 'get-bing-relevant-pages',
				action: 'Get relevant pages',
				description: 'Get rankings and traffic data for the web pages of the specified domain',
			},
			{
				name: 'Get SERP Competitors',
				value: 'get-bing-serp-competitors',
				action: 'Get SERP competitors',
				description: 'Get a list of domain rankings for the keywords you specify',
			},
			{
				name: 'Get Subdomains',
				value: 'get-bing-subdomains',
				action: 'Get subdomains',
				description: 'Get a list of subdomains of the specified domain, along with the ranking distribution across organic and paid search',
			}
		],
		default: 'get-bing-bulk-keyword-difficulty',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-bing-related-keywords'
						],
				},
		},
		default: '',
	},
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
						hint: 'The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-bing-serp-competitors'
				],
			}
		},
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
					'get-bing-bulk-traffic-estimation'
				],
			}
		},
	},
	{
		displayName: 'Domain',
		name: 'target',
		type: 'string',
		required: true,
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>.',
		displayOptions: {
				show: {
						operation: [
							'get-bing-competitors-domain',
							'get-bing-domain-rank-overview',
							'get-bing-relevant-pages',
							'get-bing-subdomains'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Domain Name of the First Target Website',
		name: 'target1',
		type: 'string',
		required: true,
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>.',
		displayOptions: {
				show: {
						operation: [
							'get-bing-domain-intersection'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Domain Name of the Second Target Website',
		name: 'target2',
		type: 'string',
		required: true,
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>.',
		displayOptions: {
				show: {
						operation: [
							'get-bing-domain-intersection'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Domain Name or Page URL',
		name: 'target_any',
		type: 'string',
		required: true,
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>. The webpage URL must be specified with <b>https://</b> or <b>www.</b>.',
		displayOptions: {
				show: {
						operation: [
							'get-bing-ranked-keywords'
						],
				},
		},
		default: '',
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
					'get-bing-page-intersection'
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
					'get-bing-page-intersection'
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
							'get-bing-bulk-keyword-difficulty',
							'get-bing-bulk-traffic-estimation',
							'get-bing-competitors-domain',
							'get-bing-domain-intersection',
							'get-bing-page-intersection',
							'get-bing-related-keywords',
							'get-bing-serp-competitors'
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
					'get-bing-bulk-keyword-difficulty',
					'get-bing-bulk-traffic-estimation',
					'get-bing-competitors-domain',
					'get-bing-domain-intersection',
					'get-bing-page-intersection',
					'get-bing-related-keywords',
					'get-bing-serp-competitors'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: [
							'get-bing-domain-rank-overview',
							'get-bing-ranked-keywords',
							'get-bing-relevant-pages',
							'get-bing-subdomains'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported languages</a>',
		displayOptions: {
			show: {
				operation: [
					'get-bing-domain-rank-overview',
					'get-bing-ranked-keywords',
					'get-bing-relevant-pages',
					'get-bing-subdomains'
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
					'get-bing-related-keywords'
				],
			},
		},
		default: 1,
	},
	{
		displayName: 'Domain Intersections in SERP',
		name: 'intersections',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
					operation: [
						'get-bing-domain-intersection'
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
						'get-bing-bulk-traffic-estimation',
						'get-bing-competitors-domain',
						'get-bing-domain-intersection',
						'get-bing-page-intersection',
						'get-bing-ranked-keywords',
						'get-bing-relevant-pages',
						'get-bing-serp-competitors',
						'get-bing-subdomains'
					],
			},
		},
		default: [],
	},
	{
		displayName: 'Include Subdomains?',
		name: 'include_subdomains',
		type: 'boolean',
		default: true,
		displayOptions: {
				show: {
						operation: [
							'get-bing-page-intersection',
							'get-bing-serp-competitors'
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
							'get-bing-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Include Data for the Seed Keyword?',
		name: 'include_seed_keyword',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-bing-related-keywords'
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
							'get-bing-domain-intersection',
							'get-bing-page-intersection',
							'get-bing-related-keywords'
						],
				},
		},
	},
	{
		displayName: 'Return Data for Core Keyword?',
		name: 'replace_with_core_keyword',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-bing-related-keywords'
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
					'get-bing-bulk-traffic-estimation',
					'get-bing-competitors-domain',
					'get-bing-page-intersection',
					'get-bing-ranked-keywords',
					'get-bing-related-keywords',
					'get-bing-relevant-pages',
					'get-bing-subdomains'
				],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		hint: 'You can find the supported filters in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/filters/?bash">Supported fields</a>',
		displayOptions: {
				show: {
						operation: [
							'get-bing-competitors-domain',
							'get-bing-domain-intersection',
							'get-bing-page-intersection',
							'get-bing-ranked-keywords',
							'get-bing-related-keywords',
							'get-bing-relevant-pages',
							'get-bing-serp-competitors',
							'get-bing-subdomains'
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
					'get-bing-competitors-domain',
					'get-bing-domain-intersection',
					'get-bing-page-intersection',
					'get-bing-ranked-keywords',
					'get-bing-related-keywords',
					'get-bing-relevant-pages',
					'get-bing-serp-competitors',
					'get-bing-subdomains'
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
							'get-bing-competitors-domain',
							'get-bing-domain-intersection',
							'get-bing-domain-rank-overview',
							'get-bing-page-intersection',
							'get-bing-ranked-keywords',
							'get-bing-related-keywords',
							'get-bing-relevant-pages',
							'get-bing-serp-competitors',
							'get-bing-subdomains'
						],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
		default: 100,
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
							'get-bing-competitors-domain',
							'get-bing-domain-intersection',
							'get-bing-domain-rank-overview',
							'get-bing-page-intersection',
							'get-bing-ranked-keywords',
							'get-bing-related-keywords',
							'get-bing-relevant-pages',
							'get-bing-serp-competitors',
							'get-bing-subdomains'
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
							'get-bing-competitors-domain'
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
					'get-bing-competitors-domain'
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
					'get-bing-competitors-domain'
				],
			}
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
					'get-bing-ranked-keywords'
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
						'get-bing-ranked-keywords',
						'get-bing-relevant-pages',
						'get-bing-subdomains'
					],
			},
		},
		default: 'live',
	},
];
