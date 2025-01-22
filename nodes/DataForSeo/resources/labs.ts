/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const LabsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['labs'],
				},
		},
		options: [
			{
				name: 'Get Domain Rank Overview',
				value: 'get-domain-rank-overview',
				action: 'Get domain rank overview',
				description: 'Get ranking and traffic data from organic search for a domain',
			},
			{
				name: 'Get Keyword Suggestions',
				value: 'get-keyword-suggestions',
				action: 'Get keyword suggestions',
				description: 'Get search terms that are relevant to the product or service categories of all the specified keywords',
			},
			{
				name: 'Get Ranked Keywords',
				value: 'get-ranked-keywords',
				action: 'Get ranked keywords',
				description: 'Get the list of keywords that any domain or webpage is ranking for',
			},
			{
				name: 'Get Keyword Difficulty',
				value: 'get-keyword-difficulty',
				action: 'Get keyword difficulty',
				description: 'Get Keyword Difficulty for the specified keywords',
			},
			{
				name: 'Get Organic Traffic Stats',
				value: 'get-organic-traffic-stats',
				action: 'Get organic traffic stats',
				description: 'Get an estimation of monthly organic traffic a website or page',
			},
			{
				name: 'Get Historical Traffic Stats',
				value: 'get-historical-traffic-stats',
				action: 'Get historical traffic stats',
				description: 'Get a historical estimate of organic traffic for a website or page',
			},
			{
				name: 'Get Keyword Ideas',
				value: 'get-keyword-ideas',
				action: 'Get keyword ideas',
				description: 'Get search terms that fall into the same Google product or service category as the specified keywords',
			},
		],
		default: 'get-domain-rank-overview',
	},

	// Parameters
	{
		displayName: 'Target Domain',
		name: 'target',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
				show: {
						operation: ['get-domain-rank-overview', 'get-ranked-keywords'],
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
						operation: ['get-keyword-suggestions'],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Target Keywords',
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
						hint: 'Each keyword should be at least 3 characters long;. The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['get-keyword-difficulty'],
			}
		},
	},
	{
		displayName: 'Keywords',
		name: 'keywords_ideas',
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
				operation: ['get-keyword-ideas'],
			}
		},
	},
	{
		displayName: 'Target Domains or Subdomains',
		name: 'targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
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
						hint: 'The domain should be specified without <b>https://</b> and </b>www.</b>.'
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['get-organic-traffic-stats', 'get-historical-traffic-stats'],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'Example: United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages">Supported locations</a>',
		displayOptions: {
				show: {
						operation: ['get-domain-rank-overview'],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages">Supported languages</a>',
		displayOptions: {
				show: {
						operation: ['get-domain-rank-overview'],
				},
		},
		default: '',
	},
	{
		displayName: 'Location',
		name: 'location_name_required',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages">Supported locations</a>',
		displayOptions: {
				show: {
						operation: ['get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-difficulty', 'get-organic-traffic-stats', 'get-historical-traffic-stats', 'get-keyword-ideas'],
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages">Supported languages</a>',
		displayOptions: {
				show: {
						operation: ['get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-difficulty', 'get-organic-traffic-stats', 'get-historical-traffic-stats', 'get-keyword-ideas'],
				},
		},
		default: '',
	},
	{
		displayName: 'Search Mode',
		name: 'closely_variants',
		type: 'boolean',
		default: false,
		hint: 'If set to true the results will be based on the phrase-match search algorithm. \n If set to false the results will be based on the broad-match search algorithm.',
		displayOptions: {
				show: {
						operation: ['get-keyword-ideas'],
				},
		},
	},
	{
		displayName: 'Ignore Synonyms',
		name: 'ignore_synonyms',
		type: 'boolean',
		default: false,
		hint: 'Ignore highly similar keywords. If set to true only core keywords will be returned, all highly similar keywords will be excluded.',
		displayOptions: {
				show: {
						operation: ['get-domain-rank-overview', 'get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-ideas'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Include Serp Info?',
		name: 'include_serp_info',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: ['get-keyword-ideas', 'get-keyword-suggestions'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Include data from clickstream-based metrics in the result?',
		name: 'include_clickstream_data',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: ['get-keyword-ideas'],
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
							operation: ['get-domain-rank-overview', 'get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-ideas'],
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
							operation: ['get-domain-rank-overview', 'get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-ideas'],
					},
			},
			default: 0,
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
						operation: ['get-ranked-keywords', 'get-organic-traffic-stats', 'get-historical-traffic-stats'],
				},
			},
			default: [],
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
					name: 'Search Volume Descending',
					value: 'keyword_info.search_volume,desc'
				},
				{
					name: 'Search Volume Ascending',
					value: 'keyword_info.search_volume,asc'
				},
				{
					name: 'Cost Per Click Descending',
					value: 'keyword_info.cpc,desc'
				},
				{
					name: 'Cost Per Click Ascending',
					value: 'keyword_info.cpc,asc'
				},
				{
					name: 'Low Top Of Page Bid Descending',
					value: 'keyword_info.low_top_of_page_bid,desc'
				},
				{
					name: 'Low Top Of Page Bid Ascending',
					value: 'keyword_info.low_top_of_page_bid,asc'
				},
				{
					name: 'High Top Of Page Bid Descending',
					value: 'keyword_info.high_top_of_page_bid,desc'
				},
				{
					name: 'High Top Of Page Bid Ascending',
					value: 'keyword_info.high_top_of_page_bid,asc'
				},
				{
					name: 'Keyword Difficulty Descending',
					value: 'keyword_properties.keyword_difficulty,desc'
				},
				{
					name: 'Keyword Difficulty Ascending',
					value: 'keyword_properties.keyword_difficulty,asc'
				}
			],
			displayOptions: {
				show: {
						operation: ['get-keyword-suggestions'],
				},
			},
			default: [],
		},
		{
			displayName: 'Sort',
			name: 'order_by_ranked',
			type: 'multiOptions',
			placeholder: 'Add Sorting',
			hint: 'You can set no more than <b>three</b> sorting rules',
			// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
			options: [
				{
					name: 'Search Volume Descending',
					value: 'keyword_data.keyword_info.search_volume,desc'
				},
				{
					name: 'Search Volume Ascending',
					value: 'keyword_data.keyword_info.search_volume,asc'
				},
				{
					name: 'Cost Per Click Descending',
					value: 'keyword_data.keyword_info.cpc,desc'
				},
				{
					name: 'Cost Per Click Ascending',
					value: 'keyword_data.keyword_info.cpc,asc'
				},
				{
					name: 'Low Top Of Page Bid Descending',
					value: 'keyword_data.keyword_info.low_top_of_page_bid,desc'
				},
				{
					name: 'Low Top Of Page Bid Ascending',
					value: 'keyword_data.keyword_info.low_top_of_page_bid,asc'
				},
				{
					name: 'High Top Of Page Bid Descending',
					value: 'keyword_data.keyword_info.high_top_of_page_bid,desc'
				},
				{
					name: 'High Top Of Page Bid Ascending',
					value: 'keyword_data.keyword_info.high_top_of_page_bid,asc'
				},
				{
					name: 'Keyword Difficulty Descending',
					value: 'keyword_data.keyword_properties.keyword_difficulty,desc'
				},
				{
					name: 'Keyword Difficulty Ascending',
					value: 'keyword_data.keyword_properties.keyword_difficulty,asc'
				},
				{
					name: 'Position (Rank Absolute) Descending',
					value: 'ranked_serp_element.serp_item.rank_absolute,desc'
				},
				{
					name: 'Position (Rank Absolute) Ascending',
					value: 'ranked_serp_element.serp_item.rank_absolute,asc'
				},
				{
					name: 'Position (Rank Group) Descending',
					value: 'ranked_serp_element.serp_item.rank_group,desc'
				},
				{
					name: 'Position (Rank Group) Ascending',
					value: 'ranked_serp_element.serp_item.rank_group,asc'
				},
				{
					name: 'Etv Descending',
					value: 'ranked_serp_element.serp_item.etv,desc'
				},
				{
					name: 'Etv Ascending',
					value: 'ranked_serp_element.serp_item.etv,asc'
				}
			],
			displayOptions: {
				show: {
						operation: ['get-ranked-keywords'],
				},
			},
			default: [],
		},
		{
			displayName: 'Filters',
			name: 'filters',
			type: 'string',
			hint: 'You can find the supported filters in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/filters/?bash">Supported fields</a>',
			displayOptions: {
					show: {
							operation: ['get-keyword-suggestions', 'get-ranked-keywords', 'get-keyword-ideas'],
					},
			},
			default: '',
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
						'get-keyword-ideas',
					],
				},
			},
		},
];
