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
				name: 'Get Products Advanced',
				value: 'get-amazon-products-advanced',
				action: 'Get products advanced',
				description: 'Get results from Amazon product listings according to the specified keyword (product name), location, and language parameters (advanced)',
			},
			{
				name: 'Get Products HTML',
				value: 'get-amazon-products-html',
				action: 'Get products html',
				description: 'Get results from Amazon product listings according to the specified keyword (product name), location, and language parameters (html)',
			},
			{
				name: 'Get Product ASINs Advanced',
				value: 'get-amazon-product-asins-advanced',
				action: 'Get product asins advanced',
				description: 'Get a full list of ASINs assigned to different modifications of a product (advanced)',
			},
			{
				name: 'Get Product ASINs HTML',
				value: 'get-amazon-product-asins-html',
				action: 'Get product asins html',
				description: 'Get a full list of ASINs assigned to different modifications of a product (html)',
			},
			{
				name: 'Get Sellers Advanced',
				value: 'get-amazon-sellers-advanced',
				action: 'Get sellers advanced',
				description: 'Get the list of sellers that listed the specified product on Google Shopping (advanced)',
			},
			{
				name: 'Get Sellers HTML',
				value: 'get-amazon-sellers-html',
				action: 'Get sellers html',
				description: 'Get the list of sellers that listed the specified product on Google Shopping (html)',
			}
		],
		default: 'get-amazon-products-advanced',
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
							'get-amazon-products-advanced',
							'get-amazon-products-html'
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
		hint: 'Unique product identifier (ASIN) in Amazon. You can receive the asin parameter by making a separate request to the <a href="https://docs.dataforseo.com/v3/merchant/amazon/products/task_post/">Amazon Products endpoint</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-amazon-product-asins-advanced',
							'get-amazon-product-asins-html',
							'get-amazon-sellers-advanced',
							'get-amazon-sellers-html'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Direct URL of the Search Query',
		name: 'url',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-amazon-products-advanced',
							'get-amazon-products-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html',
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html',
					'get-amazon-sellers-advanced',
					'get-amazon-sellers-html'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/merchant/amazon/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-products-advanced',
					'get-amazon-products-html',
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html',
					'get-amazon-sellers-advanced',
					'get-amazon-sellers-html'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/merchant/amazon/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-products-advanced',
					'get-amazon-products-html',
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html',
					'get-amazon-sellers-advanced',
					'get-amazon-sellers-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html',
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html',
					'get-amazon-sellers-advanced',
					'get-amazon-sellers-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html',
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html',
					'get-amazon-sellers-advanced',
					'get-amazon-sellers-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html'
				],
			},
		},
		default: 100,
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
					'get-amazon-products-advanced',
					'get-amazon-products-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Amazon Product Department',
		name: 'department',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Arts & Crafts',
				value: 'Arts & Crafts',
			},
			{
				name: 'Automotive',
				value: 'Automotive',
			},
			{
				name: 'Baby',
				value: 'Baby',
			},
			{
				name: 'Beauty & Personal Care',
				value: 'Beauty & Personal Care',
			},
			{
				name: 'Books',
				value: 'Books',
			},
			{
				name: 'Computers',
				value: 'Computers',
			},
			{
				name: 'Digital Music',
				value: 'Digital Music',
			},
			{
				name: 'Electronics',
				value: 'Electronics',
			},
			{
				name: 'Kindle Store',
				value: 'Kindle Store',
			},
			{
				name: 'Prime Video',
				value: 'Prime Video',
			},
			{
				name: 'Women\'s Fashion',
				value: 'Women\'s Fashion',
			},
			{
				name: 'Men\'s Fashion',
				value: 'Men\'s Fashion',
			},
			{
				name: 'Girls\' Fashion',
				value: 'Girls\' Fashion',
			},
			{
				name: 'Boys\' Fashion',
				value: 'Boys\' Fashion',
			},
			{
				name: 'Deals',
				value: 'Deals',
			},
			{
				name: 'Health & Household',
				value: 'Health & Household',
			},
			{
				name: 'Home & Kitchen',
				value: 'Home & Kitchen',
			},
			{
				name: 'Industrial & Scientific',
				value: 'Industrial & Scientific',
			},
			{
				name: 'Luggage',
				value: 'Luggage',
			},
			{
				name: 'Movies & TV',
				value: 'Movies & TV',
			},
			{
				name: 'Music, CDs & Vinyl',
				value: 'Music, CDs & Vinyl',
			},
			{
				name: 'Pet Supplies',
				value: 'Pet Supplies',
			},
			{
				name: 'Software',
				value: 'Software',
			},
			{
				name: 'Sports & Outdoors',
				value: 'Sports & Outdoors',
			},
			{
				name: 'Tools & Home Improvement',
				value: 'Tools & Home Improvement',
			},
			{
				name: 'Toys & Games',
				value: 'Toys & Games',
			},
			{
				name: 'Video Games',
				value: 'Video Games',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-products-advanced',
					'get-amazon-products-html'
				],
			},
		},
	},
	{
		displayName: 'Additional Parameters of the Search Query',
		name: 'search_param',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-products-advanced',
					'get-amazon-products-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html'
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
					'get-amazon-products-advanced',
					'get-amazon-products-html'
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
				name: 'Relevance',
				value: 'relevance',
			},
			{
				name: 'Price (Low to High)',
				value: 'price_low_to_high',
			},
			{
				name: 'Price (High to Low)',
				value: 'price_high_to_low',
			},
			{
				name: 'Featured',
				value: 'featured',
			},
			{
				name: 'Avg Customer Review',
				value: 'avg_customer_review',
			},
			{
				name: 'Newest Arrival',
				value: 'newest_arrival',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-products-advanced',
					'get-amazon-products-html'
				],
			},
		},
	},
	{
		displayName: 'Load More Local Reviews?',
		name: 'load_more_local_reviews',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html'
				],
			},
		},
	},
	{
		displayName: 'Sort Local Reviews',
		name: 'local_reviews_sort',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Helpful',
				value: 'helpful',
			},
			{
				name: 'Recent',
				value: 'recent',
			}
		],
		default: 'helpful',
		displayOptions: {
			show: {
				operation: [
					'get-amazon-product-asins-advanced',
					'get-amazon-product-asins-html'
				],
			},
		},
	},
];
