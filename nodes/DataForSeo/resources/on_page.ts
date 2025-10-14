import {
	INodeProperties,
} from 'n8n-workflow';

export const OnPageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
					resource: ['on_page'],
				},
		},
		options: [
			{
				name: 'Get Page Audit Check',
				value: 'get-page-audit-check',
				action: 'Get page audit check',
				description: 'Run an essential SEO Audit of a page',
			},
			{
				name: 'Parse Page Content',
				value: 'parse-page-content',
				action: 'Parse page content',
				description: 'Get parsed and structured content of any page, including link URLs, anchors, headings, and text',
			},
		],
		default: 'get-page-audit-check',
	},

	// Parameters
	{
		displayName: 'Target Page URL',
		name: 'url',
		type: 'string',
		displayOptions: {
				show: {
						operation: ['get-page-audit-check', 'parse-page-content'],
				},
		},
		required: true,
		default: '',
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Load image, stylesheets, scripts, and broken resources?',
		name: 'load_resources',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: ['get-page-audit-check'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Load the scripts available on a page?',
		name: 'enable_javascript',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: ['get-page-audit-check', 'parse-page-content'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Emulate browser rendering?',
		name: 'enable_browser_rendering',
		type: 'boolean',
		default: false,
		hint: 'By using this parameter you will be able to emulate a browser when loading a web page. Browser rendering loads styles, images, fonts, animations, videos, and other resources on a page.',
		displayOptions: {
				show: {
						operation: ['get-page-audit-check', 'parse-page-content'],
				},
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
		displayName: 'Enable XMLHttpRequest on a page?',
		name: 'enable_xhr',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: ['get-page-audit-check', 'parse-page-content'],
				},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsPageAudit',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['get-page-audit-check'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-collection-type-unsorted-items
		options: [
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Disable the popup requesting cookie consent from the user?',
				name: 'disable_cookie_popup',
				type: 'boolean',
				default: false,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Return data on pages despite the timeout error?',
				name: 'return_despite_timeout',
				type: 'boolean',
				default: false,
				hint: 'If parameter enabled, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error.',
			},
			{
				displayName: 'Custom User Agent',
				name: 'custom_user_agent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Accept Language',
				name: 'accept_language',
				type: 'string',
				hint: 'Language header for accessing the website. All locale formats are supported (xx, xx-XX, xxx-XX, etc.).',
				default: '',
			},
			{
				displayName: 'Custom Javascript',
				name: 'custom_js',
				type: 'string',
				default: '',
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Enable microdata validation?',
				name: 'validate_micromarkup',
				type: 'boolean',
				default: false,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Store HTML of a crawled page?',
				name: 'store_raw_html',
				type: 'boolean',
				default: false,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Check spelling?',
				name: 'check_spell',
				type: 'boolean',
				default: false,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Custom threshold values for checks',
				name: 'checks_threshold',
				placeholder: 'Add Threshold',
				type: 'fixedCollection',
				default: [],
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'thresholdValues',
						displayName: 'Threshold',
						values: [
							{
								displayName: 'Check Name',
								name: 'name',
								type: 'string',
								required: true,
								default: '',
							},
							{
								displayName: 'Threshold Value',
								name: 'value',
								type: 'string',
								default: '',
								required: true,
							},
						],
					},
				],
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Switch proxy pool?',
				name: 'switch_pool',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Proxy Pool',
				name: 'ip_pool_for_scan',
				type: 'options',
				options: [
					{
						name: 'Empty',
						value: '',
					},
					{
						name: 'US',
						value: 'us',
					},
					{
						name: 'DE',
						value: 'de',
					},
				],
				default: '',
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Preset for browser screen parameters',
				name: 'browser_preset',
				type: 'options',
				options: [
					{
						name: 'Empty',
						value: '',
					},
					{
						name: 'Desktop',
						value: 'desktop',
					},
					{
						name: 'Modile',
						value: 'mobile',
					},
					{
						name: 'Tablet',
						value: 'tablet',
					},
				],
				default: '',
			},
			{
				displayName: 'Browser Screen Width',
				name: 'browser_screen_width',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
			{
				displayName: 'Browser Screen Height',
				name: 'browser_screen_height',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
			{
				displayName: 'Browser Screen Scale Factor',
				name: 'browser_screen_scale_factor',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFieldsParsePage',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['parse-page-content'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-collection-type-unsorted-items
		options: [
			{
				displayName: 'Custom User Agent',
				name: 'custom_user_agent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Javascript',
				name: 'custom_js',
				type: 'string',
				default: '',
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Preset for browser screen parameters',
				name: 'browser_preset',
				type: 'options',
				options: [
					{
						name: 'Empty',
						value: '',
					},
					{
						name: 'Desktop',
						value: 'desktop',
					},
					{
						name: 'Modile',
						value: 'mobile',
					},
					{
						name: 'Tablet',
						value: 'tablet',
					},
				],
				default: '',
			},
			{
				displayName: 'Browser Screen Width',
				name: 'browser_screen_width',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
			{
				displayName: 'Browser Screen Height',
				name: 'browser_screen_height',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
			{
				displayName: 'Browser Screen Scale Factor',
				name: 'browser_screen_scale_factor',
				type: 'number',
				typeOptions: {
					numberPrecision: 0,
				},
				default: null,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Store HTML of a crawled page?',
				name: 'store_raw_html',
				type: 'boolean',
				default: false,
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Disable the popup requesting cookie consent from the user?',
				name: 'disable_cookie_popup',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Accept Language',
				name: 'accept_language',
				type: 'string',
				hint: 'Language header for accessing the website. All locale formats are supported (xx, xx-XX, xxx-XX, etc.).',
				default: '',
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
				displayName: 'Switch proxy pool?',
				name: 'switch_pool',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Proxy Pool',
				name: 'ip_pool_for_scan',
				type: 'options',
				options: [
					{
						name: 'Empty',
						value: '',
					},
					{
						name: 'US',
						value: 'us',
					},
					{
						name: 'DE',
						value: 'de',
					},
				],
				default: '',
			},
		],
	},
	{
		displayName: 'Enable Microdata Validation?',
		name: 'validate_micromarkup',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-page-audit-check'
						],
				},
		},
	}
];
