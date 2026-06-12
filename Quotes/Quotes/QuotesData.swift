import Foundation

let quotes: [Quote] = [
    // Classic quotes
    Quote(id: 1, text: "Here's looking at you, kid.", movie: "Casablanca", year: 1942),
    Quote(id: 2, text: "May the Force be with you.", movie: "Star Wars", year: 1977),
    Quote(id: 3, text: "I'm going to make him an offer he can't refuse.", movie: "The Godfather", year: 1972),
    Quote(id: 4, text: "You talking to me?", movie: "Taxi Driver", year: 1976),
    
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
    Quote(id: 10, text: "I'll be back.", movie: "The Terminator", year: 1984),
    Quote(id: 108, text: "Come with me if you want to live.", movie: "The Terminator", year: 1984),
    
    // Ghostbusters (1984)
    Quote(id: 109, text: "Who you gonna call? Ghostbusters!", movie: "Ghostbusters", year: 1984),
    Quote(id: 110, text: "I ain't afraid of no ghost.", movie: "Ghostbusters", year: 1984),
    Quote(id: 111, text: "We came, we saw, we kicked its ass!", movie: "Ghostbusters", year: 1984),
    
    // Die Hard (1988)
    Quote(id: 112, text: "Yippee-ki-yay!", movie: "Die Hard", year: 1988),
    Quote(id: 113, text: "Welcome to the party, pal!", movie: "Die Hard", year: 1988),
    
    // The Breakfast Club (1985)
    Quote(id: 114, text: "We're all pretty bizarre. Some of us are just better at hiding it.", movie: "The Breakfast Club", year: 1985),
    Quote(id: 115, text: "Screws fall out all the time, the world is an imperfect place.", movie: "The Breakfast Club", year: 1985),
    
    // Pulp Fiction (1994)
    Quote(id: 116, text: "Say 'what' again. I dare you, I double dare you!", movie: "Pulp Fiction", year: 1994),
    Quote(id: 117, text: "The path of the righteous man...", movie: "Pulp Fiction", year: 1994),
    Quote(id: 118, text: "Royale with cheese.", movie: "Pulp Fiction", year: 1994),
    
    // The Big Lebowski (1998)
    Quote(id: 119, text: "The Dude abides.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 120, text: "That rug really tied the room together.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 121, text: "This aggression will not stand, man.", movie: "The Big Lebowski", year: 1998),
    
    // Forrest Gump (1994)
    Quote(id: 11, text: "Life is like a box of chocolates. You never know what you're gonna get.", movie: "Forrest Gump", year: 1994),
    Quote(id: 123, text: "Run, Forrest, run!", movie: "Forrest Gump", year: 1994),
    Quote(id: 124, text: "Stupid is as stupid does.", movie: "Forrest Gump", year: 1994),
    
    // The Matrix (1999)
    Quote(id: 8, text: "The first rule of Fight Club is: You do not talk about Fight Club.", movie: "Fight Club", year: 1999),
    Quote(id: 126, text: "There is no spoon.", movie: "The Matrix", year: 1999),
    Quote(id: 127, text: "I know kung fu.", movie: "The Matrix", year: 1999),
    Quote(id: 128, text: "Welcome to the real world.", movie: "The Matrix", year: 1999),
    
    // Goodfellas (1990)
    Quote(id: 130, text: "As far back as I can remember, I always wanted to be a gangster.", movie: "Goodfellas", year: 1990),
    Quote(id: 131, text: "Funny how? Like I'm a clown? I amuse you?", movie: "Goodfellas", year: 1990),
    
    // The Shawshank Redemption (1994)
    Quote(id: 132, text: "Get busy living, or get busy dying.", movie: "The Shawshank Redemption", year: 1994),
    Quote(id: 133, text: "Hope is a good thing, maybe the best of things.", movie: "The Shawshank Redemption", year: 1994),
    
    // Dumb and Dumber (1994)
    Quote(id: 135, text: "So you're telling me there's a chance?", movie: "Dumb and Dumber", year: 1994),
    Quote(id: 136, text: "We got no food, we got no jobs... our pets' heads are falling off!", movie: "Dumb and Dumber", year: 1994),
    
    // Clueless (1995)
    Quote(id: 137, text: "As if!", movie: "Clueless", year: 1995),
    Quote(id: 138, text: "You're a virgin who can't drive.", movie: "Clueless", year: 1995),
    
    // The Silence of the Lambs (1991)
    Quote(id: 139, text: "I ate his liver with some fava beans and a nice Chianti.", movie: "The Silence of the Lambs", year: 1991),
    
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
    Quote(id: 5, text: "E.T. phone home.", movie: "E.T. the Extra-Terrestrial", year: 1982),
    Quote(id: 156, text: "I feel the need... the need for speed!", movie: "Top Gun", year: 1986),
    Quote(id: 157, text: "Nobody puts Baby in a corner.", movie: "Dirty Dancing", year: 1987),
    Quote(id: 158, text: "Bueller? Bueller?", movie: "Ferris Bueller's Day Off", year: 1986),
    Quote(id: 159, text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", movie: "Ferris Bueller's Day Off", year: 1986),
    
    // More 90s classics
    Quote(id: 14, text: "You can't handle the truth!", movie: "A Few Good Men", year: 1992),
    Quote(id: 161, text: "Show me the money!", movie: "Jerry Maguire", year: 1996),
    Quote(id: 162, text: "You had me at hello.", movie: "Jerry Maguire", year: 1996),
    Quote(id: 15, text: "I see dead people.", movie: "The Sixth Sense", year: 1999),
    Quote(id: 13, text: "Houston, we have a problem.", movie: "Apollo 13", year: 1995),
    Quote(id: 12, text: "To infinity and beyond!", movie: "Toy Story", year: 1995),
    Quote(id: 166, text: "You've got a friend in me.", movie: "Toy Story", year: 1995),
    Quote(id: 167, text: "Hakuna Matata.", movie: "The Lion King", year: 1994),
    Quote(id: 168, text: "I'm the king of the world!", movie: "Titanic", year: 1997),
    Quote(id: 169, text: "Alrighty then!", movie: "Ace Ventura: Pet Detective", year: 1994),
    Quote(id: 170, text: "Smokin'!", movie: "The Mask", year: 1994),
    
    // Additional classics
    Quote(id: 6, text: "There's no place like home.", movie: "The Wizard of Oz", year: 1939),
    Quote(id: 7, text: "I am your father.", movie: "Star Wars Episode V: The Empire Strikes Back", year: 1980),
    Quote(id: 9, text: "Why so serious?", movie: "The Dark Knight", year: 2008),
    
    // Action Movies - 80s/90s (Additional)
    Quote(id: 200, text: "Get to the chopper!", movie: "Predator", year: 1987),
    Quote(id: 201, text: "If it bleeds, we can kill it.", movie: "Predator", year: 1987),
    Quote(id: 202, text: "I ain't got time to bleed.", movie: "Predator", year: 1987),
    Quote(id: 203, text: "Come out to the coast, we'll get together, have a few laughs.", movie: "Die Hard", year: 1988),
    Quote(id: 204, text: "Now I have a machine gun. Ho-ho-ho.", movie: "Die Hard", year: 1988),
    Quote(id: 351, text: "We're gonna need some more FBI guys I guess.", movie: "Die Hard", year: 1988),
    Quote(id: 205, text: "I'm your worst nightmare.", movie: "Rambo: First Blood Part II", year: 1985),
    Quote(id: 207, text: "I'm too old for this shit.", movie: "Lethal Weapon", year: 1987),
    Quote(id: 208, text: "Diplomatic immunity!", movie: "Lethal Weapon 2", year: 1989),
    Quote(id: 209, text: "It's been revoked.", movie: "Lethal Weapon 2", year: 1989),
    Quote(id: 212, text: "Go ahead, make my day.", movie: "Sudden Impact", year: 1983),
    Quote(id: 219, text: "I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum.", movie: "They Live", year: 1988),
    Quote(id: 220, text: "Stick around.", movie: "Predator", year: 1987),
    Quote(id: 273, text: "Game over, man! Game over!", movie: "Aliens", year: 1986),
    Quote(id: 274, text: "Get away from her, you bitch!", movie: "Aliens", year: 1986),
    Quote(id: 275, text: "They mostly come at night... mostly.", movie: "Aliens", year: 1986),
    Quote(id: 278, text: "Do. Or do not. There is no try.", movie: "The Empire Strikes Back", year: 1980),
    Quote(id: 279, text: "Never tell me the odds!", movie: "The Empire Strikes Back", year: 1980),
    Quote(id: 280, text: "It's a trap!", movie: "Return of the Jedi", year: 1983),
    
    // Comedies - 80s (Additional)
    Quote(id: 221, text: "So I got that goin' for me, which is nice.", movie: "Caddyshack", year: 1980),
    Quote(id: 222, text: "Be the ball.", movie: "Caddyshack", year: 1980),
    Quote(id: 223, text: "Cinderella story. Outta nowhere.", movie: "Caddyshack", year: 1980),
    Quote(id: 230, text: "I'm a god. I'm not THE God... I don't think.", movie: "Groundhog Day", year: 1993),
    Quote(id: 231, text: "Don't drive angry!", movie: "Groundhog Day", year: 1993),
    Quote(id: 233, text: "We're on a mission from God.", movie: "The Blues Brothers", year: 1980),
    Quote(id: 234, text: "It's 106 miles to Chicago, we got a full tank of gas, half a pack of cigarettes, it's dark, and we're wearing sunglasses.", movie: "The Blues Brothers", year: 1980),
    Quote(id: 236, text: "Human sacrifice, dogs and cats living together... mass hysteria!", movie: "Ghostbusters", year: 1984),
    Quote(id: 237, text: "Back off, man. I'm a scientist.", movie: "Ghostbusters", year: 1984),
    Quote(id: 239, text: "Ray, when someone asks you if you're a god, you say YES!", movie: "Ghostbusters", year: 1984),
    
    // Comedies - 90s (Additional)
    Quote(id: 241, text: "That's what I love about these high school girls, man. I get older, they stay the same age.", movie: "Dazed and Confused", year: 1993),
    Quote(id: 242, text: "Alright, alright, alright.", movie: "Dazed and Confused", year: 1993),
    Quote(id: 248, text: "Big Gulps, huh? Alright! Well, see ya later!", movie: "Dumb and Dumber", year: 1994),
    Quote(id: 249, text: "Just when I think you couldn't possibly be any dumber, you go and do something like this... and totally redeem yourself!", movie: "Dumb and Dumber", year: 1994),
    Quote(id: 251, text: "Samsonite! I was way off!", movie: "Dumb and Dumber", year: 1994),
    Quote(id: 253, text: "I'm gonna hang by the bar. Put out the vibe.", movie: "Swingers", year: 1996),
    Quote(id: 254, text: "You're so money and you don't even know it!", movie: "Swingers", year: 1996),
    Quote(id: 255, text: "Vegas, baby! Vegas!", movie: "Swingers", year: 1996),
    Quote(id: 256, text: "I'm not even supposed to be here today!", movie: "Clerks", year: 1994),
    Quote(id: 260, text: "I am Jack's complete lack of surprise.", movie: "Fight Club", year: 1999),
    Quote(id: 261, text: "His name is Robert Paulson.", movie: "Fight Club", year: 1999),
    Quote(id: 262, text: "I want you to hit me as hard as you can.", movie: "Fight Club", year: 1999),
    Quote(id: 263, text: "This is your life and it's ending one minute at a time.", movie: "Fight Club", year: 1999),
    
    // Indiana Jones
    Quote(id: 301, text: "Snakes. Why'd it have to be snakes?", movie: "Raiders of the Lost Ark", year: 1981),
    Quote(id: 302, text: "It belongs in a museum!", movie: "Indiana Jones and the Last Crusade", year: 1989),
    Quote(id: 303, text: "You chose... poorly.", movie: "Indiana Jones and the Last Crusade", year: 1989),
    Quote(id: 304, text: "No ticket.", movie: "Indiana Jones and the Last Crusade", year: 1989),
    Quote(id: 305, text: "We named the dog Indiana.", movie: "Indiana Jones and the Last Crusade", year: 1989),
    
    // Tombstone
    Quote(id: 308, text: "I'm your huckleberry.", movie: "Tombstone", year: 1993),
    Quote(id: 309, text: "You tell 'em I'm coming... and hell's coming with me!", movie: "Tombstone", year: 1993),
    Quote(id: 314, text: "Say when.", movie: "Tombstone", year: 1993),
    
    // Wayne's World
    Quote(id: 316, text: "Schwing!", movie: "Wayne's World", year: 1992),
    Quote(id: 317, text: "We're not worthy!", movie: "Wayne's World", year: 1992),
    Quote(id: 318, text: "Party on, Wayne!", movie: "Wayne's World", year: 1992),
    Quote(id: 319, text: "Excellent!", movie: "Wayne's World", year: 1992),
    
    // Airplane!
    Quote(id: 323, text: "Surely you can't be serious. I am serious... and don't call me Shirley.", movie: "Airplane!", year: 1980),
    Quote(id: 324, text: "I picked the wrong week to quit smoking.", movie: "Airplane!", year: 1980),
    Quote(id: 326, text: "Have you ever seen a grown man naked?", movie: "Airplane!", year: 1980),
    Quote(id: 327, text: "Joey, do you like movies about gladiators?", movie: "Airplane!", year: 1980),
    
    // More Big Lebowski
    Quote(id: 331, text: "Obviously you're not a golfer.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 333, text: "Shut the fuck up, Donny!", movie: "The Big Lebowski", year: 1998),
    Quote(id: 334, text: "You're out of your element!", movie: "The Big Lebowski", year: 1998),
    Quote(id: 335, text: "That's just, like, your opinion, man.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 343, text: "Careful, man, there's a beverage here!", movie: "The Big Lebowski", year: 1998),
    Quote(id: 345, text: "Smokey, this is not 'Nam. This is bowling. There are rules.", movie: "The Big Lebowski", year: 1998),
    Quote(id: 346, text: "Mark it zero!", movie: "The Big Lebowski", year: 1998),
    Quote(id: 348, text: "You want a toe? I can get you a toe.", movie: "The Big Lebowski", year: 1998),
    
    // 80s Teen Classics
    Quote(id: 400, text: "We're all nerds.", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 401, text: "Nerds!", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 402, text: "What if C-A-T really spelled dog?", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 403, text: "He who laughs last, laughs best.", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 404, text: "I just wanted to say that I'm a nerd, and I'm here tonight to stand up for the rights of other nerds.", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 405, text: "If you want to be a member of Lambda Lambda Lambda, you have to be a nerd.", movie: "Revenge of the Nerds", year: 1984),
    Quote(id: 406, text: "His name is Blane? That's a major appliance, that's not a name!", movie: "Pretty in Pink", year: 1986),
    Quote(id: 407, text: "I just want them to know that they didn't break me.", movie: "Pretty in Pink", year: 1986),
    Quote(id: 408, text: "You said you couldn't be with someone who didn't believe in you. Well I believed in you. I just didn't believe in me.", movie: "Pretty in Pink", year: 1986),
    Quote(id: 409, text: "This is a really volcanic ensemble you're wearing, it's really marvelous!", movie: "Pretty in Pink", year: 1986),
    Quote(id: 410, text: "May I admire you?", movie: "Pretty in Pink", year: 1986),
    Quote(id: 411, text: "So, what would you little maniacs like to do first?", movie: "Weird Science", year: 1985),
    Quote(id: 412, text: "She's into malls, wine coolers, and guys with big arms.", movie: "Weird Science", year: 1985),
    Quote(id: 413, text: "Wyatt, I'm going to be honest with you. That's the stupidest thing I've ever heard in my life.", movie: "Weird Science", year: 1985),
    Quote(id: 414, text: "I got a .45 and a shovel. I doubt anybody would miss you.", movie: "Weird Science", year: 1985),
    Quote(id: 415, text: "How about a nice greasy pork sandwich served in a dirty ashtray?", movie: "Weird Science", year: 1985),
    
    // Young Guns (1988)
    Quote(id: 500, text: "I'll make you famous.", movie: "Young Guns", year: 1988),
    Quote(id: 501, text: "Did you see the size of that chicken?", movie: "Young Guns", year: 1988),
    Quote(id: 502, text: "Regulators! Mount up!", movie: "Young Guns", year: 1988),
    Quote(id: 503, text: "You're on the wrong side of the river, William!", movie: "Young Guns", year: 1988),
    Quote(id: 504, text: "I'm going to kill you, William Bonney.", movie: "Young Guns", year: 1988),
    
    // Big Trouble in Little China (1986)
    Quote(id: 505, text: "It's all in the reflexes.", movie: "Big Trouble in Little China", year: 1986),
    Quote(id: 506, text: "You know what ol' Jack Burton always says at a time like this?", movie: "Big Trouble in Little China", year: 1986),
    Quote(id: 507, text: "When some wild-eyed, eight-foot-tall maniac grabs your neck, taps the back of your favorite head up against the barroom wall...", movie: "Big Trouble in Little China", year: 1986),
    Quote(id: 508, text: "Have you paid your dues, Jack? Yes sir, the check is in the mail.", movie: "Big Trouble in Little China", year: 1986),
    Quote(id: 509, text: "Son of a bitch must pay!", movie: "Big Trouble in Little China", year: 1986),
    Quote(id: 510, text: "This is gonna take crackerjack timing, Wang.", movie: "Big Trouble in Little China", year: 1986),
    
    // Better Off Dead (1985)
    Quote(id: 511, text: "I want my two dollars!", movie: "Better Off Dead", year: 1985),
    Quote(id: 512, text: "Go that way, really fast. If something gets in your way, turn.", movie: "Better Off Dead", year: 1985),
    Quote(id: 513, text: "Gee, I'm real sorry your mom blew up, Ricky.", movie: "Better Off Dead", year: 1985),
    Quote(id: 514, text: "This is pure snow! Do you have any idea what the street value of this mountain is?", movie: "Better Off Dead", year: 1985),
    Quote(id: 515, text: "Truly a sight to behold. A man beaten. The once great champ, now, a study in moppishness.", movie: "Better Off Dead", year: 1985),
    
    // Top Gun (1986)
    Quote(id: 516, text: "I feel the need... the need for speed!", movie: "Top Gun", year: 1986),
    Quote(id: 517, text: "You can be my wingman anytime.", movie: "Top Gun", year: 1986),
    Quote(id: 518, text: "Negative, Ghost Rider, the pattern is full.", movie: "Top Gun", year: 1986),
    Quote(id: 519, text: "That's right! Ice... man. I am dangerous.", movie: "Top Gun", year: 1986),
    Quote(id: 520, text: "Talk to me, Goose.", movie: "Top Gun", year: 1986),
    Quote(id: 521, text: "Your ego is writing checks your body can't cash.", movie: "Top Gun", year: 1986),
    
    // Hot Shots! (1991)
    Quote(id: 522, text: "War. It's fantastic!", movie: "Hot Shots!", year: 1991),
    Quote(id: 523, text: "I've fallen for you like a blind roofer.", movie: "Hot Shots!", year: 1991),
    Quote(id: 524, text: "These men have taken a supreme vow of celibacy, like their fathers, and their fathers before them.", movie: "Hot Shots!", year: 1991),
    Quote(id: 525, text: "I will have my vengeance!", movie: "Hot Shots!", year: 1991),
    
    // The Naked Gun (1988)
    Quote(id: 526, text: "Nice beaver!", movie: "The Naked Gun", year: 1988),
    Quote(id: 527, text: "I'm a locksmith. And I'm a locksmith.", movie: "The Naked Gun", year: 1988),
    Quote(id: 528, text: "Like a midget at a urinal, I was going to have to stay on my toes.", movie: "The Naked Gun", year: 1988),
    Quote(id: 529, text: "It's true what they say: Cops and women don't mix. It's like eating a spoonful of Drano.", movie: "The Naked Gun", year: 1988),
    Quote(id: 530, text: "Cigarette? Yes, I know.", movie: "The Naked Gun", year: 1988),
    Quote(id: 531, text: "We would have come earlier, but your husband wasn't dead then.", movie: "The Naked Gun", year: 1988),
    
    // There's Something About Mary (1998)
    Quote(id: 532, text: "How'd you get the beans above the frank?", movie: "There's Something About Mary", year: 1998),
    Quote(id: 533, text: "Is that hair gel?", movie: "There's Something About Mary", year: 1998),
    Quote(id: 534, text: "You're a very special lady. You're a very special lady.", movie: "There's Something About Mary", year: 1998),
    Quote(id: 535, text: "I work with retards.", movie: "There's Something About Mary", year: 1998),
    Quote(id: 536, text: "He was masturbating!", movie: "There's Something About Mary", year: 1998),
    
    // Kingpin (1996)
    Quote(id: 537, text: "Finally, Big Ern is above the law!", movie: "Kingpin", year: 1996),
    Quote(id: 538, text: "You really jarred something loose, tiger.", movie: "Kingpin", year: 1996),
    Quote(id: 539, text: "I guess you could say I'm 'out standing' in my field.", movie: "Kingpin", year: 1996),
    Quote(id: 540, text: "Who you callin' psycho?", movie: "Kingpin", year: 1996),
    Quote(id: 541, text: "Sometimes I just want to smack the taste out of your mouth.", movie: "Kingpin", year: 1996),
    
    // Arnold Schwarzenegger Classics
    // Total Recall (1990)
    Quote(id: 600, text: "Consider that a divorce.", movie: "Total Recall", year: 1990),
    Quote(id: 601, text: "Get your ass to Mars.", movie: "Total Recall", year: 1990),
    Quote(id: 602, text: "See you at the party, Richter!", movie: "Total Recall", year: 1990),
    Quote(id: 603, text: "Two weeks.", movie: "Total Recall", year: 1990),
    Quote(id: 604, text: "If I'm not me, then who the hell am I?", movie: "Total Recall", year: 1990),
    Quote(id: 605, text: "Screw you, Benny!", movie: "Total Recall", year: 1990),
    
    // Commando (1985)
    Quote(id: 606, text: "Let off some steam, Bennett.", movie: "Commando", year: 1985),
    Quote(id: 607, text: "I eat Green Berets for breakfast.", movie: "Commando", year: 1985),
    Quote(id: 608, text: "Remember, Sully, when I promised to kill you last? I lied.", movie: "Commando", year: 1985),
    Quote(id: 609, text: "Don't disturb my friend. He's dead tired.", movie: "Commando", year: 1985),
    Quote(id: 610, text: "I'll be back, Bennett.", movie: "Commando", year: 1985),
    Quote(id: 611, text: "You're a funny guy, Sully. I like you. That's why I'm going to kill you last.", movie: "Commando", year: 1985),
    
    // The Running Man (1987)
    Quote(id: 612, text: "I'll be back.", movie: "The Running Man", year: 1987),
    Quote(id: 613, text: "Here is Subzero, now plain zero!", movie: "The Running Man", year: 1987),
    Quote(id: 614, text: "What a hothead!", movie: "The Running Man", year: 1987),
    Quote(id: 615, text: "He had to split.", movie: "The Running Man", year: 1987),
    Quote(id: 616, text: "Killian, I'll be back!", movie: "The Running Man", year: 1987),
    
    // Twins (1988)
    Quote(id: 617, text: "Only their mother can tell them apart.", movie: "Twins", year: 1988),
    Quote(id: 618, text: "My name is Julius and I am your twin brother.", movie: "Twins", year: 1988),
    Quote(id: 619, text: "I have a brother!", movie: "Twins", year: 1988),
    Quote(id: 620, text: "The moment I sat down, I felt something strange.", movie: "Twins", year: 1988),
    
    // Last Action Hero (1993)
    Quote(id: 621, text: "Big mistake!", movie: "Last Action Hero", year: 1993),
    Quote(id: 622, text: "To be or not to be? Not to be.", movie: "Last Action Hero", year: 1993),
    Quote(id: 623, text: "You want to be a farmer? Here's a couple of acres!", movie: "Last Action Hero", year: 1993),
    Quote(id: 624, text: "Iced that guy. To cone a phrase.", movie: "Last Action Hero", year: 1993),
    Quote(id: 625, text: "No sequel for you!", movie: "Last Action Hero", year: 1993),
    
    // TV Shows
    Quote(id: 41, text: "I am the one who knocks!", movie: "Breaking Bad", year: 2011),
    Quote(id: 42, text: "Winter is coming.", movie: "Game of Thrones", year: 2011),
    Quote(id: 43, text: "That's what she said.", movie: "The Office", year: 2005),
    Quote(id: 44, text: "Bazinga!", movie: "The Big Bang Theory", year: 2007),
    Quote(id: 45, text: "How you doin'?", movie: "Friends", year: 1994),
    Quote(id: 46, text: "D'oh!", movie: "The Simpsons", year: 1989),
    Quote(id: 47, text: "Treat. Yo. Self.", movie: "Parks and Recreation", year: 2011),
    Quote(id: 48, text: "Clear eyes, full hearts, can't lose.", movie: "Friday Night Lights", year: 2006),
    Quote(id: 49, text: "Legen... wait for it... dary!", movie: "How I Met Your Mother", year: 2005),
    Quote(id: 50, text: "Pivot!", movie: "Friends", year: 1999),
    Quote(id: 51, text: "Identity theft is not a joke, Jim!", movie: "The Office", year: 2007),
    Quote(id: 52, text: "Yeah bitch! Magnets!", movie: "Breaking Bad", year: 2012),
    Quote(id: 53, text: "I drink and I know things.", movie: "Game of Thrones", year: 2016),
    Quote(id: 54, text: "Live long and prosper.", movie: "Star Trek", year: 1966),
    Quote(id: 55, text: "The truth is out there.", movie: "The X-Files", year: 1993),
    Quote(id: 56, text: "Everybody lies.", movie: "House M.D.", year: 2004),
    Quote(id: 59, text: "Did I do that?", movie: "Family Matters", year: 1989),
    Quote(id: 60, text: "Norm!", movie: "Cheers", year: 1982),
    Quote(id: 61, text: "Suit up!", movie: "How I Met Your Mother", year: 2005),
    Quote(id: 62, text: "We were on a break!", movie: "Friends", year: 1997),
    Quote(id: 63, text: "I want to believe.", movie: "The X-Files", year: 1993),
    Quote(id: 65, text: "Say my name.", movie: "Breaking Bad", year: 2013),
    Quote(id: 66, text: "Tread lightly.", movie: "Breaking Bad", year: 2013),
    Quote(id: 67, text: "Valar Morghulis.", movie: "Game of Thrones", year: 2012),
    Quote(id: 68, text: "Not great, Bob!", movie: "Mad Men", year: 2013),
    Quote(id: 69, text: "Hello, friend.", movie: "Mr. Robot", year: 2015),
    Quote(id: 70, text: "Be curious, not judgmental.", movie: "Ted Lasso", year: 2020)
]

enum QuoteCategory: String, CaseIterable {
    case all = "All"
    case eightiesMovies = "80s Movies"
    case ninetiesMovies = "90s Movies"
    case classics = "Classics"
    case modern = "Modern"
    case tvShows = "TV Shows"
    case action = "Action"
    case comedy = "Comedy"
}

private let tvShows: Set<String> = [
    "Seinfeld", "Friends", "The Office", "Breaking Bad", "Game of Thrones",
    "The Simpsons", "Parks and Recreation", "How I Met Your Mother",
    "Friday Night Lights", "Star Trek", "The X-Files", "House M.D.",
    "Family Matters", "Cheers", "Mad Men", "Mr. Robot", "Ted Lasso",
    "The Big Bang Theory"
]

private let actionMovies: Set<String> = [
    "Die Hard", "Predator", "Terminator 2: Judgment Day", "The Terminator",
    "Rambo: First Blood Part II", "Lethal Weapon", "Lethal Weapon 2",
    "Sudden Impact", "They Live", "Aliens", "The Empire Strikes Back",
    "Return of the Jedi", "Total Recall", "Commando", "The Running Man",
    "Last Action Hero", "Raiders of the Lost Ark", "Indiana Jones and the Last Crusade",
    "Young Guns", "Top Gun", "Hot Shots!", "The Matrix", "Tombstone",
    "Big Trouble in Little China", "Scarface", "Braveheart"
]

private let comedyMovies: Set<String> = [
    "Ghostbusters", "Caddyshack", "Groundhog Day", "The Blues Brothers",
    "Dumb and Dumber", "Swingers", "Clerks", "Wayne's World", "Airplane!",
    "The Big Lebowski", "Revenge of the Nerds", "Pretty in Pink",
    "Weird Science", "Better Off Dead", "The Naked Gun",
    "There's Something About Mary", "Kingpin", "Ace Ventura: Pet Detective",
    "The Mask", "Dazed and Confused", "Ferris Bueller's Day Off",
    "Twins", "Big Trouble in Little China", "A League of Their Own",
    "When Harry Met Sally...", "Mean Girls", "The Princess Bride",
    "Back to the Future", "The Breakfast Club", "Clueless"
]

func categories(for quote: Quote) -> [QuoteCategory] {
    var cats: [QuoteCategory] = []

    if tvShows.contains(quote.movie) {
        cats.append(.tvShows)
    } else {
        if quote.year >= 1980 && quote.year <= 1989 {
            cats.append(.eightiesMovies)
        }
        if quote.year >= 1990 && quote.year <= 1999 {
            cats.append(.ninetiesMovies)
        }
        if quote.year < 1980 {
            cats.append(.classics)
        }
        if quote.year >= 2000 {
            cats.append(.modern)
        }
    }

    if actionMovies.contains(quote.movie) {
        cats.append(.action)
    }
    if comedyMovies.contains(quote.movie) {
        cats.append(.comedy)
    }

    return cats
}

func filterQuotes(_ quoteList: [Quote], by category: QuoteCategory) -> [Quote] {
    if category == .all { return quoteList }
    return quoteList.filter { categories(for: $0).contains(category) }
}
