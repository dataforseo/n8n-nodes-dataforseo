/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const ContentAnalysisOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Get Search Results',
				value: 'get-search-results',
				action: 'Get search results',
				description: 'Get detailed citation data available for the target keyword',
			},
			{
				name: 'Get Summary',
				value: 'get-summary',
				action: 'Get summary',
				description: 'Get an overview of citation data available for the target keyword',
			},
			{
				name: 'Get Sentiment Analysis',
				value: 'get-sentiment-analysis',
				action: 'Get sentiment analysis',
				description: 'Get sentiment analysis data for the citations available for the target keyword',
			},
			{
				name: 'Get Rating Distribution',
				value: 'get-rating-distribution',
				action: 'Get rating distribution',
				description: 'Get rating distribution data for the keyword and other parameters specified in the request',
			},
			{
				name: 'Get Phrase Trends',
				value: 'get-phrase-trends',
				action: 'Get phrase trends',
				description: 'Get data on all citations of the target keyword for the indicated date range',
			},
			{
				name: 'Get Category Trends',
				value: 'get-category-trends',
				action: 'Get category trends',
				description: 'Get data on all citations in the target category for the indicated date range',
			}
		],
		default: 'get-search-results',
	},

	// Parameters
	{
		displayName: 'Target Keyword',
		name: 'keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-search-results',
							'get-summary',
							'get-sentiment-analysis',
							'get-rating-distribution',
							'get-phrase-trends'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Category Code',
		name: 'category_code',
		type: 'string',
		hint: 'To obtain a full list of available categories, refer to the <a href="https://docs.dataforseo.com/v3/content_analysis/categories/">Categories</a>',
		displayOptions: {
				show: {
						operation: [
							'get-category-trends'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Keyword Fields and Values',
		name: 'keyword_fields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Field',
				values: [
					{
						displayName: 'Field Name',
						name: 'name',
						type: 'options',
						options: [
							{
								name: 'Title',
								value: 'title'
							},
							{
								name: 'Main Title',
								value: 'main_title'
							},
							{
								name: 'Previous Title',
								value: 'previous_title'
							},
							{
								name: 'Snippet',
								value: 'snippet'
							}
						],
						required: true,
						default: 'title',
					},
					{
						displayName: 'Field Value',
						name: 'value',
						type: 'string',
						default: '',
						required: true,
					}
				],
			},
		],
		displayOptions: {
				show: {
						operation: [
							'get-search-results',
							'get-summary',
							'get-sentiment-analysis',
							'get-rating-distribution',
							'get-phrase-trends'
						],
				},
		},
	},
	{
		displayName: 'Target Page Types',
		name: 'page_type',
		type: 'multiOptions',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'Ecommerce',
				value: 'ecommerce',
			},
			{
				name: 'News',
				value: 'news',
			},
			{
				name: 'Blogs',
				value: 'blogs',
			},
			{
				name: 'Message Boards',
				value: 'message-boards',
			},
			{
				name: 'Organization',
				value: 'organization',
			},
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-search-results',
					'get-summary',
					'get-sentiment-analysis',
					'get-rating-distribution',
					'get-phrase-trends',
					'get-category-trends'
				],
			},
		},
	},
	{
		displayName: 'Results Grouping Type',
		name: 'search_mode',
		type: 'options',
		options: [
			{
				name: 'As Is',
				value: 'as_is',
			},
			{
				name: 'One Per Domain',
				value: 'one_per_domain',
			}
		],
		default: 'as_is',
		displayOptions: {
			show: {
					operation: [
						'get-search-results',
						'get-rating-distribution',
						'get-phrase-trends',
						'get-category-trends'
					],
			},
		},
	},
	{
		displayName: 'Maximum Number of Elements Within Internal Arrays',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			maxValue: 20,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'get-summary',
						'get-sentiment-analysis',
						'get-rating-distribution',
						'get-phrase-trends',
						'get-category-trends'
					],
				},
		},
		default: 1
	},
	{
		displayName: 'Positive Connotation Threshold',
		name: 'positive_connotation_threshold',
		type: 'number',
		typeOptions: {
			maxValue: 1,
			minValue: 0,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'get-summary',
						'get-sentiment-analysis',
						'get-rating-distribution'
					],
				},
		},
		default: 0.4
	},
	{
		displayName: 'Sentiments Connotation Threshold',
		name: 'sentiments_connotation_threshold',
		type: 'number',
		typeOptions: {
			maxValue: 1,
			minValue: 0,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'get-summary',
						'get-sentiment-analysis',
						'get-rating-distribution'
					],
				},
		},
		default: 0.4
	},
	{
		displayName: 'Scale for Calculating the Domain Rank and URL Rank Values',
		name: 'rank_scale',
		type: 'options',
		options: [
			{
				name: '0 - 100 Scale',
				value: 'one_hundred',
			},
			{
				name: '0 - 1000 Scale',
				value: 'one_thousand',
			}
		],
		default: 'one_thousand',
		displayOptions: {
			show: {
					operation: [
						'get-search-results',
						'get-summary',
						'get-sentiment-analysis',
						'get-rating-distribution',
						'get-phrase-trends',
						'get-category-trends'
					],
			},
		},
	},
	{
		displayName: 'Starting Date of the Time Range',
		name: 'date_from',
		type: 'dateTime',
		default: '',
		hint: 'Minimum value: 2019-01-15.',
		displayOptions: {
			show: {
				operation: [
					'get-phrase-trends',
					'get-category-trends'
				],
			},
		},
		required: true
	},
	{
		displayName: 'Ending Date of the Time Range',
		name: 'date_to',
		type: 'dateTime',
		default: '',
		hint: 'If you don’t specify this field, today’s date will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-phrase-trends',
					'get-category-trends'
				],
			},
		},
	},
	{
		displayName: 'Time Range Which Will Be Used to Group the Results',
		name: 'date_group',
		type: 'options',
		options: [
			{
				name: 'Day',
				value: 'day'
			},
			{
				name: 'Week',
				value: 'week'
			},
			{
				name: 'Month',
				value: 'month'
			}
		],
		default: 'month',
		displayOptions: {
			show: {
				operation: [
					'get-phrase-trends',
					'get-category-trends'
				],
			},
		},
	},
	{
		displayName: 'Initial Dataset Filtering Parameters',
		name: 'initial_dataset_filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find details in the <a href="https://docs.dataforseo.com/v3/content_analysis/filters/">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-summary',
							'get-sentiment-analysis',
							'get-rating-distribution',
							'get-phrase-trends',
							'get-category-trends'
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
		hint: 'You can find details in the <a href="https://docs.dataforseo.com/v3/content_analysis/filters/">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-search-results'
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
						hint: 'You can use the same values as in the filters array to sort the results.',
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
					'get-search-results'
				],
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
					operation: [
						'get-search-results'
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
						'get-search-results'
					],
				},
		},
		default: 0,
	},
];
