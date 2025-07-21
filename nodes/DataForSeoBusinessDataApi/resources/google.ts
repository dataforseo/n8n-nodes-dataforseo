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
				name: 'Get Google Business Info Live',
				value: 'get-google-business-info-live',
				action: 'Get google business info live',
				description: 'Get information about specific business entity from Google (live)',
			},
			{
				name: 'Get Google Business Info',
				value: 'get-google-business-info',
				action: 'Get google business info',
				description: 'Get information about specific business entity from Google',
			},
			{
				name: 'Get Google Business Updates',
				value: 'get-google-business-updates',
				action: 'Get google business updates',
				description: 'Get the latest updates of a specific business entity from Google SERP',
			},
			{
				name: 'Get Google Hotel Searches Live',
				value: 'get-google-hotel-searches-live',
				action: 'Get google hotel searches live',
				description: 'Get results containing information about different hotels listed on Google Hotels (live)',
			},
			{
				name: 'Get Google Hotel Searches',
				value: 'get-google-hotel-searches',
				action: 'Get google hotel searches',
				description: 'Get results containing information about different hotels listed on Google Hotels',
			},
			{
				name: 'Get Live Google Hotel Info Advanced',
				value: 'get-google-hotel-info-advanced-live',
				action: 'Get live google hotel searches advanced',
				description: 'Get structured data available for a specific hotel entity on the Google Hotels platform: such as service description, location details, rating, amenities, reviews, images, prices, and more (live)',
			},
			{
				name: 'Get Live Google Hotel Info HTML',
				value: 'get-google-hotel-info-html-live',
				action: 'Get live google hotel searches html',
				description: 'Get unstructured HTML data available for a specific hotel entity on the Google Hotels platform: such as service description, location details, rating, amenities, reviews, images, prices, and more (live)',
			},
			{
				name: 'Get Google Hotel Info Advanced',
				value: 'get-google-hotel-info-advanced',
				action: 'Get google hotel searches advanced',
				description: 'Get structured data available for a specific hotel entity on the Google Hotels platform: such as service description, location details, rating, amenities, reviews, images, prices, and more',
			},
			{
				name: 'Get Google Hotel Info HTML',
				value: 'get-google-hotel-info-html',
				action: 'Get google hotel searches html',
				description: 'Get unstructured HTML data available for a specific hotel entity on the Google Hotels platform: such as service description, location details, rating, amenities, reviews, images, prices, and more',
			},
			{
				name: 'Get Google Reviews',
				value: 'get-google-reviews',
				action: 'Get google reviews',
				description: 'Fetch reviews and related data from millions of Google Business Profiles around the world',
			},
			{
				name: 'Get Extended Google Reviews',
				value: 'get-extended-google-reviews',
				action: 'Get extended google reviews',
				description: 'Fetch reviews from the “Reviews” element of Google SERPs, including not only Google user reviews but also reviews from other reputable sources',
			},
			{
				name: 'Get Live Business Questions and Answers',
				value: 'get-business-questions-and-answers-live',
				action: 'Get live business questions and answers',
				description: 'Get a detailed overview of questions and answers associated with a specific business entity listed on Google My Business (live)',
			},
			{
				name: 'Get Business Questions and Answers',
				value: 'get-business-questions-and-answers',
				action: 'Get business questions and answers',
				description: 'Get a detailed overview of questions and answers associated with a specific business entity listed on Google My Business',
			},
		],
		default: 'get-google-business-info-live',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 characters in the keyword filed. All %## will be decoded (plus character ‘+’ will be decoded to a space character). This field can also be used to pass the following parameters: cid, place id, spp.',
		displayOptions: {
				show: {
						operation: [
							'get-google-business-info',
							'get-google-business-info-live',
							'get-google-business-updates',
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-business-questions-and-answers-live',
							'get-business-questions-and-answers'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Unique Hotel Identifier',
		name: 'hotel_identifier',
		type: 'string',
		hint: 'Unique identifier of a hotel entity in Google search. You can obtain the value by making a request to Advanced Google SERP API, or the Hotel Searches endpoint of Business Data API.',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		required: true,
		default: '',
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
					operation: [
						'get-google-reviews',
						'get-extended-google-reviews'
					],
			},
		},
	},
	{
		displayName: 'Keyword/CID/Place ID',
		name: 'keyword',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-google-reviews',
							'get-extended-google-reviews'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/google/locations/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: [
							'get-google-business-info',
							'get-google-business-info-live',
							'get-google-business-updates',
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-reviews',
							'get-extended-google-reviews',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html',
							'get-business-questions-and-answers-live',
							'get-business-questions-and-answers'
						],
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/business_data/google/languages/?bash">Supported languages</a>',
		displayOptions: {
				show: {
						operation: [
							'get-google-business-info',
							'get-google-business-info-live',
							'get-google-business-updates',
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-reviews',
							'get-extended-google-reviews',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html',
							'get-business-questions-and-answers-live',
							'get-business-questions-and-answers'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Location Coordinate',
		name: 'location_coordinate',
		type: 'string',
		hint: 'Parameter should be specified in the <b>“latitude,longitude,radius”</b> format, example: 53.476225,-2.243572,200. The maximum number of decimal digits for “latitude” and “longitude”: 7. The minimum value for “radius”: 1. The maximum value for “radius”: 100000.',
		displayOptions: {
				show: {
						operation: [
							'get-google-business-info',
							'get-google-business-info-live',
							'get-google-business-updates',
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-reviews',
							'get-extended-google-reviews',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html',
							'get-business-questions-and-answers-live',
							'get-business-questions-and-answers'
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
					'get-google-business-info',
					'get-google-business-updates',
					'get-google-hotel-searches',
					'get-google-reviews',
					'get-extended-google-reviews',
					'get-google-hotel-info-html-live',
					'get-business-questions-and-answers'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth_questions',
		type: 'number',
		typeOptions: {
			maxValue: 700,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-business-questions-and-answers-live',
					'get-business-questions-and-answers'
				],
			},
		},
		default: 20,
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 4490,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-business-updates',
					'get-google-reviews'
				],
			},
		},
		default: 10,
	},
	{
		displayName: 'Depth',
		name: 'depth_hotels',
		type: 'number',
		typeOptions: {
			maxValue: 140,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
		default: 20,
	},
	{
		displayName: 'Depth',
		name: 'depth_extended_reviews',
		type: 'number',
		typeOptions: {
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-extended-google-reviews'
				],
			},
		},
		default: 20,
	},
	{
		displayName: 'Check-in Date',
		name: 'check_in',
		type: 'dateTime',
		hint: 'If you don’t specify this field, tomorrow’s date will be used by default.',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Check-Out Date',
		name: 'check_out',
		type: 'dateTime',
		hint: 'if you don’t specify this field, our system will apply the date of two days from now by default.',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-searches-live',
							'get-google-hotel-searches',
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-html-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Number of Adults',
		name: 'adults',
		hint: 'If you don’t specify this field, the default value of 2 will be applied. Note that you can specify up to 6 persons including both adults and children.',
		type: 'options',
		options: [
			{
				name: '1',
				value: 1,
			},
			{
				name: '2',
				value: 2,
			},
			{
				name: '3',
				value: 3,
			},
			{
				name: '4',
				value: 4,
			},
			{
				name: '5',
				value: 5,
			},
			{
				name: '6',
				value: 6,
			},
		],
		default: 1,
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches',
					'get-google-hotel-info-advanced-live',
					'get-google-hotel-info-html-live',
					'get-google-hotel-info-advanced',
					'get-google-hotel-info-html'
				],
			},
		},
	},
	{
		displayName: 'Number and Age of Children',
		name: 'children',
		placeholder: 'Add child',
		type: 'fixedCollection',
		default: [],
		description: 'If you don’t specify this field, no children will be included in the search',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Child',
				values: [
					{
						displayName: 'Child',
						name: 'value',
						type: 'number',
						typeOptions: {
							numberPrecision: 0
						},
						required: true,
						default: null,
						hint: 'Age of child can be from 0 to 17.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches',
					'get-google-hotel-info-advanced-live',
					'get-google-hotel-info-html-live',
					'get-google-hotel-info-advanced',
					'get-google-hotel-info-html'
				],
			},
		},
	},
	{
		displayName: 'Hotel Stars',
		name: 'stars',
		placeholder: 'Add star',
		type: 'fixedCollection',
		default: [],
		description: 'If you don’t specify this field, no children will be included in the search',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Stars',
				values: [
					{
						displayName: 'Stars',
						name: 'value',
						type: 'number',
						typeOptions: {
							numberPrecision: 0
						},
						required: true,
						default: null
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
	},
	{
		displayName: 'Minimum Rating',
		name: 'min_rating',
		type: 'number',
		typeOptions: {
			numberPrecision: 1,
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
		default: null,
	},
	{
		displayName: 'Results Sorting Parameters',
		name: 'sort_by',
		type: 'options',
		options: [
			{
				name: 'Relevance',
				value: 'relevance',
			},
			{
				name: 'Lowest Price',
				value: 'lowest_price',
			},
			{
				name: 'Highest Rating',
				value: 'highest_rating',
			},
			{
				name: 'Most Reviewed',
				value: 'most_reviewed',
			}
		],
		default: 'relevance',
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
	},
	{
		displayName: 'Minimum Price Per Night',
		name: 'min_price',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
		default: null,
	},
	{
		displayName: 'Maximum Price Per Night',
		name: 'max_price',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
		default: null,
	},
	{
		displayName: 'Hotels With a Free Cancellation?',
		name: 'free_cancellation',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-searches-live',
							'get-google-hotel-searches'
						],
				},
		},
	},
	{
		displayName: 'Search for Vacation Rentals',
		name: 'is_vacation_rentals',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-searches-live',
							'get-google-hotel-searches'
						],
				},
		},
	},
	{
		displayName: 'Hotel Amenities',
		name: 'amenities',
		type: 'multiOptions',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'Air Conditioning',
				value: 'air_conditioning',
			},
			{
				name: 'All Inclusive Available',
				value: 'all_inclusive_available',
			},
			{
				name: 'Bar',
				value: 'bar',
			},
			{
				name: 'Free Breakfast',
				value: 'free_breakfast',
			},
			{
				name: 'Fitness Center',
				value: 'fitness_center',
			},
			{
				name: 'Kid Friendly',
				value: 'kid_friendly',
			},
			{
				name: 'Free Parking',
				value: 'free_parking',
			},
			{
				name: 'Pets Allowed',
				value: 'pets_allowed',
			},
			{
				name: 'Pool',
				value: 'pool',
			},
			{
				name: 'Restaurant',
				value: 'restaurant',
			},
			{
				name: 'Room Service',
				value: 'room_service',
			},
			{
				name: 'SPA',
				value: 'spa',
			},
			{
				name: 'Free WiFi',
				value: 'free_wifi',
			},
			{
				name: 'Parking',
				value: 'parking',
			},
			{
				name: 'Indoor Pool',
				value: 'indoor_pool',
			},
			{
				name: 'Outdoor Pool',
				value: 'outdoor_pool',
			},
			{
				name: 'Wheelchair Accessible',
				value: 'wheelchair_accessible',
			},
			{
				name: 'Beach Access',
				value: 'beach_access',
			}
		],
		default: [],
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-searches-live',
					'get-google-hotel-searches'
				],
			},
		},
	},
	{
		displayName: 'Results Sorting Parameters',
		name: 'sort_by_reviews',
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
				name: 'Relevant',
				value: 'relevant',
			}
		],
		default: 'relevant',
		displayOptions: {
			show: {
				operation: [
					'get-google-reviews'
				],
			},
		},
	},
	{
		displayName: 'Load Hotel Stay Prices by Dates?',
		name: 'load_prices_by_dates',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
	},
	{
		displayName: 'Start Date to Load Prices by Dates',
		name: 'prices_start_date',
		type: 'dateTime',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'End Date to Load Prices by Dates',
		name: 'prices_end_date',
		type: 'dateTime',
		displayOptions: {
				show: {
						operation: [
							'get-google-hotel-info-advanced-live',
							'get-google-hotel-info-advanced',
							'get-google-hotel-info-html'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Predefined Period for Retrieving Daily Price Data',
		name: 'prices_date_range',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Month',
				value: 'month',
			},
			{
				name: 'Three Months',
				value: 'three_months',
			},
			{
				name: 'Six Months',
				value: 'six_months',
			},
			{
				name: 'Year',
				value: 'year',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-google-hotel-info-advanced-live',
					'get-google-hotel-info-advanced',
					'get-google-hotel-info-html'
				],
			},
		},
	},
];
