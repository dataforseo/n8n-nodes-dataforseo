/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const GooglePlayOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['google_play'],
			},
		},
		options: [
			{
				name: 'Get Bulk App Metrics',
				value: 'get-google-play-bulk-app-metrics',
				action: 'Get bulk app metrics',
				description: 'Get ranking metrics for up to 1000 Google Play applications',
			},
			{
				name: 'Get Keywords for App',
				value: 'get-google-play-keywords-for-app',
				action: 'Get keywords for app',
				description: 'Get a list of keywords for which the target app ranks on Google Play',
			},
			{
				name: 'Get App Competitors',
				value: 'get-google-play-app-competitors',
				action: 'Get app competitors',
				description: 'Get a list of mobile applications that intersect with the target app for its ranking keywords on Google Play',
			},
			{
				name: 'Get App Intersection',
				value: 'get-google-play-app-intersection',
				action: 'Get app intersection',
				description: 'Get a list of keywords for which the mobile applications specified in the app_ids object rank within the same Google Play SERP',
			}
		],
		default: 'get-google-play-bulk-app-metrics',
	},

	// Parameters
	{
		displayName: 'Input Mode',
		name: 'input_mode',
		type: 'options',
		options: [
			{
				name: 'Manual',
				value: 'manual'
			},
			{
				name: "JSON",
				value: "json"
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-play-bulk-app-metrics'
				]
			},
		},
		required: true,
		default: 'manual',
	},
	{
		displayName: 'IDs of the App',
		name: 'app_ids',
		placeholder: 'Add app',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of IDs you can specify in this field is 1000',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'App',
				values: [
					{
						displayName: 'App',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the ID in the URL of every app listed on Google Play.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-play-bulk-app-metrics'
				],
				input_mode: ['manual']
			}
		},
	},
	{
		displayName: 'IDs of the App JSON Array',
		name: 'app_ids_json',
		type: 'json',
		required: true,
		description: 'The maximum number of IDs you can specify in this field is 1000',
		hint: 'You can find the ID in the URL of every app listed on Google Play.',
		default: '',
		validateType: 'array',
		displayOptions: {
			show: {
				operation: [
					'get-google-play-bulk-app-metrics'
				],
				input_mode: ['json']
			}
		},
	},
	{
		displayName: 'IDs of the App',
		name: 'app_ids_20',
		placeholder: 'Add app',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of IDs you can specify in this field is 20',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'App',
				values: [
					{
						displayName: 'App',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can find the ID in the URL of every app listed on Google Play.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-play-app-intersection'
				],
			}
		},
	},
	{
		displayName: 'ID of the App',
		name: 'app_id',
		type: 'string',
		required: true,
		hint: 'You can find the ID in the URL of every app listed on Google Play.',
		displayOptions: {
				show: {
						operation: [
							'get-google-play-keywords-for-app',
							'get-google-play-app-competitors'
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
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported locations</a>',
		displayOptions: {
				show: {
						operation: [
							'get-google-play-bulk-app-metrics',
							'get-google-play-keywords-for-app',
							'get-google-play-app-competitors',
							'get-google-play-app-intersection'
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
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages/?bash">Supported languages</a>',
		displayOptions: {
			show: {
				operation: [
					'get-google-play-bulk-app-metrics',
					'get-google-play-keywords-for-app',
					'get-google-play-app-competitors',
					'get-google-play-app-intersection'
				],
			},
		},
		default: '',
	},
		{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		hint: 'You can find the supported filters in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/dataforseo_labs/filters/?bash">Supported fields</a>',
		displayOptions: {
				show: {
						operation: [
							'get-google-play-keywords-for-app',
							'get-google-play-app-competitors',
							'get-google-play-app-intersection'
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
					'get-google-play-keywords-for-app',
					'get-google-play-app-competitors',
					'get-google-play-app-intersection'
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
							'get-google-play-keywords-for-app',
							'get-google-play-app-competitors',
							'get-google-play-app-intersection'
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
							'get-google-play-keywords-for-app',
							'get-google-play-app-competitors',
							'get-google-play-app-intersection'
						],
				},
		},
		default: 0,
	},
];
