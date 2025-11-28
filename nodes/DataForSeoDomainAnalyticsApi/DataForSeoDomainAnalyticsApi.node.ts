import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { getLiveAggregationTechnologies, getLiveDomainsByHTMLTerms, getLiveDomainsByTechnology, getLiveDomainTechnologies, getLiveTechnologiesSummary, getLiveTechnologyStats } from './execute/technologies';
import { TechnologiesOperations } from './resources/technologies';
import { getLiveDomainWhoisOverview } from './execute/whois';
import { WhoisOperations } from './resources/whois';

export class DataForSeoDomainAnalyticsApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Domain Analytics API',
		name: 'dataForSeoDomainAnalyticsApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO Domain Analytics API',
		defaults: {
				name: 'DataForSeo Domain Analytics API',
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
							name: 'Technologies',
							value: 'technologies',
						},
						{
							name: 'Whois',
							value: 'whois',
						}
				],
				default: 'technologies',
			},
			...TechnologiesOperations,
			...WhoisOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'technologies': {
				'get-live-aggregation-technologies': getLiveAggregationTechnologies,
				'get-live-domains-by-technology': getLiveDomainsByTechnology,
				'get-live-technologies-summary': getLiveTechnologiesSummary,
				'get-live-domains-by-html-terms': getLiveDomainsByHTMLTerms,
				'get-live-technology-stats': getLiveTechnologyStats,
				'get-live-domain-technologies': getLiveDomainTechnologies
			},
			'whois': {
				'get-live-domain-whois-overview': getLiveDomainWhoisOverview
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
