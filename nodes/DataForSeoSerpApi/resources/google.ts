import {
	INodeProperties,
} from 'n8n-workflow';

export const GoogleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['google'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live Google Organic SERP Regular',
				value: 'get-live-google-organic-serp-regular',
				action: 'Get live google organic SERP regular',
				description: 'Get Regular Google Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Google Organic SERP Advanced',
				value: 'get-live-google-organic-serp-advanced',
				action: 'Get live google organic SERP advanced',
				description: 'Get Advanced Google Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Google Organic SERP HTML',
				value: 'get-live-google-organic-serp-html',
				action: 'Get live google organic SERP HTML',
				description: 'Get HTML Google Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Organic SERP Regular',
				value: 'get-google-organic-serp-regular',
				action: 'Get google organic SERP regular',
				description: 'Get Regular Google Search results for the specified keyword',
			},
			{
				name: 'Get Google Organic SERP Advanced',
				value: 'get-google-organic-serp-advanced',
				action: 'Get google organic SERP advanced',
				description: 'Get Advanced Google Search results for the specified keyword'
			},
			{
				name: 'Get Google Organic SERP HTML',
				value: 'get-google-organic-serp-html',
				action: 'Get google organic SERP html',
				description: 'Get HTML Google Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Maps SERP Advanced',
				value: 'get-live-google-maps-serp-advanced',
				action: 'Get live google maps SERP advanced',
				description: 'Get Advanced Google Maps Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Maps SERP Advanced',
				value: 'get-google-maps-serp-advanced',
				action: 'Get google maps SERP advanced',
				description: 'Get Advanced Google Maps Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Local Finder SERP Advanced',
				value: 'get-live-google-local-finder-serp-advanced',
				action: 'Get live google local finder SERP advanced',
				description: 'Get Advanced Google Local Finder Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Google Local Finder SERP HTML',
				value: 'get-live-google-local-finder-serp-html',
				action: 'Get live google local finder SERP html',
				description: 'Get HTML Google Local Finder Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Local Finder SERP Advanced',
				value: 'get-google-local-finder-serp-advanced',
				action: 'Get google local finder SERP advanced',
				description: 'Get Advanced Google Local Finder Search results for the specified keyword'
			},
			{
				name: 'Get Google Local Finder SERP HTML',
				value: 'get-google-local-finder-serp-html',
				action: 'Get google local finder SERP html',
				description: 'Get HTML Google Local Finder Search results for the specified keyword'
			},
			{
				name: 'Get Live Google News SERP Advanced',
				value: 'get-live-google-news-serp-advanced',
				action: 'Get live google news SERP advanced',
				description: 'Get Advanced Google News Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Google News SERP HTML',
				value: 'get-live-google-news-serp-html',
				action: 'Get live google news SERP html',
				description: 'Get HTML Google News Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google News SERP Advanced',
				value: 'get-google-news-serp-advanced',
				action: 'Get google news SERP advanced',
				description: 'Get Advanced Google News Search results for the specified keyword'
			},
			{
				name: 'Get Google News SERP HTML',
				value: 'get-google-news-serp-html',
				action: 'Get google news SERP html',
				description: 'Get HTML Google News Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Events SERP Advanced',
				value: 'get-live-google-events-serp-advanced',
				action: 'Get live google events SERP advanced',
				description: 'Get Advanced Google Events Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Events SERP Advanced',
				value: 'get-google-events-serp-advanced',
				action: 'Get google events SERP advanced',
				description: 'Get Advanced Google Events Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Images SERP Advanced',
				value: 'get-live-google-images-serp-advanced',
				action: 'Get live google images SERP advanced',
				description: 'Get Advanced Google Images Search results for the specified keyword (live)'
			},
			{
				name: 'Get Live Google Images SERP HTML',
				value: 'get-live-google-images-serp-html',
				action: 'Get live google images SERP html',
				description: 'Get HTML Google Images Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Images SERP Advanced',
				value: 'get-google-images-serp-advanced',
				action: 'Get google images SERP advanced',
				description: 'Get Advanced Google Images Search results for the specified keyword'
			},
			{
				name: 'Get Google Images SERP HTML',
				value: 'get-google-images-serp-html',
				action: 'Get google images SERP html',
				description: 'Get HTML Google Images Search results for the specified keyword'
			},
			{
				name: 'Get Google Search By Image SERP Advanced',
				value: 'get-google-search-by-image-serp-advanced',
				action: 'Get google search by image SERP advanced',
				description: 'Get Advanced Google Search By Image Search results'
			},
			{
				name: 'Get Google Search By Image SERP HTML',
				value: 'get-google-search-by-image-serp-html',
				action: 'Get google search by image SERP html',
				description: 'Get HTML Google Search By Image Search results'
			},
			{
				name: 'Get Google Jobs SERP Advanced',
				value: 'get-google-jobs-serp-advanced',
				action: 'Get google jobs SERP advanced',
				description: 'Get Advanced Google Jobs Search results'
			},
			{
				name: 'Get Google Jobs SERP HTML',
				value: 'get-google-jobs-serp-html',
				action: 'Get google jobs SERP html',
				description: 'Get HTML Google Jobs Search results'
			},
			{
				name: 'Get Live Google Autocomplete SERP Advanced',
				value: 'get-live-google-autocomplete-serp-advanced',
				action: 'Get live google autocomplete SERP advanced',
				description: 'Get Advanced Google Autocomplete Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Autocomplete SERP Advanced',
				value: 'get-google-autocomplete-serp-advanced',
				action: 'Get google autocomplete SERP advanced',
				description: 'Get Advanced Google Autocomplete Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Dataset Search SERP Advanced',
				value: 'get-live-google-dataset-serp-advanced',
				action: 'Get live google dataset search SERP advanced',
				description: 'Get Advanced Google Dataset Search results for the specified keyword (live)'
			},
			{
				name: 'Get Google Dataset Search SERP Advanced',
				value: 'get-google-dataset-serp-advanced',
				action: 'Get google dataset search SERP advanced',
				description: 'Get Advanced Google Dataset Search results for the specified keyword'
			},
			{
				name: 'Get Live Google Dataset Info Advanced',
				value: 'get-live-google-dataset-info-advanced',
				action: 'Get live google dataset info advanced',
				description: 'Get Advanced Google Dataset Info results (live)'
			},
			{
				name: 'Get Google Dataset Info Advanced',
				value: 'get-google-dataset-info-advanced',
				action: 'Get google dataset info advanced',
				description: 'Get Advanced Google Dataset Info results'
			},
			{
				name: 'Get Live Google Ads Advertisers SERP Advanced',
				value: 'get-live-google-ads-advertisers-serp-advanced',
				action: 'Get live google ads advertisers SERP advanced',
				description: 'Get Advanced Google Ads Advertisers results for the specified keyword (live)'
			},
			{
				name: 'Get Google Ads Advertisers SERP Advanced',
				value: 'get-google-ads-advertisers-serp-advanced',
				action: 'Get google ads advertisers SERP advanced',
				description: 'Get Advanced Google Ads Advertisers results for the specified keyword'
			},
			{
				name: 'Get Live Google Ads Search Advanced',
				value: 'get-live-google-ads-search-advanced',
				action: 'Get live google ads search advanced',
				description: 'Get Advanced Google Ads Search results (live)'
			},
			{
				name: 'Get Google Ads Search Advanced',
				value: 'get-google-ads-search-advanced',
				action: 'Get google ads search advanced',
				description: 'Get Advanced Google Ads Search results'
			},
			{
				name: 'Get Live Finance Explore SERP Advanced',
				value: 'get-live-google-finance-explore-serp-advanced',
				action: 'Get live google finance explore SERP advanced',
				description: 'Get Advanced Google Finance Explore SERP results (live)'
			},
			{
				name: 'Get Live Finance Explore SERP HTML',
				value: 'get-live-google-finance-explore-serp-html',
				action: 'Get live google finance explore SERP HTML',
				description: 'Get HTML Google Finance Explore SERP results (live)'
			},
			{
				name: 'Get Finance Explore SERP Advanced',
				value: 'get-google-finance-explore-serp-advanced',
				action: 'Get google finance explore SERP advanced',
				description: 'Get Advanced Google Finance Explore SERP results'
			},
			{
				name: 'Get Finance Explore SERP HTML',
				value: 'get-google-finance-explore-serp-html',
				action: 'Get google finance explore SERP HTML',
				description: 'Get HTML Google Finance Explore SERP results'
			},
			{
				name: 'Get Live Finance Markets SERP Advanced',
				value: 'get-live-google-finance-markets-serp-advanced',
				action: 'Get live google finance markets SERP advanced',
				description: 'Get Advanced Google Finance Markets SERP results (live)'
			},
			{
				name: 'Get Live Finance Markets SERP HTML',
				value: 'get-live-google-finance-markets-serp-html',
				action: 'Get live google finance markets SERP HTML',
				description: 'Get HTML Google Finance Markets SERP results (live)'
			},
			{
				name: 'Get Finance Markets SERP Advanced',
				value: 'get-google-finance-markets-serp-advanced',
				action: 'Get google finance markets SERP advanced',
				description: 'Get Advanced Google Finance Markets SERP results'
			},
			{
				name: 'Get Finance Markets SERP HTML',
				value: 'get-google-finance-markets-serp-html',
				action: 'Get google finance markets SERP HTML',
				description: 'Get HTML Google Finance Markets SERP results'
			},
			{
				name: 'Get Live Finance Quote SERP Advanced',
				value: 'get-live-google-finance-quote-serp-advanced',
				action: 'Get live google finance quote SERP advanced',
				description: 'Get Advanced Google Finance Quote SERP results (live)'
			},
			{
				name: 'Get Live Finance Quote SERP HTML',
				value: 'get-live-google-finance-quote-serp-html',
				action: 'Get live google finance quote SERP html',
				description: 'Get HTML Google Finance Quote SERP results (live)'
			},
			{
				name: 'Get Finance Quote SERP Advanced',
				value: 'get-google-finance-quote-serp-advanced',
				action: 'Get google finance quote SERP advanced',
				description: 'Get Advanced Google Finance Quote SERP results'
			},
			{
				name: 'Get Finance Quote SERP HTML',
				value: 'get-google-finance-quote-serp-html',
				action: 'Get  google finance quote SERP html',
				description: 'Get HTML Google Finance Quote SERP results'
			},
			{
				name: 'Get Live Finance Ticker Search Advanced',
				value: 'get-live-google-finance-ticker-search-advanced',
				action: 'Get live google finance ticker search advanced',
				description: 'Get Advanced Google Finance Ticker Search results (live)'
			},
			{
				name: 'Get Finance Ticker Search Advanced',
				value: 'get-google-finance-ticker-search-advanced',
				action: 'Get google finance ticker search advanced',
				description: 'Get Advanced Google Finance Ticker Search results'
			}
		],
		default: 'get-live-google-organic-serp-regular',
	},

	// Parameters
	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-organic-serp-regular',
							'get-live-google-organic-serp-advanced',
							'get-live-google-organic-serp-html',
							'get-google-organic-serp-regular',
							'get-google-organic-serp-advanced',
							'get-google-organic-serp-html',
							'get-live-google-maps-serp-advanced',
							'get-google-maps-serp-advanced',
							'get-live-google-local-finder-serp-advanced',
							'get-live-google-local-finder-serp-html',
							'get-google-local-finder-serp-advanced',
							'get-google-local-finder-serp-html',
							'get-live-google-news-serp-advanced',
							'get-live-google-news-serp-html',
							'get-google-news-serp-advanced',
							'get-google-news-serp-html',
							'get-live-google-events-serp-advanced',
							'get-google-events-serp-advanced',
							'get-live-google-images-serp-advanced',
							'get-live-google-images-serp-html',
							'get-google-images-serp-advanced',
							'get-google-images-serp-html',
							'get-google-jobs-serp-advanced',
							'get-google-jobs-serp-html',
							'get-live-google-autocomplete-serp-advanced',
							'get-google-autocomplete-serp-advanced',
							'get-live-google-dataset-serp-advanced',
							'get-google-dataset-serp-advanced',
							'get-live-google-ads-advertisers-serp-advanced',
							'get-google-ads-advertisers-serp-advanced'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Ticker or Stock Symbol',
		name: 'keyword_finance',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-finance-quote-serp-advanced',
							'get-live-google-finance-quote-serp-html',
							'get-google-finance-quote-serp-advanced',
							'get-google-finance-quote-serp-html'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Company or Financial Instrument Name',
		name: 'keyword_ticker_search',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-finance-ticker-search-advanced',
							'get-google-finance-ticker-search-advanced'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'URL of the Image',
		name: 'image_url',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-google-search-by-image-serp-advanced',
							'get-google-search-by-image-serp-html'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'ID of the Dataset',
		name: 'dataset_id',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-dataset-info-advanced',
							'get-google-dataset-info-advanced'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Domain Name',
		name: 'target',
		type: 'string',
		hint: 'Domain name associated with an advertiser account. <b>Required field if advertiser_ids is not specified.</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-google-ads-search-advanced',
							'get-google-ads-search-advanced'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Advertiser Identifiers',
		name: 'advertiser_ids',
		type: 'fixedCollection',
		hint: 'Domain name associated with an advertiser account. <b>Required field if target is not specified.</b>',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'ID',
				values: [
					{
						displayName: 'ID',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
					},
				],
			},
		],
		displayOptions: {
				show: {
						operation: [
							'get-live-google-ads-search-advanced',
							'get-google-ads-search-advanced'
						],
				},
		},
		default: null,
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
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-google-events-serp-advanced',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html',
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html',
					'get-google-autocomplete-serp-advanced',
					'get-google-dataset-serp-advanced',
					'get-google-dataset-info-advanced',
					'get-google-ads-advertisers-serp-advanced',
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html',
					'get-google-finance-ticker-search-advanced'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/locations/">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html',
					'get-live-google-autocomplete-serp-advanced',
					'get-google-autocomplete-serp-advanced',
					'get-live-google-finance-explore-serp-advanced',
					'get-live-google-finance-explore-serp-html',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html',
					'get-live-google-finance-markets-serp-advanced',
					'get-live-google-finance-markets-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html',
					'get-live-google-finance-quote-serp-advanced',
					'get-live-google-finance-quote-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html',
					'get-live-google-finance-ticker-search-advanced',
					'get-google-finance-ticker-search-advanced'
				],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Location',
		name: 'ads_location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/ads_advertisers/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-advertisers-serp-advanced',
					'get-google-ads-advertisers-serp-advanced'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Location',
		name: 'ads_search_location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/ads_search/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Location',
		name: 'jobs_location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/google/jobs/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html'
				],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language',
		name: 'dataset_language_name',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'English',
				value: 'English',
			},
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced',
					'get-live-google-dataset-info-advanced',
					'get-google-dataset-info-advanced'
				],
			},
		},
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
				operation: [
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html',
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html',
					'get-live-google-autocomplete-serp-advanced',
					'get-google-autocomplete-serp-advanced',
					'get-live-google-finance-explore-serp-advanced',
					'get-live-google-finance-explore-serp-html',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html',
					'get-live-google-finance-markets-serp-advanced',
					'get-live-google-finance-markets-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html',
					'get-live-google-finance-quote-serp-advanced',
					'get-live-google-finance-quote-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html',
					'get-live-google-finance-ticker-search-advanced',
					'get-google-finance-ticker-search-advanced'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
				],
			},
		},
	},
	{
		displayName: 'GPS Coordinates of a Location',
		name: 'ads_location_coordinate',
		type: 'string',
		default: '',
		hint: 'Example: 53.476225,-2.243572',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-advertisers-serp-advanced',
					'get-google-ads-advertisers-serp-advanced',
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
			},
		},
	},
	{
		displayName: 'Location Search Radius',
		name: 'location_radius',
		type: 'number',
		default: null,
		hint: 'Location search radius in kilometers. Maximal value: 300.',
		typeOptions: {
			maxValue: 300
		},
		displayOptions: {
			show: {
				operation: [
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Date Range to get Events for',
		name: 'date_range',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Today',
				value: 'today',
			},
			{
				name: 'Tomorrow',
				value: 'tomorrow',
			},
			{
				name: 'Week',
				value: 'week',
			},
			{
				name: 'Weekend',
				value: 'weekend',
			},
			{
				name: 'Next Week',
				value: 'next_week',
			},
			{
				name: 'Month',
				value: 'month',
			},
			{
				name: 'Next Month',
				value: 'next_month',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Device',
		name: 'device_desktop_only',
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
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced',
					'get-live-google-dataset-info-advanced',
					'get-google-dataset-info-advanced',
					'get-live-google-finance-explore-serp-advanced',
					'get-live-google-finance-explore-serp-html',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html',
					'get-live-google-finance-markets-serp-advanced',
					'get-live-google-finance-markets-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html',
					'get-live-google-finance-quote-serp-advanced',
					'get-live-google-finance-quote-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html'
				],
			},
		},
	},
	{
		displayName: 'OS',
		name: 'os_desktop_only',
		type: 'options',
		description: 'Device operating system',
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
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced',
					'get-live-google-dataset-info-advanced',
					'get-google-dataset-info-advanced'
				],
			},
		},
	},
	{
		displayName: 'OS',
		name: 'os_windows_only',
		type: 'options',
		description: 'Device operating system',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Windows',
				value: 'windows',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-finance-explore-serp-advanced',
					'get-live-google-finance-explore-serp-html',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html',
					'get-live-google-finance-markets-serp-advanced',
					'get-live-google-finance-markets-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html',
					'get-live-google-finance-quote-serp-advanced',
					'get-live-google-finance-quote-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html'
				],
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
				operation: [
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Advertising Platform',
		name: 'platform',
		type: 'options',
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
				name: 'Google Play',
				value: 'google_play',
			},
			{
				name: 'Google Maps',
				value: 'google_maps',
			},
			{
				name: 'Google Search',
				value: 'google_search',
			},
			{
				name: 'Google Shopping',
				value: 'google_shopping',
			},
			{
				name: 'Youtube',
				value: 'youtube',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
			},
		},
	},
	{
		displayName: 'Ad Format',
		name: 'format',
		type: 'options',
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
				name: 'Text',
				value: 'text',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Video',
				value: 'video',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
			},
		},
	},
	{
		displayName: 'Starting Date of the Time Range',
		name: 'date_from',
		type: 'string',
		default: '',
		hint: 'Date format: "yyyy-mm-dd". Required field if date_to is specified. Minimum value: 2018-05-31. Maximum value: today’s date',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
			},
		},
	},
	{
		displayName: 'Ending Date of the Time Range',
		name: 'date_to',
		type: 'string',
		default: '',
		hint: 'Date format: "yyyy-mm-dd". Required field if date_from is specified. Minimum value: 2018-05-31. Maximum value: today’s date',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html',
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced',
					'get-live-google-ads-search-advanced',
					'get-google-ads-search-advanced'
				],
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
				operation: [
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Display Related Results?',
		name: 'group_organic_results',
		type: 'boolean',
		hint: "If set to true, the related_result element in the response will be provided as a snippet of its parent organic result.",
		default: true,
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html'
				],
			},
		},
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-events-serp-advanced',
					'get-google-events-serp-advanced',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
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
					'get-live-google-organic-serp-regular',
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-news-serp-advanced',
					'get-live-google-news-serp-html',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-live-google-images-serp-advanced',
					'get-live-google-images-serp-html',
					'get-google-images-serp-advanced',
					'get-google-images-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Calcualte Pixel Rankings for SERP Elements in Advanced Results?',
		name: 'calculate_rectangles',
		type: 'boolean',
		hint: "If set to true, the related_result element in the response will be provided as a snippet of its parent organic result.",
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-news-serp-advanced',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
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
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-news-serp-advanced',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
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
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-news-serp-advanced',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
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
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html',
					'get-live-google-news-serp-advanced',
					'get-google-news-serp-advanced',
					'get-google-news-serp-html',
					'get-google-search-by-image-serp-advanced',
					'get-google-search-by-image-serp-html'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Clicks on the Corresponding Element',
		name: 'people_also_ask_click_depth',
		hint: 'Possible values: from 1 to 4',
		type: 'number',
		typeOptions: {
			maxValue: 4,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html'
				],
			},
		},
		default: null
	},

		{
		displayName: 'Load Asynchronous AI Overview',
		name: 'load_async_ai_overview',
		type: 'boolean',
		hint: "Set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically.",
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-advanced',
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html'
				],
			},
		},
	},

	{
		displayName: 'Expand AI Overview?',
		name: 'expand_ai_overview',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-html',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html'
				],
			},
		},
	},

	{
		displayName: 'Remove Specific Parameters From URLs',
		name: 'remove_from_url',
		placeholder: 'Add paremeter',
		type: 'fixedCollection',
		required: true,
		description: 'You can specify up to 10 parameters to remove from URLs in the result',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Parameter',
				values: [
					{
						displayName: 'Parameter',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-google-organic-serp-advanced',
					'get-google-organic-serp-regular',
					'get-google-organic-serp-advanced',
					'get-google-organic-serp-html'
				],
			}
		},
	},

	{
		displayName: 'Search This Area',
		name: 'search_this_area',
		type: 'boolean',
		default: true,
		hint: 'If set to false, the search_this_area mode will be turned off.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced'
				],
			},
		},
	},

	{
		displayName: 'Search Places Mode',
		name: 'search_places',
		type: 'boolean',
		default: true,
		hint: 'The search places mode allows to obtain Google Maps results on a certain place.',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-maps-serp-advanced',
					'get-google-maps-serp-advanced'
				],
			},
		},
	},

	{
		displayName: 'Filter Results by Minimum Rating',
		name: 'min_rating',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: '2 (for Mobile Only)',
				value: 2,
			},
			{
				name: '2.5 (for Mobile Only)',
				value: 2.5,
			},
			{
				name: '3 (for Mobile Only)',
				value: 3,
			},
			{
				name: '3.5',
				value: 3.5,
			},
			{
				name: '4',
				value: 4,
			},
			{
				name: '4.5',
				value: 4.5,
			},
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html'
				],
			},
		},
	},

	{
		displayName: 'Filter Results by Open Hours',
		name: 'time_filter',
		type: 'string',
		hint: 'Possible values: "open_now", "24_hours", "$day_value", "$day_value;$time_value". Instead of $day_value use one of these values: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". Instead of $time_value use one of these values: "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-local-finder-serp-advanced',
					'get-live-google-local-finder-serp-html',
					'get-google-local-finder-serp-advanced',
					'get-google-local-finder-serp-html'
				],
			},
		},
	},

	{
		displayName: 'Employment Contract Type',
		name: 'employment_type',
		placeholder: 'Add employment type',
		type: 'fixedCollection',
		required: true,
		description: 'Type of employment contract for which the search results will be returned',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Employment Type',
				values: [
					{
						displayName: 'Employment Type',
						name: 'value',
						type: 'options',
						required: true,
						default: 'fulltime',
						options: [
							{
								name: 'Fulltime',
								value: 'fulltime'
							},
							{
								name: 'Partime',
								value: 'partime'
							},
							{
								name: 'Contractor',
								value: 'contractor'
							},
							{
								name: 'Intern',
								value: 'intern'
							}
						]
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html'
				],
			}
		},
	},

	{
		displayName: 'Job Posting Date',
		name: 'date_posted',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Posted Today',
				value: 'today',
			},
			{
				name: 'Posted No Longer Than 3 Days Ago',
				value: '3days',
			},
			{
				name: 'Posted No Longer Than a Week Ago',
				value: 'week',
			},
			{
				name: 'Posted No Longer Than a Month Ago',
				value: 'month',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-google-jobs-serp-advanced',
					'get-google-jobs-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Search Bar Cursor Pointer',
		name: 'cursor_pointer',
		type: 'number',
		hint: 'The horizontal numerical position of the cursor pointer within the keyword in the search bar.',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-google-autocomplete-serp-advanced',
					'get-google-autocomplete-serp-advanced'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Search Client for Autocomplete',
		name: 'client',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Google Chrome',
				value: 'chrome',
			},
			{
				name: 'Address Bar in Chrome',
				value: 'chrome-omni',
			},
			{
				name: 'Google Search Home Page',
				value: 'gws-wiz',
			},
			{
				name: 'Google Search Engine Results Page',
				value: 'gws-wiz-serp',
			},
			{
				name: 'Safari Browser',
				value: 'safari',
			},
			{
				name: 'Firefox Browser',
				value: 'firefox',
			},
			{
				name: 'Google Search Opened in Google Chrome Browser',
				value: 'psy-ab',
			},
			{
				name: 'Returns XML',
				value: 'toolbar',
			},
			{
				name: 'Returns JSONP',
				value: 'youtube',
			},
			{
				name: 'Google Local',
				value: 'gws-wiz-local',
			},
			{
				name: 'Google Image Search',
				value: 'img',
			},
			{
				name: 'Google Shopping Search',
				value: 'products-cc',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-autocomplete-serp-advanced',
					'get-google-autocomplete-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'Last Time the Dataset Was Updated',
		name: 'last_updated',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: '1m',
				value: '1m',
			},
			{
				name: '1y',
				value: '1y',
			},
			{
				name: '3y',
				value: '3y',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'File Formats of the Dataset',
		name: 'file_formats',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Other',
				value: 'other',
			},
			{
				name: 'Archive',
				value: 'archive',
			},
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Document',
				value: 'document',
			},
			{
				name: 'Tabular',
				value: 'tabular',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'Usage Rights of the Dataset',
		name: 'usage_rights',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Commercial',
				value: 'commercial',
			},
			{
				name: 'Noncommercial',
				value: 'noncommercial',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'Whether Displayed Datasets Are Free?',
		name: 'is_free',
		type: 'boolean',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-boolean
		default: null,
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'Dataset Topics',
		name: 'topics',
		placeholder: 'Add topic',
		type: 'fixedCollection',
		required: true,
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
						type: 'options',
						required: true,
						// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
						options: [
							{
								name: 'Humanities',
								value: 'humanities'
							},
							{
								name: 'Social Sciences',
								value: 'social_sciences'
							},
							{
								name: 'Life Sciences',
								value: 'life_sciences'
							},
							{
								name: 'Agriculture',
								value: 'agriculture'
							},
							{
								name: 'Natural Sciences',
								value: 'natural_sciences'
							},
							{
								name: 'GEO',
								value: 'geo'
							},
							{
								name: 'Computer',
								value: 'computer'
							},
							{
								name: 'Architecture and Urban Planning',
								value: 'architecture_and_urban_planning'
							},
							{
								name: 'Engineering',
								value: 'engineering'
							}
						],
						default: 'humanities',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-live-google-dataset-serp-advanced',
					'get-google-dataset-serp-advanced'
				],
			},
		},
	},
	{
		displayName: 'Financial News Filters',
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
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-finance-explore-serp-advanced',
					'get-live-google-finance-explore-serp-html',
					'get-google-finance-explore-serp-advanced',
					'get-google-finance-explore-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Type of Google Finance Market',
		name: 'market_type',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Most Active',
				value: 'most-active',
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
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-google-finance-markets-serp-advanced',
					'get-live-google-finance-markets-serp-html',
					'get-google-finance-markets-serp-advanced',
					'get-google-finance-markets-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Time Window for Google_finance_quote Graph',
		name: 'window',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
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
				operation: [
					'get-live-google-finance-quote-serp-advanced',
					'get-live-google-finance-quote-serp-html',
					'get-google-finance-quote-serp-advanced',
					'get-google-finance-quote-serp-html'
				],
			},
		},
	},
	{
		displayName: 'Category of Financial Instruments to Search for',
		name: 'category',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
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
				operation: [
					'get-live-google-finance-ticker-search-advanced',
					'get-google-finance-ticker-search-advanced'
				],
			},
		},
	},
];

