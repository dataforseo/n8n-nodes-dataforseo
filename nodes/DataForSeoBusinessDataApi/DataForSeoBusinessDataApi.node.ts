import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { BusinessListingsOperations } from './resources/business_listings';
import { GoogleOperations } from './resources/google';
import { getBusinessListings, getCategoriesAggregation } from './execute/business_listings';
import { getBusinessQuestionsAndAnswers, getExtendedGoogleReviews, getGoogleBusinessInfo, getGoogleBusinessInfoLive, getGoogleBusinessUpdates, getGoogleHotelInfoAdvanced, getGoogleHotelInfoHtml, getGoogleHotelSearches, getGoogleHotelSearchesLive, getGoogleReviews, getLiveBusinessQuestionsAndAnswers, getLiveGoogleHotelInfoAdvanced, getLiveGoogleHotelInfoHtml } from './execute/google';
import { getTrustpilotReviews, searchTrustpilotBusinessInfo } from './execute/trustpilot';
import { getTripadvisorReviews, searchTripadvisorBusinessData } from './execute/tripadvisor';
import { getFacebookData, getPinterestData, getRedditData } from './execute/social_media';
import { TrustpilotOperations } from './resources/trustpilot';
import { TripAdvisorOperations } from './resources/tripadvisor';
import { SocialMediaOperations } from './resources/social_media';

export class DataForSeoBusinessDataApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Business Data API',
		name: 'dataForSeoBusinessDataApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Business Data API',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],

		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		requestDefaults: {
			method: 'POST',
			baseURL: 'https://api.dataforseo.com/v3',
			headers: {
					'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
						{
							// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
							name: 'Business Listings',
							value: 'business_listings',
						},
						{
							name: 'Google',
							value: 'google',
						},
						{
							name: 'Trustpilot',
							value: 'trustpilot',
						},
						{
							name: 'Tripadvisor',
							value: 'tripadvisor',
						},
						{
							name: 'Social Media',
							value: 'social_media',
						}
				],
				default: 'business_listings',
			},
			...BusinessListingsOperations,
			...GoogleOperations,
			...TrustpilotOperations,
			...TripAdvisorOperations,
			...SocialMediaOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'business_listings': {
				'get-business-listings': getBusinessListings,
				'get-categories-aggregation': getCategoriesAggregation
			},
			'google': {
				'get-google-business-info-live': getGoogleBusinessInfoLive,
				'get-google-business-info': getGoogleBusinessInfo,
				'get-google-business-updates': getGoogleBusinessUpdates,
				'get-google-hotel-searches-live': getGoogleHotelSearchesLive,
				'get-google-hotel-searches': getGoogleHotelSearches,
				'get-google-hotel-info-advanced-live': getLiveGoogleHotelInfoAdvanced,
				'get-google-hotel-info-html-live': getLiveGoogleHotelInfoHtml,
				'get-google-hotel-info-advanced': getGoogleHotelInfoAdvanced,
				'get-google-hotel-info-html': getGoogleHotelInfoHtml,
				'get-google-reviews': getGoogleReviews,
				'get-extended-google-reviews': getExtendedGoogleReviews,
				'get-business-questions-and-answers-live': getLiveBusinessQuestionsAndAnswers,
				'get-business-questions-and-answers': getBusinessQuestionsAndAnswers
			},
			'trustpilot': {
				'search-trustpilot-business-info': searchTrustpilotBusinessInfo,
				'get-trustpilot-reviews': getTrustpilotReviews
			},
			'tripadvisor': {
				'search-tripadvisor-business-data': searchTripadvisorBusinessData,
				'get-tripadvisor-reviews': getTripadvisorReviews
			},
			'social_media': {
				'get-pinterest-data': getPinterestData,
				'get-facebook-data': getFacebookData,
				'get-reddit-data': getRedditData
			}
		};

		const fn = mapping[resource][operation];
		if (!fn) {
			throw new NodeOperationError(this.getNode(), "Something went wrong");
		}

		try {
			const items = this.getInputData();

			for (let i = 0; i < items.length; i++) {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
			}
		} catch (e) {
			if (e instanceof NodeOperationError) {
				throw e;
			} else {
				throw new NodeOperationError(this.getNode(), "Something went wrong");
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>;
	}
};
