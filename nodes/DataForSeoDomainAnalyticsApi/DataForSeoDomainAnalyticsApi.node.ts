import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
} from 'n8n-workflow';
import { getLiveAggregationTechnologies, getLiveDomainsByHTMLTerms, getLiveDomainsByTechnology, getLiveDomainTechnologies, getLiveTechnologiesSummary, getLiveTechnologyStats } from './execute/technologies';
import { TechnologiesOperations } from './resources/technologies';
import { getLiveDomainWhoisOverview } from './execute/whois';
import { WhoisOperations } from './resources/whois';

export class DataForSeoDomainAnalyticsApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Domain Analytics API',
		name: 'dataForSeoDomainAnalyticsApi',
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO Domain Analytics API',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo Domain Analytics API',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
				{
						name: 'dataForSeoApi',
						required: true,
				},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
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
		const responseData = [];
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

		const items = this.getInputData();

		for (let i = 0; i < items.length; i++) {
			try {
				const result = await fn(this, i);
				responseData.push({
						json: result,
						pairedItem: { item: i }
				});
			} catch (error) {
				if (this.continueOnFail()) {
					responseData.push({ json: items[i].json, error, pairedItem: i });
				} else {
					if (error.context) {
						error.context.itemIndex = i;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex: i,
					});
				}
			}
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

type ResourceOperationFunctions = {
	[resource: string]: {
		[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<IDataObject>;
	}
};
