/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import {
	INodeProperties,
} from 'n8n-workflow';

export const OnPageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Get Pages',
				value: 'get-pages',
				action: 'Get pages',
				description: 'Get a list of crawled pages with on-page check-ups and other metrics related to the page performance',
			},
			{
				name: 'Get Pages By Resource',
				value: 'get-pages-by-resource',
				action: 'Get pages by resource',
				description: 'Get the list of pages where a specific resource is located',
			},
			{
				name: 'Get Resources',
				value: 'get-resources',
				action: 'Get resources',
				description: 'Get a list of resources, including images, scripts, stylesheets, and broken elements',
			},
			{
				name: 'Get Duplicate Tags',
				value: 'get-duplicate-tags',
				action: 'Get duplicate tags',
				description: 'Get a list of pages that contain duplicate title or description tags',
			},
			{
				name: 'Get Duplicate Content',
				value: 'get-duplicate-content',
				action: 'Get duplicate content',
				description: 'Get a list of pages that have content similar to the page specified in the request',
			},
			{
				name: 'Get Links',
				value: 'get-links',
				action: 'Get links',
				description: 'Get a list of internal and external links detected on a target website',
			},
			{
				name: 'Get Redirect Chains',
				value: 'get-redirect-chains',
				action: 'Get redirect chains',
				description: 'Get a full list of redirect URLs that form redirect chains',
			},
			{
				name: 'Get Non-Indexable Pages',
				value: 'get-non-indexable-pages',
				action: 'Get non indexable pages',
				description: 'Get a list of pages that are blocked from being indexed by Google and other search engines through robots.txt, HTTP headers, or meta tags settings',
			},
			{
				name: 'Get Waterfall',
				value: 'get-waterfall',
				action: 'Get waterfall',
				description: 'Get the page speed insights (page loading time, time to secure connection, the time it takes to load page resources, and so on)',
			},
			{
				name: 'Get Keyword Density',
				value: 'get-keyword-density',
				action: 'Get keyword density',
				description: 'Get keyword density and keyword frequency data for terms appearing on the specified website or web page',
			},
			{
				name: 'Get Microdata',
				value: 'get-microdata',
				action: 'Get microdata',
				description: 'Get microdata available on the specified page of the target website and detailed results of its validation',
			},
			{
				name: 'Get Raw HTML',
				value: 'get-raw-html',
				action: 'Get raw html',
				description: 'Get the HTML of a page you indicate in the request',
			},
			{
				name: 'Get Page Screenshot',
				value: 'get-page-screenshot',
				action: 'Get page screenshot',
				description: 'Get a full high-quality screenshot of any webpage (live)',
			},
			{
				name: 'Get Parsed Content',
				value: 'get-parsed-content',
				action: 'Get parsed content',
				description: 'Get the structured content of the target page, including link URLs, anchors, headings, and textual content',
			},
			{
				name: 'Get Live Parsed Content',
				value: 'get-live-parsed-content',
				action: 'Get live parsed content',
				description: 'Get the structured content of the target page, including link URLs, anchors, headings, and textual content',
			},
			{
				name: 'Get Live Instant Pages',
				value: 'get-live-instant-pages',
				action: 'Get live instant pages',
				description: 'Get the page-specific data with detailed information on how well a particular page is optimized for organic search (live)',
			},
			{
				name: 'Get Lighthouse Audit Results',
				value: 'get-lighthouse-audit-results',
				action: 'Get lighthouse audit results',
				description: 'Get the results of Lighthouse Audit',
			},
			{
				name: 'Get Live Lighthouse Audit Results',
				value: 'get-live-lighthouse-audit-results',
				action: 'Get live lighthouse audit results',
				description: 'Get the results of Lighthouse Audit (live)',
			}
		],
		default: 'get-pages',
	},

	// Parameters
	{
		displayName: 'Target Domain',
		name: 'target',
		type: 'string',
		hint: 'The domain should be specified without <b>https://</b> and <b>www.</b>',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				]
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Crawled Pages Limit',
		name: 'max_crawl_pages',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
		required: true,
		default: null
	},
	{
		displayName: 'Duplicate Tags Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: '',
			},
			{
				name: 'Duplicate Title',
				value: 'duplicate_title',
			},
			{
				name: 'Duplicate Description',
				value: 'duplicate_description',
			}
		],
		default: '',
		displayOptions: {
			show: {
					operation: [
						'get-duplicate-tags'
					],
			},
		},
	},
	{
		displayName: 'Tag Value',
		name: 'accumulator',
		type: 'string',
		hint: 'Specify a title or description here if you want to receive a list of duplicate pages that contains this tag',
		displayOptions: {
			show: {
				operation: [
					'get-duplicate-tags'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Resource URL',
		name: 'url_resource',
		type: 'string',
		hint: 'You can get this URL in the response of the <a href="https://docs.dataforseo.com/v3/on_page/resources/">Resources endpoint</a>',
		displayOptions: {
			show: {
				operation: [
					'get-pages-by-resource',
				]
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Page URL',
		name: 'url',
		type: 'string',
		hint: 'Specify this field if you want to get data a specific page.',
		displayOptions: {
			show: {
				operation: [
					'get-resources',
					'get-redirect-chains',
					'get-keyword-density'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Page URL',
		name: 'url_required',
		type: 'string',
		hint: 'Specify this field if you want to get data a specific page.',
		displayOptions: {
			show: {
				operation: [
					'get-duplicate-content',
					'get-waterfall',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages',
					'get-lighthouse-audit-results',
					'get-live-lighthouse-audit-results'
				]
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Number of Words for a Keyword',
		name: 'keyword_length',
		type: 'options',
		options: [
			{
				name: 'Empty',
				value: ''
			},
			{
				name: '1',
				value: 1
			},
			{
				name: '2',
				value: 2
			},
			{
				name: '3',
				value: 3
			},
			{
				name: '4',
				value: 4
			},
			{
				name: '5',
				value: 5
			}
		],
		displayOptions: {
			show: {
				operation: [
					'get-keyword-density'
				],
			},
		},
		required: true,
		default: ''
	},
	{
		displayName: 'Content Similarity Score',
		name: 'similarity',
		type: 'number',
		hint: 'By default, the content is considered duplicate if the value is greater than or equals 6.',
		typeOptions: {
			numberPrecision: 0,
			maxValue: 10,
			minValue: 0
		},
		displayOptions: {
			show: {
				operation: [
					'get-duplicate-content'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Page From URL',
		name: 'page_from',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-links'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Page To URL',
		name: 'page_to',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-links'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'First URL to Crawl',
		name: 'start_url',
		type: 'string',
		hint: 'You should specify an absolute URL. If you want to crawl a single page, specify its URL in this field and additionally set the max_crawl_pages parameter to 1',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Enable Sitewide Checks When Crawling a Single Page',
		name: 'force_sitewide_checks',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'URLs to Be Crawled Bypassing the Queue',
		name: 'priority_urls',
		placeholder: 'Add URL',
		type: 'fixedCollection',
		default: [],
		description: 'You can specify up to 20 URLs',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'URL',
				values: [
					{
						displayName: 'URL',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You should specify the absolute URL.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'Crawl Depth',
		name: 'max_crawl_depth',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
		default: null
	},
	{
		displayName: 'Delay Between Hits, MS',
		name: 'crawl_delay',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
		default: 2000
	},
	{
		displayName: 'Store HTML of Crawled Pages?',
		name: 'store_raw_html',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Parse Content on Crawled Pages?',
		name: 'enable_content_parsing',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Support Cookies on Crawled Pages?',
		name: 'support_cookies',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Language Header for Accessing the Website',
		name: 'accept_language',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Custom robots.txt Settings',
		name: 'custom_robots_txt',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Merge With or Override robots.txt Settings',
		name: 'robots_txt_merge_mode',
		type: 'options',
		options: [
			{
				name: 'Merge',
				value: 'merge',
			},
			{
				name: 'Override',
				value: 'override',
			}
		],
		default: 'merge',
		displayOptions: {
			show: {
					operation: [
						'get-pages',
						'get-pages-by-resource',
						'get-resources',
						'get-duplicate-tags',
						'get-duplicate-content',
						'get-links',
						'get-redirect-chains',
						'get-non-indexable-pages',
						'get-waterfall',
						'get-keyword-density',
						'get-microdata',
						'get-raw-html',
						'get-parsed-content'
					],
			},
		},
	},
	{
		displayName: 'Custom User Agent',
		name: 'custom_user_agent',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Preset for Browser Screen Parameters',
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
				name: 'Mobile',
				value: 'mobile',
			},
			{
				name: 'Tablet',
				value: 'tablet',
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
		},
		default: '',
	},
	{
		displayName: 'Browser Screen Width',
		name: 'browser_screen_width',
		type: 'number',
		typeOptions: {
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
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
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
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
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-page-screenshot',
					'get-parsed-content',
					'get-live-parsed-content',
					'get-live-instant-pages'
				]
			},
		},
		default: null,
	},
	{
		displayName: 'Respect Sitemap When Crawling?',
		name: 'respect_sitemap',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Custom Sitemap URL',
		name: 'custom_sitemap',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Crawl Only Pages Indicated in the Sitemap?',
		name: 'crawl_sitemap_only',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Load Resources?',
		name: 'load_resources',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Check if the Domain Implemented the WWW Redirection?',
		name: 'enable_www_redirect_check',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Load the Scripts Available on a Page?',
		name: 'enable_javascript',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Enable XMLHttpRequest on a Page?',
		name: 'enable_xhr',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Emulate Browser Rendering to Measure Core Web Vitals?',
		name: 'enable_browser_rendering',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Disable the Cookie Popup?',
		name: 'disable_cookie_popup',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-page-screenshot',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Custom Javascript',
		name: 'custom_js',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content',
					'get-live-instant-pages'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Enable Microdata Validation?',
		name: 'validate_micromarkup',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Include Pages on Subdomains?',
		name: 'allow_subdomains',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Subdomains to Crawl',
		name: 'allowed_subdomains',
		placeholder: 'Add Subdomain',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'URL',
				values: [
					{
						displayName: 'URL',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Subdomain that you want to crawl.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'Subdomains Not to Crawl',
		name: 'disallowed_subdomains',
		placeholder: 'Add Subdomain',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'URL',
				values: [
					{
						displayName: 'URL',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'Subdomain that you want to crawl.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'Check Spelling?',
		name: 'check_spell',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Language of the Spell Check',
		name: 'check_spell_language',
		type: 'string',
		hint: "Supported languages: ‘hy’, ‘eu’, ‘bg’, ‘ca’, ‘hr’, ‘cs’, ‘da’, ‘nl’, ‘en’, ‘eo’, ‘et’, ‘fo’, ‘fa’, ‘fr’, ‘fy’, ‘gl’, ‘ka’, ‘de’, ‘el’, ‘he’, ‘hu’, ‘is’, ‘ia’, ‘ga’, ‘it’, ‘rw’, ‘la’, ‘lv’, ‘lt’, ‘mk’, ‘mn’, ‘ne’, ‘nb’, ‘nn’, ‘pl’, ‘pt’, ‘ro’, ‘gd’, ‘sr’, ‘sk’, ‘sl’, ‘es’, ‘sv’, ‘tr’, ‘tk’, ‘uk’, ‘vi’",
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Words Excluded From Spell Check',
		name: 'check_spell_exceptions',
		placeholder: 'Add word',
		type: 'fixedCollection',
		description: 'Maximum amount of words: 1000',
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
						default: '',
						hint: 'Maximum word length: 100 characters.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'Calculate Keyword Density for the Target Domain?',
		name: 'calculate_keyword_density',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Custom Threshold Values for Checks',
		name: 'checks_threshold',
		placeholder: 'Add Threshold',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'tresholdValues',
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
		displayOptions: {
			show: {
					operation: [
						'get-pages',
						'get-pages-by-resource',
						'get-resources',
						'get-duplicate-tags',
						'get-duplicate-content',
						'get-links',
						'get-redirect-chains',
						'get-non-indexable-pages',
						'get-waterfall',
						'get-keyword-density',
						'get-microdata',
						'get-raw-html',
						'get-parsed-content',
						'get-live-instant-pages'
					],
			},
		},
	},
	{
		displayName: 'Prevent Certain Sitewide Checks From Running',
		name: 'disable_sitewide_checks',
		type: 'multiOptions',
		placeholder: 'Add checks',
		options: [
			{
				name: 'Test Page Not Found',
				value: 'test_page_not_found'
			},
			{
				name: 'Test Canonicalization',
				value: 'test_canonicalization'
			},
			{
				name: 'Test Https Redirect',
				value: 'test_https_redirect'
			},
			{
				name: 'Test Directory Browsing',
				value: 'test_directory_browsing'
			},
		],
		displayOptions: {
			show: {
					operation: [
						'get-pages',
						'get-pages-by-resource',
						'get-resources',
						'get-duplicate-tags',
						'get-duplicate-content',
						'get-links',
						'get-redirect-chains',
						'get-non-indexable-pages',
						'get-waterfall',
						'get-keyword-density',
						'get-microdata',
						'get-raw-html',
						'get-parsed-content'
					],
			},
		},
		default: [],
	},
	{
		displayName: 'Prevent Certain Page Checks From Running',
		name: 'disable_page_checks',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Check',
				values: [
					{
						displayName: 'Check',
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
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-duplicate-tags',
					'get-duplicate-content',
					'get-links',
					'get-redirect-chains',
					'get-non-indexable-pages',
					'get-waterfall',
					'get-keyword-density',
					'get-microdata',
					'get-raw-html',
					'get-parsed-content'
				],
			},
		},
	},
	{
		displayName: 'Switch Proxy Pool?',
		name: 'switch_pool',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-page-screenshot',
							'get-parsed-content',
							'get-live-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Return Data on Pages Despite the Timeout Error?',
		name: 'return_despite_timeout',
		type: 'boolean',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-waterfall',
							'get-keyword-density',
							'get-microdata',
							'get-raw-html',
							'get-parsed-content',
							'get-live-instant-pages'
						],
				},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/on_page/filters_and_thresholds/?bash">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-keyword-density'
						],
				},
		},
	},
	{
		displayName: 'Filter the Resources by Relevant Pages',
		name: 'relevant_pages_filters',
		type: 'string',
		default: '',
		description: 'Array of results filtering parameters',
		hint: 'You can find the supported filters in the <a href="https://docs.dataforseo.com/v3/on_page/filters_and_thresholds/?bash">DataForSEO documentation</a>.',
		displayOptions: {
				show: {
						operation: [
							'get-resources'
						],
				},
		},
	},
	{
		displayName: 'Sort',
		name: 'order_by',
		type: 'fixedCollection',
		placeholder: 'Add Sorting',
		default: [],
		description: 'You can set no more than <b>three</b> sorting rules',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Sort',
				values: [
					{
						displayName: 'Field Name',
						name: 'fieldName',
						type: 'string',
						required: true,
						hint: 'You can find the supported fields in the <a href="https://docs.dataforseo.com/v3/backlinks/filters/?bash">DataForSEO documentation</a>',
						default: '',
					},
					{
						displayName: 'Sort Field',
						name: 'direction',
						type: 'options',
						required: true,
						default: 'asc',
						options: [
							{
								name: 'Ascending',
								value: 'asc'
							},
							{
								name: 'Descending',
								value: 'desc'
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-pages',
					'get-pages-by-resource',
					'get-resources',
					'get-keyword-density'
				],
			},
		},
	},
	{
		displayName: 'Limit (up to 1000)',
		name: 'limit',
		type: 'number',
		description: 'Max number of results to return',
		typeOptions: {
			// eslint-disable-next-line n8n-nodes-base/node-param-type-options-max-value-present
			maxValue: 1000,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages',
							'get-keyword-density'
						],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-limit
		default: 100,
	},
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		typeOptions: {
			minValue: 0,
			numberPrecision: 0,
		},
		displayOptions: {
				show: {
						operation: [
							'get-pages',
							'get-pages-by-resource',
							'get-resources',
							'get-duplicate-tags',
							'get-duplicate-content',
							'get-links',
							'get-redirect-chains',
							'get-non-indexable-pages'
						],
				},
		},
		default: 0,
	},
	{
		displayName: 'Take a Screenshot of the Full Page?',
		name: 'full_page_screenshot',
		type: 'boolean',
		hint: 'Set to false if you want to capture only the part of the page displayed before scrolling.',
		default: true,
		displayOptions: {
				show: {
						operation: [
							'get-page-screenshot'
						],
				},
		},
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
			}
		],
		default: '',
		displayOptions: {
			show: {
					operation: [
						'get-page-screenshot',
						'get-live-parsed-content',
						'get-live-instant-pages'
					],
			},
		},
	},
	{
		displayName: 'Return Page Content as Markdown?',
		name: 'markdown_view',
		type: 'boolean',
		hint: 'If set to true, the markdown-formatted content of the page will be returned in the page_as_markdown field of the response.',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-parsed-content',
							'get-live-parsed-content'
						],
				},
		},
	},
	{
		displayName: 'Applies Mobile Emulation?',
		name: 'for_mobile',
		type: 'boolean',
		hint: 'If set to true, Lighthouse will use mobile device and screen emulation to test the page against mobile environment.',
		default: false,
		displayOptions: {
				show: {
						operation: [
							'get-lighthouse-audit-results',
							'get-live-lighthouse-audit-results'
						],
				},
		},
	},
	{
		displayName: 'Categories of Lighthouse Audits',
		name: 'categories',
		type: 'multiOptions',
		// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
		options: [
			{
				name: 'SEO',
				value: 'seo',
			},
			{
				name: 'PWA',
				value: 'pwa',
			},
			{
				name: 'Performance',
				value: 'performance',
			},
			{
				name: 'Best Practices',
				value: 'best_practices',
			},
			{
				name: 'Accessibility',
				value: 'accessibility',
			}
		],
		default: [],
		displayOptions: {
			show: {
					operation: [
						'get-lighthouse-audit-results',
						'get-live-lighthouse-audit-results'
					],
			},
		},
	},
	{
		displayName: 'Lighthouse Audits',
		name: 'audits',
		placeholder: 'Add audit',
		type: 'fixedCollection',
		required: true,
		default: [],
		description: 'If you ignore this field, we will return data for all audits',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'values',
				displayName: 'Target',
				values: [
					{
						displayName: 'Audit',
						name: 'value',
						type: 'string',
						required: true,
						default: '',
						hint: 'You can get the full list of possible audits <a href="https://docs.dataforseo.com/v3/on_page/lighthouse/audits/">here</a>.',
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: [
					'get-lighthouse-audit-results',
					'get-live-lighthouse-audit-results'
				],
			},
		},
	},
	{
		displayName: 'Lighthouse Version',
		name: 'version',
		type: 'string',
		hint: 'The list of available versions is available through the <a href="https://docs.dataforseo.com/v3/on_page/lighthouse/versions/">Lighthouse Versions endpoint.</a>',
		displayOptions: {
			show: {
				operation: [
					'get-lighthouse-audit-results',
					'get-live-lighthouse-audit-results'
				]
			},
		},
		default: ''
	},
	{
		displayName: 'Lighthouse Language Name',
		name: 'language_name',
		type: 'string',
		hint: 'The list of available languages is available through the <a href="https://docs.dataforseo.com/v3/on_page/lighthouse/languages/?bash">Lighthouse Languages endpoint.</a>',
		displayOptions: {
			show: {
				operation: [
					'get-lighthouse-audit-results',
					'get-live-lighthouse-audit-results'
				]
			},
		},
		default: ''
	},
];
