// data.js - The Master Database for gToons: Disneyland
// Coordinates are approximate center-points for the ride buildings/entrances.

const RIDE_COORDINATES = [
    // Tomorrowland
    { id: "space", main: "Space Mountain", lat: 33.8121, lng: -117.9190 },
    { id: "star_tours", main: "Star Tours", lat: 33.8128, lng: -117.9189 },
    { id: "buzz", main: "Buzz Lightyear", lat: 33.8123, lng: -117.9194 },
    { id: "autopia", main: "Autopia", lat: 33.8128, lng: -117.9175 },
    { id: "nemo", main: "Finding Nemo Subs", lat: 33.8128, lng: -117.9194 },
    { id: "astro_orbitor", main: "Astro Orbitor", lat: 33.8120, lng: -117.9196 },
    { id: "monorail", main: "Disneyland Monorail", lat: 33.8118, lng: -117.9190 },

    // Fantasyland
    { id: "matterhorn", main: "Matterhorn Bobsleds", lat: 33.8130, lng: -117.9185 },
    { id: "peter_pan", main: "Peter Pan's Flight", lat: 33.8131, lng: -117.9199 },
    { id: "alice", main: "Alice in Wonderland", lat: 33.8132, lng: -117.9196 },
    { id: "snow_white", main: "Snow White's Wish", lat: 33.8131, lng: -117.9202 },
    { id: "mr_toad", main: "Mr. Toad's Wild Ride", lat: 33.8132, lng: -117.9201 },
    { id: "pinocchio", main: "Pinocchio's Journey", lat: 33.8130, lng: -117.9204 },
    { id: "small_world", main: "it's a small world", lat: 33.8146, lng: -117.9189 },
    { id: "dumbo", main: "Dumbo the Elephant", lat: 33.8136, lng: -117.9204 },
    { id: "teacups", main: "Mad Tea Party", lat: 33.8132, lng: -117.9192 },
    { id: "storybook", main: "Storybook Canal", lat: 33.8138, lng: -117.9190 },
    { id: "carrousel", main: "King Arthur Carrousel", lat: 33.8131, lng: -117.9195 },
    { id: "casey_jr", main: "Casey Jr. Train", lat: 33.8139, lng: -117.9201 },

    // New Orleans Square & Bayou Country
    { id: "pirates", main: "Pirates of the Caribbean", lat: 33.8115, lng: -117.9208 },
    { id: "haunted", main: "Haunted Mansion", lat: 33.8119, lng: -117.9224 },
    { id: "tiana", main: "Tiana's Bayou", lat: 33.8112, lng: -117.9231 },
    { id: "pooh", main: "Winnie the Pooh", lat: 33.8115, lng: -117.9235 },
    { id: "canoes", main: "Explorer Canoes", lat: 33.8114, lng: -117.9228 },

    // Frontierland & Adventureland
    { id: "big_thunder", main: "Big Thunder Mountain", lat: 33.8124, lng: -117.9213 },
    { id: "riverboat", main: "Mark Twain Riverboat", lat: 33.8120, lng: -117.9218 },
    { id: "indy", main: "Indiana Jones", lat: 33.8114, lng: -117.9219 },
    { id: "jungle", main: "Jungle Cruise", lat: 33.8116, lng: -117.9204 },
    { id: "tiki", main: "Enchanted Tiki Room", lat: 33.8119, lng: -117.9201 },

    // Galaxy's Edge
    { id: "rise", main: "Rise of the Resistance", lat: 33.8142, lng: -117.9239 },
    { id: "smugglers", main: "Smugglers Run", lat: 33.8133, lng: -117.9223 },

    // Toontown
    { id: "runaway", main: "Runaway Railway", lat: 33.8152, lng: -117.9206 },
    { id: "roger_rabbit", main: "Roger Rabbit Spin", lat: 33.8156, lng: -117.9201 },
    { id: "gadget", main: "Gadget's Coaster", lat: 33.8155, lng: -117.9197 },

    // Main Street & Transport
    { id: "railroad", main: "Disneyland Railroad", lat: 33.8093, lng: -117.9190 },
    { id: "lincoln", main: "Mr. Lincoln", lat: 33.8095, lng: -117.9185 },
    { id: "main_street_vehicles", main: "Main Street Vehicles", lat: 33.8101, lng: -117.9189 }
];

const RIDE_SETS = {
    "space": ["Space Mountain", "Starry Speed", "Galaxy Peak", "Void Runner", "Orbit Jump", "Nebula Blast"],
    "star_tours": ["Star Tours", "Starspeeder 1000", "Light Speed", "Endor Flight", "Droid Pilot", "Rebel Spy"],
    "buzz": ["Buzz Lightyear", "Zurg's Wrath", "Space Ranger", "Laser Blast", "Battery Pack", "Star Command"],
    "autopia": ["Autopia", "Fuel Pump", "Finish Line", "Gas Pedal", "Road Hog", "Checkered Flag"],
    "nemo": ["Nemo Subs", "EAC Current", "Mine Mine Mine", "Deep Dive", "Anemone", "P. Sherman"],
    "astro_orbitor": ["Astro Orbitor", "Rocket Fin", "Zero G", "Solar Wing", "Retro Rocket", "High Flyer"],
    "monorail": ["Monorail", "Mark VII", "Beam Way", "City of Future", "Blue Stripe", "Station Platform"],
    
    "matterhorn": ["Matterhorn", "Abominable Snowman", "Alpine Slide", "Bobsled Run", "Ice Crystal", "Yeti Roar"],
    "peter_pan": ["Peter Pan", "Second Star", "Pixie Dust", "Shadow Sneak", "Crocodile Clock", "Jolly Roger"],
    "alice": ["Alice in Wonderland", "White Rabbit", "Drink Me", "Eat Me", "Queen's Heart", "Caterpillar"],
    "snow_white": ["Snow White", "Poison Apple", "Magic Mirror", "Wishing Well", "Mine Diamond", "True Love"],
    "mr_toad": ["Mr. Toad", "Motor Mania", "Wild Ride", "Trial Verdict", "Hellfire", "Gypsy Wagon"],
    "pinocchio": ["Pinocchio", "Blue Fairy", "Donkey Ears", "Monstro Whale", "Cricket Conscience", "Stromboli"],
    "small_world": ["Small World", "Clock Face", "Peace Dove", "Golden Sun", "Hello Friend", "World Voyage"],
    "dumbo": ["Dumbo", "Magic Feather", "Peanut Sack", "Timothy Mouse", "Big Top", "Pink Elephant"],
    "teacups": ["Mad Tea Party", "Unbirthday", "Dormouse", "Sugar Cube", "Tea Pot", "Spin Cycle"],
    "storybook": ["Storybook Canal", "Monstro Mouth", "Tiny Village", "Cave of Wonders", "Agrabah", "Seven Dwarfs"],
    "carrousel": ["King Arthur Carrousel", "Jingles", "Lance", "Bridle", "Stirrup", "Gallop"],
    "casey_jr": ["Casey Jr.", "Engine 2", "Calliope", "Monkey Cage", "Sleeper Car", "Caboose"],

    "pirates": ["Pirates of the Caribbean", "Yo Ho Ghost", "Dead Man's Coin", "Tortuga Gold", "Black Pearl", "Scurvy Dog"],
    "haunted": ["Haunted Mansion", "Grim Grinner", "Doom Buggy", "Hatbox Ghost", "Ethereal Host", "999 Happy Haunts"],
    "tiana": ["Tiana's Bayou", "Firefly Flash", "Lily Pad", "Gator Beat", "Jazz Horn", "Cooking Pot"],
    "pooh": ["Winnie the Pooh", "Hunny Pot", "Heffalump", "Woozle", "Tigger Bounce", "Blustery Day"],
    "canoes": ["Explorer Canoes", "Paddle Power", "River Bend", "Settler's Cabin", "Eagle Nest", "Indian Village"],

    "big_thunder": ["Big Thunder", "Goat Dynamite", "Mine Train", "Gold Nugget", "Coyote Howl", "Rainbow Ridge"],
    "riverboat": ["Mark Twain", "River Queen", "Paddle Wheel", "Upper Deck", "Fog Horn", "Captain's Wheel"],
    "indy": ["Indiana Jones", "Snake Pit", "Rolling Boulder", "Forbidden Eye", "Grail Diary", "Bull Whip"],
    "jungle": ["Jungle Cruise", "Backside of Water", "Trader Sam", "Hippo Pool", "Piranha", "Skipper's Joke"],
    "tiki": ["Tiki Room", "Macaw Feather", "Jose", "Pierre", "Barking Flower", "Tiki Drum"],

    "rise": ["Rise of the Resistance", "First Order", "Kylo's Blade", "Bek's Command", "At-At Walker", "Blue Milk"],
    "smugglers": ["Smugglers Run", "Falcon Pilot", "Coaxium", "Hondo's Deal", "Porg Nest", "Chewie's Wrench"],

    "runaway": ["Runaway Railway", "Chuuby Bird", "Picnic Basket", "Train Whistle", "Mickey's Short", "Perfect Day"],
    "roger_rabbit": ["Roger Rabbit", "Benny Cab", "Dip Pail", "Jessica's Song", "Weasel Laugh", "Toon Hole"],
    "gadget": ["Gadget Coaster", "Paperclip", "Acorn Shell", "Nut & Bolt", "Corgi Toy", "Rescue Ranger"],

    "railroad": ["Disneyland RR", "Steam Engine", "Grand Canyon", "Primeval World", "Conductor's Cap", "Roundhouse"],
    "lincoln": ["Mr. Lincoln", "Gettysburg", "Freedom Bell", "Stovepipe Hat", "Civil War", "Union Coin"],
    "main_street_vehicles": ["Fire Engine", "Jitney", "Omnibus", "Horse Car", "Surrey", "Main Street Hub"]
};