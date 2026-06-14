export interface Quote {
  id: number;
  text: string;
  source: string;
  year: number;
}

export const quotes: Quote[] = [
  // Classic quotes
  { id: 1, text: "Here's looking at you, kid.", source: "Casablanca", year: 1942 },
  { id: 2, text: "May the Force be with you.", source: "Star Wars", year: 1977 },
  { id: 3, text: "I'm going to make him an offer he can't refuse.", source: "The Godfather", year: 1972 },
  { id: 4, text: "You talking to me?", source: "Taxi Driver", year: 1976 },

  // The Princess Bride (1987)
  { id: 100, text: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.", source: "The Princess Bride", year: 1987 },
  { id: 101, text: "As you wish.", source: "The Princess Bride", year: 1987 },
  { id: 102, text: "Inconceivable!", source: "The Princess Bride", year: 1987 },
  { id: 103, text: "Have fun storming the castle!", source: "The Princess Bride", year: 1987 },

  // Back to the Future (1985)
  { id: 104, text: "Roads? Where we're going, we don't need roads.", source: "Back to the Future", year: 1985 },
  { id: 105, text: "Great Scott!", source: "Back to the Future", year: 1985 },
  { id: 106, text: "This is heavy.", source: "Back to the Future", year: 1985 },

  // The Terminator (1984)
  { id: 10, text: "I'll be back.", source: "The Terminator", year: 1984 },
  { id: 108, text: "Come with me if you want to live.", source: "The Terminator", year: 1984 },
  { id: 23, text: "Hasta la vista, baby.", source: "Terminator 2: Judgment Day", year: 1991 },

  // Ghostbusters (1984)
  { id: 109, text: "Who you gonna call? Ghostbusters!", source: "Ghostbusters", year: 1984 },
  { id: 110, text: "I ain't afraid of no ghost.", source: "Ghostbusters", year: 1984 },
  { id: 111, text: "We came, we saw, we kicked its ass!", source: "Ghostbusters", year: 1984 },

  // Die Hard (1988)
  { id: 112, text: "Yippee-ki-yay!", source: "Die Hard", year: 1988 },
  { id: 113, text: "Welcome to the party, pal!", source: "Die Hard", year: 1988 },

  // The Breakfast Club (1985)
  { id: 114, text: "We're all pretty bizarre. Some of us are just better at hiding it.", source: "The Breakfast Club", year: 1985 },
  { id: 115, text: "Screws fall out all the time, the world is an imperfect place.", source: "The Breakfast Club", year: 1985 },

  // Pulp Fiction (1994)
  { id: 116, text: "Say 'what' again. I dare you, I double dare you!", source: "Pulp Fiction", year: 1994 },
  { id: 117, text: "The path of the righteous man...", source: "Pulp Fiction", year: 1994 },
  { id: 118, text: "Royale with cheese.", source: "Pulp Fiction", year: 1994 },

  // The Big Lebowski (1998)
  { id: 119, text: "The Dude abides.", source: "The Big Lebowski", year: 1998 },
  { id: 120, text: "That rug really tied the room together.", source: "The Big Lebowski", year: 1998 },
  { id: 121, text: "This aggression will not stand, man.", source: "The Big Lebowski", year: 1998 },

  // Forrest Gump (1994)
  { id: 11, text: "Life is like a box of chocolates. You never know what you're gonna get.", source: "Forrest Gump", year: 1994 },
  { id: 20, text: "My mama always said life was like a box of chocolates.", source: "Forrest Gump", year: 1994 },
  { id: 123, text: "Run, Forrest, run!", source: "Forrest Gump", year: 1994 },
  { id: 124, text: "Stupid is as stupid does.", source: "Forrest Gump", year: 1994 },

  // The Matrix (1999)
  { id: 8, text: "The first rule of Fight Club is: You do not talk about Fight Club.", source: "Fight Club", year: 1999 },
  { id: 126, text: "There is no spoon.", source: "The Matrix", year: 1999 },
  { id: 127, text: "I know kung fu.", source: "The Matrix", year: 1999 },
  { id: 128, text: "Welcome to the real world.", source: "The Matrix", year: 1999 },

  // Goodfellas (1990)
  { id: 130, text: "As far back as I can remember, I always wanted to be a gangster.", source: "Goodfellas", year: 1990 },
  { id: 131, text: "Funny how? Like I'm a clown? I amuse you?", source: "Goodfellas", year: 1990 },

  // The Shawshank Redemption (1994)
  { id: 132, text: "Get busy living, or get busy dying.", source: "The Shawshank Redemption", year: 1994 },
  { id: 133, text: "Hope is a good thing, maybe the best of things.", source: "The Shawshank Redemption", year: 1994 },

  // Dumb and Dumber (1994)
  { id: 135, text: "So you're telling me there's a chance?", source: "Dumb and Dumber", year: 1994 },
  { id: 136, text: "We got no food, we got no jobs... our pets' heads are falling off!", source: "Dumb and Dumber", year: 1994 },

  // Clueless (1995)
  { id: 137, text: "As if!", source: "Clueless", year: 1995 },
  { id: 138, text: "You're a virgin who can't drive.", source: "Clueless", year: 1995 },

  // The Silence of the Lambs (1991)
  { id: 139, text: "I ate his liver with some fava beans and a nice Chianti.", source: "The Silence of the Lambs", year: 1991 },

  // Seinfeld (1989-1998)
  { id: 58, text: "No soup for you!", source: "Seinfeld", year: 1995 },
  { id: 142, text: "These pretzels are making me thirsty!", source: "Seinfeld", year: 1992 },
  { id: 143, text: "Not that there's anything wrong with that.", source: "Seinfeld", year: 1993 },
  { id: 144, text: "Serenity now!", source: "Seinfeld", year: 1997 },
  { id: 145, text: "It's gold, Jerry! Gold!", source: "Seinfeld", year: 1996 },
  { id: 146, text: "I was in the pool!", source: "Seinfeld", year: 1994 },
  { id: 57, text: "Yada, yada, yada.", source: "Seinfeld", year: 1997 },
  { id: 148, text: "They're real, and they're spectacular.", source: "Seinfeld", year: 1993 },
  { id: 149, text: "I don't wanna be a pirate!", source: "Seinfeld", year: 1993 },
  { id: 150, text: "That's a shame.", source: "Seinfeld", year: 1992 },
  { id: 151, text: "Giddy up!", source: "Seinfeld", year: 1996 },
  { id: 152, text: "You're killing independent George!", source: "Seinfeld", year: 1995 },
  { id: 153, text: "I'm out there, Jerry, and I'm loving every minute of it!", source: "Seinfeld", year: 1991 },
  { id: 154, text: "The sea was angry that day, my friends.", source: "Seinfeld", year: 1994 },

  // More 80s classics
  { id: 5, text: "E.T. phone home.", source: "E.T. the Extra-Terrestrial", year: 1982 },
  { id: 30, text: "I feel the need—the need for speed!", source: "Top Gun", year: 1986 },
  { id: 32, text: "Nobody puts Baby in a corner.", source: "Dirty Dancing", year: 1987 },
  { id: 158, text: "Bueller? Bueller?", source: "Ferris Bueller's Day Off", year: 1986 },
  { id: 159, text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", source: "Ferris Bueller's Day Off", year: 1986 },
  { id: 17, text: "Say 'hello' to my little friend!", source: "Scarface", year: 1983 },
  { id: 37, text: "I am serious. And don't call me Shirley.", source: "Airplane!", year: 1980 },
  { id: 38, text: "Here's Johnny!", source: "The Shining", year: 1980 },

  // More 90s classics
  { id: 14, text: "You can't handle the truth!", source: "A Few Good Men", year: 1992 },
  { id: 34, text: "Show me the money!", source: "Jerry Maguire", year: 1996 },
  { id: 28, text: "You had me at 'hello'.", source: "Jerry Maguire", year: 1996 },
  { id: 15, text: "I see dead people.", source: "The Sixth Sense", year: 1999 },
  { id: 13, text: "Houston, we have a problem.", source: "Apollo 13", year: 1995 },
  { id: 12, text: "To infinity and beyond!", source: "Toy Story", year: 1995 },
  { id: 166, text: "You've got a friend in me.", source: "Toy Story", year: 1995 },
  { id: 167, text: "Hakuna Matata.", source: "The Lion King", year: 1994 },
  { id: 33, text: "I'm the king of the world!", source: "Titanic", year: 1997 },
  { id: 25, text: "Jack, I want you to draw me like one of your French girls.", source: "Titanic", year: 1997 },
  { id: 169, text: "Alrighty then!", source: "Ace Ventura: Pet Detective", year: 1994 },
  { id: 170, text: "Smokin'!", source: "The Mask", year: 1994 },
  { id: 39, text: "They may take our lives, but they'll never take our freedom!", source: "Braveheart", year: 1995 },
  { id: 27, text: "There's no crying in baseball!", source: "A League of Their Own", year: 1992 },
  { id: 21, text: "I'll have what she's having.", source: "When Harry Met Sally...", year: 1989 },
  { id: 31, text: "Carpe diem. Seize the day, boys.", source: "Dead Poets Society", year: 1989 },
  { id: 40, text: "If you build it, he will come.", source: "Field of Dreams", year: 1989 },

  // Additional classics
  { id: 6, text: "There's no place like home.", source: "The Wizard of Oz", year: 1939 },
  { id: 7, text: "I am your father.", source: "Star Wars Episode V: The Empire Strikes Back", year: 1980 },
  { id: 9, text: "Why so serious?", source: "The Dark Knight", year: 2008 },
  { id: 16, text: "Keep your friends close, but your enemies closer.", source: "The Godfather Part II", year: 1974 },
  { id: 18, text: "Elementary, my dear Watson.", source: "The Adventures of Sherlock Holmes", year: 1939 },
  { id: 19, text: "It's alive! It's alive!", source: "Frankenstein", year: 1931 },
  { id: 22, text: "You're gonna need a bigger boat.", source: "Jaws", year: 1975 },
  { id: 24, text: "My precious.", source: "The Lord of the Rings: The Two Towers", year: 2002 },
  { id: 26, text: "Just keep swimming.", source: "Finding Nemo", year: 2003 },
  { id: 29, text: "A martini. Shaken, not stirred.", source: "Goldfinger", year: 1964 },
  { id: 35, text: "You can't sit with us!", source: "Mean Girls", year: 2004 },
  { id: 36, text: "On Wednesdays we wear pink.", source: "Mean Girls", year: 2004 },
  { id: 64, text: "Look at me. I'm the captain now.", source: "Captain Phillips", year: 2013 },

  // TV Shows
  { id: 41, text: "I am the one who knocks!", source: "Breaking Bad", year: 2011 },
  { id: 42, text: "Winter is coming.", source: "Game of Thrones", year: 2011 },
  { id: 43, text: "That's what she said.", source: "The Office", year: 2005 },
  { id: 44, text: "Bazinga!", source: "The Big Bang Theory", year: 2007 },
  { id: 45, text: "How you doin'?", source: "Friends", year: 1994 },
  { id: 46, text: "D'oh!", source: "The Simpsons", year: 1989 },
  { id: 47, text: "Treat. Yo. Self.", source: "Parks and Recreation", year: 2011 },
  { id: 48, text: "Clear eyes, full hearts, can't lose.", source: "Friday Night Lights", year: 2006 },
  { id: 49, text: "Legen... wait for it... dary!", source: "How I Met Your Mother", year: 2005 },
  { id: 50, text: "Pivot!", source: "Friends", year: 1999 },
  { id: 51, text: "Identity theft is not a joke, Jim!", source: "The Office", year: 2007 },
  { id: 52, text: "Yeah bitch! Magnets!", source: "Breaking Bad", year: 2012 },
  { id: 53, text: "I drink and I know things.", source: "Game of Thrones", year: 2016 },
  { id: 54, text: "Live long and prosper.", source: "Star Trek", year: 1966 },
  { id: 55, text: "The truth is out there.", source: "The X-Files", year: 1993 },
  { id: 56, text: "Everybody lies.", source: "House M.D.", year: 2004 },
  { id: 59, text: "Did I do that?", source: "Family Matters", year: 1989 },
  { id: 60, text: "Norm!", source: "Cheers", year: 1982 },
  { id: 61, text: "Suit up!", source: "How I Met Your Mother", year: 2005 },
  { id: 62, text: "We were on a break!", source: "Friends", year: 1997 },
  { id: 63, text: "I want to believe.", source: "The X-Files", year: 1993 },
  { id: 65, text: "Say my name.", source: "Breaking Bad", year: 2013 },
  { id: 66, text: "Tread lightly.", source: "Breaking Bad", year: 2013 },
  { id: 67, text: "Valar Morghulis.", source: "Game of Thrones", year: 2012 },
  { id: 68, text: "Not great, Bob!", source: "Mad Men", year: 2013 },
  { id: 69, text: "Hello, friend.", source: "Mr. Robot", year: 2015 },
  { id: 70, text: "Be curious, not judgmental.", source: "Ted Lasso", year: 2020 },

  // Action Movies - 80s/90s (Additional)
  { id: 200, text: "Get to the chopper!", source: "Predator", year: 1987 },
  { id: 201, text: "If it bleeds, we can kill it.", source: "Predator", year: 1987 },
  { id: 202, text: "I ain't got time to bleed.", source: "Predator", year: 1987 },
  { id: 203, text: "Come out to the coast, we'll get together, have a few laughs.", source: "Die Hard", year: 1988 },
  { id: 204, text: "Now I have a machine gun. Ho-ho-ho.", source: "Die Hard", year: 1988 },
  { id: 351, text: "We're gonna need some more FBI guys I guess.", source: "Die Hard", year: 1988 },
  { id: 205, text: "I'm your worst nightmare.", source: "Rambo: First Blood Part II", year: 1985 },
  { id: 207, text: "I'm too old for this shit.", source: "Lethal Weapon", year: 1987 },
  { id: 208, text: "Diplomatic immunity!", source: "Lethal Weapon 2", year: 1989 },
  { id: 209, text: "It's been revoked.", source: "Lethal Weapon 2", year: 1989 },
  { id: 212, text: "Go ahead, make my day.", source: "Sudden Impact", year: 1983 },
  { id: 219, text: "I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum.", source: "They Live", year: 1988 },
  { id: 220, text: "Stick around.", source: "Predator", year: 1987 },
  { id: 273, text: "Game over, man! Game over!", source: "Aliens", year: 1986 },
  { id: 274, text: "Get away from her, you bitch!", source: "Aliens", year: 1986 },
  { id: 275, text: "They mostly come at night... mostly.", source: "Aliens", year: 1986 },
  { id: 278, text: "Do. Or do not. There is no try.", source: "The Empire Strikes Back", year: 1980 },
  { id: 279, text: "Never tell me the odds!", source: "The Empire Strikes Back", year: 1980 },
  { id: 280, text: "It's a trap!", source: "Return of the Jedi", year: 1983 },

  // Comedies - 80s (Additional)
  { id: 221, text: "So I got that goin' for me, which is nice.", source: "Caddyshack", year: 1980 },
  { id: 222, text: "Be the ball.", source: "Caddyshack", year: 1980 },
  { id: 223, text: "Cinderella story. Outta nowhere.", source: "Caddyshack", year: 1980 },
  { id: 230, text: "I'm a god. I'm not THE God... I don't think.", source: "Groundhog Day", year: 1993 },
  { id: 231, text: "Don't drive angry!", source: "Groundhog Day", year: 1993 },
  { id: 233, text: "We're on a mission from God.", source: "The Blues Brothers", year: 1980 },
  { id: 234, text: "It's 106 miles to Chicago, we got a full tank of gas, half a pack of cigarettes, it's dark, and we're wearing sunglasses.", source: "The Blues Brothers", year: 1980 },
  { id: 236, text: "Human sacrifice, dogs and cats living together... mass hysteria!", source: "Ghostbusters", year: 1984 },
  { id: 237, text: "Back off, man. I'm a scientist.", source: "Ghostbusters", year: 1984 },
  { id: 239, text: "Ray, when someone asks you if you're a god, you say YES!", source: "Ghostbusters", year: 1984 },

  // Comedies - 90s (Additional)
  { id: 241, text: "That's what I love about these high school girls, man. I get older, they stay the same age.", source: "Dazed and Confused", year: 1993 },
  { id: 242, text: "Alright, alright, alright.", source: "Dazed and Confused", year: 1993 },
  { id: 248, text: "Big Gulps, huh? Alright! Well, see ya later!", source: "Dumb and Dumber", year: 1994 },
  { id: 249, text: "Just when I think you couldn't possibly be any dumber, you go and do something like this... and totally redeem yourself!", source: "Dumb and Dumber", year: 1994 },
  { id: 251, text: "Samsonite! I was way off!", source: "Dumb and Dumber", year: 1994 },
  { id: 253, text: "I'm gonna hang by the bar. Put out the vibe.", source: "Swingers", year: 1996 },
  { id: 254, text: "You're so money and you don't even know it!", source: "Swingers", year: 1996 },
  { id: 255, text: "Vegas, baby! Vegas!", source: "Swingers", year: 1996 },
  { id: 256, text: "I'm not even supposed to be here today!", source: "Clerks", year: 1994 },
  { id: 260, text: "I am Jack's complete lack of surprise.", source: "Fight Club", year: 1999 },
  { id: 261, text: "His name is Robert Paulson.", source: "Fight Club", year: 1999 },
  { id: 262, text: "I want you to hit me as hard as you can.", source: "Fight Club", year: 1999 },
  { id: 263, text: "This is your life and it's ending one minute at a time.", source: "Fight Club", year: 1999 },

  // Indiana Jones
  { id: 301, text: "Snakes. Why'd it have to be snakes?", source: "Raiders of the Lost Ark", year: 1981 },
  { id: 302, text: "It belongs in a museum!", source: "Indiana Jones and the Last Crusade", year: 1989 },
  { id: 303, text: "You chose... poorly.", source: "Indiana Jones and the Last Crusade", year: 1989 },
  { id: 304, text: "No ticket.", source: "Indiana Jones and the Last Crusade", year: 1989 },
  { id: 305, text: "We named the dog Indiana.", source: "Indiana Jones and the Last Crusade", year: 1989 },

  // Tombstone
  { id: 308, text: "I'm your huckleberry.", source: "Tombstone", year: 1993 },
  { id: 309, text: "You tell 'em I'm coming... and hell's coming with me!", source: "Tombstone", year: 1993 },
  { id: 314, text: "Say when.", source: "Tombstone", year: 1993 },

  // Wayne's World
  { id: 316, text: "Schwing!", source: "Wayne's World", year: 1992 },
  { id: 317, text: "We're not worthy!", source: "Wayne's World", year: 1992 },
  { id: 318, text: "Party on, Wayne!", source: "Wayne's World", year: 1992 },
  { id: 319, text: "Excellent!", source: "Wayne's World", year: 1992 },

  // Airplane!
  { id: 323, text: "Surely you can't be serious. I am serious... and don't call me Shirley.", source: "Airplane!", year: 1980 },
  { id: 324, text: "I picked the wrong week to quit smoking.", source: "Airplane!", year: 1980 },
  { id: 326, text: "Have you ever seen a grown man naked?", source: "Airplane!", year: 1980 },
  { id: 327, text: "Joey, do you like movies about gladiators?", source: "Airplane!", year: 1980 },

  // More Big Lebowski
  { id: 331, text: "Obviously you're not a golfer.", source: "The Big Lebowski", year: 1998 },
  { id: 333, text: "Shut the fuck up, Donny!", source: "The Big Lebowski", year: 1998 },
  { id: 334, text: "You're out of your element!", source: "The Big Lebowski", year: 1998 },
  { id: 335, text: "That's just, like, your opinion, man.", source: "The Big Lebowski", year: 1998 },
  { id: 343, text: "Careful, man, there's a beverage here!", source: "The Big Lebowski", year: 1998 },
  { id: 345, text: "Smokey, this is not 'Nam. This is bowling. There are rules.", source: "The Big Lebowski", year: 1998 },
  { id: 346, text: "Mark it zero!", source: "The Big Lebowski", year: 1998 },
  { id: 348, text: "You want a toe? I can get you a toe.", source: "The Big Lebowski", year: 1998 },

  // 80s Teen Classics
  { id: 400, text: "We're all nerds.", source: "Revenge of the Nerds", year: 1984 },
  { id: 401, text: "Nerds!", source: "Revenge of the Nerds", year: 1984 },
  { id: 402, text: "What if C-A-T really spelled dog?", source: "Revenge of the Nerds", year: 1984 },
  { id: 403, text: "He who laughs last, laughs best.", source: "Revenge of the Nerds", year: 1984 },
  { id: 404, text: "I just wanted to say that I'm a nerd, and I'm here tonight to stand up for the rights of other nerds.", source: "Revenge of the Nerds", year: 1984 },
  { id: 405, text: "If you want to be a member of Lambda Lambda Lambda, you have to be a nerd.", source: "Revenge of the Nerds", year: 1984 },
  { id: 406, text: "His name is Blane? That's a major appliance, that's not a name!", source: "Pretty in Pink", year: 1986 },
  { id: 407, text: "I just want them to know that they didn't break me.", source: "Pretty in Pink", year: 1986 },
  { id: 408, text: "You said you couldn't be with someone who didn't believe in you. Well I believed in you. I just didn't believe in me.", source: "Pretty in Pink", year: 1986 },
  { id: 409, text: "This is a really volcanic ensemble you're wearing, it's really marvelous!", source: "Pretty in Pink", year: 1986 },
  { id: 410, text: "May I admire you?", source: "Pretty in Pink", year: 1986 },
  { id: 411, text: "So, what would you little maniacs like to do first?", source: "Weird Science", year: 1985 },
  { id: 412, text: "She's into malls, wine coolers, and guys with big arms.", source: "Weird Science", year: 1985 },
  { id: 413, text: "Wyatt, I'm going to be honest with you. That's the stupidest thing I've ever heard in my life.", source: "Weird Science", year: 1985 },
  { id: 414, text: "I got a .45 and a shovel. I doubt anybody would miss you.", source: "Weird Science", year: 1985 },
  { id: 415, text: "How about a nice greasy pork sandwich served in a dirty ashtray?", source: "Weird Science", year: 1985 },

  // Young Guns (1988)
  { id: 500, text: "I'll make you famous.", source: "Young Guns", year: 1988 },
  { id: 501, text: "Did you see the size of that chicken?", source: "Young Guns", year: 1988 },
  { id: 502, text: "Regulators! Mount up!", source: "Young Guns", year: 1988 },
  { id: 503, text: "You're on the wrong side of the river, William!", source: "Young Guns", year: 1988 },
  { id: 504, text: "I'm going to kill you, William Bonney.", source: "Young Guns", year: 1988 },

  // Big Trouble in Little China (1986)
  { id: 505, text: "It's all in the reflexes.", source: "Big Trouble in Little China", year: 1986 },
  { id: 506, text: "You know what ol' Jack Burton always says at a time like this?", source: "Big Trouble in Little China", year: 1986 },
  { id: 507, text: "When some wild-eyed, eight-foot-tall maniac grabs your neck, taps the back of your favorite head up against the barroom wall...", source: "Big Trouble in Little China", year: 1986 },
  { id: 508, text: "Have you paid your dues, Jack? Yes sir, the check is in the mail.", source: "Big Trouble in Little China", year: 1986 },
  { id: 509, text: "Son of a bitch must pay!", source: "Big Trouble in Little China", year: 1986 },
  { id: 510, text: "This is gonna take crackerjack timing, Wang.", source: "Big Trouble in Little China", year: 1986 },

  // Better Off Dead (1985)
  { id: 511, text: "I want my two dollars!", source: "Better Off Dead", year: 1985 },
  { id: 512, text: "Go that way, really fast. If something gets in your way, turn.", source: "Better Off Dead", year: 1985 },
  { id: 513, text: "Gee, I'm real sorry your mom blew up, Ricky.", source: "Better Off Dead", year: 1985 },
  { id: 514, text: "This is pure snow! Do you have any idea what the street value of this mountain is?", source: "Better Off Dead", year: 1985 },
  { id: 515, text: "Truly a sight to behold. A man beaten. The once great champ, now, a study in moppishness.", source: "Better Off Dead", year: 1985 },

  // Top Gun (1986)
  { id: 516, text: "I feel the need... the need for speed!", source: "Top Gun", year: 1986 },
  { id: 517, text: "You can be my wingman anytime.", source: "Top Gun", year: 1986 },
  { id: 518, text: "Negative, Ghost Rider, the pattern is full.", source: "Top Gun", year: 1986 },
  { id: 519, text: "That's right! Ice... man. I am dangerous.", source: "Top Gun", year: 1986 },
  { id: 520, text: "Talk to me, Goose.", source: "Top Gun", year: 1986 },
  { id: 521, text: "Your ego is writing checks your body can't cash.", source: "Top Gun", year: 1986 },

  // Hot Shots! (1991)
  { id: 522, text: "War. It's fantastic!", source: "Hot Shots!", year: 1991 },
  { id: 523, text: "I've fallen for you like a blind roofer.", source: "Hot Shots!", year: 1991 },
  { id: 524, text: "These men have taken a supreme vow of celibacy, like their fathers, and their fathers before them.", source: "Hot Shots!", year: 1991 },
  { id: 525, text: "I will have my vengeance!", source: "Hot Shots!", year: 1991 },

  // The Naked Gun (1988)
  { id: 526, text: "Nice beaver!", source: "The Naked Gun", year: 1988 },
  { id: 527, text: "I'm a locksmith. And I'm a locksmith.", source: "The Naked Gun", year: 1988 },
  { id: 528, text: "Like a midget at a urinal, I was going to have to stay on my toes.", source: "The Naked Gun", year: 1988 },
  { id: 529, text: "It's true what they say: Cops and women don't mix. It's like eating a spoonful of Drano.", source: "The Naked Gun", year: 1988 },
  { id: 530, text: "Cigarette? Yes, I know.", source: "The Naked Gun", year: 1988 },
  { id: 531, text: "We would have come earlier, but your husband wasn't dead then.", source: "The Naked Gun", year: 1988 },

  // There's Something About Mary (1998)
  { id: 532, text: "How'd you get the beans above the frank?", source: "There's Something About Mary", year: 1998 },
  { id: 533, text: "Is that hair gel?", source: "There's Something About Mary", year: 1998 },
  { id: 534, text: "You're a very special lady. You're a very special lady.", source: "There's Something About Mary", year: 1998 },
  { id: 535, text: "I work with retards.", source: "There's Something About Mary", year: 1998 },
  { id: 536, text: "He was masturbating!", source: "There's Something About Mary", year: 1998 },

  // Kingpin (1996)
  { id: 537, text: "Finally, Big Ern is above the law!", source: "Kingpin", year: 1996 },
  { id: 538, text: "You really jarred something loose, tiger.", source: "Kingpin", year: 1996 },
  { id: 539, text: "I guess you could say I'm 'out standing' in my field.", source: "Kingpin", year: 1996 },
  { id: 540, text: "Who you callin' psycho?", source: "Kingpin", year: 1996 },
  { id: 541, text: "Sometimes I just want to smack the taste out of your mouth.", source: "Kingpin", year: 1996 },

  // Arnold Schwarzenegger Classics
  // Total Recall (1990)
  { id: 600, text: "Consider that a divorce.", source: "Total Recall", year: 1990 },
  { id: 601, text: "Get your ass to Mars.", source: "Total Recall", year: 1990 },
  { id: 602, text: "See you at the party, Richter!", source: "Total Recall", year: 1990 },
  { id: 603, text: "Two weeks.", source: "Total Recall", year: 1990 },
  { id: 604, text: "If I'm not me, then who the hell am I?", source: "Total Recall", year: 1990 },
  { id: 605, text: "Screw you, Benny!", source: "Total Recall", year: 1990 },

  // Commando (1985)
  { id: 606, text: "Let off some steam, Bennett.", source: "Commando", year: 1985 },
  { id: 607, text: "I eat Green Berets for breakfast.", source: "Commando", year: 1985 },
  { id: 608, text: "Remember, Sully, when I promised to kill you last? I lied.", source: "Commando", year: 1985 },
  { id: 609, text: "Don't disturb my friend. He's dead tired.", source: "Commando", year: 1985 },
  { id: 610, text: "I'll be back, Bennett.", source: "Commando", year: 1985 },
  { id: 611, text: "You're a funny guy, Sully. I like you. That's why I'm going to kill you last.", source: "Commando", year: 1985 },

  // The Running Man (1987)
  { id: 612, text: "I'll be back.", source: "The Running Man", year: 1987 },
  { id: 613, text: "Here is Subzero, now plain zero!", source: "The Running Man", year: 1987 },
  { id: 614, text: "What a hothead!", source: "The Running Man", year: 1987 },
  { id: 615, text: "He had to split.", source: "The Running Man", year: 1987 },
  { id: 616, text: "Killian, I'll be back!", source: "The Running Man", year: 1987 },

  // Twins (1988)
  { id: 617, text: "Only their mother can tell them apart.", source: "Twins", year: 1988 },
  { id: 618, text: "My name is Julius and I am your twin brother.", source: "Twins", year: 1988 },
  { id: 619, text: "I have a brother!", source: "Twins", year: 1988 },
  { id: 620, text: "The moment I sat down, I felt something strange.", source: "Twins", year: 1988 },

  // Last Action Hero (1993)
  { id: 621, text: "Big mistake!", source: "Last Action Hero", year: 1993 },
  { id: 622, text: "To be or not to be? Not to be.", source: "Last Action Hero", year: 1993 },
  { id: 623, text: "You want to be a farmer? Here's a couple of acres!", source: "Last Action Hero", year: 1993 },
  { id: 624, text: "Iced that guy. To cone a phrase.", source: "Last Action Hero", year: 1993 },
  { id: 625, text: "No sequel for you!", source: "Last Action Hero", year: 1993 },
];

export const CATEGORIES = [
  'All',
  '80s Movies',
  '90s Movies',
  'Classics',
  'Modern',
  'TV Shows',
  'Action',
  'Comedy',
  'Future',
] as const;

export type Category = (typeof CATEGORIES)[number];

const TV_SHOWS = new Set([
  'Seinfeld',
  'Friends',
  'The Office',
  'Breaking Bad',
  'Game of Thrones',
  'The Simpsons',
  'Parks and Recreation',
  'How I Met Your Mother',
  'Friday Night Lights',
  'Star Trek',
  'The X-Files',
  'House M.D.',
  'Family Matters',
  'Cheers',
  'Mad Men',
  'Mr. Robot',
  'Ted Lasso',
  'The Big Bang Theory',
]);

const ACTION_MOVIES = new Set([
  'Die Hard',
  'Predator',
  'Terminator 2: Judgment Day',
  'The Terminator',
  'Rambo: First Blood Part II',
  'Lethal Weapon',
  'Lethal Weapon 2',
  'Sudden Impact',
  'They Live',
  'Aliens',
  'The Empire Strikes Back',
  'Return of the Jedi',
  'Total Recall',
  'Commando',
  'The Running Man',
  'Last Action Hero',
  'Raiders of the Lost Ark',
  'Indiana Jones and the Last Crusade',
  'Young Guns',
  'Top Gun',
  'Hot Shots!',
  'The Matrix',
  'Tombstone',
  'Big Trouble in Little China',
  'Scarface',
  'Braveheart',
]);

const COMEDY_MOVIES = new Set([
  'Ghostbusters',
  'Caddyshack',
  'Groundhog Day',
  'The Blues Brothers',
  'Dumb and Dumber',
  'Swingers',
  'Clerks',
  "Wayne's World",
  'Airplane!',
  'The Big Lebowski',
  'Revenge of the Nerds',
  'Pretty in Pink',
  'Weird Science',
  'Better Off Dead',
  'The Naked Gun',
  "There's Something About Mary",
  'Kingpin',
  'Ace Ventura: Pet Detective',
  'The Mask',
  'Dazed and Confused',
  "Ferris Bueller's Day Off",
  'Twins',
  'Big Trouble in Little China',
  'A League of Their Own',
  'When Harry Met Sally...',
  'Mean Girls',
  'The Princess Bride',
  'Back to the Future',
  'The Breakfast Club',
  'Clueless',
  'Ghostbusters',
]);

// Deterministic current year for SSR / tests
+const CURRENT_YEAR = new Date().getFullYear();
+
+export function getCategories(quote: Quote): Category[] {
+  const cats: Category[] = [];
+
+  if (TV_SHOWS.has(quote.source)) {
+    cats.push('TV Shows');
+  } else {
+    if (quote.year > CURRENT_YEAR) {
+      cats.push('Future');
+    } else if (quote.year >= 1980 && quote.year <= 1989) {
+      cats.push('80s Movies');
+    } else if (quote.year >= 1990 && quote.year <= 1999) {
+      cats.push('90s Movies');
+    } else if (quote.year < 1980) {
+      cats.push('Classics');
+    } else if (quote.year >= 2000) {
+      cats.push('Modern');
+    }
+  }
+
+  if (ACTION_MOVIES.has(quote.source)) {
+    cats.push('Action');
+  }
+  if (COMEDY_MOVIES.has(quote.source)) {
+    cats.push('Comedy');
+  }
+
+  return cats;
+}

export function filterQuotesByCategory(
  quoteList: Quote[],
  category: Category
): Quote[] {
  if (category === 'All') return quoteList;
  return quoteList.filter((q) => getCategories(q).includes(category));
}
