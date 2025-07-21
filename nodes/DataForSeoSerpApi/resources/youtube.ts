import {
	INodeProperties,
} from 'n8n-workflow';

export const YouTubeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
				show: {
						resource: ['youtube'],
				},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Get Live YouTube Organic SERP Advanced',
				value: 'get-live-youtube-organic-serp-advanced',
				action: 'Get live youtube organic SERP advanced',
				description: 'Get Advanced YouTube Search results for the specified keyword (live)'
			},
			{
				name: 'Get YouTube Organic SERP Advanced',
				value: 'get-youtube-organic-serp-advanced',
				action: 'Get youtube organic SERP advanced',
				description: 'Get Advanced YouTube Search results for the specified keyword'
			},
			{
				name: 'Get Live YouTube Video Info Advanced',
				value: 'get-live-youtube-video-info-advanced',
				action: 'Get live youtube video info advanced',
				description: 'Get Advanced YouTube video info (live)'
			},
			{
				name: 'Get YouTube Video Info Advanced',
				value: 'get-youtube-video-info-advanced',
				action: 'Get youtube video info advanced',
				description: 'Get Advanced YouTube Video Info'
			},
			{
				name: 'Get Live YouTube Subtitles Advanced',
				value: 'get-live-youtube-subtitles-advanced',
				action: 'Get live youtube subtitles advanced',
				description: 'Get Advanced YouTube subtitles (live)'
			},
			{
				name: 'Get YouTube Subtitles Advanced',
				value: 'get-youtube-subtitles-advanced',
				action: 'Get youtube subtitles advanced',
				description: 'Get Advanced YouTube Subtitles'
			},
			{
				name: 'Get Live YouTube Comments Advanced',
				value: 'get-live-youtube-comments-advanced',
				action: 'Get live youtube comments advanced',
				description: 'Get Advanced YouTube Comments (live)'
			},
			{
				name: 'Get YouTube Comments Advanced',
				value: 'get-youtube-comments-advanced',
				action: 'Get youtube comments advanced',
				description: 'Get Advanced YouTube Comments'
			}
		],
		default: 'get-live-youtube-organic-serp-advanced',
	},

	{
		displayName: 'Keyword',
		name: 'keyword',
		type: 'string',
		hint: 'You can specify up to 700 symbols in the keyword field. All <b>%##</b> will be decoded (plus symbol <b>+</b> will be decoded to a space character). If you need to use the <b>%</b> symbol for your keyword, please specify it as <b>%25</b> If you need to use the <b>+</b> symbol for your keyword, please specify it as <b>%2B</b>',
		displayOptions: {
				show: {
						operation: [
							'get-live-youtube-organic-serp-advanced',
							'get-youtube-organic-serp-advanced',
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'ID of the Video',
		name: 'video_id',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-live-youtube-video-info-advanced',
							'get-youtube-video-info-advanced',
							'get-live-youtube-subtitles-advanced',
							'get-youtube-subtitles-advanced',
							'get-live-youtube-comments-advanced',
							'get-youtube-comments-advanced'
						],
				},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Language Code of Original Text',
		name: 'subtitles_language',
		type: 'string',
		displayOptions: {
				show: {
						operation: [
							'get-live-youtube-subtitles-advanced',
							'get-youtube-subtitles-advanced'
						],
				},
		},
		default: '',
	},
	{
		displayName: 'Language Code of Translated Text',
		name: 'subtitles_translate_language',
		type: 'string',
		hint: 'Possible values: "az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-subtitles-advanced',
					'get-youtube-subtitles-advanced'
				],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location_name',
		type: 'string',
		description: 'Full name of search engine location',
		hint: 'You can find the supported locations in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/youtube/locations/?bash">Supported locations</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
					'get-live-youtube-video-info-advanced',
					'get-youtube-video-info-advanced',
					'get-live-youtube-subtitles-advanced',
					'get-youtube-subtitles-advanced',
					'get-live-youtube-comments-advanced',
					'get-youtube-comments-advanced'
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
		hint: 'You can find the supported languages in the DataForSEO documentation. <a href="https://docs.dataforseo.com/v3/serp/youtube/languages/?bash">Supported languages</a>.',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
					'get-live-youtube-video-info-advanced',
					'get-youtube-video-info-advanced',
					'get-live-youtube-subtitles-advanced',
					'get-youtube-subtitles-advanced',
					'get-live-youtube-comments-advanced',
					'get-youtube-comments-advanced'
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
					'get-youtube-organic-serp-advanced',
					'get-youtube-video-info-advanced',
					'get-youtube-subtitles-advanced',
					'get-youtube-comments-advanced'
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
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
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
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
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
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-video-info-advanced',
					'get-youtube-video-info-advanced',
					'get-live-youtube-subtitles-advanced',
					'get-youtube-subtitles-advanced',
					'get-live-youtube-comments-advanced',
					'get-youtube-comments-advanced'
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
				name: 'Empty',
				value: '',
			},
			{
				name: 'Windows',
				value: 'windows',
			},
			{
				name: 'macOS',
				value: 'macos',
			}
		],
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-video-info-advanced',
					'get-youtube-video-info-advanced',
					'get-live-youtube-subtitles-advanced',
					'get-youtube-subtitles-advanced',
					'get-live-youtube-comments-advanced',
					'get-youtube-comments-advanced'
				],
			},
		},
	},
	{
		displayName: 'Parsing Depth',
		name: 'block_depth',
		type: 'number',
		typeOptions: {
			maxValue: 700,
			minValue: 1,
			numberPrecision: 0,
		},
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
				],
			},
		},
		default: 20,
	},
	{
		displayName: 'Additional Parameters of the Search Query',
		name: 'search_param',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'get-live-youtube-organic-serp-advanced',
					'get-youtube-organic-serp-advanced',
				],
			},
		},
	},
];

