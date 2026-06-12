# Wikiquote Scraper

This script scrapes movie and TV show quotes from Wikiquote for 80s/90s classics and Seinfeld.

## Usage

1. Run the scraper:
```bash
node scrape-wikiquote.js
```

2. The script will:
   - Scrape quotes from 17 sources (80s/90s movies + Seinfeld)
   - Remove duplicates
   - Generate `scraped_quotes.swift` for iOS app
   - Generate `scraped_quotes.ts` for web app
   - Generate `scraped_quotes.json` for review

3. Review and curate:
   - Open `scraped_quotes.json` to review the quotes
   - The scraper is basic, so some quotes may need manual filtering
   - Copy the best quotes to your app files

## Sources Included

### 80s Movies:
- The Princess Bride (1987)
- Back to the Future (1985)
- The Breakfast Club (1985)
- Ghostbusters (1984)
- Die Hard (1988)
- The Terminator (1984)
- E.T. the Extra-Terrestrial (1982)

### 90s Movies:
- Pulp Fiction (1994)
- The Big Lebowski (1998)
- Forrest Gump (1994)
- The Matrix (1999)
- Goodfellas (1990)
- The Shawshank Redemption (1994)
- Dumb and Dumber (1994)
- Clueless (1995)
- The Silence of the Lambs (1991)

### TV Shows:
- Seinfeld (1989-1998)

## Adding More Sources

Edit the `SOURCES` array in `scrape-wikiquote.js`:
```javascript
{ url: 'https://en.wikiquote.org/wiki/Movie_Name', title: 'Movie Name', year: 1990 }
```

## Note

This is a simple HTML scraper. Wikiquote's HTML structure may vary, so results may need manual curation. The script filters out obvious non-quote content but may still capture some metadata.
