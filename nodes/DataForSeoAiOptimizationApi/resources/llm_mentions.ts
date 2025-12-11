/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const LlmMentionsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['llm_mentions'],
			},
		},
		options: [
			{
				name: 'Get Live LLM Mentions',
				value: 'get-live-llm-mentions',
				action: 'Get live llm mentions',
				description: 'Provides mention data and related metrics from AI searches',
			},
			{
				name: 'Get Live LLM Mentions Top Pages',
				value: 'get-live-llm-mentions-top-pages',
				action: 'Get live llm mentions top pages',
				description: 'Provides aggregated LLM mentions metrics grouped by the most frequently mentioned pages for the specified target',
			},
			{
				name: 'Get Live LLM Mentions Top Domains',
				value: 'get-live-llm-mentions-top-domains',
				action: 'Get live llm mentions top domains',
				description: 'Provides aggregated LLM mentions metrics grouped by the most frequently mentioned domains for the specified target',
			},
			{
				name: 'Get Live LLM Mentions Aggregated Metrics',
				value: 'get-live-llm-mentions-aggregated-metrics',
				action: 'Get live llm mentions aggregated metrics',
				description: 'Provides aggregated metrics for mentions of the keywords or domains specified in the target array of the request',
			},
			{
				name: 'Get Live LLM Mentions Cross Aggregated Metrics',
				value: 'get-live-llm-mentions-cross-aggregated-metrics',
				action: 'Get live llm mentions cross aggregated metrics',
				description: 'Provides aggregated metrics grouped by custom keys for mentions of the keywords or domains specified in the target array of the request',
			}
		],
		default: 'get-live-llm-mentions',
	},

	// Parameters
	{
		displayName: 'Array of Objects Containing Target Entities',
		name: 'target',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		required: true,
		default: [],
				displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions',
					'get-live-llm-mentions-top-pages',
					'get-live-llm-mentions-top-domains',
					'get-live-llm-mentions-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Aggregation Key for Grouping the Results (1)',
		name: 'aggregation_key1',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Array of Objects Containing Target Entities (1)',
		name: 'target1',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		required: true,
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Aggregation Key for Grouping the Results (2)',
		name: 'aggregation_key2',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Array of Objects Containing Target Entities (2)',
		name: 'target2',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		required: true,
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Aggregation Key for Grouping the Results (3)',
		name: 'aggregation_key3',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Array of Objects Containing Target Entities (3)',
		name: 'target3',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Aggregation Key for Grouping the Results (4)',
		name: 'aggregation_key4',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Array of Objects Containing Target Entities (4)',
		name: 'target4',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Aggregation Key for Grouping the Results (5)',
		name: 'aggregation_key5',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Array of Objects Containing Target Entities (5)',
		name: 'target5',
		type: 'fixedCollection',
		hint: 'You can specify up to 10 entities (objects) in the target field. One target entity can contain either one domain or one keyword and related parameters',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add target',
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target Domain',
						name: 'domain',
						type: 'string',
						hint: 'Required field if you don’t specify keyword. A domain should be specified without https:// and www.',
						default: '',
					},
					{
						displayName: 'Target Keyword',
						name: 'keyword',
						type: 'string',
						hint: 'Required field if you don’t specify domain',
						default: '',
					},
					{
						displayName: 'Target Domain/Keyword Search Filter',
						name: 'search_filter',
						type: 'options',
						options: [
							{
								name: 'Include',
								value: 'include'
							},
							{
								name: 'Exclude',
								value: 'exclude'
							}
						],
						default: 'include',
					},
					{
						displayName: 'Target Domain/Keyword Search Scope',
						name: 'search_scope',
						type: 'multiOptions',
						// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
						options: [
							{
								name: 'Any',
								value: 'any'
							},
							{
								name: 'Sources (for Domain Only)',
								value: 'sources'
							},
							{
								name: 'Search Results (for Domain Only)',
								value: 'search_results',
							},
							{
								name: 'Question (for Keyword Only)',
								value: 'question'
							},
							{
								name: 'Answer (for Keyword Only)',
								value: 'answer'
							}
						],
						default: [],
					},
					{
						displayName: 'Target Keyword Match Type (for Keyword Only)',
						name: 'match_type',
						type: 'options',
						options: [
							{
								name: '',
								value: ''
							},
							{
								name: 'Word Match',
								value: 'word_match'
							},
							{
								name: 'Partial Match',
								value: 'partial_match'
							}
						],
						default: '',
					},
					{
						displayName: 'Include Subdomains in the Search? (for Domain Only)',
						name: 'include_subdomains',
						type: 'boolean',
						default: false
					},
				],
			},
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		hint: 'Full name of the location. Example: English. You can find the supported locations in the <a href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages/">DataForSEO documentation</a>',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions',
					'get-live-llm-mentions-top-pages',
					'get-live-llm-mentions-top-domains',
					'get-live-llm-mentions-aggregated-metrics',
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		}
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		hint: 'Full name of the language. Example: English. You can find the supported languages in the <a href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages/">DataForSEO documentation</a>',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions',
					'get-live-llm-mentions-top-pages',
					'get-live-llm-mentions-top-domains',
					'get-live-llm-mentions-aggregated-metrics',
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		}
	},
	{
		displayName: 'Target Platform',
		name: 'platform',
		type: 'options',
		options: [
			{
				name: '',
				value: ''
			},
			{
				name: 'ChatGPT',
				value: 'chat_gpt'
			},
			{
				name: 'Google',
				value: 'google'
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions',
					'get-live-llm-mentions-top-pages',
					'get-live-llm-mentions-top-domains',
					'get-live-llm-mentions-aggregated-metrics',
					'get-live-llm-mentions-cross-aggregated-metrics'
				],
			},
		}
	},
	{
		displayName: 'Links Source Scope',
		name: 'links_scope',
		type: 'options',
		options: [
			{
				name: '',
				value: ''
			},
			{
				name: 'Sources',
				value: 'sources'
			},
			{
				name: 'Search Results',
				value: 'search_results'
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-llm-mentions-top-pages',
					'get-live-llm-mentions-top-domains'
				],
			},
		}
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find details in the <a href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/search/live/#filters">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-llm-mentions'
						],
				},
		},
	},
	{
		displayName: 'Filters',
		name: 'initial_dataset_filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find details in the <a href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/top_pages/live/#initial_dataset_filters">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-llm-mentions-top-pages',
							'get-live-llm-mentions-top-domains',
							'get-live-llm-mentions-aggregated-metrics',
							'get-live-llm-mentions-cross-aggregated-metrics'
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
						hint: 'You can find the supported fields in the <a href="https://docs.dataforseo.com/v3/ai_optimization/llm_mentions/search/live/#order_by">DataForSEO documentation</a>',
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
					'get-live-llm-mentions'
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
							'get-live-llm-mentions'
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
							'get-live-llm-mentions'
						],
				},
		},
		default: 0,
	},
	{
		displayName: 'Maximum Number of Results in the Items Array',
		name: 'items_list_limit',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
			maxValue: 10
		},
		displayOptions: {
				show: {
						operation: [
							'get-live-llm-mentions-top-pages',
							'get-live-llm-mentions-top-domains'
						],
				},
		},
		default: 0,
	},
	{
		displayName: 'Maximum Number of Elements Within Internal Arrays (up to 10)',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
			maxValue: 10
		},
		displayOptions: {
				show: {
						operation: [
							'get-live-llm-mentions-top-pages',
							'get-live-llm-mentions-top-domains',
							'get-live-llm-mentions-aggregated-metrics',
							'get-live-llm-mentions-cross-aggregated-metrics'
						],
				},
		},
		default: 0,
	}
];
