import {
	INodeProperties,
} from 'n8n-workflow';

export const BacklinksOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['backlinks'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Backlinks',
				value: 'get-backlinks',
				action: 'Get backlinks',
				description: 'Get a list of backlinks for a domain, subdomain or page',
			},
			{
				name: 'Get Backlink Summary',
				value: 'get-backlink-summary',
				action: 'Get backlink summary',
				description: 'Get an overview of backlink data for a domain, subdomain, or webpage',
			},
			{
				name: 'Get Historical Backlink Summary',
				value: 'get-historical-backlink-summary',
				action: 'Get historical backlink summary',
				description: 'Get historical backlink data for a domain back to the beginning of 2019',
			},
			{
				name: 'Get Bulk Backlink Rank',
				value: 'get-bulk-backlink-rank',
				action: 'Get bulk backlink rank',
				description: 'Get rank scores for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Bulk Backlink Stats',
				value: 'get-bulk-backlink-stats',
				action: 'Get bulk backlink stats',
				description: 'Get the number of backlinks for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Backlinks Pages Summary',
				value: 'get-backlinks-page-summary',
				action: 'Get backlinks pages summary',
				description: 'Get an overview overview of backlinks and associated data in bulk',
			},
			{
				name: 'Get Bulk Referring Domain Stats',
				value: 'get-bulk-referring-domain-stats',
				action: 'Get bulk referring domain stats',
				description: 'Get the number of referring domains for up to 1,000 domains, subdomains, and pages',
			},
			{
				name: 'Get Referring Domains',
				value: 'get-referring-domains',
				action: 'Get referring domains',
				description: 'Get a detailed overview of referring domains pointing to the target you specify',
			},
			{
				name: 'Get Bulk Spam Scores',
				value: 'get-bulk-spam-scores',
				action: 'Get bulk spam scores',
				description: 'Get Spam Scores for up to 1,000 domains, subdomains, and pages',
			},
		],
		default: 'get-backlinks',
	},

	// Parameters
	{
		displayName: 'Target (Domain, Subdomain, URL)',
		name: 'target',
		type: 'string',
		description: 'Domain, subdomain or webpage to get backlinks for',
		hint: 'A domain or a subdomain should be specified without <b>https://</b> and <b>www.</b> A page should be specified with absolute URL (including <b>http://<b> or <b>https://<b>).',
		displayOptions: {
				show: {
						operation: ['get-backlinks', 'get-backlink-summary', 'get-referring-domains'],
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
						operation: ['get-historical-backlink-summary'],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Targets',
		name: 'targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'You can specify up to 1000 pages, domains, or subdomains in each request. Note that the URLs you set in a single request cannot belong to more than 100 different domains.',
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
					'get-backlinks-page-summary',
					'get-bulk-backlink-rank',
					'get-bulk-backlink-stats',
					'get-bulk-referring-domain-stats',
					'get-bulk-spam-scores',
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
					operation: ['get-backlinks'],
			},
		},
	},
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit',
		description: 'Max number of results to return',
		type: 'number',
		typeOptions: {
			// eslint-disable-next-line n8n-nodes-base/node-param-type-options-max-value-present
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: ['get-backlinks', 'get-referring-domains'],
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
						operation: ['get-backlinks', 'get-referring-domains'],
				},
		},
		default: 0,
	},
	{
		displayName: 'Sort',
		name: 'order_by',
		type: 'multiOptions',
		placeholder: 'Add Sorting',
		hint: 'You can set no more than <b>three</b> sorting rules',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'Backlink Rank Descending',
				value: 'rank,desc'
			},
			{
				name: 'Backlink Rank Ascending',
				value: 'rank,asc'
			},
			{
				name: 'Referring Page Rank Descending',
				value: 'page_from_rank,desc'
			},
			{
				name: 'Referring Page Rank Ascending',
				value: 'page_from_rank,asc'
			},
			{
				name: 'Referring Domain Rank Descending',
				value: 'domain_from_rank,desc'
			},
			{
				name: 'Referring Domain Rank Ascending',
				value: 'domain_from_rank,asc'
			},
			{
				name: 'Backlink Spam Score Descending',
				value: 'backlink_spam_score,desc'
			},
			{
				name: 'Backlink Spam Score Ascending',
				value: 'backlink_spam_score,asc'
			}
		],
		displayOptions: {
			show: {
					operation: ['get-backlinks'],
			},
		},
		default: [],
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
					operation: ['get-backlinks', 'get-backlink-summary', 'get-referring-domains'],
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
						operation: ['get-backlinks', 'get-backlinks-page-summary', 'get-backlink-summary', 'get-referring-domains'],
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
						operation: ['get-backlinks', 'get-backlink-summary', 'get-referring-domains'],
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
						operation: ['get-referring-domains'],
				},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find details in the <a href="https://docs_v3.dataforseo.com/v3/backlinks/backlinks/live/?bash#filters">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: ['get-backlinks', 'get-referring-domains'],
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
						operation: ['get-backlink-summary', 'get-referring-domains'],
				},
		},
		default: 10,
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
					'get-historical-backlink-summary',
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
				]
			}
		},
	},
	{
		displayName: 'Sort',
		name: 'order_by_string',
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
					'get-referring-domains',
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
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/backlinks/filters/?bash">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: ['get-backlink-summary', 'get-referring-domains'],
				},
		},
	},
];

