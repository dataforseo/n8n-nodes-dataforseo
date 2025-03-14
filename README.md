DataForSEO
==========

With DataForSEO node in N8N, you can retrieve marketing and SEO data such as Google rankings, keyword suggestions, backlink reports, etc. from the DataForSEO API.

To use the DataForSEO node, you must have a DataForSEO account. You can create an account at [dataforseo.com](https://dataforseo.com/).

Refer to the [DataForSEO API documentation](https://docs.dataforseo.com/v3/) for a list of available endpoints.

Connect DataForSEO to N8N
--------------------------

To establish the connection, you must:

1.  [Obtain your DataForSEO API credentials .](#obtain-your-dataforseo-api-credentials "Obtain your DataForSEO API Credentials")
    
2.  [Establish the connection in N8N.](#establish-the-connection-with-dataforseo-in-n8n "Establish the connection with DataForSEO in N8N")
    

### Obtain your DataForSEO API Credentials

To obtain your DataForSEO API credentials:

1.  Log in to your DataForSEO account dashboard.
    
2.  In the left sidebar, click **API Access**.
    
3.  Copy the **API Login** and **API Password** values shown and store them in a safe place.
   

You will use these values in the **API Login** and **API Password** fields in N8N.

### Establish the connection with DataForSEO in N8N

To establish the connection in N8N:

1.  Log in to your N8N account, add a DataForSEO node to your workflow, and click **Create new credential**.
    
2.  Optional: Rename the credential.
    
3.  In the **API Login** and **API Password** fields, enter the values copied above.
    
4.  Click **Save**.
    

You have successfully established the connection. You can now edit your workflow and add more DataForSEO functions.

Build DataForSEO Workflows
--------------------------

After connecting the app, you can perform the following operations:

### Backlinks
+ [Get Backlinks](#get-backlinks)
+ [Get Backlink Summary](#get-backlink-summary)
+ [Get Historical Backlink Summary](#get-historical-backlink-summary)
+ [Get Bulk Backlink Rank](#get-bulk-backlink-rank)
+ [Get Bulk Backlink Stats](#get-bulk-backlink-stats)
+ [Get Backlinks Pages Summary](#get-backlinks-pages-summary)
+ [Get Bulk Referring Domain Stats](#get-bulk-referring-domain-stats)
+ [Get Referring Domains](#get-referring-domains)
+ [Get Bulk Spam Scores](#get-bulk-spam-scores)
#### SERP
+ [Get Parsed SERP](#get-parsed-serp)
+ [Get Finance Explore](#get-finance-explore)
+ [Get Finance Markets](#get-finance-markets)
+ [Get Finance Quote](#get-finance-quote)
+ [Search Google Finance Tickers](#search-google-finance-tickers)
#### Business Data
+ [Search Business Listings](#search-business-listings)
+ [Get Business Listings Categories Aggregation](#get-business-listings-cstegories-aggregation)
+ [Get Google Reviews](#get-google-reviews)
#### On Page
+ [Get Page Audit Check](#get-page-audit-check)
+ [Parse Page Content](#parse-page-content)
#### Labs
+ [Get Domain Rank Overview](#get-domain-rank-overview)
+ [Get Keyword Suggestions](#get-keyword-suggestions)
+ [Get Ranked Keywords](#get-ranked-keywords)
+ [Get Keyword Difficulty](#get-keyword-difficulty)
+ [Get Organic Traffic Stats](#get-organic-traffic-stats)
+ [Get Historical Traffic Stats](#get-historical-traffic-stats)
+ [Get Keyword Ideas](#get-keyword-ideas)

### Get Backlinks

Get a list of backlinks for a domain, subdomain or page.

 + **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

+ **Mode**: Select the grouping type for the results (**As is**: Returns all backlinks, **One Per Domain**: Returns one backlink per domain, **One Per Anchor**: Returns one backlink per anchor). If not specified, the **As is** option will be selected by default.

+ **Limit (up to 1000)**: Enter the maximum number of returned backlinks.

+ **Offset**: Enter the offset in the results array for returned backlinks. Default is 0. For example, if set to 10, the first 10 backlinks will be skipped, and the results will start from the next backlink.

+ **Sort**: Select the sorting rules for the results.

+ **Backlink Status**: Select the backlink status to return and count (**All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted). If not specified, the **Live** option will be selected by default.

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

### Get Backlink Summary

Get an overview of backlink data for a domain, subdomain, or webpage.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

+ **Internal List limit (up to 1000)**: Enter the number of backlinks to be returned in the results.

+ **Backlink Status**: Select the backlink status to return and count (**All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted).

### Get Historical Backlink Summary

Get historical backlink data for a domain back to the beginning of 2019.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

+ **Date From**: Enter the starting date of the time range. Minimal value: 2019-01-01. The minimum value will be used by default. Time zone: Europe/Prague.

+ **Date To**: Enter the ending date of the time range. If you don’t specify this field, today’s date will be used by default. Time zone: Europe/Prague.

### Get Bulk Backlink Rank

Get rank scores for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

### Get Bulk Backlink Stats

Get the number of backlinks for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

### Get Backlinks Pages Summary

Get an overview of backlinks and associated data in bulk.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

### Get Bulk Referring Domain Stats

Get the number of referring domains for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

### Get Referring Domains

Get a detailed overview of referring domains pointing to the target you specify.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

+ **Limit (up to 1000)**: Enter the maximum number of returned backlinks.

+ **Offset**: Enter the offset in the results array for returned backlinks. Default is 0. For example, if set to 10, the first 10 backlinks will be skipped, and the results will start from the next backlink.

+ **Internal List limit ( up to 1000)**: Enter the number of backlinks to be returned in the results.

+ **Backlink Status**: Select the backlink status to return and count ( **All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted). If not specified, the **Live** option will be selected by default.

+ **Sort**: Enter (map) the sorting rules for the results.

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

+ **Exclude Internal Links (Optional)**: Select whether to include external links in the results.

### Get Bulk Spam Scores

Get Spam Scores for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter Domain, subdomain or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with absolute URL (including `http://` or `https://`).

## SERP

### Get Parsed SERP

Get Google Search results for the specified keyword.

+ **Keyword**: Enter a keyword, for parsing the SERP. You can specify up to 700 symbols.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Device**: Select your device type (Desktop, Mobile).
    
+ **OS**: Select your device's operating system (Windows, macOS, Android, iOS).

+ **Domain**: Enter the search engine domain. For example: `google.co.uk`, `google.com.au`, `google.de`, etc. Note: We choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field.

+ **Depth**: Enter parsing depth, number of results in SERP, max value is 700.

+ **Target**: Enter the target domain, subdomain, or webpage. Note: Domain or a subdomain should be specified without `https://` and `www.`.

### Get Finance Explore

Get real-time data from the ‘Explore’ tab of Google Finance.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **News Type**: Select news type.

### Get Finance Markets

Get real-time data from the ‘Markets’ tab of Google Finance.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Market Type**: Select market type.

### Get Finance Quote

Get real-time data from the ‘Quote’ tab of Google Finance.

+ **Keyword (Ticker or Stock Symbol)**: Enter Ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Window**: Select time window for google_finance_quote graph.

### Search Google Finance Tickers

Search by company name, market, or financial instrument to get Google Finance data on stocks, futures, and asset pairs, their value, growth trends, and identifiers.

+ **Keyword**: Enter Company name or financial instrument.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Category**: Select Category of financial instruments to search for.

## Business Data

### Get Search Business Listings

Get information about businesses listed on Google Maps in the specified categories.

+ **Categories**: Enter up to 10 categories for the business listings, allowing you to specify relevant business categories.

+ **Description**: Enter a description for the business listing.

+ **Title**: Enter the title for the business listing.

+ **Is Claimed**: Select whether the business listing is claimed.

+ **Location Coordinate**: Enter location coordinates in the format `latitude`,`longitude`,`radius`. Example: 53.476225,-2.243572,200.

+ **Sort**: Select the sorting rules for the results. You can specify multiple sorting criteria by adding items.

+ **Limit (up to 1000)**: Enter the maximum number of returned listings.

+ **Offset**: Enter the offset in the results array for returned listings.

### Get Business Listings Categories Aggregation

Get data about groups of related business categories along with the number of entities in each category.

+ **Categories**: Enter up to 10 categories for the business listings, allowing you to specify relevant business categories.

+ **Description**: Enter a description for the business listing.

+ **Title**: Enter the title for the business listing.

+ **Is Claimed**: Select whether the business listing is claimed.

+ **Location Coordinate**: Enter location coordinates in the format `latitude`,`longitude`,`radius`. Example: 53.476225,-2.243572,200.

+ **Internal List Limit**: Enter the number of business listings to be returned in the aggregated results.

+ **Limit (up to 1000)**: Enter the maximum number of results to be returned.

+ **Offset**: Enter the offset in the results array for returned.

### Get Google Reviews

Fetch reviews and related data from millions of Google Business Profiles around the world.

+ **Search By**: Select the method for searching Google reviews (Keyword, CID, Place ID).

+ **Keyword/CID/Place ID**: Enter the keyword, CID, or Place ID for the business or place you want to retrieve reviews for.

+ **Task Priority**: Select the task priority for the request. You will be additionally charged for the tasks with high execution priority.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Number of reviews**: Enter the number of reviews to retrieve.

+ **Sort**: Select the sorting criteria for the reviews (Newest, Highest Rating, Lowest Rating, Relevance).
    
## On Page

### Get Page Audit Check

Run an essential SEO Audit of a page.

+ **Target page URL**: Enter the complete URL of the target page for which the data will be retrieved.

### Parse Page Content

Get parsed and structured content of any page, including link URLs, anchors, headings, and text.

+ **Target page URL**: Enter the complete URL of the page to be parsed.

## Labs

### Get Domain Rank Overview

Get ranking and traffic data from organic search for a domain.

+ **Target Domain**: Enter the target domain to retrieve the rank overview. The domain should be specified without `https://` or `www`.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Ignore Synonyms**: Select whether to ignore synonyms in the search results.

+ **Limit**: Enter the maximum number of results to retrieve.

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the next result.

### Get Keyword Suggestions

Get search terms that are relevant to the product or service categories of all the specified keywords.

 + **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Keyword**: Enter the keyword for which you want to retrieve suggestions.

+ **Limit (up to 1000)**: Enter the maximum number of keyword suggestions to retrieve.

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the next result.

+ **Sort**: Enter the sorting criteria for keyword suggestions.

### Get Ranked Keywords

Get the list of keywords that any domain or webpage is ranking for.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Target**: Enter the domain name of the target website. The domain should be specified without `https://` or `www`.

+ **Limit (up to 1000)**: Enter the maximum number of keywords to retrieve.

+ **Item Types**: Select the type of search results included in the response.

+ **Sort**: Enter the sorting criteria for keyword rankings.

+ **Ignore Synonyms**: Select whether to ignore synonyms in the search results.

### Get Keyword Difficulty

Get keyword difficulty for the specified keywords.

+ **Target Keywords**: Enter the keywords you want to analyze for difficulty. Keywords should be in **UTF-8** encoding, at least 3 characters long, and will be converted to lowercase. You can specify up to 1000 keywords."

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

### Get Organic Traffic Stats

Get an estimation of monthly organic traffic a website or page.

+ **Target Domain or Subdomains**: Enter the target domain to retrieve the organic traffic stats. The domain should be specified without `https://` or `www`.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Item Types**: Select the type of search results included in the response.

### Get Historical Traffic Stats

Get a historical estimate of organic traffic for a website or page.

+ **Target Domain or Subdomains**: Enter the target domain to retrieve the organic traffic stats. The domain should be specified without `https://` or `www`.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Item Types**: Select the type of search results included in the response.

### Get Keyword Ideas

Get search terms that fall into the same Google product or service category as the specified keywords.

+ **Keywords**: Enter the keywords you want to retrieve suggestions for.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Limit (up to 1000)**: Enter the maximum number of keyword ideas to retrieve.

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the next result.

+ **Sort**: Enter the sorting criteria for keyword ideas.
