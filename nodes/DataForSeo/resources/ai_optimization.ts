import {
	INodeProperties,
} from 'n8n-workflow';

export const AiOptimizationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['ai_optimization'],
				},
		},
		options: [
			{
				name: 'Get AI Keyword Search Volume',
				value: 'get-ai-keyword-search-volume',
				action: 'Get AI keyword search volume',
				description: 'Get search volume data for target keywords based on their estimated usage in AI tools',
			},
		],
		default: 'get-ai-keyword-search-volume',
	},

	// Parameters
	{
		displayName: 'Keywords',
		name: 'keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'The maximum number of keywords you can specify: <b>1000</b>',
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
						default: ''
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['get-ai-keyword-search-volume'],
			}
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		required: true,
		description: 'Full name of the location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages/">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: ['get-ai-keyword-search-volume'],
				},
		},
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		required: true,
		default: '',
		description: 'Full name of the language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/ai_optimization/ai_keyword_data/locations_and_languages/">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: ['get-ai-keyword-search-volume'],
			},
		},
	}
];
