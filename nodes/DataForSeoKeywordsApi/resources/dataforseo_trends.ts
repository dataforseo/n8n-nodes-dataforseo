import {
	INodeProperties,
} from 'n8n-workflow';

export const DataforseoTrendsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['dataforseo_trends'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live DataForSEO Trends Explore',
				value: 'get-live-dataforseo-trends-explore',
				action: 'Get live dataforseo trends explore',
				description: 'Get keyword popularity data from DataForSEO Trends (live)',
			},
			{
				name: 'Get Live DataForSEO Trends Subregion Interests',
				value: 'get-live-dataforseo-trends-subregion-interests',
				action: 'Get live dataforseo trends subregion interests',
				description: 'Get location-specific keyword popularity data from DataForSEO Trends (live)',
			},
			{
				name: 'Get Live DataForSEO Trends Demography',
				value: 'get-live-dataforseo-trends-demography',
				action: 'Get live dataforseo trends demography',
				description: 'Get demographic breakdown (by age and gender) of keyword popularity per each specified term based on DataForSEO Trends data (live)',
			},
			{
				name: 'Get Live DataForSEO Trends Merged Data',
				value: 'get-live-dataforseo-trends-merged-data',
				action: 'Get live dataforseo trends merged data',
				description: 'Get keyword popularity data, location-specific keyword popularity data, and a demographic breakdown of keyword popularity per each specified term along with comparative values from DataForSEO Trend (live)',
			}
		],
		default: 'get-live-dataforseo-trends-explore',
	},

	{
		displayName: 'Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>5</b>',
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
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-trends-explore',
					'get-live-dataforseo-trends-subregion-interests',
					'get-live-dataforseo-trends-demography',
					'get-live-dataforseo-trends-merged-data'
				],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of the search engine location',
		hint: 'Example: London,England,United Kingdom. You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/keywords_data/dataforseo_trends/locations/?bash">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-live-dataforseo-trends-explore',
							'get-live-dataforseo-trends-subregion-interests',
							'get-live-dataforseo-trends-demography',
							'get-live-dataforseo-trends-merged-data'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'DataForSEO Trends Type',
		name: 'type',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Web',
				value: 'web',
			},
			{
				name: 'News',
				value: 'news',
			},
			{
				name: 'Ecommerce',
				value: 'ecommerce',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-dataforseo-trends-explore',
						'get-live-dataforseo-trends-subregion-interests',
						'get-live-dataforseo-trends-demography',
						'get-live-dataforseo-trends-merged-data'
					],
			},
		},
		default: 'web',
	},
	{
		displayName: 'Date From',
		name: 'date_from',
		type: 'dateTime',
		default: null,
		description: 'Starting date of the time range',
		hint: 'Minimal value for the web type: 2004-01-01. Minimal value for other types: 2008-01-01',
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-trends-explore',
					'get-live-dataforseo-trends-subregion-interests',
					'get-live-dataforseo-trends-demography',
					'get-live-dataforseo-trends-merged-data'
				]
			}
		},
	},
	{
		displayName: 'Date To',
		name: 'date_to',
		type: 'dateTime',
		default: null,
		description: 'Ending date of the time range',
		hint: 'If you don’t specify this field, today’s date will be used by default.',
		displayOptions: {
			show: {
				operation: [
					'get-live-dataforseo-trends-explore',
					'get-live-dataforseo-trends-subregion-interests',
					'get-live-dataforseo-trends-demography',
					'get-live-dataforseo-trends-merged-data'
				]
			}
		},
	},
	{
		displayName: 'Preset Time Ranges',
		name: 'time_range',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Past 4 Hours',
				value: 'past_4_hours',
			},
			{
				name: 'Past Day',
				value: 'past_day',
			},
			{
				name: 'Past 7 Days',
				value: 'past_7_days',
			},
			{
				name: 'Past 30 Days',
				value: 'past_30_days',
			},
			{
				name: 'Past 90 Days',
				value: 'past_90_days',
			},
			{
				name: 'Past 12 Months',
				value: 'past_12_months',
			},
			{
				name: 'Past 5 Years',
				value: 'past_5_years',
			}
		],
		displayOptions: {
			show: {
					operation: [
						'get-live-dataforseo-trends-explore',
						'get-live-dataforseo-trends-subregion-interests',
						'get-live-dataforseo-trends-demography',
						'get-live-dataforseo-trends-merged-data'
					],
			},
		},
		default: '',
	}
];
