import https from 'https';
import fs from 'fs';

// API endpoint for movie quotes
const API_URL = 'https://movie-quote-api.herokuapp.com/v1/quote/';

// Function to fetch a random quote
function fetchQuote() {
    return new Promise((resolve, reject) => {
        https.get(API_URL, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const quote = JSON.parse(data);
                    resolve(quote);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Function to fetch multiple quotes
async function fetchMultipleQuotes(count = 50) {
    const quotes = [];
    const uniqueQuotes = new Set();

    console.log(`Fetching ${count} quotes...`);

    for (let i = 0; i < count; i++) {
        try {
            const quote = await fetchQuote();

            // Create a unique key to avoid duplicates
            const key = `${quote.quote}-${quote.show}`;

            if (!uniqueQuotes.has(key)) {
                uniqueQuotes.add(key);
                quotes.push({
                    text: quote.quote,
                    movie: quote.show,
                    year: quote.year || 'Unknown'
                });
                console.log(`✓ Fetched: "${quote.quote.substring(0, 50)}..." from ${quote.show}`);
            } else {
                console.log(`⊘ Skipped duplicate from ${quote.show}`);
                i--; // Don't count duplicates
            }

            // Small delay to avoid overwhelming the API
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
            console.error(`✗ Error fetching quote ${i + 1}:`, error.message);
        }
    }

    return quotes;
}

// Function to format quotes for Swift
function formatForSwift(quotes) {
    let swiftCode = '// Generated quotes from API\nlet apiQuotes: [Quote] = [\n';

    quotes.forEach((quote, index) => {
        const id = index + 100; // Start from 100 to avoid conflicts
        const text = quote.text.replace(/"/g, '\\"').replace(/\n/g, ' ');
        const movie = quote.movie.replace(/"/g, '\\"');
        const year = quote.year;

        swiftCode += `    Quote(id: ${id}, text: "${text}", movie: "${movie}", year: ${year}),\n`;
    });

    swiftCode += ']\n';
    return swiftCode;
}

// Function to format quotes for TypeScript
function formatForTypeScript(quotes) {
    let tsCode = '// Generated quotes from API\nexport const apiQuotes: Quote[] = [\n';

    quotes.forEach((quote, index) => {
        const id = index + 100; // Start from 100 to avoid conflicts
        const text = quote.text.replace(/"/g, '\\"').replace(/\n/g, ' ');
        const movie = quote.movie.replace(/"/g, '\\"');
        const year = quote.year;

        tsCode += `  { id: ${id}, text: "${text}", movie: "${movie}", year: ${year} },\n`;
    });

    tsCode += '];\n';
    return tsCode;
}

// Main execution
async function main() {
    try {
        console.log('🎬 Movie Quote Fetcher\n');

        // Fetch quotes
        const quotes = await fetchMultipleQuotes(50);

        console.log(`\n✓ Successfully fetched ${quotes.length} unique quotes\n`);

        // Generate Swift code
        const swiftCode = formatForSwift(quotes);
        fs.writeFileSync('fetched_quotes.swift', swiftCode);
        console.log('✓ Swift quotes saved to: fetched_quotes.swift');

        // Generate TypeScript code
        const tsCode = formatForTypeScript(quotes);
        fs.writeFileSync('fetched_quotes.ts', tsCode);
        console.log('✓ TypeScript quotes saved to: fetched_quotes.ts');

        // Save raw JSON for reference
        fs.writeFileSync('fetched_quotes.json', JSON.stringify(quotes, null, 2));
        console.log('✓ JSON quotes saved to: fetched_quotes.json');

        console.log('\n🎉 Done! You can now copy the quotes to your app files.');

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
