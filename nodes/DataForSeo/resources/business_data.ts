import {
	INodeProperties,
} from 'n8n-workflow';

export const BusinessDataOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['business_data'],
				},
		},
		options: [
			{
					name: 'Get Business Listings',
					value: 'get-business-listings',
					action: 'Get business listings',
					description: 'Get information about businesses listed on Google Maps in the specified categories',
			},
			{
				name: 'Get Business Listings Categories Aggregation',
				value: 'get-business-listings-categories-aggregation',
				action: 'Get business listings categories aggregation',
				description: 'Get data about groups of related business categories along with the number of entities in each category',
			},
			{
				name: 'Get Google Reviews',
				value: 'get-google-reviews',
				action: 'Get google reviews',
				description: 'Fetch reviews and related data from millions of Google Business Profiles around the world',
			},
		],
		default: 'get-business-listings',
	},

	// Parameters
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'fixedCollection',
		placeholder: 'Add Category',
		default: [],
		description: 'You can specify up to 10 categories',
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
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-business-listings',
					'get-business-listings-categories-aggregation',
				],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		hint: 'Can contain up to 200 symbols.',
		displayOptions: {
				show: {
						operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
				},
		},
		default: '',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		hint: 'Can contain up to 200 symbols.',
		displayOptions: {
				show: {
						operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
				},
		},
		default: '',
	},
	{
		displayName: 'Is Claimed',
		name: 'is_claimed',
		type: 'boolean',
		displayOptions: {
				show: {
						operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-boolean
		default: null,
	},
	{
		displayName: 'Location Coordinate',
		name: 'location_coordinate',
		type: 'string',
		hint: 'Parameter should be specified in the <b>“latitude,longitude,radius”</b> format, example: 53.476225,-2.243572,200. The maximum number of decimal digits for “latitude” and “longitude”: 7. The minimum value for “radius”: 1. The maximum value for “radius”: 100000.',
		displayOptions: {
				show: {
						operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
				},
		},
		default: '',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/business_data/business_listings/filters/?bash">DataForSEO documentation</a>',
		displayOptions: {
				show: {
						operation: ['get-business-listings'],
				},
		},
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
				name: 'Title, Descending',
				value: 'title,desc'
			},
			{
				name: 'Title, Ascending',
				value: 'title,asc'
			},
			{
				name: 'Description, Descending',
				value: 'description,desc'
			},
			{
				name: 'Description, Ascending',
				value: 'description,asc'
			},
			{
				name: 'Category, Descending',
				value: 'category,desc'
			},
			{
				name: 'Category, Ascending',
				value: 'category,asc'
			},
			{
				name: 'CID, Descending',
				value: 'cid,desc'
			},
			{
				name: 'CID, Ascending',
				value: 'cid,asc'
			},
			{
				name: 'Address, Descending',
				value: 'address,desc'
			},
			{
				name: 'Address, Ascending',
				value: 'address,asc'
			},
			{
				name: 'City, Descending',
				value: 'address_info.city,desc'
			},
			{
				name: 'City, Ascending',
				value: 'address_info.city,asc'
			},
			{
				name: 'ZIP, Descending',
				value: 'address_info.zip,desc'
			},
			{
				name: 'ZIP, Ascending',
				value: 'address_info.zip,asc'
			},
			{
				name: 'Region, Descending',
				value: 'address_info.region,desc'
			},
			{
				name: 'Region, Ascending',
				value: 'address_info.region,asc'
			},
			{
				name: 'Phone, Descending',
				value: 'address_info.phone,desc'
			},
			{
				name: 'Phone, Ascending',
				value: 'address_info.phone,asc'
			},
			{
				name: 'Domain, Descending',
				value: 'address_info.domain,desc'
			},
			{
				name: 'Domain, Ascending',
				value: 'address_info.domain,asc'
			},
			{
				name: 'Total Photos, Descending',
				value: 'total_photos,desc'
			},
			{
				name: 'Total Photos, Ascending',
				value: 'total_photos,asc'
			},
			{
				name: 'Rating Value, Descending',
				value: 'rating.value,desc'
			},
			{
				name: 'Rating Value, Ascending',
				value: 'rating.value,asc'
			},
			{
				name: 'Rating Votes, Descending',
				value: 'rating.votes_count,desc'
			},
			{
				name: 'Rating Votes, Ascending',
				value: 'rating.votes_count,asc'
			},
		],
		displayOptions: {
			show: {
					operation: ['get-business-listings'],
			},
		},
		default: [],
	},
	{
		displayName: 'Internal Dataset Filters',
		name: 'initial_dataset_filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/business_data/business_listings/filters/?bash">DataForSEO documentation</a>',
		displayOptions: {
				show: {
						operation: ['get-business-listings-categories-aggregation'],
				},
		},
	},
	{
		displayName: 'Internal List Limit',
		name: 'internal_list_limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['get-business-listings-categories-aggregation'],
			},
		},
		default: null
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
				operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
		default: 100
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
				operation: ['get-business-listings', 'get-business-listings-categories-aggregation'],
			},
		},
		default: 0
	},
	{
		displayName: 'Search By',
		name: 'search_by',
		type: 'options',
		options: [
			{
				name: 'Keyword',
				value: 'keyword',
			},
			{
				name: 'CID',
				value: 'cid',
			},
			{
				name: 'Place ID',
				value: 'place_id',
			},
		],
		default: 'keyword',
		displayOptions: {
			show: {
					operation: ['get-google-reviews'],
			},
		},
	},
	{
		displayName: 'Keyword/CID/Place ID',
		name: 'keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: ['get-google-reviews'],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Task Priority',
		name: 'task_priority',
		type: 'options',
		hint: 'You will be additionally charged for the tasks with high execution priority.',
		options: [
			{
				name: 'Normal Execution Priority',
				value: '1',
			},
			{
				name: 'High Execution Priority',
				value: '2',
			},
		],
		default: '1',
		displayOptions: {
			show: {
					operation: ['get-google-reviews'],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'Example: United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/google/locations/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: ['get-google-reviews'],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		required: true,
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/google/languages/?bash">Supported languages</a>',
		displayOptions: {
				show: {
						operation: ['get-google-reviews'],
				},
		},
		default: '',
	},
	{
		displayName: 'Number of Reviews',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 4490,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: ['get-google-reviews'],
				},
		},
		default: 10,
	},
	{
		displayName: 'Sort',
		name: 'sort_by',
		type: 'options',
		options: [
			{
				name: 'Newest',
				value: 'newest',
			},
			{
				name: 'Highest Rating',
				value: 'highest_rating',
			},
			{
				name: 'Lowest Rating',
				value: 'lowest_rating',
			},
			{
				name: 'Relevance',
				value: 'relevant',
			},
		],
		default: 'relevant',
		displayOptions: {
			show: {
					operation: ['get-google-reviews'],
			},
		},
	},
];
