import {
	INodeProperties,
} from 'n8n-workflow';

export const SerpOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['serp'],
				},
		},
		options: [
			{
					name: 'Get Parsed SERP',
					value: 'get-parsed-serp',
					action: 'Get parsed serp',
					description: 'Get Google Search results for the specified keyword',
			},
		],
		default: 'get-parsed-serp',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: ['get-parsed-serp'],
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
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/locations/">Supported locations</a>.',
		displayOptions: {
				show: {
						operation: ['get-parsed-serp'],
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/languages/">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: ['get-parsed-serp'],
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
				operation: ['get-parsed-serp'],
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
				operation: ['get-parsed-serp'],
			},
		},
	},
	{
		displayName: 'Search Engine Domain',
		name: 'se_domain',
		type: 'string',
		default: '',
		hint: 'We choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field. Example: google.co.uk, google.com.au, google.de, etc.',
		displayOptions: {
			show: {
				operation: ['get-parsed-serp'],
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
						operation: ['get-parsed-serp'],
				},
		},
		default: 100,
	},
	{
		displayName: 'Target',
		name: 'target',
		type: 'string',
		default: '',
		description: 'Target domain, subdomain, or webpage to get results for',
		hint: 'A domain or a subdomain should be specified without <b>https://</b> and <b>www.</b> Note that the results of target-specific tasks will only include SERP elements that contain a url string. You can also use a wildcard (<b>*</b>) character to specify the search pattern in SERP and narrow down the results. Examples:<br/><b>example.com</b> – returns results for the website’s home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/ <br/><b>example.com*</b> – returns results for the domain, including all its pages<br/><b>*example.com*</b> – returns results for the entire domain, including all its pages and subdomains <br/><b>*example.com</b> – returns results for the home page regardless of the subdomain, such as https://en.example.com <br/><b>example.com/example-page</b> – returns results for the exact URL <br/><b>example.com/example-page*</b> – returns results for all domain’s URLs that start with the specified string.',
		displayOptions: {
			show: {
				operation: ['get-parsed-serp'],
			},
		},
	},
];
