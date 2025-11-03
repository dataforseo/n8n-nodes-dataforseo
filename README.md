DataForSEO Node for n8n
==========

With the DataForSEO node in n8n, you can retrieve marketing and SEO data, such as Google rankings, keyword suggestions, backlink reports, etc., through the DataForSEO API.

To use the DataForSEO node, you must have a DataForSEO account. You can create an account at [dataforseo.com](https://dataforseo.com/).

Refer to the [DataForSEO API documentation](https://docs.dataforseo.com/v3/) for the list of available endpoints.

## Contents
- [Connect DataForSEO to n8n](#connect-dataforseo-to-n8n)
- [Available DataForSEO Operations](#available-dataforseo-operations)
- [Example DataForSEO Workflow Configurations](#example-dataforseo-workflow-configurations)


Connect DataForSEO to n8n
--------------------------

## Prerequisites

- DataForSEO account
- n8n installed or cloud account

## Setup

To establish the connection, you must:

1.  [Obtain your DataForSEO API credentials.](#obtain-your-dataforseo-api-credentials "Obtain Your DataForSEO API Credentials")
    
2.  [Establish the connection in n8n.](#establish-the-connection-with-dataforseo-in-n8n "Establish the connection with DataForSEO in n8n")
    

### Obtain Your DataForSEO API Credentials

To obtain your DataForSEO API credentials (API login and password):

1.  Log in to your DataForSEO account dashboard.
    
2.  In the left sidebar, click **API Access**.
    
3.  Copy the **API Login** and **API Password** values shown and store them in a safe place. 

Note that the API password is visible for the first 24 hours after registration. Later, you can request the password by clicking “Send by e-mail,” then copy the credentials from it.


Enter these values in the **API Login** and **API Password** fields in n8n.

### Establish the connection with DataForSEO in n8n

To establish the connection in n8n:

1.  Log in to your n8n account, add a DataForSEO node to your workflow, and click **Create new credential**.
    
2.  Optional: Rename the credential.
    
3.  In the **API Login** and **API Password** fields, enter the values copied above.
    
4.  Click **Save**.
    

You have successfully established the connection. You can now build workflows using DataForSEO operations.


Available DataForSEO Operations
--------------------------

After connecting the app, you can perform the following operations:

## DataForSEO SERP API

### Google
+ [Get Live Google Organic SERP Regular](https://docs.dataforseo.com/v3/serp/google/organic/live/regular/?bash)
+ [Get Live Google Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?bash)
+ [Get Live Google Organic SERP HTML](https://docs.dataforseo.com/v3/serp/google/organic/live/html/?bash)
+ [Get Google Organic SERP Regular](https://docs.dataforseo.com/v3/serp/google/organic/task_get/regular/?bash)
+ [Get Google Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/google/organic/task_get/advanced/?bash)
+ [Get Google Organic SERP HTML](https://docs.dataforseo.com/v3/serp/google/organic/task_get/html/?bash)
+ [Get Live Google AI Mode SERP Advanced](https://docs.dataforseo.com/v3/serp/google/ai_mode/live/advanced/?bash)
+ [Get Live Google AI Mode SERP HTML](https://docs.dataforseo.com/v3/serp/google/ai_mode/live/html/?bash)
+ [Get Google AI Mode SERP Advanced](https://docs.dataforseo.com/v3/serp/google/ai_mode/task_get/advanced/?bash)
+ [Get Google AI Mode SERP HTML](https://docs.dataforseo.com/v3/serp/google/ai_mode/task_get/html/?bash)
+ [Get Live Google Maps SERP Advanced](https://docs.dataforseo.com/v3/serp/google/maps/live/advanced/?bash)
+ [Get Google Maps SERP Advanced](https://docs.dataforseo.com/v3/serp/google/maps/task_get/advanced/?bash)
+ [Get Live Google Local Finder SERP Advanced](https://docs.dataforseo.com/v3/serp/google/local_finder/live/advanced/?bash)
+ [Get Live Google Local Finder SERP HTML](https://docs.dataforseo.com/v3/serp/google/local_finder/live/html/?bash)
+ [Get Google Local Finder SERP Advanced](https://docs.dataforseo.com/v3/serp/google/local_finder/task_get/advanced/?bash)
+ [Get Google Local Finder SERP HTML](https://docs.dataforseo.com/v3/serp/google/local_finder/task_get/html/?bash)
+ [Get Live Google News SERP Advanced](https://docs.dataforseo.com/v3/serp/google/news/live/advanced/?bash)
+ [Get Live Google News SERP HTML](https://docs.dataforseo.com/v3/serp/google/news/live/html/?bash)
+ [Get Google News SERP Advanced](https://docs.dataforseo.com/v3/serp/google/news/task_get/advanced/?bash)
+ [Get Google News SERP HTML](https://docs.dataforseo.com/v3/serp/google/news/task_get/html/?bash)
+ [Get Live Google Events SERP Advanced](https://docs.dataforseo.com/v3/serp/google/events/live/advanced/?bash)
+ [Get Google Events SERP Advanced](https://docs.dataforseo.com/v3/serp/google/events/task_get/advanced/?bash)
+ [Get Live Google Images SERP Advanced](https://docs.dataforseo.com/v3/serp/google/images/live/advanced/?bash)
+ [Get Live Google Images SERP HTML](https://docs.dataforseo.com/v3/serp/google/images/live/html/?bash)
+ [Get Google Images SERP Advanced](https://docs.dataforseo.com/v3/serp/google/images/task_get/advanced/?bash)
+ [Get Google Images SERP HTML](https://docs.dataforseo.com/v3/serp/google/images/task_get/html/?bash)
+ [Get Google Search By Image SERP Advanced](https://docs.dataforseo.com/v3/serp/google/search_by_image/task_get/advanced/?bash)
+ [Get Google Search By Image SERP HTML](https://docs.dataforseo.com/v3/serp/google/search_by_image/task_get/html/?bash)
+ [Get Google Jobs SERP Advanced](https://docs.dataforseo.com/v3/serp/google/jobs/task_get/advanced/?bash)
+ [Get Google Jobs SERP HTML](https://docs.dataforseo.com/v3/serp/google/jobs/task_get/html/?bash)
+ [Get Live Google Autocomplete SERP Advanced](https://docs.dataforseo.com/v3/serp/google/autocomplete/live/advanced/?bash)
+ [Get Google Autocomplete SERP Advanced](https://docs.dataforseo.com/v3/serp/google/autocomplete/task_get/advanced/?bash)
+ [Get Live Google Dataset Search SERP Advanced](https://docs.dataforseo.com/v3/serp/google/dataset_search/live/advanced/?bash)
+ [Get Google Dataset Search SERP Advanced](https://docs.dataforseo.com/v3/serp/google/dataset_search/task_get/advanced/?bash)
+ [Get Live Google Dataset Info Advanced](https://docs.dataforseo.com/v3/serp/google/dataset_info/live/advanced/?bash)
+ [Get Google Dataset Info Advanced](https://docs.dataforseo.com/v3/serp/google/dataset_info/task_get/advanced/?bash)
+ [Get Live Google Ads Advertisers SERP Advanced](https://docs.dataforseo.com/v3/serp/google/ads_advertisers/live/advanced/?bash)
+ [Get Google Ads Advertisers SERP Advanced](https://docs.dataforseo.com/v3/serp/google/ads_advertisers/task_get/advanced/?bash)
+ [Get Live Google Ads Search Advanced](https://docs.dataforseo.com/v3/serp/google/ads_search/live/advanced/?bash)
+[Get Google Ads Search Advanced](https://docs.dataforseo.com/v3/serp/google/ads_search/task_get/advanced/?bash)
+ [Get Live Finance Explore SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_explore/live/advanced/?bash)
+ [Get Live Finance Explore SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_explore/live/html/?bash)
+ [Get Finance Explore SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_explore/task_get/advanced/?bash)
+ [Get Finance Explore SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_explore/task_get/html/?bash)
+ [Get Live Finance Markets SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_markets/live/advanced/?bash)
+ [Get Live Finance Markets SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_markets/live/html/?bash)
+ [Get Finance Markets SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_markets/task_get/advanced/?bash)
+ [Get Finance Markets SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_markets/task_get/html/?bash)
+ [Get Live Finance Quote SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_quote/live/advanced/?bash)
+ [Get Live Finance Quote SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_quote/live/html/?bash)
+ [Get Finance Quote SERP Advanced](https://docs.dataforseo.com/v3/serp/google/finance_quote/task_get/advanced/?bash)
+ [Get Finance Quote SERP HTML](https://docs.dataforseo.com/v3/serp/google/finance_quote/task_get/html/?bash)
+ [Get Live Finance Ticker Search Advanced](https://docs.dataforseo.com/v3/serp/google/finance_ticker_search/live/advanced/?bash)
+ [Get Finance Ticker Search Advanced](https://docs.dataforseo.com/v3/serp/google/finance_ticker_search/task_get/advanced/?bash)

### Bing
+ [Get Live Bing Organic SERP Regular](https://docs.dataforseo.com/v3/serp/bing/organic/live/regular/?bash)
+ [Get Live Bing Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/bing/organic/live/advanced/?bash)
+ [Get Live Bing Organic SERP HTML](https://docs.dataforseo.com/v3/serp/bing/organic/live/html/?bash)
+ [Get Bing Organic SERP Regular](https://docs.dataforseo.com/v3/serp/bing/organic/task_get/regular/?bash)
+ [Get Bing Organic SERP HTML](https://docs.dataforseo.com/v3/serp/bing/organic/task_get/html/?bash)
+ [Get Live Bing Local Finder SERP Regular](https://docs.dataforseo.com/v3/serp/bing/organic/task_get/regular/?bash)
+ [Get Live Bing Local Finder SERP HTML](https://docs.dataforseo.com/v3/serp/bing/organic/task_get/html/?bash)

### YouTube
+ [Get Live YouTube Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/youtube/organic/live/advanced/?bash)
+ [Get YouTube Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/youtube/organic/task_get/advanced/?bash)
+ [Get Live YouTube Video Info Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_info/live/advanced/?bash)
+ [Get YouTube Video Info Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_info/task_get/advanced/?bash)
+ [Get Live YouTube Subtitles Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_subtitles/live/advanced/?bash)
+ [Get YouTube Subtitles Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_subtitles/task_get/advanced/?bash)
+ [Get Live YouTube Comments Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_comments/live/advanced/?bash)
+ [Get YouTube Comments Advanced](https://docs.dataforseo.com/v3/serp/youtube/video_comments/task_get/advanced/?bash)

### Yahoo
+ [Get Live Yahoo Organic SERP Regular](https://docs.dataforseo.com/v3/serp/yahoo/organic/live/regular/?bash)
+ [Get Live Yahoo Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/yahoo/organic/live/advanced/?bash)
+ [Get Live Yahoo Organic SERP HTML](https://docs.dataforseo.com/v3/serp/yahoo/organic/live/html/?bash)
+ [Get Yahoo Organic SERP Regular](https://docs.dataforseo.com/v3/serp/yahoo/organic/task_get/regular/?bash)
+ [Get Yahoo Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/yahoo/organic/task_get/advanced/?bash)
+ [Get Yahoo Organic SERP HTML](https://docs.dataforseo.com/v3/serp/yahoo/organic/task_get/html/?bash)

### Baidu
+ [Get Baidu Organic SERP Regular](https://docs.dataforseo.com/v3/serp/baidu/organic/task_get/regular/?bash)
+ [Get Baidu Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/baidu/organic/task_get/advanced/?bash)
+ [Get Baidu Organic SERP HTML](https://docs.dataforseo.com/v3/serp/baidu/organic/task_get/html/?bash)

### Naver
+ [Get Naver Organic SERP Regular](https://docs.dataforseo.com/v3/serp/naver/organic/task_get/regular/?bash)
+ [Get Naver Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/naver/organic/task_get/advanced/?bash)
+ [Get Naver Organic SERP HTML](https://docs.dataforseo.com/v3/serp/naver/organic/task_get/html/?bash)

### Seznam
+ [Get Seznam Organic SERP Regular](https://docs.dataforseo.com/v3/serp/seznam/organic/task_get/regular/?bash)
+ [Get Seznam Organic SERP Advanced](https://docs.dataforseo.com/v3/serp/seznam/organic/task_get/advanced/?bash)
+ [Get Seznam Organic SERP HTML](https://docs.dataforseo.com/v3/serp/seznam/organic/task_get/html/?bash)


## DataForSEO Keywords Data API

### Google Ads
+ [Get Live Google Search Volume](https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live/?bash)
+ [Get Google Search Volume](https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/task_get/?bash)
+ [Get Live Google Keywords for Site](https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_site/live/?bash)
+ [Get Google Keywords for Site](https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_site/task_get/?bash)
+ [Get Live Google Keywords for Keywords](https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live/?bash)
+ [Get Google Keywords for Keywords](https://docs.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/task_get/?bash)
+ [Get Live Google Ad Traffic By Keywords](https://docs.dataforseo.com/v3/keywords_data/google_ads/ad_traffic_by_keywords/live/?bash)
+ [Get Google Ad Traffic By Keywords](https://docs.dataforseo.com/v3/keywords_data/google_ads/ad_traffic_by_keywords/task_get/?bash)

### Bing Ads
+ [Get Live Bing Search Volume](https://docs.dataforseo.com/v3/keywords_data/bing/search_volume/live/?bash)
+ [Get Bing Search Volume](https://docs.dataforseo.com/v3/keywords_data/bing/search_volume/task_get/?bash)
+ [Get Live Bing Search Volume History](https://docs.dataforseo.com/v3/keywords_data/bing/search_volume_history/live/?bash)
+ [Get Bing Search Volume History](https://docs.dataforseo.com/v3/keywords_data/bing/search_volume_history/task_get/?bash)
+ [Get Live Bing Keywords for Site](https://docs.dataforseo.com/v3/keywords_data/bing/keywords_for_site/live/?bash)
+ [Get Bing Keywords for Site](https://docs.dataforseo.com/v3/keywords_data/bing/keywords_for_site/task_get/?bash)
+ [Get Live Bing Keywords for Keywords](https://docs.dataforseo.com/v3/keywords_data/bing/keywords_for_keywords/live/?bash)
+ [Get Bing Keywords for Keywords](https://docs.dataforseo.com/v3/keywords_data/bing/keywords_for_keywords/task_get/?bash)
+ [Get Live Bing Keyword Performance](https://docs.dataforseo.com/v3/keywords_data/bing/keyword_performance/live/?bash)
+ [Get Bing Keyword Performance](https://docs.dataforseo.com/v3/keywords_data/bing/keyword_performance/task_get/?bash)
+ [Get Live Bing Keyword Suggestions for URL](https://docs.dataforseo.com/v3/keywords_data/bing/keyword_suggestions_for_url/live/?bash)
+ [Get Bing Keyword Suggestions for URL](https://docs.dataforseo.com/v3/keywords_data/bing/keyword_suggestions_for_url/task_get/?bash)
+ [Get Live Bing Ads Audience Estimation](https://docs.dataforseo.com/v3/keywords_data/bing/audience_estimation/live/?bash)
+ [Get Bing Ads Audience Estimation](https://docs.dataforseo.com/v3/keywords_data/bing/audience_estimation/task_get/?bash)

### Google Trends
+ [Get Live Google Trends Explore](https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/live/?bash)
+ [Get Google Trends Explore](https://docs.dataforseo.com/v3/keywords_data/google_trends/explore/task_get/?bash)

### DataForSEO Trends
+ [Get Live DataForSEO Trends Explore](https://docs.dataforseo.com/v3/keywords_data/dataforseo_trends/explore/live/?bash)
+ [Get Live DataForSEO Trends Subregion Interests](https://docs.dataforseo.com/v3/keywords_data/dataforseo_trends/subregion_interests/live/?bash)
+ [Get Live DataForSEO Trends Demography](https://docs.dataforseo.com/v3/keywords_data/dataforseo_trends/demography/live/?bash)
+ [Get Live DataForSEO Trends Merged Data](https://docs.dataforseo.com/v3/keywords_data/dataforseo_trends/merged_data/live/?bash)

### Clickstream Data
+ [Get Live DataForSEO Search Volume](https://docs.dataforseo.com/v3/keywords_data/clickstream_data/dataforseo_search_volume/live/?bash)
+ [Get Live Clickstream Global Search Volume](https://docs.dataforseo.com/v3/keywords_data/clickstream_data/global_search_volume/live/?bash)
+ [Get Live Bulk Clickstream Search Volume](https://docs.dataforseo.com/v3/keywords_data/clickstream_data/bulk_search_volume/live/?bash)

## DataForSEO Domain Analytics API

### Technologies
+ [Get Live Aggregation Technologies](https://docs.dataforseo.com/v3/domain_analytics/technologies/aggregation_technologies/live/?bash)
+ [Get Live Technologies Summary](https://docs.dataforseo.com/v3/domain_analytics/technologies/technologies_summary/live/?bash)
+ [Get Live Technology Stats](https://docs.dataforseo.com/v3/domain_analytics/technologies/technology_stats/live/?bash)
+ [Get Domains By Technology](https://docs.dataforseo.com/v3/domain_analytics/technologies/domains_by_technology/live/?bash)
+ [Get Domains By HTML Terms](https://docs.dataforseo.com/v3/domain_analytics/technologies/domains_by_html_terms/live/?bash)
+ [Get Live Domain Technologies](https://docs.dataforseo.com/v3/domain_analytics/technologies/domain_technologies/live/?bash)

### Whois
+ [Get Live Domain Whois Overview](https://docs.dataforseo.com/v3/domain_analytics/whois/overview/live/?bash)

## DataForSEO Labs API

### Google
+ [Get Keywords For Site](https://docs.dataforseo.com/v3/dataforseo_labs/google/keywords_for_site/live/?bash)
+ [Get Related Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/google/related_keywords/live/?bash)
+ [Get Keyword Suggestions](https://docs.dataforseo.com/v3/dataforseo_labs/google/keyword_suggestions/live/?bash)
+ [Get Keyword Ideas](https://docs.dataforseo.com/v3/dataforseo_labs/google/keyword_ideas/live/?bash)
+ [Get Keyword Difficulty](https://docs.dataforseo.com/v3/dataforseo_labs/google/bulk_keyword_difficulty/live/?bash)
+ [Get Search Intent](https://docs.dataforseo.com/v3/dataforseo_labs/google/search_intent/live/?bash)
+ [Get Keyword Overview](https://docs.dataforseo.com/v3/dataforseo_labs/google/keyword_overview/live/?bash)
+ [Get Historical Keyword Data](https://docs.dataforseo.com/v3/dataforseo_labs/google/historical_keyword_data/live/?bash)
+ [Get Categories For Domain](https://docs.dataforseo.com/v3/dataforseo_labs/google/categories_for_domain/live/?bash)
+ [Get Categories For Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/google/categories_for_keywords/live/?bash)
+ [Get Keywords For Categories](https://docs.dataforseo.com/v3/dataforseo_labs/google/keywords_for_categories/live/?bash)
+ [Get Domain Metrics By Categories](https://docs.dataforseo.com/v3/dataforseo_labs/google/domain_metrics_by_categories/live/?bash)
+ [Get Top Searches](https://docs.dataforseo.com/v3/dataforseo_labs/google/top_searches/live/?bash)
+ [Get SERP Competitors](https://docs.dataforseo.com/v3/dataforseo_labs/google/serp_competitors/live/?bash)
+ [Get Ranked Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live/?bash)
+ [Get Competitors Domain](https://docs.dataforseo.com/v3/dataforseo_labs/google/competitors_domain/live/?bash)
+ [Get Domain Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/google/domain_intersection/live/?bash)
+ [Get Subdomains](https://docs.dataforseo.com/v3/dataforseo_labs/google/subdomains/live/?bash)
+ [Get Relevant Pages](https://docs.dataforseo.com/v3/dataforseo_labs/google/relevant_pages/live/?bash)
+ [Get Domain Rank Overview](https://docs.dataforseo.com/v3/dataforseo_labs/google/domain_rank_overview/live/?bash)
+ [Get Historical SERPs](https://docs.dataforseo.com/v3/dataforseo_labs/google/historical_serps/live/?bash)
+ [Get Historical Rank Overview](https://docs.dataforseo.com/v3/dataforseo_labs/google/historical_rank_overview/live/?bash)
+ [Get Page Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/google/page_intersection/live/?bash)
+ [Get Bulk Traffic Estimation](https://docs.dataforseo.com/v3/dataforseo_labs/google/bulk_traffic_estimation/live/?bash)
+ [Get Historical Bulk Traffic Estimation](https://docs.dataforseo.com/v3/dataforseo_labs/google/historical_bulk_traffic_estimation/live/?bash)

### Amazon
+ [Get Bulk Search Volume](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/bulk_search_volume/live/?bash)
+ [Get Related Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/related_keywords/live/?bash)
+ [Get Ranked Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/ranked_keywords/live/?bash)
+ [Get Product Rank Overview](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/product_rank_overview/live/?bash)
+ [Get Product Competitors](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/product_competitors/live/?bash)
+ [Get Product Keyword Intersections](https://docs.dataforseo.com/v3/dataforseo_labs/amazon/product_keyword_intersections/live/?bash)

### Bing
+ [Get Bulk Keyword Difficulty](https://docs.dataforseo.com/v3/dataforseo_labs/bing/bulk_keyword_difficulty/live/?bash)
+ [Get Bulk Traffic Estimation](https://docs.dataforseo.com/v3/dataforseo_labs/bing/bulk_traffic_estimation/live/?bash)
+ [Get Competitors Domain](https://docs.dataforseo.com/v3/dataforseo_labs/bing/competitors_domain/live/?bash)
+ [Get Domain Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/bing/domain_intersection/live/?bash)
+ [Get Domain Rank Overview](https://docs.dataforseo.com/v3/dataforseo_labs/bing/domain_rank_overview/live/?bash)
+ [Get Page Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/bing/page_intersection/live/?bash)
+ [Get Related Keywords](https://docs.dataforseo.com/v3/dataforseo_labs/bing/related_keywords/live/?bash)
+ [Get Relevant Pages](https://docs.dataforseo.com/v3/dataforseo_labs/bing/relevant_pages/live/?bash)
+ [Get SERP Competitors](https://docs.dataforseo.com/v3/dataforseo_labs/bing/serp_competitors/live/?bash)
+ [Get Subdomains](https://docs.dataforseo.com/v3/dataforseo_labs/bing/subdomains/live/?bash)

### Google Play
+ [Get Bulk App Metrics](https://docs.dataforseo.com/v3/dataforseo_labs/google/bulk_app_metrics/live/?bash)
+ [Get Keywords for App](https://docs.dataforseo.com/v3/dataforseo_labs/google/keywords_for_app/live/?bash)
+ [Get App Competitors](https://docs.dataforseo.com/v3/dataforseo_labs/google/app_competitors/live/?bash)
+ [Get App Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/google/app_intersection/live/?bash)

### App Store
+ [Get Bulk App Metrics](https://docs.dataforseo.com/v3/dataforseo_labs/apple/bulk_app_metrics/live/?bash)
+ [Get Keywords for App](https://docs.dataforseo.com/v3/dataforseo_labs/apple/keywords_for_app/live/?bash)
+ [Get App Competitors](https://docs.dataforseo.com/v3/dataforseo_labs/apple/app_competitors/live/?bash)
+ [Get App Intersection](https://docs.dataforseo.com/v3/dataforseo_labs/apple/app_intersection/live/?bash)

## DataForSEO Backlinks API
 + [Get Backlinks Summary](https://docs.dataforseo.com/v3/backlinks/summary/live/?bash)
 + [Get Historical Backlink Summary](https://docs.dataforseo.com/v3/backlinks/history/live/?bash)
 + [Get Backlinks](https://docs.dataforseo.com/v3/backlinks/backlinks/live/?bash)
 + [Get Anchors](https://docs.dataforseo.com/v3/backlinks/anchors/live/?bash)
 + [Get Domain Pages](https://docs.dataforseo.com/v3/backlinks/domain_pages/live/?bash)
 + [Get Domain Pages Summary](https://docs.dataforseo.com/v3/backlinks/domain_pages_summary/live/?bash)
 + [Get Referring Domains](https://docs.dataforseo.com/v3/backlinks/referring_domains/live/?bash)
 + [Get Referring Networks](https://docs.dataforseo.com/v3/backlinks/referring_networks/live/?bash)
 + [Get Competitors](https://docs.dataforseo.com/v3/backlinks/competitors/live/?bash)
 + [Get Domain Intersection](https://docs.dataforseo.com/v3/backlinks/domain_intersection/live/?bash)
 + [Get Page Intersection](https://docs.dataforseo.com/v3/backlinks/page_intersection/live/?bash)
 + [Get Backlinks Timeseries Summary](https://docs.dataforseo.com/v3/backlinks/timeseries_summary/live/?bash)
 + [Get New & Lost Backlinks Timeseries Summary](https://docs.dataforseo.com/v3/backlinks/timeseries_new_lost_summary/live/?bash)
 + [Get Bulk Ranks](https://docs.dataforseo.com/v3/backlinks/bulk_ranks/live/?bash)
 + [Get Bulk Backlinks](https://docs.dataforseo.com/v3/backlinks/bulk_backlinks/live/?bash)
 + [Get Bulk Spam Scores](https://docs.dataforseo.com/v3/backlinks/bulk_spam_score/live/?bash)
 + [Get Bulk Referring Domains](https://docs.dataforseo.com/v3/backlinks/bulk_referring_domains/live/?bash)
 + [Get Bulk New & Lost Backlinks](https://docs.dataforseo.com/v3/backlinks/bulk_new_lost_backlinks/live/?bash)
 + [Get Bulk New & Lost Referring Domains](https://docs.dataforseo.com/v3/backlinks/bulk_new_lost_referring_domains/live/?bash)
 + [Get Bulk Pages Summary](https://docs.dataforseo.com/v3/backlinks/bulk_pages_summary/live/?bash)

## DataForSEO OnPage API
+ [Get Pages](https://docs.dataforseo.com/v3/on_page/pages/?bash)
+ [Get Pages By Resource](https://docs.dataforseo.com/v3/on_page/page_by_resource/?bash)
+ [Get Resources](https://docs.dataforseo.com/v3/on_page/resources/?bash)
+ [Get Duplicate Tags](https://docs.dataforseo.com/v3/on_page/duplicate_tags/?bash)
+ [Get Duplicate Content](https://docs.dataforseo.com/v3/on_page/duplicate_content/?bash)
+ [Get Links](https://docs.dataforseo.com/v3/on_page/links/?bash)
+ [Get Redirect Chains](https://docs.dataforseo.com/v3/on_page/redirect_chains/?bash)
+ [Get Non-Indexable Pages](https://docs.dataforseo.com/v3/on_page/non_indexable/?bash)
+ [Get Waterfall](https://docs.dataforseo.com/v3/on_page/waterfall/?bash)
+ [Get Keyword Density](https://docs.dataforseo.com/v3/on_page/keyword_density/?bash)
+ [Get Microdata](https://docs.dataforseo.com/v3/on_page/microdata/?bash)
+ [Get Raw HTML](https://docs.dataforseo.com/v3/on_page/raw_html/?bash)
+ [Get Page Screenshot](https://docs.dataforseo.com/v3/on_page/page_screenshot/?bash)
+ [Get Parsed Content](https://docs.dataforseo.com/v3/on_page/content_parsing/?bash)
+ [Get Live Parsed Content](https://docs.dataforseo.com/v3/on_page/content_parsing/live/?bash)
+ [Get Live Instant Pages](https://docs.dataforseo.com/v3/on_page/instant_pages/?bash)
+ [Get Lighthouse Audit Results](https://docs.dataforseo.com/v3/on_page/lighthouse/task_get/json/?bash)
+ [Get Live Lighthouse Audit Results](https://docs.dataforseo.com/v3/on_page/lighthouse/live/json/?bash)

## DataForSEO Content Analysis API
+ [Get Search Results](https://docs.dataforseo.com/v3/content_analysis/search/live/?bash)
+ [Get Summary](https://docs.dataforseo.com/v3/content_analysis/summary/live/?bash)
+ [Get Sentiment Analysis](https://docs.dataforseo.com/v3/content_analysis/sentiment_analysis/live/?bash)
+ [Get Rating Distribution](https://docs.dataforseo.com/v3/content_analysis/rating_distribution/live/?bash)
+ [Get Phrase Trends](https://docs.dataforseo.com/v3/content_analysis/phrase_trends/live/?bash)
+ [Get Category Trends](https://docs.dataforseo.com/v3/content_analysis/category_trends/live/?bash)

## DataForSEO Content Generation API
+ [Generate Text From Initial Input](https://docs.dataforseo.com/v3/content_generation/generate/live/?bash)
+ [Generate Text By Topic](https://docs.dataforseo.com/v3/content_generation/generate_text/live/?bash)
+ [Generate Meta Tags](https://docs.dataforseo.com/v3/content_generation/generate_meta_tags/live/?bash)
+ [Generate Sub Topics](https://docs.dataforseo.com/v3/content_generation/generate_sub_topics/live/?bash)
+ [Paraphrase Text](https://docs.dataforseo.com/v3/content_generation/paraphrase/live/?bash)
+ [Check Grammar](https://docs.dataforseo.com/v3/content_generation/check_grammar/live/?bash)
+ [Get Text Summary](https://docs.dataforseo.com/v3/content_generation/text_summary/live/?bash)

## DataForSEO Merchant API

### Google Shopping
+ [Get Products Advanced](https://docs.dataforseo.com/v3/merchant/google/products/task_get/advanced/?bash)
+ [Get Products HTML](https://docs.dataforseo.com/v3/merchant/google/products/task_get/html/?bash)
+ [Get Sellers Advanced](https://docs.dataforseo.com/v3/merchant/google/sellers/task_get/advanced/?bash)
+ [Get Product Info](https://docs.dataforseo.com/v3/merchant/google/product_info/task_get/advanced/?bash)
+ [Get Product Reviews](https://docs.dataforseo.com/v3/merchant/google/reviews/task_get/advanced/?bash)

### Amazon
+ [Get Products Advanced](https://docs.dataforseo.com/v3/merchant/amazon/products/task_get/advanced/?bash)
+ [Get Products HTML](https://docs.dataforseo.com/v3/merchant/amazon/products/task_get/html/?bash)
+ [Get Product ASINs Advanced](https://docs.dataforseo.com/v3/merchant/amazon/asin/task_get/advanced/?bash)
+ [Get Product ASINs HTML](https://docs.dataforseo.com/v3/merchant/amazon/asin/task_get/html/?bash)
+ [Get Sellers Advanced](https://docs.dataforseo.com/v3/merchant/amazon/sellers/task_get/advanced/?bash)
+ [Get Sellers HTML](https://docs.dataforseo.com/v3/merchant/amazon/sellers/task_get/html?bash)

## DataForSEO App Data API

### Google
+ [Search Apps Advanced](https://docs.dataforseo.com/v3/app_data/google/app_searches/task_get/advanced/?bash)
+ [Search Apps HTML](https://docs.dataforseo.com/v3/app_data/google/app_searches/task_get/html/?bash)
+ [Get App List Advanced](https://docs.dataforseo.com/v3/app_data/google/app_list/task_get/advanced/?bash)
+ [Get App List HTML](https://docs.dataforseo.com/v3/app_data/google/app_list/task_get/html/?bash)
+ [Get App Info Advanced](https://docs.dataforseo.com/v3/app_data/google/app_info/task_get/advanced/?bash)
+ [Get App Info HTML](https://docs.dataforseo.com/v3/app_data/google/app_info/task_get/html/?bash)
+ [Get App Reviews](https://docs.dataforseo.com/v3/app_data/google/app_reviews/task_get/advanced/?bash)
+ [Get App Listing Search](https://docs.dataforseo.com/v3/app_data/google/app_listings/search/live/?bash)

### Apple
+ [Search Apps](https://docs.dataforseo.com/v3/app_data/apple/app_searches/task_get/advanced/?bash)
+ [Get App List](https://docs.dataforseo.com/v3/app_data/apple/app_list/task_get/advanced/?bash)
+ [Get App Info](https://docs.dataforseo.com/v3/app_data/apple/app_info/task_get/advanced/?bash)
+ [Get App Reviews](https://docs.dataforseo.com/v3/app_data/apple/app_reviews/task_get/advanced/?bash)
+ [Get App Listings Search](https://docs.dataforseo.com/v3/app_data/apple/app_listings/search/live/?bash)

## DataForSEO Business Data API

### Business Listings
+ [Get Business Listings](https://docs.dataforseo.com/v3/business_data/business_listings/search/live/?bash)
+ [Get Categories Aggregation](https://docs.dataforseo.com/v3/business_data/business_listings/categories_aggregation/live/?bash)

### Google
+ [Get Google Business Info Live](https://docs.dataforseo.com/v3/business_data/google/my_business_info/live/?bash)
+ [Get Google Business Info](https://docs.dataforseo.com/v3/business_data/google/my_business_info/task_get/?bash)
+ [Get Google Business Updates](https://docs.dataforseo.com/v3/business_data/google/my_business_updates/task_get/?bash)
+ [Get Google Hotel Searches Live](https://docs.dataforseo.com/v3/business_data/google/hotel_searches/live/?bash)
+ [Get Google Hotel Searches](https://docs.dataforseo.com/v3/business_data/google/hotel_searches/task_get/?bash)
+ [Get Live Google Hotel Info Advanced](https://docs.dataforseo.com/v3/business_data/google/hotel_info/live/advanced/?bash)
+ [Get Live Google Hotel Info HTML](https://docs.dataforseo.com/v3/business_data/google/hotel_info/live/html/?bash)
+ [Get Google Hotel Info Advanced](https://docs.dataforseo.com/v3/business_data/google/hotel_info/task_get/advanced/?bash)
+ [Get Google Hotel Info HTML](https://docs.dataforseo.com/v3/business_data/google/hotel_info/task_get/html/?bash)
+ [Get Google Reviews](https://docs.dataforseo.com/v3/business_data/google/reviews/task_get/?bash)
+ [Get Extended Google Reviews](https://docs.dataforseo.com/v3/business_data/google/extended_reviews/task_get/?bash)
+ [Get Live Business Questions and Answers](https://docs.dataforseo.com/v3/business_data/google/questions_and_answers/live/?bash)
+ [Get Business Questions and Answers](https://docs.dataforseo.com/v3/business_data/google/questions_and_answers/task_get/?bash)

### Trustpilot
+ [Search Trustpilot Business Info](https://docs.dataforseo.com/v3/business_data/trustpilot/search/task_get/?bash)
+ [Get Trustpilot Reviews](https://docs.dataforseo.com/v3/business_data/trustpilot/reviews/task_get/?bash)

### Tripadvisor
+ [Search Tripadvisor Business Info](https://docs.dataforseo.com/v3/business_data/tripadvisor/search/task_get/?bash)
+ [Get Tripadvisor Reviews](https://docs.dataforseo.com/v3/business_data/tripadvisor/reviews/task_get/?bash)

### Social Media
+ [Get Pinterest Data](https://docs.dataforseo.com/v3/business_data/social_media/pinterest/live/?bash)
+ [Get Facebook Data](https://docs.dataforseo.com/v3/business_data/social_media/facebook/live/?bash)
+ [Get Reddit Data](https://docs.dataforseo.com/v3/business_data/social_media/reddit/live/?bash)

Example DataForSEO Workflow Configurations
--------------------------

This section provides examples of commonly used DataForSEO operations along with detailed descriptions of their configuration parameters.

#### Backlinks
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
+ [Get Google AI Mode SERP](#get-google-ai-mode-serp)
#### Business Data
+ [Search Business Listings](#search-business-listings)
+ [Get Business Listings Categories Aggregation](#get-business-listings-categories-aggregation)
+ [Get Google Reviews](#get-google-reviews)
#### On Page
+ [Get Page Audit Check](#get-page-audit-check)
+ [Parse Page Content](#parse-page-content)
#### DataForSEO Labs
+ [Get Domain Rank Overview](#get-domain-rank-overview)
+ [Get Keyword Suggestions](#get-keyword-suggestions)
+ [Get Ranked Keywords](#get-ranked-keywords)
+ [Get Keyword Difficulty](#get-keyword-difficulty)
+ [Get Organic Traffic Stats](#get-organic-traffic-stats)
+ [Get Historical Traffic Stats](#get-historical-traffic-stats)
+ [Get Keyword Ideas](#get-keyword-ideas)


### Get Backlinks

Get a list of backlinks for a domain, subdomain, or page.

 + **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

+ **Mode**: Select the grouping type for the results (**As is**: Returns all backlinks, **One Per Domain**: Returns one backlink per domain, **One Per Anchor**: Returns one backlink per anchor). If not specified, the **As is** option will be selected by default.

+ **Limit (up to 1000)**: Enter the maximum number of returned backlinks.

+ **Offset**: Enter the offset in the results array for returned backlinks. The default value is 0. If set to 10, the first 10 backlinks will be skipped, and the results will start from the subsequent backlink.

+ **Sort**: Select the sorting rules for the results.

+ **Backlink Status**: Select the backlink status to return and count (**All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted). If not specified, the **Live** option will be selected by default.

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

### Get Backlink Summary

Get an overview of backlink data for a domain, subdomain, or webpage.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

+ **Internal List limit (up to 1000)**: Enter the number of backlinks to be returned in the results.

+ **Backlink Status**: Select the backlink status to return and count (**All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted).

### Get Historical Backlink Summary

Get historical backlink data for a domain dating back to the beginning of 2019.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

+ **Date From**: Enter the starting date of the time range. Minimal value: 2019-01-01. The minimum value will be used by default. Time zone: Europe/Prague.

+ **Date To**: Enter the ending date of the time range. If you don’t specify this field, today’s date will be used by default. Time zone: Europe/Prague.

### Get Bulk Backlink Rank

Get rank scores for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

### Get Bulk Backlink Stats

Get the number of backlinks for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

### Get Backlinks Pages Summary

Get an overview of backlinks and associated data in bulk.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

### Get Bulk Referring Domain Stats

Get the number of referring domains for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

### Get Referring Domains

Get a detailed overview of referring domains pointing to the target you specify.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

+ **Limit (up to 1000)**: Enter the maximum number of returned backlinks.

+ **Offset**: Enter the offset in the results array for returned backlinks. Default is 0. For example, if set to 10, the first 10 backlinks will be skipped, and the results will start from the subsequent backlink.

+ **Internal List limit ( up to 1000)**: Enter the number of backlinks to be returned in the results.

+ **Backlink Status**: Select the backlink status to return and count ( **All**: All backlinks will be returned and counted, **Live**: Backlinks found during the last check will be returned and counted, **Lost**: Lost backlinks will be returned and counted). If not specified, the **Live** option will be selected by default.

+ **Sort**: Enter (map) the sorting rules for the results.

+ **Include Subdomains (Optional)**: Select whether to include subdomains of the target in the search.

+ **Include Indirect Links (Optional)**: Select whether to include indirect links in the results.

+ **Exclude Internal Links (Optional)**: Select whether to include external links in the results.

### Get Bulk Spam Scores

Get Spam Scores for up to 1,000 domains, subdomains, and pages.

+ **Target (domain, subdomain, URL)**: Enter the domain, subdomain, or webpage to get backlinks for. A domain or a subdomain should be specified without `https://` and `www.` A page should be specified with an absolute URL (including `http://` or `https://`).

## SERP

### Get Parsed SERP

Get Google Search results for the specified keyword.

+ **Keyword**: Enter a keyword for parsing the SERP. You can specify up to 700 symbols.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations on the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages on the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Device**: Select your device type (Desktop, Mobile).
    
+ **OS**: Select your device's operating system (Windows, macOS, Android, iOS).

+ **Domain**: Enter the search engine domain. For example: `google.co.uk`, `google.com.au`, `google.de`, etc. Note: We automatically select the relevant search engine domain according to the location and language you specify. However, you can set a custom search engine domain in this field.

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

+ **Keyword (Ticker or Stock Symbol)**: Enter the Ticker symbol of publicly traded shares of a particular stock or security in a specific stock exchange.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Window**: Select time window for google_finance_quote graph.

### Search Google Finance Tickers

Search by company name, market, or financial instrument to get Google Finance data on stocks, futures, and asset pairs, their value, growth trends, and identifiers.

+ **Keyword**: Enter Company name or financial instrument.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Category**: Select the Category of financial instruments to search for.

### Get Google AI Mode SERP

Get search results from the AI Mode feature of Google Search.

+ **Keyword**: Keyword to get results for.

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Device**: Select your device type (Desktop, Mobile).
    
+ **OS**: Select your device's operating system (Windows, macOS, Android, iOS).

+ **Calculate Pixel Rankings for SERP Elements?**: By default, the parameter is set to false.

+ **Browser Screen Width**: You can set a custom browser screen width to calculate pixel rankings for a particular device.

+ **Browser Screen Height**: You can set a custom browser screen height to calculate pixel rankings for a particular device.

+ **Browser Screen Resolution Ratio**: You can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device.


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

+ **Offset**: Enter the offset in the results array.

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

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the subsequent result.

### Get Keyword Suggestions

Get search terms that are relevant to the product or service categories of all the specified keywords.

 + **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

+ **Keyword**: Enter the keyword for which you want to retrieve suggestions.

+ **Limit (up to 1000)**: Enter the maximum number of keyword suggestions to retrieve.

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the subsequent result.

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

+ **Target Keywords**: Enter the keywords you want to analyze for difficulty. Keywords should be in **UTF-8** encoding, at least three characters long, and will be converted to lowercase. You can specify up to 1000 keywords."

+ **Location**: Enter the full name of the search engine location. You can find the supported locations in the DataForSEO [Supported Locations page](https://docs.dataforseo.com/v3/serp/google/locations/).

+ **Language**: Enter the full name of the search engine language. You can find the list of supported languages in the DataForSEO [Supported Languages page](https://docs.dataforseo.com/v3/serp/google/languages/).

### Get Organic Traffic Stats

Get an estimation of the monthly organic traffic for a website or page.

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

+ **Offset**: Enter the offset in the results array. For example, if set to 10, the first 10 results will be skipped, and the data will start from the subsequent result.

+ **Sort**: Enter the sorting criteria for keyword ideas.
