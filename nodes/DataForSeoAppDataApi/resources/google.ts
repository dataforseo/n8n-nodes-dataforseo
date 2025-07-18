/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google'],
			},
		},
		options: [
			{
				name: 'Search Apps Advanced',
				value: 'search-apps-advanced',
				action: 'Search apps advanced',
				description: 'Get a list of apps ranking on Google Play for the specified keyword (advanced)',
			},
			{
				name: 'Search Apps HTML',
				value: 'search-apps-html',
				action: 'Search apps html',
				description: 'Get a list of apps ranking on Google Play for the specified keyword (html)',
			},
			{
				name: 'Get App List Advanced',
				value: 'get-app-list-advanced',
				action: 'Get app list advanced',
				description: 'Get a list of mobile applications published in the top charts on the Google Play platform (advanced)',
			},
			{
				name: 'Get App List HTML',
				value: 'get-app-list-html',
				action: 'Get app list html',
				description: 'Get a list of mobile applications published in the top charts on the Google Play platform (html)',
			},
			{
				name: 'Get App Info Advanced',
				value: 'get-app-info-advanced',
				action: 'Get app info advanced',
				description: 'Get information about the Google Play application (advanced)',
			},
			{
				name: 'Get App Info HTML',
				value: 'get-app-info-html',
				action: 'Get app info html',
				description: 'Get information about the Google Play application (html)',
			},
			{
				name: 'Get App Reviews',
				value: 'get-app-reviews',
				action: 'Get app reviews',
				description: 'Get reviews published on the Google Play platform for the app',
			},
			{
				name: 'Get App Listing Search',
				value: 'get-app-listing-search',
				action: 'Get app listing search',
				description: 'Get a list of apps published on Google Play along with additional information: its ID, icon, reviews count, rating, price, and other data',
			}
		],
		default: 'search-apps-advanced',
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
					'search-apps-advanced',
					'search-apps-html'
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
		description: 'App collection on Google Play from which apps will be collected',
		options: [
			{
				name: 'Featured',
				value: 'featured',
			},
			{
				name: 'Topselling Paid',
				value: 'topselling_paid',
			},
			{
				name: 'Topselling Free',
				value: 'topselling_free',
			},
			{
				name: 'Topselling New Free',
				value: 'topselling_new_free',
			},
			{
				name: 'Topselling New Paid',
				value: 'topselling_new_paid',
			},
			{
				name: 'Popgrossing',
				value: 'topgrossing',
			},
			{
				name: 'Movers Shakers',
				value: 'movers_shakers',
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-list-advanced',
					'get-app-list-html'
				],
			},
		},
		required: true,
		default: 'featured',
	},
	{
		displayName: 'ID of the App',
		name: 'app_id',
		type: 'string',
		hint: 'ID of the mobile application on Google Play. You can find the ID in the URL of every app listed on Google Play.',
		displayOptions: {
			show: {
				operation: [
					'get-app-info-advanced',
					'get-app-info-html',
					'get-app-reviews'
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
						hint: 'You can get the full list of available app listing categories by <a href="https://docs.dataforseo.com/v3/app_data/google/app_listings/categories/">this link</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-listing-search'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/app_data/google/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'search-apps-advanced',
					'search-apps-html',
					'get-app-list-advanced',
					'get-app-list-html',
					'get-app-info-advanced',
					'get-app-info-html',
					'get-app-reviews'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/app_data/google/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'search-apps-advanced',
					'search-apps-html',
					'get-app-list-advanced',
					'get-app-list-html',
					'get-app-info-advanced',
					'get-app-info-html',
					'get-app-reviews'
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
					'search-apps-advanced',
					'search-apps-html',
					'get-app-list-advanced',
					'get-app-list-html',
					'get-app-info-advanced',
					'get-app-info-html',
					'get-app-reviews'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 200,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'search-apps-advanced',
					'search-apps-html'
				],
			},
		},
		default: 30,
	},
	{
		displayName: 'Depth',
		name: 'depth_for_list',
		type: 'number',
		typeOptions: {
			maxValue: 200,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-app-list-advanced',
					'get-app-list-html'
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
			maxValue: 100000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-app-reviews'
				],
			},
		},
		default: 150,
	},
	{
		displayName: 'App Category on Google Play',
		name: 'app_category',
		type: 'string',
		hint: 'You can find the supported categories in the <a href="https://docs.dataforseo.com/v3/app_data/google/categories/?bash">DataForSEO documentation</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-app-list-advanced',
					'get-app-list-html'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Filter Results by Age Rating',
		name: 'age_rating',
		type: 'options',
		hint: 'This filter works only in conjunction with the "category": "family" parameter.',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Ages up to 5',
				value: 'ages_up_to_5',
			},
			{
				name: 'Ages 6 - 8',
				value: 'ages_6_8',
			},
			{
				name: 'Ages 9 - 12',
				value: 'ages_9_12',
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-list-advanced',
					'get-app-list-html'
				],
			},
		},
		default: '',
	},
	{
		displayName: 'Filter Reviews by Rating',
		name: 'rating',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: '5',
				value: 5,
			},
			{
				name: '4',
				value: 4,
			},
			{
				name: '3',
				value: 3,
			},
			{
				name: '2',
				value: 2,
			},
			{
				name: '1',
				value: 1,
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-reviews'
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
				name: 'Newest',
				value: 'newest',
			},
			{
				name: 'Most Relevant',
				value: 'most_relevant',
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-app-reviews'
				],
			},
		},
		default: 'most_relevant',
	},
	{
		displayName: 'Keyword in the App’s Description',
		name: 'description',
		type: 'string',
		hint: 'Can contain up to 200 characters.',
		displayOptions: {
			show: {
				operation: [
					'get-app-listing-search'
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
					'get-app-listing-search'
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
		hint: 'You can receive the list of available filters by making a separate request to https://api.dataforseo.com/v3/app_data/google/app_listings/available_filters.',
		displayOptions: {
				show: {
						operation: [
							'get-app-listing-search'
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
					'get-app-listing-search'
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
							'get-app-listing-search'
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
							'get-app-listing-search'
						],
				},
		},
		default: 0,
	}
];
