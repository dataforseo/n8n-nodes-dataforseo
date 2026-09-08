import {
	INodeProperties,
} from 'n8n-workflow';

export const TripAdvisorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
			},
		},
		options: [
			{
				name: 'Get Tripadvisor Business Data',
				value: 'search-tripadvisor-business-data',
				action: 'Search tripadvisor business data',
				description: 'Get a list of business profiles listed on the Tripadvisor platform',
			},
			{
				name: 'Get Tripadvisor Reviews',
				value: 'get-tripadvisor-reviews',
				action: 'Get tripadvisor reviews',
				description: 'Get results from the “Reviews” element on the Tripadvisor platform',
			}
		],
		default: 'search-tripadvisor-business-data',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 characters in the keyword field. All %## will be decoded (plus character ‘+’ will be decoded to a space character). This field can also be used to pass the following parameters: cid, place id, spp.',
		displayOptions: {
				show: {
						operation: [
							'search-tripadvisor-business-data',
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'URL Path of the Business Entity',
		name: 'url_path',
		type: 'string',
		hint: 'URL path to the Tripadvisor page of the business entity. Required field if you do not specify keyword.',
		displayOptions: {
				show: {
						operation: [
							'get-tripadvisor-reviews'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Keyword',
		name: 'keyword_reviews',
		type: 'string',
		hint: 'Required field if you do not specify url_path. You can specify up to 700 characters in the keyword filed. All %## will be decoded (plus character ‘+’ will be decoded to a space character). This field can also be used to pass the following parameters: cid, place id, spp.',
		displayOptions: {
				show: {
						operation: [
							'get-tripadvisor-reviews'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/tripadvisor/locations/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: [
							'search-tripadvisor-business-data',
							'get-tripadvisor-reviews'

						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/tripadvisor/languages/?bash">Supported languages</a>',
		displayOptions: {
				show: {
						operation: [
							'get-tripadvisor-reviews'
						],
				},
		},
		default: '',
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
					'search-tripadvisor-business-data',
					'get-tripadvisor-reviews'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 210,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'search-tripadvisor-business-data'
				],
			},
		},
		default: 30,
	},
	{
		displayName: 'Depth',
		name: 'depth_reviews',
		type: 'number',
		typeOptions: {
			maxValue: 4490,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-tripadvisor-reviews'
				],
			},
		},
		default: 10,
	},
	{
		displayName: 'Tripadvisor Traveler Rating for a Place of Interest',
		name: 'ratings',
		type: 'multiOptions',
		options: [
			{
				name: 'Average',
				value: 'average',
			},
			{
				name: 'Excellent',
				value: 'excellent',
			},
			{
				name: 'Poor',
				value: 'poor',
			},
			{
				name: 'Terrible',
				value: 'terrible',
			},
			{
				name: 'Very Good',
				value: 'very_good',
			}
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-tripadvisor-reviews'
				],
			},
		},
	},
	{
		displayName: 'Filter by Type of Travelers Who Left a Review',
		name: 'visit_type',
		type: 'multiOptions',
		options: [
			{
				name: 'Business',
				value: 'business',
			},
			{
				name: 'Couples',
				value: 'couples',
			},
			{
				name: 'Families',
				value: 'families',
			},
			{
				name: 'Friends',
				value: 'friends',
			},
			{
				name: 'Solo',
				value: 'solo',
			}
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-tripadvisor-reviews'
				],
			},
		},
	},
	{
		displayName: 'Filter by Months When a Traveler Made a Visit',
		name: 'months',
		type: 'multiOptions',
		options: [
			{
				name: '01 January',
				value: 'january',
			},
			{
				name: '02 February',
				value: 'february',
			},
			{
				name: '03 March',
				value: 'march',
			},
			{
				name: '04 April',
				value: 'april',
			},
			{
				name: '05 May',
				value: 'may',
			},
			{
				name: '06 June',
				value: 'june',
			},
			{
				name: '07 July',
				value: 'july',
			},
			{
				name: '08 August',
				value: 'august',
			},
			{
				name: '09 September',
				value: 'september',
			},{
				name: '10 October',
				value: 'october',
			},
			{
				name: '11 November',
				value: 'november',
			},
			{
				name: '12 December',
				value: 'december',
			}
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-tripadvisor-reviews'
				],
			},
		},
	},
	{
		displayName: 'Search Reviews Containing a Specified Keyword',
		name: 'search_reviews_keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-tripadvisor-reviews'
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
				name: 'Empty',
				value: '',
			},
			{
				name: 'Most Recent',
				value: 'most_recent',
			},
			{
				name: 'Detailed Reviews',
				value: 'detailed_reviews',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-tripadvisor-reviews'
				],
			},
		},
	},
	{
		displayName: 'Translate Reviews According to the URL Path?',
		name: 'translate_reviews',
		type: 'boolean',
		default: true,
		displayOptions: {
				show: {
						operation: [
							'get-tripadvisor-reviews'
						],
				},
		},
	}
];
