/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const BacklinksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Get Backlinks Summary',
				value: 'get-backlinks-summary',
				action: 'Get bulk keyword difficulty',
				description: 'Get an overview of backlink data for a domain, subdomain, or webpage',
			},
			{
				name: 'Get Historical Backlink Summary',
				value: 'get-historical-backlink-summary',
				action: 'Get historical backlink summary',
				description: 'Get historical backlink data for a domain back to the beginning of 2019',
			},
			{
				name: 'Get Backlinks',
				value: 'get-backlinks',
				action: 'Get backlinks',
				description: 'Get a list of backlinks for a domain, subdomain or page',
			},
			{
				name: 'Get Anchors',
				value: 'get-anchors',
				action: 'Get anchors',
				description: 'Get a detailed overview of anchors used when linking to the specified website with relevant backlink data for each of them',
			},
			{
				name: 'Get Domain Pages',
				value: 'get-domain-pages',
				action: 'Get domain pages',
				description: 'Get a detailed overview of domain pages with backlink data for each page',
			},
			{
				name: 'Get Domain Pages Summary',
				value: 'get-domain-pages-summary',
				action: 'Get domain pages summary',
				description: 'Get a detailed summary data on all backlinks and related metrics for each page of the target domain or subdomain you specify',
			},
			{
				name: 'Get Referring Domains',
				value: 'get-referring-domains',
				action: 'Get referring domains',
				description: 'Get a detailed overview of referring domains pointing to the target you specify',
			},
			{
				name: 'Get Referring Networks',
				value: 'get-referring-networks',
				action: 'Get referring networks',
				description: 'Get a detailed overview of referring IPs and subnets pointing to the target you specify',
			},
			{
				name: 'Get Competitors',
				value: 'get-competitors',
				action: 'Get competitors',
				description: 'Get a list of competitors that share some part of the backlink profile with a target website, along with a number of backlink intersections and the rank of every competing website',
			},
			{
				name: 'Get Domain Intersection',
				value: 'get-domain-intersection',
				action: 'Get domain intersection',
				description: 'Get the list of domains pointing to the specified websites',
			},
			{
				name: 'Get Page Intersection',
				value: 'get-page-intersection',
				action: 'Get page intersection',
				description: 'Get the list of referring pages pointing to the specified targets',
			},
			{
				name: 'Get Backlinks Timeseries Summary',
				value: 'get-backlinks-timeseries-summary',
				action: 'Get backlinks timeseries summary',
				description: 'Get an overview of backlink data for the target domain available during a period between the two indicated dates',
			},
			{
				name: 'Get New & Lost Backlinks Timeseries Summary',
				value: 'get-new-and-lost-backlinks-timeseries-summary',
				action: 'Get new and lost backlinks timeseries summary',
				description: 'Get the number of new and lost backlinks and referring domains for the domain specified in the target field',
			},
			{
				name: 'Get Bulk Ranks',
				value: 'get-bulk-ranks',
				action: 'Get bulk ranks',
				description: 'Get rank scores for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk Backlinks',
				value: 'get-bulk-backlinks',
				action: 'Get bulk backlinks',
				description: 'Get the number of backlinks for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk Spam Scores',
				value: 'get-bulk-spam-scores',
				action: 'Get bulk spam scores',
				description: 'Get Spam Scores for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk Referring Domains',
				value: 'get-bulk-referring-domains',
				action: 'Get bulk referring domains',
				description: 'Get the number of referring domains for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk New & Lost Backlinks',
				value: 'get-bulk-new-and-lost-backlinks',
				action: 'Get bulk new and lost backlinks',
				description: 'Get the number of new and lost backlinks for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk New & Lost Referring Domains',
				value: 'get-bulk-new-and-lost-referring-domains',
				action: 'Get bulk new and lost referring domains',
				description: 'Get the number of new and lost referring domains for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk Pages Summary',
				value: 'get-bulk-pages-summary',
				action: 'Get bulk pages summary',
				description: 'Get a comprehensive overview of backlinks and related data for a bulk of up to 1000 pages, domains, or subdomains',
			}
		],
		default: 'get-backlinks-summary',
	},

	// Parameters
	{
		displayName: 'Target (Domain, Subdomain, URL)',
		name: 'target',
		type: 'string',
		description: 'Domain, subdomain or webpage to get data for',
		hint: 'A domain or a subdomain should be specified without <b>https://</b> and <b>www.</b> A page should be specified with absolute URL (including <b>http://<b> or <b>https://<b>).',
		displayOptions: {
			show: {
				operation: [
					'get-backlinks-summary',
					'get-backlinks',
					'get-anchors',
					'get-domain-pages-summary',
					'get-referring-domains',
					'get-referring-networks',
					'get-competitors'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Domain',
		name: 'target_domain',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
				show: {
						operation: [
							'get-historical-backlink-summary',
							'get-domain-pages',
							'get-backlinks-timeseries-summary',
							'get-new-and-lost-backlinks-timeseries-summary'
						]
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Domains, Subdomains or Webpages',
		name: 'targets_1000',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'You can specify up to 1000 pages, domains, or subdomains in each request',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Domain, Subdomain or Webpage URL',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'A domain or a subdomain should be specified without <b>https://</b> and <b>www.</b>. A page should be specified with absolute URL (including <b>http://</b> or <b>https://</b>).',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-bulk-ranks',
					'get-bulk-backlinks',
					'get-bulk-spam-scores',
					'get-bulk-referring-domains',
					'get-bulk-new-and-lost-backlinks',
					'get-bulk-new-and-lost-referring-domains',
					'get-bulk-pages-summary'
				],
			},
		},
	},
	{
		displayName: 'Targets',
		name: 'targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'You can specify up to 20 pages, domains, or subdomains in each request',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Domain, Subdomain or Webpage URL',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'A domain or a subdomain should be specified without <b>https://</b> and <b>www.</b>. A page should be specified with absolute URL (including <b>http://</b> or <b>https://</b>).',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-domain-intersection',
					'get-page-intersection',
				],
			},
		},
	},
	{
		displayName: 'Domains, Subdomains or Webpages You Want to Exclude',
		name: 'exclude_targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'You can specify up to 10 pages, domains, or subdomains in each request',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Domain, Subdomain or Webpage URL',
						name: 'value',
						type: 'string',
						required: true,
						default: ''
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-domain-intersection',
					'get-page-intersection'
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
		hint: 'Minimal value: <b>2019-01-01</b>. The minimum value will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-historical-backlink-summary'
				]
			}
		},
	},
	{
		displayName: 'Date From',
		name: 'date_from_min_2019_01_30',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimal value: <b>2019-01-30</b>. The minimum value will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-backlinks-timeseries-summary',
					'get-new-and-lost-backlinks-timeseries-summary'
				]
			}
		},
	},
	{
		displayName: 'Date From',
		name: 'date_from_for_bulk_new_and_lost',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'The date which will be used as a threshold for new and lost backlinks. Default value: today’s date -(minus) one month.',
		displayOptions: {
			show: {
				operation: [
					'get-bulk-new-and-lost-backlinks',
					'get-bulk-new-and-lost-referring-domains'
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
		hint: 'If you don’t specify this field, today’s date will be used by default',
		displayOptions: {
			show: {
				operation: [
					'get-historical-backlink-summary',
					'get-backlinks-timeseries-summary',
					'get-new-and-lost-backlinks-timeseries-summary'
				]
			}
		},
	},
	{
		displayName: 'Time Range Which Will Be Used to Group the Results',
		name: 'group_range',
		type: 'options',
		options: [
			{
				name: 'Day',
				value: 'day',
			},
			{
				name: 'Week',
				value: 'week',
			},
			{
				name: 'Month',
				value: 'month',
			},
			{
				name: 'Year',
				value: 'year',
			},
		],
		default: 'month',
		displayOptions: {
			show: {
					operation: [
						'get-backlinks-timeseries-summary',
						'get-new-and-lost-backlinks-timeseries-summary'
					],
			},
		},
	},
	{
		displayName: 'Type of network to get data for',
		name: 'network_address_type',
		type: 'options',
		options: [
			{
				name: 'IP',
				value: 'ip',
			},
			{
				name: 'Subnet',
				value: 'subnet',
			}
		],
		default: 'ip',
		displayOptions: {
			show: {
					operation: [
						'get-referring-networks'
					],
			},
		},
	},
	{
		displayName: 'Mode',
		name: 'mode',
		type: 'options',
		options: [
			{
				name: 'As Is',
				value: 'as_is',
			},
			{
				name: 'One Per Domain',
				value: 'one_per_domain',
			},
			{
				name: 'One Per Anchor',
				value: 'one_per_anchor',
			},
		],
		default: 'as_is',
		displayOptions: {
			show: {
					operation: [
						'get-backlinks'
					],
			},
		},
	},
	{
		displayName: 'Include Subdomains',
		name: 'include_subdomains',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-backlinks-summary',
							'get-backlinks',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-domain-intersection',
							'get-page-intersection',
							'get-backlinks-timeseries-summary',
							'get-new-and-lost-backlinks-timeseries-summary',
							'get-bulk-pages-summary'
						],
				},
		},
	},
	{
		displayName: 'Include Indirect Links',
		name: 'include_indirect_links',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-backlinks-summary',
							'get-backlinks',
							'get-anchors',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Include Only Main Domain?',
		name: 'main_domain',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-competitors'
						],
				},
		},
	},
	{
		displayName: 'Exclude Large Domain',
		name: 'exclude_large_domains',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-competitors'
						],
				},
		},
	},
	{
		displayName: 'Exclude Internal Links',
		name: 'exclude_internal_backlinks',
		type: 'boolean',
		default: true,
		required: true,
		displayOptions: {
				show: {
						operation: [
							'get-backlinks-summary',
							'get-backlinks',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-competitors',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
	},
	{
		displayName: 'Internal List Limit (up to 1000)',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-backlinks-summary',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-referring-networks',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
		default: 10,
	},
	{
		displayName: 'Backlink Status',
		name: 'backlinks_status_type',
		type: 'options',
		options: [
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Live',
				value: 'live',
			},
			{
				name: 'Lost',
				value: 'lost',
			},
		],
		default: 'live',
		displayOptions: {
			show: {
					operation: [
						'get-backlinks-summary',
						'get-backlinks',
						'get-anchors',
						'get-domain-pages',
						'get-domain-pages-summary',
						'get-referring-domains',
						'get-referring-networks',
						'get-domain-intersection',
						'get-page-intersection'
					],
			},
		},
	},
	{
		displayName: 'Intersection Mode',
		name: 'intersection_mode',
		type: 'options',
		options: [
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Partial',
				value: 'partial',
			},
		],
		default: 'all',
		displayOptions: {
			show: {
					operation: [
						'get-domain-intersection',
						'get-page-intersection'
					],
			},
		},
	},
	{
		displayName: 'Rank Scale',
		name: 'rank_scale',
		type: 'options',
		description: "Used for calculating and displaying the rank, domain_from_rank, and page_from_rank values",
		options: [
			{
				name: '0 - 100 Scale',
				value: 'one_hundred',
			},
			{
				name: '0 - 1000 Scale',
				value: 'one_thousand',
			},
		],
		default: 'one_thousand',
		displayOptions: {
			show: {
					operation: [
						'get-backlinks-summary',
						'get-historical-backlink-summary',
						'get-backlinks',
						'get-anchors',
						'get-domain-pages',
						'get-domain-pages-summary',
						'get-referring-domains',
						'get-referring-networks',
						'get-competitors',
						'get-domain-intersection',
						'get-page-intersection',
						'get-backlinks-timeseries-summary',
						'get-bulk-ranks',
						'get-bulk-pages-summary'
					],
			},
		},
	},
	{
		displayName: 'Backlinks Filters',
		name: 'backlinks_filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can filter the backlinks by all fields available in the response of <a href="https://docs.dataforseo.com/v3/backlinks/backlinks/live/">this endpoint</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-backlinks-summary',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-domain-intersection'
						],
				},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/backlinks/filters/?bash">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-backlinks',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-competitors',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
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
						hint: 'You can find the supported fields in the <a href="https://docs.dataforseo.com/v3/backlinks/filters/?bash">DataForSEO documentation</a>',
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
					'get-backlinks',
					'get-anchors',
					'get-domain-pages',
					'get-domain-pages-summary',
					'get-referring-domains',
					'get-referring-networks',
					'get-competitors',
					'get-domain-intersection',
					'get-page-intersection'
				],
			},
		},
	},
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit',
		type: 'number',
		description: 'Max number of results to return',
		typeOptions: {
			// eslint-disable-next-line n8n-nodes-base/node-param-type-options-max-value-present
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-backlinks',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-competitors',
							'get-domain-intersection',
							'get-page-intersection'
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
							'get-backlinks',
							'get-anchors',
							'get-domain-pages',
							'get-domain-pages-summary',
							'get-referring-domains',
							'get-referring-networks',
							'get-competitors',
							'get-domain-intersection',
							'get-page-intersection'
						],
				},
		},
		default: 0,
	},
];
