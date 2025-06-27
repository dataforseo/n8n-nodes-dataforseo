import {
	INodeProperties,
} from 'n8n-workflow';

export const WhoisOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['whois'],
				},
		},
		options: [
			{
				name: 'Get Live Domain Whois Overview',
				value: 'get-live-domain-whois-overview',
				action: 'Get live domain whois overview',
				description: 'Get Whois data enriched with backlink stats, and ranking and traffic info from organic and paid search results (live)',
			}
		],
		default: 'get-live-domain-whois-overview',
	},
	{
		displayName: 'Limit',
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
					'get-live-domain-whois-overview'
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
		description: 'Offset in the results array',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-domain-whois-overview'
				],
			},
		},
		default: 0
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can add several filters at once (8 filters maximum). You can find details in the <a href="https://docs.dataforseo.com/v3/domain_analytics/whois/overview/live/?bash#filters">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
					operation: [
						'get-live-domain-whois-overview'
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
						hint: 'You can find the supported fields in the <a href="https://docs.dataforseo.com/v3/domain_analytics/whois/overview/live/?bash#order_by">DataForSEO documentation</a>',
						default: '',
					},
					{
						displayName: 'Sorting Type',
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
					'get-live-domain-whois-overview',
				],
			},
		},
	},
];
