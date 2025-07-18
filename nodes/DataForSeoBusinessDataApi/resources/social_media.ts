/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const SocialMediaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['social_media'],
			},
		},
		options: [
			{
				name: 'Get Pinterest Data',
				value: 'get-pinterest-data',
				action: 'Get pinterest data',
				description: 'Get data on pins made from the specified URLs',
			},
			{
				name: 'Get Facebook Data',
				value: 'get-facebook-data',
				action: 'Get facebook data',
				description: 'Get the number of likes a certain page received through the Facebook Like button embed',
			},
			{
				name: 'Get Reddit Data',
				value: 'get-reddit-data',
				action: 'Get reddit data',
				description: 'Get information for each share of the target webpage on Reddit',
			},
		],
		default: 'get-pinterest-data',
	},

	// Parameters
	{
		displayName: 'Target URLs',
		name: 'targets',
		placeholder: 'Add target',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'You can specify 10 targets maximum',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Target URL',
						name: 'value',
						type: 'string',
						required: true,
						default: ''
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pinterest-data',
					'get-facebook-data',
					'get-reddit-data'
				],
			},
		},
	}
];
