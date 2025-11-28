import {
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	IExecuteFunctions,
	INodeExecutionData,
	NodeOperationError,
} from 'n8n-workflow';
import { OnPageOperations } from './resources/on_page';
import { getDuplicateContent, getDuplicateTags, getKeywordDensity, getLighthouseAuditResults, getLinks, getLiveInstantPages, getLiveLighthouseAuditResults, getLiveParsedContent, getMicrodata, getNonIndexablePages, getPages, getPagesByResource, getPageScreenshot, getParsedContent, getRawHtml, getRedirectChains, getResources, getWaterfall } from './execute/on_page';


export class DataForSeoOnPageApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'DataForSEO OnPage API',
		name: 'dataForSeoOnPageApi',
		icon: 'file:dataforseo.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'DataForSEO',
		defaults: {
				name: 'DataForSeo OnPage API',
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
			...OnPageOperations
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const operation = this.getNodeParameter('operation', 0) as string;
		const mapping: ResourceOperationFunctions = {
			'get-pages': getPages,
			'get-pages-by-resource': getPagesByResource,
			'get-resources': getResources,
			'get-duplicate-tags': getDuplicateTags,
			'get-duplicate-content': getDuplicateContent,
			'get-links': getLinks,
			'get-redirect-chains': getRedirectChains,
			'get-non-indexable-pages': getNonIndexablePages,
			'get-waterfall': getWaterfall,
			'get-keyword-density': getKeywordDensity,
			'get-microdata': getMicrodata,
			'get-raw-html': getRawHtml,
			'get-page-screenshot': getPageScreenshot,
			'get-parsed-content': getParsedContent,
			'get-live-parsed-content': getLiveParsedContent,
			'get-live-instant-pages': getLiveInstantPages,
			'get-lighthouse-audit-results': getLighthouseAuditResults,
			'get-live-lighthouse-audit-results': getLiveLighthouseAuditResults
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
