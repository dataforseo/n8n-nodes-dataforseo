import {
	INodeProperties,
} from 'n8n-workflow';

export const NaverOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['naver'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Naver Organic SERP Regular',
				value: 'get-naver-organic-serp-regular',
				action: 'Get naver organic SERP regular',
				description: 'Get Regular Naver Search results for the specified keyword',
			},
			{
				name: 'Get Naver Organic SERP Advanced',
				value: 'get-naver-organic-serp-advanced',
				action: 'Get naver organic SERP advanced',
				description: 'Get Advanced Naver Search results for the specified keyword'
			},
			{
				name: 'Get Naver Organic SERP HTML',
				value: 'get-naver-organic-serp-html',
				action: 'Get naver organic SERP html',
				description: 'Get HTML Naver Search results for the specified keyword'
			}
		],
		default: 'get-naver-organic-serp-regular',
	},

	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-naver-organic-serp-regular',
							'get-naver-organic-serp-advanced',
							'get-naver-organic-serp-html'
						],
				},
		},
		required: true,
		default: '',
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
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
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Search Engine Domain',
		name: 'se_domain',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Additional Parameters of the Search Query',
		name: 'search_param',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-naver-organic-serp-regular',
					'get-naver-organic-serp-advanced',
					'get-naver-organic-serp-html'
				],
			},
		},
	},
];

