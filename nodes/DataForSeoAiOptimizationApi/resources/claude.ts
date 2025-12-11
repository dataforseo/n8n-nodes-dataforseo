/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const ClaudeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['claude'],
			},
		},
		options: [
			{
				name: 'Get Live Claude LLM Responses',
				value: 'get-live-claude-llm-responses',
				action: 'Get live claude llm responses',
				description: 'Provides structured responses from a specific Claude model, based on the input parameters',
			}
		],
		default: 'get-live-claude-llm-responses',
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
					'get-live-claude-llm-responses'
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
		hint: 'If the basic model name is specified, its latest version will be set by default. For example, if claude-opus-4-0 is specified, the claude-opus-4-20250514 will be set as model_name automatically. You can receive the list of available LLM models by making a separate request to the <a href="https://api.dataforseo.com/v3/ai_optimization/claude/llm_responses/models">Models endpoint</a>',
		displayOptions: {
			show: {
				operation: [
					'get-live-claude-llm-responses'
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
					'get-live-claude-llm-responses'
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
			maxValue: 1
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-claude-llm-responses'
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
					'get-live-claude-llm-responses'
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
					'get-live-claude-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'Force AI Agent to Use Web Search?',
		name: 'force_web_search',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-claude-llm-responses'
				],
			},
		}
	},
	{
		displayName: 'ISO Country Code of the Location',
		name: 'web_search_country_iso_code',
		type: 'string',
		default: '',
		hint: 'Required if web_search_city is specified',
		displayOptions: {
			show: {
				operation: [
					'get-live-claude-llm-responses'
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
					'get-live-claude-llm-responses'
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
					'get-live-claude-llm-responses'
				],
			},
		},
	}
];
