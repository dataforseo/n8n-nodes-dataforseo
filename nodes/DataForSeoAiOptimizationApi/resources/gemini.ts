/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const GeminiOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['gemini'],
			},
		},
		options: [
			{
				name: 'Get Live Gemini LLM Responses',
				value: 'get-live-gemini-llm-responses',
				action: 'Get live gemini llm responses',
				description: 'Provides structured responses from a specific Gemini AI model, based on the input parameters',
			},
			{
				name: 'Get Live Gemini LLM Scraper Results Advanced',
				value: 'get-live-gemini-llm-scraper-results-advanced',
				action: 'Get live gemini llm scraper results advanced',
				description: 'Provides live advanced results from Gemini searches',
			},
			{
				name: 'Get Live Gemini LLM Scraper Results HTML',
				value: 'get-live-gemini-llm-scraper-results-html',
				action: 'Get live gemini llm scraper results html',
				description: 'Provides raw HTML page of the Gemini LLM Scraper results for the specified keyword, language, and location',
			},
			{
				name: 'Get Gemini LLM Scraper Results Advanced',
				value: 'get-gemini-llm-scraper-results-advanced',
				action: 'Get gemini llm scraper results advanced',
				description: 'Provides advanced results from Gemini searches',
			},
			{
				name: 'Get Gemini LLM Scraper Results HTML',
				value: 'get-gemini-llm-scraper-results-html',
				action: 'Get gemini llm scraper results html',
				description: 'Provides advanced results from Gemini searches',
			}
		],
		default: 'get-live-gemini-llm-responses',
	},

	// Parameters
	{
		displayName: 'Prompt for the AI Model',
		name: 'user_prompt',
		type: 'string',
		required: true,
		hint: 'The question or task you want to send to the AI model. You can specify up to 500 characters',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Name of the AI Model',
		name: 'model_name',
		type: 'string',
		required: true,
		default: '',
		hint: 'If the basic model name is specified, its latest version will be set by default. For example, if gemini-1.5-pro is specified, the gemini-1.5-pro-002 will be set as model_name automatically. You can receive the list of available LLM models by making a separate request to the <a href="https://api.dataforseo.com/v3/ai_optimization/gemini/llm_responses/models">Models endpoint</a>',
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Maximum Number of Tokens in the AI Response',
		name: 'max_output_tokens',
		type: 'number',
		default: null,
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Randomness of the AI Response',
		name: 'temperature',
		type: 'number',
		default: null,
		typeOptions: {
			numberPrecision: 2,
			minValue: 0,
			maxValue: 2
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Diversity of the AI Response',
		name: 'top_p',
		type: 'number',
		default: null,
		typeOptions: {
			numberPrecision: 2,
			minValue: 0,
			maxValue: 1
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Enable Web Search?',
		name: 'web_search',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Instructions for the AI Behaviour',
		name: 'system_message',
		type: 'string',
		default: '',
		hint: 'Defines the AI’s role, tone, or specific behavior',
		displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Conversation History',
		name: 'message_chain',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add message',
		options: [
			{
				name: 'values',
				displayName: 'Message',
				values: [
					{
						displayName: 'Role',
						name: 'role',
						type: 'options',
						options: [
							{
								name: 'User',
								value: 'user'
							},
							{
								name: 'AI',
								value: 'ai'
							}
						],
						required: true,
						default: 'user',
					},
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						required: true,
						default: '',
					},
				],
			},
		],
		required: true,
		default: [],
				displayOptions: {
			show: {
				operation: [
					'get-live-gemini-llm-responses'
				],
			},
		},
	},
		{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-advanced',
					'get-gemini-llm-scraper-results-html',
					'get-live-gemini-llm-scraper-results-advanced',
					'get-live-gemini-llm-scraper-results-html'
				],
			},
		}
	},
	{
		displayName: 'Task Priority',
		name: 'priority',
		type: 'options',
		options: [
			{
				name: 'Normal Execution Priority',
				value: 1
			},
			{
				name: 'High Execution Priority',
				value: 2
			}
		],
		default: 1,
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-advanced',
					'get-gemini-llm-scraper-results-html'
				],
			},
		}
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		required: true,
		hint: 'Full name of the location. Example: English. You can find the supported locations in the <a href="https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/locations">DataForSEO documentation</a>',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-advanced',
					'get-gemini-llm-scraper-results-html',
					'get-live-gemini-llm-scraper-results-advanced',
					'get-live-gemini-llm-scraper-results-html'
				],
			},
		}
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		required: true,
		hint: 'Full name of the language. Example: English. You can find the supported languages in the <a href="https://api.dataforseo.com/v3/ai_optimization/gemini/llm_scraper/languages">DataForSEO documentation</a>',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-advanced',
					'get-gemini-llm-scraper-results-html',
					'get-live-gemini-llm-scraper-results-advanced',
					'get-live-gemini-llm-scraper-results-html'
				],
			},
		}
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate',
		type: 'string',
		hint: 'Parameter should be specified in the “latitude,longitude” format. Example: 52.6178549,-155.352142',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-advanced',
					'get-gemini-llm-scraper-results-html',
					'get-live-gemini-llm-scraper-results-advanced',
					'get-live-gemini-llm-scraper-results-html'
				],
			},
		}
	},
	{
		displayName: 'Return Expanded Citation Bar in HTML Results?',
		name: 'expand_citations',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-gemini-llm-scraper-results-html',
					'get-live-gemini-llm-scraper-results-html'
				],
			},
		}
	}
];
