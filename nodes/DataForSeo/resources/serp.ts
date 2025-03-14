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
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
					name: 'Get Parsed SERP',
					value: 'get-parsed-serp',
					action: 'Get parsed serp',
					description: 'Get Google Search results for the specified keyword',
			},
			{
				name: 'Get Finance Explore',
				value: 'get-finance-explore',
				action: 'Get finance explore',
				description: 'Get real-time data from the ‘Explore’ tab of Google Finance',
		  },
			{
				name: 'Get Finance Markets',
				value: 'get-finance-markets',
				action: 'Get finance markets',
				description: 'Get real-time data from the ‘Markets’ tab of Google Finance',
			},
			{
				name: 'Get Finance Quote',
				value: 'get-finance-quote',
				action: 'Get finance quote',
				description: 'Get real-time data from the ‘Quote’ tab of Google Finance',
			},
			{
				name: 'Search Google Finance Tickers',
				value: 'search-google-finance-tickers',
				action: 'Search google finance tickers',
				description: 'Search by company name, market, or financial instrument to get Google Finance data on stocks, futures, and asset pairs, their value, growth trends, and identifiers',
			}
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
		displayName: 'Keyword (Ticker or Stock Symbol)',
		name: 'keyword_finance',
		type: 'string',
		displayOptions: {
				show: {
						operation: ['get-finance-quote'],
				},
		},
		required: true,
		hint: 'Ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange.',
		default: '',
	},
	{
		displayName: 'Keyword',
		name: 'keyword_finance_search',
		type: 'string',
		displayOptions: {
				show: {
						operation: ['search-google-finance-tickers'],
				},
		},
		required: true,
		hint: 'Company name or financial instrument.',
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
						operation: ['get-parsed-serp', 'get-finance-explore', 'get-finance-markets', 'get-finance-quote', 'search-google-finance-tickers'],
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
				operation: ['get-parsed-serp', 'get-finance-explore', 'get-finance-markets', 'get-finance-quote', 'search-google-finance-tickers'],
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
	{
		displayName: 'News Type',
		name: 'news_type',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Top Stories',
				value: 'top_stories',
			},
			{
				name: 'Local Market',
				value: 'local_market',
			},
			{
				name: 'World Markets',
				value: 'world_markets',
			},
		],
		default: 'top_stories',
		displayOptions: {
			show: {
				operation: ['get-finance-explore'],
			},
		},
	},
	{
		displayName: 'Market Type',
		name: 'market_type',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Indexes',
				value: 'indexes',
			},
			{
				name: 'Indexes/Americas',
				value: 'indexes/americas',
			},
			{
				name: 'Indexes/Europe Middle East Africa',
				value: 'indexes/europe-middle-east-africa',
			},
			{
				name: 'Indexes/Asia Pacific',
				value: 'indexes/asia-pacific',
			},
			{
				name: 'Most Active',
				value: 'most-active',
			},
			{
				name: 'Gainers',
				value: 'gainers',
			},
			{
				name: 'Losers',
				value: 'losers',
			},
			{
				name: 'Climate Leaders',
				value: 'climate-leaders',
			},
			{
				name: 'Cryptocurrencies',
				value: 'cryptocurrencies',
			},
			{
				name: 'Currencies',
				value: 'currencies',
			},
		],
		default: 'most-active',
		displayOptions: {
			show: {
				operation: ['get-finance-markets'],
			},
		},
	},
	{
		displayName: 'Window',
		name: 'window',
		type: 'options',
		hint: 'Time window for google_finance_quote graph.',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: '1D',
				value: '1D',
			},
			{
				name: '5D',
				value: '5D',
			},
			{
				name: '1M',
				value: '1M',
			},
			{
				name: '6M',
				value: '6M',
			},
			{
				name: 'YTD',
				value: 'YTD',
			},
			{
				name: '1Y',
				value: '1Y',
			},
			{
				name: '5Y',
				value: '5Y',
			},
			{
				name: 'MAX',
				value: 'MAX',
			}
		],
		default: '1D',
		displayOptions: {
			show: {
				operation: ['get-finance-quote'],
			},
		},
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		hint: 'Сategory of financial instruments to search for.',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Stock',
				value: 'stock',
			},
			{
				name: 'Index',
				value: 'index',
			},
			{
				name: 'Mutual Fund',
				value: 'mutual_fund',
			},
			{
				name: 'Currency',
				value: 'currency',
			},
			{
				name: 'Futures',
				value: 'futures',
			}
		],
		default: 'all',
		displayOptions: {
			show: {
				operation: ['search-google-finance-tickers'],
			},
		},
	}
];
