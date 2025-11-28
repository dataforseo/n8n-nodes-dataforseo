import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { BacklinksOperations } from './resources/backlinks';
import {
	getAnchors,
	getBacklinks,
	getBacklinksSummary,
	getBacklinksTimeseriesSummary,
	getBulkBacklinks,
	getBulkNewAndLostBacklinks,
	getBulkNewAndLostReferringDomains,
	getBulkPagesSummary,
	getBulkRanks,
	getBulkReferringDomains,
	getBulkSpamScores,
	getCompetitros,
	getDomainIntersection,
	getDomainPages,
	getDomainPagesSummary,
	getHistoricalBacklinksSummary,
	getNewAndLostBacklinksTimeseriesSummary,
	getPageIntersection,
	getRefferingDomains,
	getRefferingNetworks
} from './execute/backlinks';


export class DataForSeoBacklinksApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO Backlinks API',
		name: 'dataForSeoBacklinksApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo Backlinks API',
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
			...BacklinksOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'get-backlinks-summary': getBacklinksSummary,
			'get-historical-backlink-summary': getHistoricalBacklinksSummary,
			'get-backlinks': getBacklinks,
			'get-anchors': getAnchors,
			'get-domain-pages': getDomainPages,
			'get-domain-pages-summary': getDomainPagesSummary,
			'get-referring-domains': getRefferingDomains,
			'get-referring-networks': getRefferingNetworks,
			'get-competitors': getCompetitros,
			'get-domain-intersection': getDomainIntersection,
			'get-page-intersection': getPageIntersection,
			'get-backlinks-timeseries-summary': getBacklinksTimeseriesSummary,
			'get-new-and-lost-backlinks-timeseries-summary': getNewAndLostBacklinksTimeseriesSummary,
			'get-bulk-ranks': getBulkRanks,
			'get-bulk-backlinks': getBulkBacklinks,
			'get-bulk-spam-scores': getBulkSpamScores,
			'get-bulk-referring-domains': getBulkReferringDomains,
			'get-bulk-new-and-lost-backlinks': getBulkNewAndLostBacklinks,
			'get-bulk-new-and-lost-referring-domains': getBulkNewAndLostReferringDomains,
			'get-bulk-pages-summary': getBulkPagesSummary
		};

		const fn = mapping[operation];
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
	[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<any>
};
