/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const AppleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['apple'],
			},
		},
		options: [
			{
				name: 'Search Apps',
				value: 'search-apps',
				action: 'Search apps',
				description: 'Get a list of apps ranking on the App Store for the specified keyword',
			},
			{
				name: 'Get App List',
				value: 'get-app-list',
				action: 'Get app list',
				description: 'Get a list of mobile applications published in the top app charts on the App Store platform',
			},
			{
				name: 'Get App Info',
				value: 'get-app-info',
				action: 'Get app info',
				description: 'Get information about the App Store application',
			},
			{
				name: 'Get App Reviews',
				value: 'get-apple-app-reviews',
				action: 'Get app reviews',
				description: 'Get reviews published on the App Store platform by App ID',
			},
			{
				name: 'Get App Listings Search',
				value: 'get-apple-app-listings-search',
				action: 'Get app listings search',
				description: 'Get a list of apps published on App Store along with additional information: its ID, icon, reviews count, rating, price, and other data',
			}
		],
		default: 'search-apps',
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
					'search-apps'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'App Collection',
		name: 'app_collection',
		type: 'options',
		description: 'App collection on App Store from which apps will be collected',
		options: [
			{
				name: 'Top Free IOS',
				value: 'top_free_ios',
			},
			{
				name: 'Top Paid IOS',
				value: 'top_paid_ios',
			},
			{
				name: 'Top Grossing IOS',
				value: 'top_grossing_ios',
			},
			{
				name: 'New IOS',
				value: 'new_ios',
			},
			{
				name: 'New Free IOS',
				value: 'new_free_ios',
			},
			{
				name: 'New Paid IOS',
				value: 'new_paid_ios',
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-list'
				],
			},
		},
		required: true,
		default: 'top_free_ios',
	},
	{
		displayName: 'ID of the App',
		name: 'app_id',
		type: 'string',
		hint: 'ID of the mobile application on App Store.',
		displayOptions: {
			show: {
				operation: [
					'get-app-info',
					'get-apple-app-reviews'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'App Categories',
		name: 'categories',
		placeholder: 'Add Category',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'The categories you specify are used to search for app listings',
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
						hint: 'You can get the full list of available app listing categories by <a href="https://docs.dataforseo.com/v3/app_data/apple/app_listings/categories/">this link</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-apple-app-listings-search'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/app_data/apple/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'search-apps',
					'get-app-list',
					'get-app-info',
					'get-apple-app-reviews'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/app_data/apple/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'search-apps',
					'get-app-list',
					'get-app-info',
					'get-apple-app-reviews'
				],
			},
		},
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
					'search-apps',
					'get-app-list',
					'get-app-info',
					'get-apple-app-reviews'
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
					'search-apps'
				],
			},
		},
		default: 100,
	},
	{
		displayName: 'Depth',
		name: 'depth_for_list',
		type: 'number',
		typeOptions: {
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-app-list'
				],
			},
		},
		default: 100,
	},
	{
		displayName: 'Depth',
		name: 'depth_for_reviews',
		type: 'number',
		typeOptions: {
			maxValue: 500,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-apple-app-reviews'
				],
			},
		},
		default: 50,
	},
	{
		displayName: 'Application Category on the App Store',
		name: 'app_category',
		type: 'string',
		hint: 'You can review the full list of available categories <a href="https://docs.dataforseo.com/v3/app_data/apple/categories/">here</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-app-list'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Results Sorting Parameters',
		name: 'sort_by',
		type: 'options',
		options: [
			{
				name: 'Most Recent',
				value: 'most_recent',
			},
			{
				name: 'Most Helpful',
				value: 'most_helpful',
			},
		],
		default: 'most_helpful',
		displayOptions: {
			show: {
				operation: [
					'get-apple-app-reviews'
				],
			},
		},
	},
		{
		displayName: 'Keyword in the App’s Description',
		name: 'description',
		type: 'string',
		hint: 'Can contain up to 200 characters.',
		displayOptions: {
			show: {
				operation: [
					'get-apple-app-listings-search'
				],
			},
		},
		default: ''
	},
	{
		displayName: 'Keyword in the App’s Title',
		name: 'title',
		type: 'string',
		hint: 'Can contain up to 200 characters.',
		displayOptions: {
			show: {
				operation: [
					'get-apple-app-listings-search'
				],
			},
		},
		default: ''
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/apple/app_listings/available_filters.',
		displayOptions: {
				show: {
						operation: [
							'get-apple-app-listings-search'
						],
				},
		},
	},
	{
		displayName: 'Results Sorting Rules',
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
					'get-apple-app-listings-search'
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
							'get-apple-app-listings-search'
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
							'get-apple-app-listings-search'
						],
				},
		},
		default: 0,
	}
];
