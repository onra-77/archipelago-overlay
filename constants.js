var ITEM_COLOR = {
  progression: "300deg",
  useful: "260deg",
  trap: 0,
  filler: "200deg",
};

var ITEM_TEXT_COLOR = {
  progression: "#c83feb",
  useful: "#5449ec",
  trap: "#ec3d3d",
  filler: "#3bcaee",
};

var FAKE_NAMES = [
  "Gangle",
  "Zooble",
  "Kinger",
  "Ragatha",
  "Jax",
  "Kaufmo",
  "Pomni",
  "Caine",
]; //not too many characters, to increase seeing repeating names

var FAKE_ITEMS = [
  "Sword",
  "Bread",
  "Apple",
  "Gold Coin",
  "Fish",
  "Level 5 door key",
  "Machine Gun",
  "Sandwich",
  "Diamond armor",
];

var FAKE_LOCATIONS = [
  "Complete level 1",
  "Under the sofa",
  "Defeat Bowser",
  "Forest chest",
  "World 2 shop",
  "Behind the lovely bush at the left of entrance door",
  "Soup store",
  "Solve crosswords",
];

var AVATAR_IMG = [
  //CORE
  /*  Adventure
APQuest
Aquaria
Blasphemous
Bomb Rush Cyberfunk
Bumper Stickers
Castlevania - Circle of the Moon
Castlevania 64*/
  { name: "Celeste (Open World)", img: "./character/celeste.png" },
  { name: "Celeste 64", img: "./character/celeste.png" },
  /*ChecksFinder
Choo Choo Charles*/
  { name: "Civilization VI", img: "./character/civilisation.png" },
  { name: "Dark Souls III", img: "./character/dark_souls_3.png" },
  //DLCQuest
  { name: "Donkey Kong Country 3", img: "./character/donkey_kong.png" },
  { name: "DOOM 1993", img: "./character/doom.png" },
  { name: "DOOM II", img: "./character/doom.png" },
  /*Earthbound
Factorio
Faxanadu
Final Fantasy
Final Fantasy Mystic Quest*/
  { name: "A Hat in Time", img: "./character/hat_in_time.png" },
  //Heretic
  { name: "Hollow Knight", img: "./character/hollow_knight.png" },
  //Hylics 2
  { name: "Inscryption", img: "./character/inscryption.png" },
  //Jak and Daxter: The Precursor Legacy
  { name: "Kingdom Hearts", img: "./character/kingdom_hearts.png" },
  { name: "Kingdom Hearts 2", img: "./character/kingdom_hearts.png" },
  /*Kirby's Dream Land 3
Landstalker - The Treasures of King Nole*/
  { name: "The Legend of Zelda", img: "./character/zelda_ocarina.png" },
  {
    name: "The Legend of Zelda: A Link to the Past",
    img: "./character/zelda_wind_waker.png",
  },
  {
    name: "The Legend of Zelda: Links Awakening DX",
    img: "./character/zelda_wind_waker.png",
  },
  { name: "Ocarina of Time", img: "./character/zelda_ocarina.png" },
  {
    name: "The Legend of Zelda: Ocarina of Time",
    img: "./character/zelda_ocarina.png",
  },
  { name: "The Wind Waker", img: "./character/zelda_wind_waker.png" },
  {
    name: "The Legend of Zelda: The Wind Waker",
    img: "./character/zelda_wind_waker.png",
  },
  /*Lingo
Lufia II Ancient Cave*/
  { name: "Mario & Luigi Superstar Saga", img: "./character/super_mario.png" },
  /*Mega Man 2
Mega Man 3
MegaMan Battle Network 3
Meritous
The Messenger
Muse Dash
Noita
Old School Runescape
Overcooked! 2
*/
  { name: "Paint", img: "./character/paint.png" },
  { name: "Pokemon Emerald", img: "./character/pokemon.png" },
  { name: "Pokemon Red and Blue", img: "./character/pokemon.png" },
  //Raft
  { name: "Risk of Rain 2", img: "./character/risk_of_rain.png" },
  { name: "Satisfactory", img: "./character/satisfactory.png" },
  /*
Saving Princess
Secret of Evermore
shapez
Shivers
A Short Hike
SMZ3*/
  { name: "Sonic Adventure 2 Battle", img: "./character/sonic.png" },
  { name: "Starcraft 2", img: "./character/starcraft.png" },
  { name: "Stardew Valley", img: "./character/stardew_valley.png" },
  { name: "Subnautica", img: "./character/subnautica.png" },
  { name: "Super Mario 64", img: "./character/super_mario.png" },
  {
    name: "Super Mario Land 2: The Golden Coins",
    img: "./character/super_mario.png",
  },
  { name: "Super Mario World", img: "./character/super_mario.png" },
  { name: "Super Metroid", img: "./character/metroid.png" },
  { name: "Terraria", img: "./character/terraria.png" },
  //Timespinner
  { name: "TUNIC", img: "./character/tunic.png" },
  { name: "Undertale", img: "./character/undertale.png" },
  //VVVVVV
  //Wargroove
  { name: "The Witness", img: "./character/witness.png" },
  { name: "Yacht Dice", img: "./character/dice.png" },
  /*Yoshi's Island
Yu-Gi-Oh! 2006
Zillion*/

  //STABLE

  /*ActRaiser
A Difficult Game About Climbing
Against the Storm
Age of Mythology: Retold
Air Delivery
Anodyne
Another Crab's Treasure
An Untitled Story
Ape Escape
Ape Escape 3
Astalon: Tears of the Earth
Axiom Verge
Balatro
The Binding of Isaac: Repentance
Bomberman Hero
Brotato
Buckshot Roulette
Castlevania: Dawn of Sorrow
Castlevania: Harmony of Dissonance
Castlevania: Legacy of Darkness
Castlevania: Symphony of the Night
Cavern of Dreams
Cave Story
Chrono Trigger: Jets of Time
Citadel (Luanti)
Civilization V
CloverPit
ClusterTruck
Cobalt Core
CornKidz64
CrossCode
Crystalis
Cuphead
A Dance Of Fire And Ice
Dark Cloud 1
Dark Souls II
Deep Rock Galactic
DELTARUNE
Diddy Kong Racing
Dome Keeper*/
  { name: "Donkey Kong 64", img: "./character/donkey_kong.png" },
  /*Door to Door Door Salesman
DORONKO WANKO
Dream Dazia
Duke Nukem 3D
Elementipelago
Ender Lilies: Quietus of the Knights
Factorio - Space Age Without Space
Final Fantasy 6 Worlds Collide
Final Fantasy X
Final Fantasy XII: Open World
Final Fantasy XII: Trial Mode
Final Fantasy Tactics Advance
Final Fantasy Tactics A2: Grimoire of the Rift
Final Fantasy Tactics: Ivalice Island (FFT PSX)
Fire Emblem: The Sacred Stones
FNAF World
Gato Roboto
Gato Roboto B-Side
Getting Over It with Bennett Foddy
GLYPHS
Golden Sun: The Lost Age
Grim Dawn
The Grinch
Guild Wars 2
Hammerwatch
Hatsune Miku: Project Diva Megamix+
Here Comes Niko!
Iji
Isles of Sea and Sky
Ittle Dew 2+
Jigsaw Puzzle for Archipelago
Kabuto Park (Demo)
Keep Talking and Nobody Explodes
Kingdom Hearts: Birth by Sleep Final Mix
Kingdom Hearts: Chain of Memories (GBA)
Kingdom Hearts: RE Chain of Memories
Kirby 64 - The Crystal Shards
Kirby Super Star
K-On! After School Live!!
League of Legends
LADX Beta*/
  {
    name: "The Legend of Zelda: A Link Between Worlds",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: Majora's Mask",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: The Minish Cap",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: Ocarina of Time - Ship of Harkinian",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: Oracle of Seasons",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: Phantom Hourglass",
    img: "./character/zelda_wind_waker.png",
  },
  {
    name: "The Legend of Zelda: Twilight Princess",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "The Legend of Zelda: Skyward Sword",
    img: "./character/zelda_ocarina.png",
  },
  /*Lego Star Wars: The Complete Saga
Lingo 2
Little Witch Nobeta
Luigi's Mansion
*/
  { name: "Mario is Missing (SNES)", img: "./character/super_mario.png" },
  /*Mega Man X4
MetroCUBEvania

*/
  { name: "Metroid Fusion", img: "./character/metroid.png" },
  { name: "Metroid: Zero Mission", img: "./character/metroid.png" },
  { name: "Minecraft", img: "./character/minecraft.png" },
  { name: "Minecraft Dig", img: "./character/minecraft.png" },
  /* Minishoot Adventures
Minit
Momodora: Moonlit Farewell
Monster Sanctuary
Noita - Enemysanity
Nonograhmm
Ori and the Blind Forest
Ori and the Will of the Wisps
Oxygen Not Included*/
  { name: "Paper Mario 64", img: "./character/super_mario.png" },
  {
    name: "Paper Mario: The Thousand Year Door",
    img: "./character/super_mario.png",
  },
  /*Parkitect
PEAK
Piranesi Restoration Project (Luanti)
Pizza Tower
Placid Plastic Duck Simulator
Plants vs. Zombies: GOTY
Plants vs. Zombies: Replanted
Plateup!
Pokémon FireRed and LeafGreen
Pokémon Platinum
Pokémon Black and White
Pokémon Mystery Dungeon: Explorers of Sky
PokéPark Wii: Pikachu's Adventure
Portal 2
PowerWash Simulator
Prodigal
Pseudoregalia
Rabi-Ribi
Rain World
Ratchet & Clank 2: Going Commando
Ratchet & Clank 3: Up Your Arsenal
Rayman 2: The Great Escape
Refunct
Reventure
Rift of the Necrodancer
Rift Wizard
Rusted Moss
Sentinels of the Multiverse
Shadow the Hedgehog
Simon Tatham's Portable Puzzle Collection
The Simpsons: Hit & Run
The Sims 4
Slime Rancher
Sly Cooper and the Thievius Raccoonus
Sly 2: Band of Thieves
Sonic the Hedgehog
Sonic Adventure DX
Sonic Heroes
Sonic Rush
SoulBlazer
A Space Archipelago
Spelunker
Spelunky 2
Spinball
Spyro 2: Ripto's Rage
Spyro 3: Year of the Dragon
Stacklands
Star Fox 64
Super Cat Planet
Super Junkoid
Super Smash Bros. Melee
System Shock 2
TCG Card Shop Simulator
Tetris Attack
Tevi
Toejam & Earl
TOEM: A Photo Adventure
Turnip Boy Commits Tax Evasion
Twisty Cube
Tyrian / Tyrian 2000
Ty The Tasmanian Tiger HD Remaster (PC)*/
  { name: "UZDoom", img: "./character/doom.png" },
  /*Vampire Survivors
Voltorb Flip (from Pokémon HG & SS)
Wario Land 1
Watery Words
The WereCleaner
Wordipelago
XCOM 2: War of the Chosen
Yacht Dice Bliss
Yellow Taxi Goes Vroom
Yooka-Laylee
YS VIII: Lacrimosa of Dana
Yu-Gi-Oh! Dungeon Dice Monsters
Yu-Gi-Oh! Forbidden Memories*/
  {
    name: "Zelda 2: The Adventure of Link",
    img: "./character/zelda_ocarina.png",
  },

  /*Anno 1800*/

  //STABLE IN REVIEW
  /*Autopelago
Banjo-Tooie
BK Simulator
Candy Box 2
ChecksMate (Chess)
Final Fantasy IV: Free Enterprise
Gauntlet Legends
Glover
Hades
Hexcells Infinite
Hollow Knight - Beta APWorld
Loonyland: Halloween Hill*/
  { name: "Metroid Prime", img: "./character/metroid.png" },
  /*
OpenRCT2
Psychonauts
Scooby-Doo! Night of 100 Frights
Shellipelago
Stick Ranger
Trackmania
Void Sols
Wargroove 2
Wario Land 4*/

  //STABLE NOT PRING

  /*ANIMAL WELL
Archipeladoku (Sudoku)
Bloons Tower Defense 6
Clique
Cowtastic Cafe
Crystal Project
Dead Rising Deluxe Remastered*/
  { name: "Donkey Kong Country", img: "./character/donkey_kong.png" },
  {
    name: "Donkey Kong Country 2: Diddy's Kong Quest",
    img: "./character/donkey_kong.png",
  },
  /*Don't Starve Together
Dracomino
Dragon Warrior
The Elder Scrolls IV: Oblivion Remastered
Flipwitch
Frogmonster
Funi Raccoon Game
Garfield Kart: Furious Racing
The Guardian Legend
Huniepop
Huniepop 2: Double Date
Kindergarten 2
Lunacid*/
  { name: "Mario Kart: Double Dash", img: "./character/super_mario.png" },
  /*Mega Man X
Mega Man X2
Mega Man X3
Nine Sols
osu!*/
  { name: "Outer Wilds", img: "./character/outer_wilds.png" },
  /* Path of Exile
Peaks of Yore
Peggle Deluxe
Peggle Nights
Pikuniku
Pinball FX3
Pokémon Crystal
Resident Evil 2 Remake
Resident Evil 3 Remake
Rogue Legacy
Skul: The Hero Slayer
Slay the Spire
Sonic Riders
Spongebob Squarepants: Battle for Bikini Bottom*/
  {
    name: "Super Mario World: Spicy Mycena Waffles",
    img: "./character/super_mario.png",
  },
  /*Tony Hawk's Pro Skater 1 + 2
Touhou Koumakyou: The Embodiment of Scarlet Devil
Touhou Youyoumu ~ Perfect Cherry Blossom
ULTRAKILL
Unfair Flips
Zork: Grand Inquisitor*/
];
var AVATAR_IMG_DEFAULT = "./character/unknown.png";
