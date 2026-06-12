// Curated 80s/90s Movie & Seinfeld Quotes
let curatedQuotes: [Quote] = [
    // The Princess Bride (1987)
    Quote(id: 100, text: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.", movie: "The Princess Bride", year: 1987),
    Quote(id: 101, text: "As you wish.", movie: "The Princess Bride", year: 1987),
    Quote(id: 102, text: "Inconceivable!", movie: "The Princess Bride", year: 1987),
    Quote(id: 103, text: "Have fun storming the castle!", movie: "The Princess Bride", year: 1987),
    
    // Back to the Future (1985)
    Quote(id: 104, text: "Roads? Where we're going, we don't need roads.", movie: "Back to the Future", year: 1985),
    Quote(id: 105, text: "Great Scott!", movie: "Back to the Future", year: 1985),
    Quote(id: 106, text: "This is heavy.", movie: "Back to the Future", year: 1985),
    
    // The Terminator (1984)
    Quote(id: 107, text: "I'll be back.", movie: "The Terminator", year: 1984),
    Quote(id: 108, text: "Come with me if you want to live.", movie: "The Terminator", year: 1984),
    
    // Ghostbusters (1984)
    Quote(id: 109, text: "Who you gonna call? Ghostbusters!", movie: "Ghostbusters", year: 1984),
    Quote(id: 110, text: "I ain't afraid of no ghost.", movie: "Ghostbusters", year: 1984),
    Quote(id: 111, text: "We came, we saw, we kicked its ass!", movie: "Ghostbusters", year: 1984),
    
    // Die Hard (1988)
    Quote(id: 112, text: "Yippee-ki-yay, motherf***er!", movie: "Die Hard", year: 1988),
    Quote(id: 113, text: "Welcome to the party, pal!", movie: "Die Hard", year: 1988),
    
    // The Breakfast Club (1985)
    Quote(id: 114, text: "We're all pretty bizarre. Some of us are just better at hiding it.", movie: "The Breakfast Club", year: 1985),
    Quote(id: 115, text: "Screws fall out all the time, the world is an imperfect place.", movie: "The Breakfast Club", year: 1985),
    
    // Pulp Fiction (1994)
    Quote(id: 116, text: "Say 'what' again. I dare you, I double dare you!", movie: "Pulp Fiction", year: 1994),
    Quote(id: 117, text: "Ezekiel 25:17. The path of the righteous man...", movie: "Pulp Fiction", year: 1994),
    Quote(id: 118, text: "Royale with cheese.", movie: "Pulp Fiction", year: 1994),
    
    // The Big Lebowski (1998)
    Quote(id: 119, text: "The Dude abides.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 120, text: "That rug really tied the room together.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 121, text: "This aggression will not stand, man.", movie: "The Big Lebowski", year: 1998),
    
    // Forrest Gump (1994)
    Quote(id: 122, text: "Life is like a box of chocolates. You never know what you're gonna get.", movie: "Forrest Gump", year: 1994),
    Quote(id: 123, text: "Run, Forrest, run!", movie: "Forrest Gump", year: 1994),
    Quote(id: 124, text: "Stupid is as stupid does.", movie: "Forrest Gump", year: 1994),
    Quote(id: 125, text: "My mama always said life was like a box of chocolates.", movie: "Forrest Gump", year: 1994),
    
    // The Matrix (1999)
    Quote(id: 126, text: "There is no spoon.", movie: "The Matrix", year: 1999),
    Quote(id: 127, text: "I know kung fu.", movie: "The Matrix", year: 1999),
    Quote(id: 128, text: "Welcome to the real world.", movie: "The Matrix", year: 1999),
    Quote(id: 129, text: "What if I told you...", movie: "The Matrix", year: 1999),
    
    // Goodfellas (1990)
    Quote(id: 130, text: "As far back as I can remember, I always wanted to be a gangster.", movie: "Goodfellas", year: 1990),
    Quote(id: 131, text: "Funny how? Like I'm a clown? I amuse you?", movie: "Goodfellas", year: 1990),
    
    // The Shawshank Redemption (1994)
    Quote(id: 132, text: "Get busy living, or get busy dying.", movie: "The Shawshank Redemption", year: 1994),
    Quote(id: 133, text: "Hope is a good thing, maybe the best of things.", movie: "The Shawshank Redemption", year: 1994),
    Quote(id: 134, text: "I guess it comes down to a simple choice: get busy living or get busy dying.", movie: "The Shawshank Redemption", year: 1994),
    
    // Dumb and Dumber (1994)
    Quote(id: 135, text: "So you're telling me there's a chance?", movie: "Dumb and Dumber", year: 1994),
    Quote(id: 136, text: "We got no food, we got no jobs... our pets' heads are falling off!", movie: "Dumb and Dumber", year: 1994),
    
    // Clueless (1995)
    Quote(id: 137, text: "As if!", movie: "Clueless", year: 1995),
    Quote(id: 138, text: "You're a virgin who can't drive.", movie: "Clueless", year: 1995),
    
    // The Silence of the Lambs (1991)
    Quote(id: 139, text: "I ate his liver with some fava beans and a nice Chianti.", movie: "The Silence of the Lambs", year: 1991),
    Quote(id: 140, text: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.", movie: "The Silence of the Lambs", year: 1991),
    
    // Seinfeld (1989-1998)
    Quote(id: 141, text: "No soup for you!", movie: "Seinfeld", year: 1995),
    Quote(id: 142, text: "These pretzels are making me thirsty!", movie: "Seinfeld", year: 1992),
    Quote(id: 143, text: "Not that there's anything wrong with that.", movie: "Seinfeld", year: 1993),
    Quote(id: 144, text: "Serenity now!", movie: "Seinfeld", year: 1997),
    Quote(id: 145, text: "It's gold, Jerry! Gold!", movie: "Seinfeld", year: 1996),
    Quote(id: 146, text: "I was in the pool!", movie: "Seinfeld", year: 1994),
    Quote(id: 147, text: "Yada yada yada.", movie: "Seinfeld", year: 1997),
    Quote(id: 148, text: "They're real, and they're spectacular.", movie: "Seinfeld", year: 1993),
    Quote(id: 149, text: "I don't wanna be a pirate!", movie: "Seinfeld", year: 1993),
    Quote(id: 150, text: "That's a shame.", movie: "Seinfeld", year: 1992),
    Quote(id: 151, text: "Giddy up!", movie: "Seinfeld", year: 1996),
    Quote(id: 152, text: "You're killing independent George!", movie: "Seinfeld", year: 1995),
    Quote(id: 153, text: "I'm out there, Jerry, and I'm loving every minute of it!", movie: "Seinfeld", year: 1991),
    Quote(id: 154, text: "The sea was angry that day, my friends.", movie: "Seinfeld", year: 1994),
    
    // More 80s classics
    Quote(id: 155, text: "E.T. phone home.", movie: "E.T. the Extra-Terrestrial", year: 1982),
    Quote(id: 156, text: "I feel the need... the need for speed!", movie: "Top Gun", year: 1986),
    Quote(id: 157, text: "Nobody puts Baby in a corner.", movie: "Dirty Dancing", year: 1987),
    Quote(id: 158, text: "Bueller? Bueller?", movie: "Ferris Bueller's Day Off", year: 1986),
    Quote(id: 159, text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", movie: "Ferris Bueller's Day Off", year: 1986),
    
    // More 90s classics
    Quote(id: 160, text: "You can't handle the truth!", movie: "A Few Good Men", year: 1992),
    Quote(id: 161, text: "Show me the money!", movie: "Jerry Maguire", year: 1996),
    Quote(id: 162, text: "You had me at hello.", movie: "Jerry Maguire", year: 1996),
    Quote(id: 163, text: "I see dead people.", movie: "The Sixth Sense", year: 1999),
    Quote(id: 164, text: "Houston, we have a problem.", movie: "Apollo 13", year: 1995),
    Quote(id: 165, text: "To infinity and beyond!", movie: "Toy Story", year: 1995),
    Quote(id: 166, text: "You've got a friend in me.", movie: "Toy Story", year: 1995),
    Quote(id: 167, text: "Hakuna Matata.", movie: "The Lion King", year: 1994),
    Quote(id: 168, text: "I'm the king of the world!", movie: "Titanic", year: 1997),
    Quote(id: 169, text: "Alrighty then!", movie: "Ace Ventura: Pet Detective", year: 1994),
    Quote(id: 170, text: "Smokin'!", movie: "The Mask", year: 1994)
]
