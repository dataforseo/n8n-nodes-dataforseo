/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const TrustpilotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['trustpilot'],
			},
		},
		options: [
			{
				name: 'Search Trustpilot Business Info',
				value: 'search-trustpilot-business-info',
				action: 'Search trustpilot business info',
				description: 'Get a list of business profiles listed on the Trustpilot platform',
			},
			{
				name: 'Get Trustpilot Reviews',
				value: 'get-trustpilot-reviews',
				action: 'Get trustpilot reviews',
				description: 'Get reviews published on the Trustpilot platform for the local establishment',
			}
		],
		default: 'search-trustpilot-business-info',
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
							'search-trustpilot-business-info'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Domain of the Local Establishment',
		name: 'domain',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-trustpilot-reviews'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Results Sorting Parameter',
		name: 'sort_by',
		type: 'options',
		options: [
			{
				name: 'Recency',
				value: 'recency',
			},
			{
				name: 'Relevance',
				value: 'relevance',
			},
		],
		default: 'relevance',
		displayOptions: {
			show: {
				operation: [
					'get-trustpilot-reviews'
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
					'search-trustpilot-business-info',
					'get-trustpilot-reviews'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 140,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'search-trustpilot-business-info'
				],
			},
		},
		default: 10,
	},
	{
		displayName: 'Depth',
		name: 'depth_reviews',
		type: 'number',
		typeOptions: {
			maxValue: 25000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-trustpilot-reviews'
				],
			},
		},
		default: 20,
	}
];
