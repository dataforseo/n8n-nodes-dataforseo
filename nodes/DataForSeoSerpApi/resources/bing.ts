import {
	INodeProperties,
} from 'n8n-workflow';

export const BingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['bing'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live Bing Organic SERP Regular',
				value: 'get-live-bing-organic-serp-regular',
				action: 'Get live bing organic SERP regular',
				description: 'Get Regular Bing Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Bing Organic SERP Advanced',
				value: 'get-live-bing-organic-serp-advanced',
				action: 'Get live bing organic SERP advanced',
				description: 'Get Advanced Bing Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Bing Organic SERP HTML',
				value: 'get-live-bing-organic-serp-html',
				action: 'Get live bing organic SERP HTML',
				description: 'Get HTML Bing Search results for the specified keyword (live)'
			},
			{
				name: 'Get Bing Organic SERP Regular',
				value: 'get-bing-organic-serp-regular',
				action: 'Get bing organic SERP regular',
				description: 'Get Regular Bing Search results for the specified keyword',
			},
			{
				name: 'Get Bing Organic SERP Advanced',
				value: 'get-bing-organic-serp-advanced',
				action: 'Get bing organic SERP advanced',
				description: 'Get Advanced Bing Search results for the specified keyword'
			},
			{
				name: 'Get Bing Organic SERP HTML',
				value: 'get-bing-organic-serp-html',
				action: 'Get bing organic SERP html',
				description: 'Get HTML Bing Search results for the specified keyword'
			},
			{
				name: 'Get Live Bing Local Finder SERP Regular',
				value: 'get-live-bing-local-finder-serp-regular',
				action: 'Get live bing local finder SERP regular',
				description: 'Get Regular Bing Local Finder Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Bing Local Finder SERP HTML',
				value: 'get-live-bing-local-finder-serp-html',
				action: 'Get live bing local finder SERP html',
				description: 'Get HTML Bing Local Finder Search results for the specified keyword (live)'
			},
			{
				name: 'Get Bing Local Finder SERP Regular',
				value: 'get-bing-local-finder-serp-regular',
				action: 'Get bing local finder SERP regular',
				description: 'Get Regular Bing Local Finder Search results for the specified keyword'
			},
			{
				name: 'Get Bing Local Finder SERP HTML',
				value: 'get-bing-local-finder-serp-html',
				action: 'Get bing local finder SERP html',
				description: 'Get HTML Bing Local Finder Search results for the specified keyword'
			}
		],
		default: 'get-live-bing-organic-serp-regular',
	},

	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-bing-organic-serp-regular',
							'get-live-bing-organic-serp-advanced',
							'get-live-bing-organic-serp-html',
							'get-bing-organic-serp-regular',
							'get-bing-organic-serp-advanced',
							'get-bing-organic-serp-html',
							'get-live-bing-local-finder-serp-regular',
							'get-live-bing-local-finder-serp-html',
							'get-bing-local-finder-serp-regular',
							'get-bing-local-finder-serp-html'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/bing/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
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
		required: true,
		default: '',
		description: 'Full name of search engine language',
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/bing/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate',
		type: 'string',
		default: '',
		hint: 'Example: 53.476225,-2.243572',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
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
					'get-live-bing-organic-serp-advanced',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Direct URL of the Search Query',
		name: 'url',
		type: 'string',
		default: '',
		description: 'You can specify a direct URL and we will sort it out to the necessary fields',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Device',
		name: 'device',
		type: 'options',
		options: [
			{
				name: 'Desktop',
				value: 'desktop',
			},
			{
				name: 'Mobile',
				value: 'mobile',
			},
		],
		default: 'desktop',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html'
				],
			},
		},
	},
	{
		displayName: 'OS',
		name: 'os',
		type: 'options',
		description: 'Device operating system',
		hint: 'If you specify desktop in the device field, choose from the following values: windows, macos. If you specify mobile in the device field, choose from the following values: android, ios.',
		options: [
			{
				name: 'Windows',
				value: 'windows',
			},
			{
				name: 'macOS',
				value: 'macos',
			},
			{
				name: 'Android',
				value: 'android',
			},
			{
				name: 'iOS',
				value: 'ios',
			},
		],
		default: 'windows',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
				],
			},
		},
	},
	{
		displayName: 'OS',
		name: 'os_desktop_only',
		type: 'options',
		description: 'Device operating system',
		hint: 'This API provides results for desktop only.',
		options: [
			{
				name: 'Windows',
				value: 'windows',
			},
			{
				name: 'macOS',
				value: 'macos',
			}
		],
		default: 'windows',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Depth',
		name: 'depth',
		type: 'number',
		typeOptions: {
			maxValue: 700,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
		default: 100,
	},
	{
		displayName: 'Page Crawl Limit',
		name: 'max_crawl_pages',
		type: 'number',
		typeOptions: {
			maxValue: 100,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Calculate Pixel Rankings for SERP Elements in Advanced Results?',
		name: 'calculate_rectangles',
		type: 'boolean',
		hint: "If set to true, the related_result element in the response will be provided as a snippet of its parent organic result.",
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-advanced',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Browser Screen Width',
		name: 'browser_screen_width',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-advanced',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Browser Screen Height',
		name: 'browser_screen_height',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-advanced',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Browser Screen Resolution Ratio',
		name: 'browser_screen_resolution_ratio',
		hint: 'Possible values: from 1 to 3',
		type: 'number',
		typeOptions: {
			maxValue: 3,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-advanced',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Additional Parameters of the Search Query',
		name: 'search_param',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-bing-organic-serp-regular',
					'get-live-bing-organic-serp-advanced',
					'get-live-bing-organic-serp-html',
					'get-bing-organic-serp-regular',
					'get-bing-organic-serp-advanced',
					'get-bing-organic-serp-html',
					'get-live-bing-local-finder-serp-regular',
					'get-live-bing-local-finder-serp-html',
					'get-bing-local-finder-serp-regular',
					'get-bing-local-finder-serp-html'
				],
			},
		},
	},
];

