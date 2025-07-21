/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const BusinessListingsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['business_listings'],
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
				name: 'Get Categories Aggregation',
				value: 'get-categories-aggregation',
				action: 'Get categories aggregation',
				description: 'Get data about groups of related business categories along with the number of entities in each category',
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
					'get-categories-aggregation'
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
						operation: [
							'get-business-listings',
							'get-categories-aggregation'
						],
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
						operation: [
							'get-business-listings',
							'get-categories-aggregation'
						],
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
						operation: [
							'get-business-listings',
							'get-categories-aggregation'
						],
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
						operation: [
							'get-business-listings',
							'get-categories-aggregation'
						],
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
						operation: [
							'get-business-listings'
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
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/business_data/business_listings/filters/?bash">DataForSEO documentation</a>',
		displayOptions: {
				show: {
						operation: [
							'get-categories-aggregation'
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
					'get-business-listings'
				],
			},
		},
	},
	{
		displayName: 'Maximum Number of Elements Within Internal Arrays',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-categories-aggregation'
				],
			},
		},
		default: 10
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
					'get-business-listings',
					'get-categories-aggregation'
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
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-business-listings',
					'get-categories-aggregation'
				],
			},
		},
		default: 0
	}
];
