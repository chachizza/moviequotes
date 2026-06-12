# Movie Quote Fetcher

This script fetches movie and TV show quotes from a free API and formats them for use in your app.

## Usage

1. Run the script:
```bash
node fetch-quotes.js
```

2. The script will:
   - Fetch 50 unique quotes from the API
   - Generate `fetched_quotes.swift` for iOS app
   - Generate `fetched_quotes.ts` for web app
   - Generate `fetched_quotes.json` for reference

3. Copy the generated quotes to your app:
   - For iOS: Copy content from `fetched_quotes.swift` to `QuotesData.swift`
   - For Web: Copy content from `fetched_quotes.ts` to `quotes.ts`

## Customization

To fetch more or fewer quotes, edit the number in `fetch-quotes.js`:
```javascript
const quotes = await fetchMultipleQuotes(50); // Change 50 to desired number
```

## API Source

Uses the free movie-quote API: https://movie-quote-api.herokuapp.com/

## Note

The API returns random quotes from various movies and TV shows. You may want to manually curate the results to focus on 80s/90s content and Seinfeld quotes as desired.
