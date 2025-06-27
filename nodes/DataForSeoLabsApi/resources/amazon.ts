/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const AmazonOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['amazon'],
			},
		},
		options: [
			{
				name: 'Get Bulk Search Volume',
				value: 'get-bulk-search-volume',
				action: 'Get bulk search volume',
				description: 'Get search volume values for a maximum of 1,000 keywords in one API request',
			},
			{
				name: 'Get Related Keywords',
				value: 'get-amazon-related-keywords',
				action: 'Get related keywords',
				description: 'Get keywords appearing in the "Related Searches" section on Amazon',
			},
			{
				name: 'Get Ranked Keywords',
				value: 'get-amazon-ranked-keywords',
				action: 'Get ranked keywords',
				description: 'Get the list of keywords the target product ranks for on Amazon',
			},
			{
				name: 'Get Product Rank Overview',
				value: 'get-product-rank-overview',
				action: 'Get product rank overview',
				description: 'Get ranking data from organic and paid Amazon SERPs for the target products',
			},
			{
				name: 'Get Product Competitors',
				value: 'get-product-competitors',
				action: 'Get product competitors',
				description: 'Get a list of products that intersect with a target asin in Amazon SERPs',
			},
			{
				name: 'Get Product Keyword Intersections',
				value: 'get-product-keyword-intersections',
				action: 'Get product keyword intersections',
				description: 'Get a list of keywords for which the target products intersect in Amazon SERP',
			}
		],
		default: 'get-bulk-search-volume',
	},

	// Parameters
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
						hint: 'Each keyword should be at least 3 characters long. The keywords will be converted to lowercase format.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-bulk-search-volume'
				],
			}
		},
	},
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-amazon-related-keywords',
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Product ID',
		name: 'asin',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-amazon-ranked-keywords',
							'get-product-competitors'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Product IDs to Compare',
		name: 'asins',
		placeholder: 'Add product ID',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of ASINs you can specify in this array is 1000',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Product ID',
				values: [
					{
						displayName: 'Product ID',
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
					'get-product-rank-overview'
				],
			}
		},
	},
		{
		displayName: 'ASINs of Target Products',
		name: 'asins_for_intersection',
		placeholder: 'Add product ID',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of ASINs you can specify in this array is 20',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Product ID',
				values: [
					{
						displayName: 'Product ID',
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
					'get-product-keyword-intersections'
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
							'get-bulk-search-volume',
							'get-amazon-related-keywords',
							'get-amazon-ranked-keywords',
							'get-product-rank-overview',
							'get-product-competitors',
							'get-product-keyword-intersections'
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
					'get-bulk-search-volume',
					'get-amazon-related-keywords',
					'get-amazon-ranked-keywords',
					'get-product-rank-overview',
					'get-product-competitors',
					'get-product-keyword-intersections'
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
				name: '1 - 6 Keywords',
				value: 1
			},
			{
				name: '2 - 42 Keywords',
				value: 2
			},
			{
				name: '3 - 258 Keywords',
				value: 3
			},
			{
				name: '4 - 1554 Keywords',
				value: 4
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-amazon-related-keywords'
				],
			},
		},
		default: 1,
	},
		{
		displayName: 'Mode for Finding ASIN Intersections',
		name: 'intersection_mode',
		type: 'options',
		options: [
			{
				name: 'Union',
				value: 'union'
			},
			{
				name: 'Intersect',
				value: 'intersect'
			}
		],
		default: 'intersect',
		displayOptions: {
				show: {
						operation: [
							'get-product-keyword-intersections'
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
							'get-amazon-related-keywords'
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
					'get-amazon-related-keywords',
					'get-amazon-ranked-keywords'
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
						'get-amazon-ranked-keywords',
						'get-product-competitors',
						'get-product-keyword-intersections'
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
					'get-amazon-ranked-keywords',
					'get-product-competitors',
					'get-product-keyword-intersections'
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
							'get-amazon-related-keywords',
							'get-amazon-ranked-keywords',
							'get-product-competitors',
							'get-product-keyword-intersections'
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
							'get-amazon-related-keywords',
							'get-amazon-ranked-keywords',
							'get-product-competitors',
							'get-product-keyword-intersections'
						],
				},
		},
		default: 0,
	},
];
