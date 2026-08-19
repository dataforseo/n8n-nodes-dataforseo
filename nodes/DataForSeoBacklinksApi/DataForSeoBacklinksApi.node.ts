import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
	IDataObject,
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
		icon: { light: 'file:../../icons/dataforseo.svg', dark: 'file:../../icons/dataforseo.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		usableAsTool: true,
		defaults: {
				name: 'DataForSeo Backlinks API',
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
			...BacklinksOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const responseData = [];
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
	[operation: string]: (ef: IExecuteFunctions, i: number) => Promise<IDataObject>
};
