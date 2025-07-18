import {
	INodeProperties,
} from 'n8n-workflow';

export const ContentGenerationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Generate Text From Initial Input',
				value: 'generate-text-from-initial-input',
				action: 'Get generated text from input',
				description: 'Get a text generated based on the part of the text you define and other available parameters',
			},
			{
				name: 'Generate Text By Topic',
				value: 'generate-text-by-topic',
				action: 'Generate text by topic',
				description: 'Get a text generated based on the topic and other parameters you specify',
			},
			{
				name: 'Generate Meta Tags',
				value: 'generate-meta-tags',
				action: 'Generate meta tags',
				description: 'Get title and description meta tags for a text specified in the request',
			},
			{
				name: 'Generate Sub Topics',
				value: 'generate-sub-topics',
				action: 'Generate sub topics',
				description: 'Get 10 subtopics generated based on the topic and other parameters you specify',
			},
			{
				name: 'Paraphrase Text',
				value: 'paraphrase-text',
				action: 'Paraphrase text',
				description: 'Get a paraphrased version of the text you specify',
			},
			{
				name: 'Check Grammar',
				value: 'check-grammar',
				action: 'Check grammar',
				description: 'Get grammar and spelling corrections for the text you specify',
			},
			{
				name: 'Get Text Summary',
				value: 'get-text-summary',
				action: 'Get text summary',
				description: 'Get statistical data based on the given text, such as the number of words and sentences, vocabulary density, and text readability',
			}
		],
		default: 'generate-text-from-initial-input',
	},

	// Parameters
	{
		displayName: 'Target Text',
		name: 'text',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'generate-text-from-initial-input',
							'generate-meta-tags',
							'paraphrase-text',
							'check-grammar',
							'get-text-summary'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'language_name',
		type: 'string',
		default: '',
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/content_generation/check_grammar/languages/">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'check-grammar'
				],
			},
		},
		required: true
	},
	{
		displayName: 'Language',
		name: 'language_name_summary',
		type: 'string',
		default: '',
		description: 'Full name of the language',
		hint: 'Example: English. You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/content_generation/text_summary/languages/">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-text-summary'
				],
			},
		},
		required: true
	},
	{
		displayName: 'Main Topic of the Content to Generate',
		name: 'topic',
		type: 'string',
		hint: 'Can contain from 1 to 50 tokens',
		displayOptions: {
				show: {
						operation: [
							'generate-text-by-topic',
							'generate-sub-topics'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Number of Words in Content',
		name: 'word_count',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-by-topic'
					],
				},
		},
		required: true,
		default: null
	},
	{
		displayName: 'Generation Limit for New Tokens',
		name: 'max_new_tokens',
		hint: 'Required field if max_tokens is not specified.',
		type: 'number',
		typeOptions: {
			maxValue: 300,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: null
	},
	{
		displayName: 'Generation Limit for All Tokens',
		name: 'max_tokens',
		hint: 'Required field if max_new_tokens is not specified.',
		type: 'number',
		typeOptions: {
			maxValue: 1024,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: null
	},
	{
		displayName: 'Secondary Topics of the Content to Generate',
		name: 'sub_topics',
		placeholder: 'Add topic',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 10 terms',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Topic',
				values: [
					{
						displayName: 'Topic',
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
					'generate-text-by-topic'
				],
			}
		},
	},
	{
		displayName: 'Meta Description of the Content to Generate',
		name: 'description',
		type: 'string',
		hint: 'Can contain from 1 to 1000 tokens',
		displayOptions: {
				show: {
						operation: [
							'generate-text-by-topic'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Keywords for the Content to Generate',
		name: 'meta_keywords',
		placeholder: 'Add keyword',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 10 terms',
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
				operation: [
					'generate-text-by-topic'
				],
			}
		},
	},
	{
		displayName: 'Creativity of Content Generation',
		name: 'creativity_index',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 1,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input',
						'generate-text-by-topic',
						'generate-meta-tags',
						'generate-sub-topics'
					],
				},
		},
		default: 0.8
	},
		{
		displayName: 'Creativity of Content Generation',
		name: 'creativity_index_required',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 1,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'paraphrase-text'
					],
				},
		},
		default: 0.8
	},
	{
		displayName: 'Token Repetition',
		name: 'token_repetition_penalty',
		type: 'number',
		typeOptions: {
			minValue: 0.5,
			maxValue: 2,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: 1
	},
	{
		displayName: 'The Number of Initial Tokens in Each Iteration for Choosing a Subsequent Word',
		name: 'top_k',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: 40
	},
	{
		displayName: 'Excludes Initial Tokens With Probability Lower than One',
		name: 'top_p',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 1,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: 0.9
	},
	{
		displayName: 'Controls the Randomness in the Output',
		name: 'temperature',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 1,
			numberPrecision: 1,
		},
		displayOptions: {
				show: {
					operation: [
						'generate-text-from-initial-input'
					],
				},
		},
		default: 0.7
	},
	{
		displayName: 'Words or Phrases to Avoid When Generating a Text',
		name: 'avoid_words',
		placeholder: 'Add word',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 50 terms',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Word',
				values: [
					{
						displayName: 'Word',
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
					'generate-text-from-initial-input'
				],
			}
		},
	},
	{
		displayName: 'Words or Phrases to Avoid in the Beginning of the Generated Text',
		name: 'avoid_starting_words',
		placeholder: 'Add word',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 50 terms',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Word',
				values: [
					{
						displayName: 'Word',
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
					'generate-text-from-initial-input'
				],
			}
		},
	},
	{
		displayName: 'Words or Phrases to End the Text',
		name: 'stop_words',
		placeholder: 'Add word',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 50 terms',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Word',
				values: [
					{
						displayName: 'Word',
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
					'generate-text-from-initial-input'
				],
			}
		},
	},
	{
		displayName: 'Include Conclusion in Generated Text?',
		name: 'include_conclusion',
		type: 'boolean',
		default: false,
		hint: 'If set to true, generated content will include a logical conclusion.',
		displayOptions: {
				show: {
						operation: [
							'generate-text-by-topic'
						],
				},
		},
	},
	{
		displayName: 'Token for Generating Subsequent Results',
		name: 'supplement_token',
		// eslint-disable-next-line n8n-nodes-base/node-param-type-options-password-missing
		type: 'string',
		hint: 'You can use this parameter to continue the generation of text from the initial response.',
		displayOptions: {
				show: {
						operation: [
							'generate-text-from-initial-input',
							'generate-text-by-topic'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Maximum Number of Elements Within Internal Arrays',
		name: 'internal_list_limit',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
					operation: [
						'get-text-summary'
					],
				},
		},
		default: 10
	},
];
