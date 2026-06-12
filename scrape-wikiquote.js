import https from 'https';
import fs from 'fs';

const SOURCES = [
    { page: 'The_Princess_Bride_(film)', title: 'The Princess Bride', year: 1987 },
    { page: 'Back_to_the_Future', title: 'Back to the Future', year: 1985 },
    { page: 'The_Breakfast_Club', title: 'The Breakfast Club', year: 1985 },
    { page: 'Ghostbusters', title: 'Ghostbusters', year: 1984 },
    { page: 'Die_Hard_(film)', title: 'Die Hard', year: 1988 },
    { page: 'The_Terminator', title: 'The Terminator', year: 1984 },
    { page: 'E.T._the_Extra-Terrestrial', title: 'E.T. the Extra-Terrestrial', year: 1982 },
    { page: 'Pulp_Fiction', title: 'Pulp Fiction', year: 1994 },
    { page: 'The_Big_Lebowski', title: 'The Big Lebowski', year: 1998 },
    { page: 'Forrest_Gump', title: 'Forrest Gump', year: 1994 },
    { page: 'The_Matrix_(film)', title: 'The Matrix', year: 1999 },
    { page: 'Goodfellas', title: 'Goodfellas', year: 1990 },
    { page: 'The_Shawshank_Redemption', title: 'The Shawshank Redemption', year: 1994 },
    { page: 'Dumb_and_Dumber', title: 'Dumb and Dumber', year: 1994 },
    { page: 'Clueless_(film)', title: 'Clueless', year: 1995 },
    { page: 'The_Silence_of_the_Lambs_(film)', title: 'The Silence of the Lambs', year: 1991 },
    { page: 'Seinfeld', title: 'Seinfeld', year: 1989 }
];

function fetchWikitext(pageName) {
    return new Promise((resolve, reject) => {
        const apiPath = `/w/api.php?action=parse&page=${encodeURIComponent(pageName)}&prop=wikitext&format=json`;
        const options = {
            hostname: 'en.wikiquote.org',
            path: apiPath,
            headers: {
                'User-Agent': 'MovieQuotesApp/1.0 (educational project)'
            }
        };

        https.get(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    if (data.trim().startsWith('You are making')) {
                        reject(new Error('Rate limited by Wikiquote API'));
                        return;
                    }
                    const parsed = JSON.parse(data);
                    if (parsed.parse && parsed.parse.wikitext && parsed.parse.wikitext['*']) {
                        resolve(parsed.parse.wikitext['*']);
                    } else {
                        reject(new Error(`No wikitext found for ${pageName}`));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => reject(err));
    });
}

function cleanWikitext(text) {
    return text
        .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, '$1')
        .replace(/\[\[([^\]]+)\]\]/g, '$1')
        .replace(/\{\{[^{}]*\}\}/g, '')
        .replace(/<[^>]*>/g, '')
        .replace(/'''/g, '')
        .replace(/''/g, '')
        .replace(/\[\[/g, '')
        .replace(/\]\]/g, '')
        .trim();
}

function isLikelyStageDirection(text) {
    return /\[.*\]/.test(text);
}

function isDialogueAttribution(text) {
    // Skip "Character: line" patterns but keep colons inside the quote itself
    // Heuristic: if text starts with CapitalizedWord(s): and the part before colon is short
    const m = text.match(/^[A-Z][a-zA-Z\s.-]+:\s*/);
    if (m && m[0].length < 35) return true;
    return false;
}

function extractQuotes(wikitext, title, year) {
    const quotes = [];
    const lines = wikitext.split('\n');
    let inQuoteSection = false;
    let transcriptDepth = 0;

    // Known metadata sections to skip
    const skipSections = /\b(Cast|External links?|See also|References?|Notes?|Seasons|About\s|Contents?|Overview|Summary)\b/i;

    for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        const trimmed = rawLine.trim();

        // Detect section headers (== or ===)
        const sectionMatch = trimmed.match(/^(==+)\s*(.+?)\s*\1$/);
        if (sectionMatch) {
            const sectionName = sectionMatch[2];
            const level = sectionMatch[1].length;

            // Enter quote mode for quote-friendly sections
            if (/\b(Quotes|Dialogue|Tagline|Taglines)\b/i.test(sectionName)) {
                inQuoteSection = true;
                transcriptDepth = 0;
                continue;
            }

            // Also enter for character-name sections (e.g. "== Neo ==") if already in quotes
            // or if it's a top-level section that doesn't look like metadata
            if (level === 2) {
                if (skipSections.test(sectionName)) {
                    inQuoteSection = false;
                    transcriptDepth = 0;
                    continue;
                }
                // For movies with character sections (Matrix, etc.), treat non-metadata sections as quote sections
                inQuoteSection = true;
                transcriptDepth = 0;
                continue;
            }

            // Sub-sections
            if (inQuoteSection) {
                if (/\b(Scene|Act|Chapter|Part|Transcript)\b/i.test(sectionName)) {
                    transcriptDepth++;
                }
                continue;
            }
        }

        if (!inQuoteSection) continue;
        // Skip transcript subsections entirely
        if (transcriptDepth > 0) continue;

        const match = trimmed.match(/^(\*+|:+)\s*(.+)$/);
        if (!match) continue;

        let text = match[2];

        // Clean wikitext early so filtering works on plain text
        text = cleanWikitext(text);
        if (!text) continue;

        // Skip stage directions
        if (isLikelyStageDirection(text)) continue;
        // Skip dialogue attribution lines
        if (isDialogueAttribution(text)) continue;

        // Length filters
        if (text.length < 15 || text.length > 280) continue;

        // Skip non-quote patterns
        if (/^\[\[File:/i.test(text)) continue;
        if (/^\[\[Category:/i.test(text)) continue;
        if (/^\{\{/i.test(text)) continue;
        if (/https?/i.test(text)) continue;
        if (/Wikipedia/i.test(text)) continue;
        if (/Season\s+\d+/i.test(text)) continue;
        if (/Episode\s+\d+/i.test(text)) continue;
        if (/^Cast$/i.test(text)) continue;
        if (/^External links?$/i.test(text)) continue;
        if (/^See also$/i.test(text)) continue;
        if (/^References?$/i.test(text)) continue;
        if (/^Notes?$/i.test(text)) continue;
        if (/^\d+\.\s*\d+/.test(text)) continue;
        if (/^\d+\.\d+/.test(text)) continue;

        // Deduplicate within this movie
        const isDuplicate = quotes.some(q =>
            q.text.toLowerCase() === text.toLowerCase() ||
            (text.length > 30 && q.text.toLowerCase().includes(text.toLowerCase())) ||
            (q.text.length > 30 && text.toLowerCase().includes(q.text.toLowerCase()))
        );
        if (isDuplicate) continue;

        quotes.push({ text, movie: title, year });

        // Cap at 25 quotes per source to keep output manageable
        if (quotes.length >= 25) break;
    }

    return quotes;
}

function formatForSwift(quotes) {
    let swiftCode = '// Scraped quotes from Wikiquote\nlet scrapedQuotes: [Quote] = [\n';
    quotes.forEach((quote, index) => {
        const id = index + 700;
        const text = quote.text.replace(/"/g, '\\"').replace(/\n/g, ' ');
        const movie = quote.movie.replace(/"/g, '\\"');
        swiftCode += `    Quote(id: ${id}, text: "${text}", movie: "${movie}", year: ${quote.year}),\n`;
    });
    swiftCode += ']\n';
    return swiftCode;
}

function formatForTypeScript(quotes) {
    let tsCode = 'import type { Quote } from \'./src/data/quotes\';\n\n';
    tsCode += '// Scraped quotes from Wikiquote\nexport const scrapedQuotes: Quote[] = [\n';
    quotes.forEach((quote, index) => {
        const id = index + 700;
        const text = quote.text.replace(/"/g, '\\"').replace(/\n/g, ' ');
        const movie = quote.movie.replace(/"/g, '\\"');
        tsCode += `  { id: ${id}, text: "${text}", source: "${movie}", year: ${quote.year} },\n`;
    });
    tsCode += '];\n';
    return tsCode;
}

async function main() {
    console.log('🎬 Wikiquote Scraper for 80s/90s Movies & Seinfeld');
    console.log('   Using MediaWiki API (wikitext mode)\n');

    const allQuotes = [];

    for (const source of SOURCES) {
        let retries = 3;
        while (retries > 0) {
            try {
                console.log(`📖 Scraping: ${source.title} (${source.year})...`);
                const wikitext = await fetchWikitext(source.page);
                const quotes = extractQuotes(wikitext, source.title, source.year);
                console.log(`   ✓ Found ${quotes.length} quotes`);
                allQuotes.push(...quotes);
                await new Promise(resolve => setTimeout(resolve, 1500));
                break;
            } catch (error) {
                retries--;
                if (error.message.includes('Rate limited') && retries > 0) {
                    console.log(`   ⏳ Rate limited, waiting 10s before retry...`);
                    await new Promise(resolve => setTimeout(resolve, 10000));
                } else {
                    console.error(`   ✗ Error scraping ${source.title}:`, error.message);
                    break;
                }
            }
        }
    }

    console.log(`\n✓ Total quotes collected: ${allQuotes.length}\n`);

    const uniqueQuotes = [];
    const seen = new Set();
    allQuotes.forEach(quote => {
        const key = quote.text.toLowerCase().trim();
        if (!seen.has(key)) {
            seen.add(key);
            uniqueQuotes.push(quote);
        }
    });

    console.log(`✓ Unique quotes after deduplication: ${uniqueQuotes.length}\n`);

    fs.writeFileSync('scraped_quotes.swift', formatForSwift(uniqueQuotes));
    console.log('✓ Swift quotes saved to: scraped_quotes.swift');

    fs.writeFileSync('scraped_quotes.ts', formatForTypeScript(uniqueQuotes));
    console.log('✓ TypeScript quotes saved to: scraped_quotes.ts');

    fs.writeFileSync('scraped_quotes.json', JSON.stringify(uniqueQuotes, null, 2));
    console.log('✓ JSON quotes saved to: scraped_quotes.json');

    console.log('\n🎉 Done! Review the quotes and copy the good ones to your app files.');
}

main();
