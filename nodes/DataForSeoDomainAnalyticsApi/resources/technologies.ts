import {
	INodeProperties,
} from 'n8n-workflow';

export const TechnologiesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['technologies'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live Aggregation Technologies',
				value: 'get-live-aggregation-technologies',
				action: 'Get live aggregation technologies',
				description: 'Get a list of the most popular technologies websites use alongside the technologies you specify (live)',
			},
			{
				name: 'Get Live Technologies Summary',
				value: 'get-live-technologies-summary',
				action: 'Get live technologies summary',
				description: 'Get the number of domains across different countries and languages that use the specified technology names, technology groups, or technology categories (live)',
			},
			{
				name: 'Get Live Technology Stats',
				value: 'get-live-technology-stats',
				action: 'Get live technology stats',
				description: 'Get historical data on the number of domains across different countries and languages that use the specified technology (live)',
			},
			{
				name: 'Get Domains By Technology',
				value: 'get-live-domains-by-technology',
				action: 'Get live domains by technology',
				description: 'Get domains based on the technology they use (live)',
			},
			{
				name: 'Get Domains By HTML Terms',
				value: 'get-live-domains-by-html-terms',
				action: 'Get live domains by html terms',
				description: 'Get domains based on the HTML terms they use on their homepage (live)',
			},
			{
				name: 'Get Live Domain Technologies',
				value: 'get-live-domain-technologies',
				action: 'Get live domain technologies',
				description: 'Get a list of technologies used in a particular domain (live)',
			}
		],
		default: 'get-live-aggregation-technologies',
	},

	{
		displayName: 'ID of the Target Technology Group',
		name: 'group',
		type: 'string',
		hint: 'Required field if you don’t specify technology, category or keyword. You can find the full list of technology group ids on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'ID of the Target Technology Category',
		name: 'category',
		type: 'string',
		hint: 'Required field if you don’t specify technology, group or keyword. You can find the full list of technology category ids on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Target Technology',
		name: 'technology',
		type: 'string',
		hint: 'Required field if you don’t specify category, group or keyword. You can find the full list of technologies on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Target Keyword in the Domain’s Meta Keywords',
		name: 'keyword',
		type: 'string',
		hint: 'Required field if you don’t specify category, group or technology.',
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Target Technology Paths',
		name: 'technology_paths',
		placeholder: 'Add path',
		type: 'fixedCollection',
		required: true,
		hint: 'Required field if you don’t specify groups, technologies and categories',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Path',
				values: [
					{
						displayName: 'Path',
						name: 'path',
						type: 'string',
						required: true,
						default: '',
						hint: 'Specified as “$group_id.$category_id”.'
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						required: true,
						default: '',
						hint: 'Name of the target technology.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-technologies-summary',
					'get-live-domains-by-technology'
				],
			}
		},
	},
	{
		displayName: 'Target Search Terms',
		name: 'search_terms',
		placeholder: 'Add term',
		type: 'fixedCollection',
		required: true,
		hint: 'Maximum number of search terms you can specify: 10.',
		default: null,
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Term',
				values: [
					{
						displayName: 'Term',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Target HTML elements, tags, attributes, their content or all of the above.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-domains-by-html-terms'
				],
			}
		},
	},
	{
		displayName: 'IDs of the Target Technology Groups',
		name: 'groups',
		placeholder: 'Add group',
		type: 'fixedCollection',
		required: true,
		hint: 'Required field if you don’t specify technologies, technology_paths, categories, or keywords',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Group',
				values: [
					{
						displayName: 'Group',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the full list of technology group ids on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-technologies-summary',
					'get-live-domains-by-technology'
				],
			}
		},
	},
	{
		displayName: 'IDs of the Target Technology Categories',
		name: 'categories',
		placeholder: 'Add category',
		type: 'fixedCollection',
		required: true,
		hint: 'Required field if you don’t specify technologies, technology_paths, groups, or keywords',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Category',
				values: [
					{
						displayName: 'Category',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the full list of technology category ids on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-technologies-summary',
					'get-live-domains-by-technology'
				],
			}
		},
	},
	{
		displayName: 'Target Technologies',
		name: 'technologies',
		placeholder: 'Add technology',
		type: 'fixedCollection',
		required: true,
		hint: 'Required field if you don’t specify categories, technology_paths, groups, or keywords',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Technology',
				values: [
					{
						displayName: 'Technology',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the full list of technologies on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-technologies-summary',
					'get-live-domains-by-technology'
				],
			}
		},
	},
	{
		displayName: 'Target Keywords in the Domain’s Title, Description or Meta Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		hint: 'Required field if you don’t specify categories, technology_paths, groups, or technologies. You can specify the maximum of 10 keywords.',
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
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-technologies-summary',
					'get-live-domains-by-technology',
					'get-live-domains-by-html-terms'
				],
			}
		},
	},
	{
		displayName: 'Target Technology',
		name: 'technology_stats',
		type: 'string',
		hint: 'You can find the full list of technologies on <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies/">this page</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-technology-stats'
				],
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Search Mode',
		name: 'mode',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'As Is',
				value: 'as_is',
			},
			{
				name: 'Entry',
				value: 'entry',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-aggregation-technologies',
						'get-live-technologies-summary',
						'get-live-domains-by-technology',
						'get-live-domains-by-html-terms'
					],
			},
		},
		default: 'as_is',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can add several filters at once (8 filters maximum). You can find details in the <a href="https://docs.dataforseo.com/v3/domain_analytics/technologies/filters/">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
					operation: [
						'get-live-aggregation-technologies',
						'get-live-technologies-summary',
						'get-live-domains-by-technology',
						'get-live-domains-by-html-terms'
					],
				},
		},
	},
	{
		displayName: 'Results Sorting Rules',
		name: 'order_by',
		type: 'multiOptions',
		placeholder: 'Add Sorting',
		hint: 'You can set no more than <b>three</b> sorting rules',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'Groups Count Descending',
				value: 'groups_count,desc'
			},
			{
				name: 'Groups Count Ascending',
				value: 'groups_count,asc'
			},
			{
				name: 'Categories Count Descending',
				value: 'categories_count,desc'
			},
			{
				name: 'Categories Count Ascending',
				value: 'categories_count,asc'
			},
			{
				name: 'Technologies Count Descending',
				value: 'technologies_count,desc'
			},
			{
				name: 'Technologies Count Ascending',
				value: 'technologies_count,asc'
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-aggregation-technologies'
					],
			},
		},
		default: [],
	},
	{
		displayName: 'Results Sorting Rules',
		name: 'order_by_domains',
		type: 'multiOptions',
		placeholder: 'Add Sorting',
		hint: 'You can set no more than <b>three</b> sorting rules',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'Domain Rank Descending',
				value: 'domain_rank,desc'
			},
			{
				name: 'Domain Rank Ascending',
				value: 'domain_rank,asc'
			},
			{
				name: 'Domain Descending',
				value: 'domain,desc'
			},
			{
				name: 'Domain Ascending',
				value: 'domain,asc'
			},
			{
				name: 'Last Visited Descending',
				value: 'last_visited,desc'
			},
			{
				name: 'Last Visited Ascending',
				value: 'last_visited,asc'
			},
			{
				name: 'Country ISO Code Descending',
				value: 'country_iso_code,desc'
			},
			{
				name: 'Country ISO Code Ascending',
				value: 'country_iso_code,asc'
			},
			{
				name: 'Language Code Descending',
				value: 'language_code,desc'
			},
			{
				name: 'Language Code Ascending',
				value: 'language_code,asc'
			},
			{
				name: 'Content Language Code Descending',
				value: 'content_language_code,desc'
			},
			{
				name: 'Content Language Code Ascending',
				value: 'content_language_code,asc'
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-domains-by-technology',
						'get-live-domains-by-html-terms'
					],
			},
		},
		default: [],
	},
	{
		displayName: 'Maximum Number of Returned Technology Groups',
		name: 'internal_groups_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 10000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: 5
	},
	{
		displayName: 'Maximum Number of Returned Technology Categories Within the Same Group',
		name: 'internal_categories_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 10000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: 5
	},
	{
		displayName: 'Maximum Number of Returned Technologies Within the Same Category',
		name: 'internal_technologies_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 10000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies'
				],
			},
		},
		default: 10
	},
	{
		displayName: 'Maximum Number of Items Within Internal Arrays',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 10000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies',
					'get-live-technologies-summary'
				],
			},
		},
		default: 10
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		description: 'Max number of results to return',
		typeOptions: {
			// eslint-disable-next-line n8n-nodes-base/node-param-type-options-max-value-present
			maxValue: 10000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies',
					'get-live-domains-by-technology',
					'get-live-domains-by-html-terms'
				],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
		default: 100
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		description: 'Offset in the results array',
		typeOptions: {
			maxValue: 9999,
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-aggregation-technologies',
					'get-live-domains-by-technology',
					'get-live-domains-by-html-terms'
				],
			},
		},
		default: 0
	},
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimum value 2022-10-31. If you don’t specify this field, the minimum value will be used by default',
		displayOptions: {
			show: {
				operation: [
					'get-live-technology-stats'
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
					'get-live-technology-stats'
				]
			}
		},
	},
	{
		displayName: 'Target Domain',
		name: 'target',
		type: 'string',
		hint: 'Domain name of the website to analyze.',
		displayOptions: {
			show: {
				operation: [
					'get-live-domain-technologies'
				],
			},
		},
		required: true,
		default: ''
	},
];
