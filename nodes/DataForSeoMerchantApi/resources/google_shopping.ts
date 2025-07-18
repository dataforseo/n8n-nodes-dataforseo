/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleShoppingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_shopping'],
			},
		},
		options: [
			{
				name: 'Get Products Advanced',
				value: 'get-products-advanced',
				action: 'Get products advanced',
				description: 'Get the list of products found on Google Shopping for the specified query (advanced)',
			},
			{
				name: 'Get Products HTML',
				value: 'get-products-html',
				action: 'Get products html',
				description: 'Get the list of products found on Google Shopping for the specified query (html)',
			},
			{
				name: 'Get Sellers Advanced',
				value: 'get-sellers-advanced',
				action: 'Get sellers advanced',
				description: 'Get the list of sellers that listed the specified product on Google Shopping (advanced)',
			},
			{
				name: 'Get Sellers HTML',
				value: 'get-sellers-html',
				action: 'Get sellers html',
				description: 'Get the list of sellers that listed the specified product on Google Shopping (html)',
			},
			{
				name: 'Get Product Specification Advanced',
				value: 'get-product-specification-advanced',
				action: 'Get product specification advanced',
				description: 'Get a full detailed product description as it is given on the Google Shopping product specification page (advanced)',
			},
			{
				name: 'Get Product Specification HTML',
				value: 'get-product-specification-html',
				action: 'Get product specification html',
				description: 'Get a full detailed product description as it is given on the Google Shopping product specification page (html)',
			},
			{
				name: 'Get Product Info',
				value: 'get-product-info',
				action: 'Get product info',
				description: 'Get data on a product listed on Google Shopping, including product description, images, rating, variations, and sellers',
			},
			{
				name: 'Get Product Reviews',
				value: 'get-product-reviews',
				action: 'Get product reviews',
				description: 'Get a list of reviews for any product listed on the Google Shopping platform',
			}
		],
		default: 'get-products-advanced',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 characters in the keyword filed. All %## will be decoded (plus character ‘+’ will be decoded to a space character).',
		displayOptions: {
				show: {
						operation: [
							'get-products-advanced',
							'get-products-html'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Unique Product Identifier on Google Shopping',
		name: 'product_id',
		type: 'string',
		hint: 'Required field if data_docid is not specified. You can get this value for a certain product by making a separate request to the <a href="https://docs.dataforseo.com/v3/merchant/google/products/task_post/">Google Shopping Products endpoint</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-sellers-advanced',
							'get-sellers-html',
							'get-product-specification-advanced',
							'get-product-specification-html',
							'get-product-info',
							'get-product-reviews'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Unique Identifier of the SERP Data Element',
		name: 'data_docid',
		type: 'string',
		hint: 'Required field if product_id is not specified. You can get this value for a certain product by making a separate request to the <a href="https://docs.dataforseo.com/v3/merchant/google/products/task_post/">Google Shopping Products endpoint</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-sellers-advanced',
							'get-sellers-html',
							'get-product-specification-advanced',
							'get-product-specification-html',
							'get-product-info',
							'get-product-reviews'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Direct URL of the Search Query',
		name: 'url',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-products-advanced',
							'get-products-html'
						],
				},
		},
		default: ''
	},
	{
		displayName: 'Task Priority',
		name: 'priority',
		type: 'options',
		options: [
			{
				name: 'Normal Execution Priority',
				value: 1,
			},
			{
				name: 'High Execution Priority',
				value: 2,
			},
		],
		default: 1,
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html',
					'get-sellers-advanced',
					'get-sellers-html',
					'get-product-specification-advanced',
					'get-product-specification-html',
					'get-product-info',
					'get-product-reviews'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/merchant/google/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html',
					'get-sellers-advanced',
					'get-sellers-html',
					'get-product-specification-advanced',
					'get-product-specification-html',
					'get-product-info',
					'get-product-reviews'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		required: true,
		default: '',
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/merchant/google/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html',
					'get-sellers-advanced',
					'get-sellers-html',
					'get-product-specification-advanced',
					'get-product-specification-html',
					'get-product-info',
					'get-product-reviews'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate',
		type: 'string',
		default: '',
		hint: 'Parameter should be specified in the “latitude,longitude,radius” format. Example: 53.476225,-2.243572,200',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html',
					'get-sellers-advanced',
					'get-sellers-html',
					'get-product-specification-advanced',
					'get-product-specification-html',
					'get-product-info',
					'get-product-reviews'
				],
			},
		},
	},
	{
		displayName: 'Search Engine Domain',
		name: 'se_domain',
		type: 'string',
		default: '',
		hint: 'We choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field. Example: google.co.uk, google.com.au, google.de, etc.',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html',
					'get-sellers-advanced',
					'get-sellers-html',
					'get-product-specification-advanced',
					'get-product-specification-html',
					'get-product-info',
					'get-product-reviews'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 700,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
		default: 100,
	},
	{
		displayName: 'Depth',
		name: 'depth_reviews',
		type: 'number',
		typeOptions: {
			maxValue: 8000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-product-reviews'
				],
			},
		},
		default: 10,
	},
	{
		displayName: 'Page Crawl Limit',
		name: 'max_crawl_pages',
		type: 'number',
		typeOptions: {
			maxValue: 7,
			numberPrecision: 0
		},
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Additional Parameters of the Search Query',
		name: 'search_param',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
	},
	{
		displayName: 'Minimum Product Price',
		name: 'price_min',
		type: 'number',
		typeOptions: {
			numberPrecision: 0
		},
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Maximum Product Price',
		name: 'price_max',
		type: 'number',
		typeOptions: {
			numberPrecision: 0
		},
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Results Sorting Rules',
		name: 'sort_by',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Review Score',
				value: 'review_score',
			},
			{
				name: 'Price (Low to High)',
				value: 'price_low_to_high',
			},
			{
				name: 'Price (High to Low)',
				value: 'price_high_to_low',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-products-advanced',
					'get-products-html'
				],
			},
		},
	},
	{
		displayName: 'Include “Buy on Google” Shops?',
		name: 'get_shops_on_google',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-sellers-advanced',
					'get-sellers-html'
				],
			},
		},
	},
	{
		displayName: 'Additional URL Parameters',
		name: 'additional_specifications',
		placeholder: 'Add Parameter',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Parameter',
				values: [
					{
						displayName: 'Parameter Name',
						name: 'name',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'Parameter Value',
						name: 'value',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
		],
		displayOptions: {
			show: {
					operation: [
						'get-sellers-advanced',
						'get-sellers-html',
						'get-product-specification-advanced',
						'get-product-specification-html'
					],
			},
		},
	},
];
