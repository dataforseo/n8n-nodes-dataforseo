import {
	INodeProperties,
} from 'n8n-workflow';

export const BaiduOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['baidu'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Baidu Organic SERP Regular',
				value: 'get-baidu-organic-serp-regular',
				action: 'Get baidu organic SERP regular',
				description: 'Get Regular Baidu Search results for the specified keyword',
			},
			{
				name: 'Get Baidu Organic SERP Advanced',
				value: 'get-baidu-organic-serp-advanced',
				action: 'Get baidu organic SERP advanced',
				description: 'Get Advanced Baidu Search results for the specified keyword'
			},
			{
				name: 'Get Baidu Organic SERP HTML',
				value: 'get-baidu-organic-serp-html',
				action: 'Get baidu organic SERP html',
				description: 'Get HTML Baidu Search results for the specified keyword'
			}
		],
		default: 'get-baidu-organic-serp-regular',
	},

	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-baidu-organic-serp-regular',
							'get-baidu-organic-serp-advanced',
							'get-baidu-organic-serp-html'
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
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/baidu/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/baidu/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'location_coordinate',
		type: 'string',
		default: '',
		hint: 'Parameter should be specified in the “latitude,longitude,radius” format. Example: 53.476225,-2.243572,200',
		displayOptions: {
			show: {
				operation: [
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
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
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
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
			{
				name: 'Tablet',
				value: 'tablet',
			},
		],
		default: 'desktop',
		displayOptions: {
			show: {
				operation: [
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
				],
			},
		},
	},
	{
		displayName: 'OS',
		name: 'os',
		type: 'options',
		description: 'Device operating system',
		hint: 'If you specify desktop in the device field, choose from the following values: windows, macos. If you specify mobile or tablet in the device field, choose from the following values: android, ios.',
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
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
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
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
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
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Include Direct URL for Each Ranked Result?',
		name: 'get_website_url',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-baidu-organic-serp-regular',
					'get-baidu-organic-serp-advanced',
					'get-baidu-organic-serp-html'
				],
			},
		},
	},
];

