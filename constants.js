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
Aquaria*/
  { name: "Blasphemous", img: "./character/blasphemous.png" },
  { name: "Bomb Rush Cyberfunk", img: "./character/bomb_rush.png" },
  /* Bomb Rush Cyberfunk
Bumper Stickers
Castlevania - Circle of the Moon
Castlevania 64*/
  { name: "Celeste (Open World)", img: "./character/celeste.png" },
  { name: "Celeste 64", img: "./character/celeste.png" },
  { name: "ChecksFinder", img: "./character/minesweeper.png" },
  //Choo Choo Charles
  { name: "Civilization VI", img: "./character/civilisation.png" },
  { name: "Dark Souls III", img: "./character/dark_souls_3.png" },
  //DLCQuest
  { name: "Donkey Kong Country 3", img: "./character/donkey_kong.png" },
  { name: "DOOM 1993", img: "./character/doom.png" },
  { name: "DOOM II", img: "./character/doom.png" },
  { name: "Earthbound", img: "./character/earthbound.png" },
  { name: "Factorio", img: "./character/factorio.png" },
  //Faxanadu
  //Final Fantasy
  //Final Fantasy Mystic Quest
  { name: "A Hat in Time", img: "./character/hat_in_time.png" },
  //Heretic
  { name: "Hollow Knight", img: "./character/hollow_knight.png" },
  //Hylics 2
  { name: "Inscryption", img: "./character/inscryption.png" },
  {
    name: "Jak and Daxter: The Precursor Legacy",
    img: "./character/jak_daxter.png",
  },
  { name: "Kingdom Hearts", img: "./character/kingdom_hearts.png" },
  { name: "Kingdom Hearts 2", img: "./character/kingdom_hearts.png" },
  { name: "Kirby's Dream Land 3", img: "./character/kirby.png" },
  //Landstalker - The Treasures of King Nole
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
  //Lingo
  //Lufia II Ancient Cave
  { name: "Mario & Luigi Superstar Saga", img: "./character/super_mario.png" },
  { name: "Mega Man 2", img: "./character/megaman.png" },
  { name: "Mega Man 3", img: "./character/megaman.png" },
  { name: "MegaMan Battle Network 3", img: "./character/megaman.png" },
  //Meritous
  { name: "The Messenger", img: "./character/the_messenger.png" },
  { name: "Muse Dash", img: "./character/muse_dash.png" },
  { name: "Noita", img: "./character/noita.png" },
  //Old School Runescape
  { name: "Overcooked! 2", img: "./character/overcooked.png" },
  { name: "Paint", img: "./character/paint.png" },
  { name: "Pokemon Emerald", img: "./character/pokemon.png" },
  { name: "Pokemon Red and Blue", img: "./character/pokemon.png" },
  { name: "Raft", img: "./character/raft.png" },
  { name: "Risk of Rain 2", img: "./character/risk_of_rain.png" },
  { name: "Satisfactory", img: "./character/satisfactory.png" },
  /*Saving Princess
Secret of Evermore*/
  { name: "shapez", img: "./character/shapez.png" },
  //Shivers
  { name: "A Short Hike", img: "./character/short_hike.png" },
  { name: "SMZ3", img: "./character/SMZ3.png" },
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
  { name: "Timespinner", img: "./character/timespinner.png" },
  { name: "TUNIC", img: "./character/tunic.png" },
  { name: "Undertale", img: "./character/undertale.png" },
  //VVVVVV
  //Wargroove
  { name: "The Witness", img: "./character/witness.png" },
  { name: "Yacht Dice", img: "./character/dice.png" },
  { name: "Yoshi's Island", img: "./character/yoshi.png" },
  { name: "Yu-Gi-Oh! 2006", img: "./character/yu_gi_oh.png" },

  //Zillion

  //STABLE

  /*ActRaiser
A Difficult Game About Climbing
Against the Storm*/
  { name: "Age of Mythology: Retold", img: "./character/mythology.png" },
  /*Air Delivery
Anodyne
Another Crab's Treasure
An Untitled Story
Ape Escape
Ape Escape 3
Astalon: Tears of the Earth
Axiom Verge*/
  { name: "Balatro", img: "./character/balatro.png" },
  { name: "The Binding of Isaac: Repentance", img: "./character/isaac.png" },
  { name: "Bomberman Hero", img: "./character/bomberman.png" },
  { name: "Brotato", img: "./character/brotato.png" },
  { name: "Buckshot Roulette", img: "./character/buckshot.png" },
  /*
Castlevania: Dawn of Sorrow
Castlevania: Harmony of Dissonance
Castlevania: Legacy of Darkness
Castlevania: Symphony of the Night
Cavern of Dreams*/
  { name: "Cave Story", img: "./character/cave_story.png" },
  /*
Chrono Trigger: Jets of Time
Citadel (Luanti)
Civilization V
CloverPit
ClusterTruck
Cobalt Core
CornKidz64
CrossCode
Crystalis*/
  { name: "Cuphead", img: "./character/cuphead.png" },
  /*A Dance Of Fire And Ice
Dark Cloud 1
Dark Souls II*/
  { name: "Deep Rock Galactic", img: "./character/deep_rock.png" },
  { name: "DELTARUNE", img: "./character/deltarune.png" },
  /*Diddy Kong Racing
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
Fire Emblem: The Sacred Stones*/
  { name: "FNAF World", img: "./character/fnaf.png" },
  /*Gato Roboto
Gato Roboto B-Side*/
  {
    name: "Getting Over It with Bennett Foddy",
    img: "./character/getting_over.png",
  },
  /*GLYPHS
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
Kabuto Park (Demo)*/
  {
    name: "Keep Talking and Nobody Explodes",
    img: "./character/keep_talking.png",
  },
  {
    name: "Kingdom Hearts: Birth by Sleep Final Mix",
    img: "./character/kingdom_hearts.png",
  },
  {
    name: "Kingdom Hearts: Chain of Memories (GBA)",
    img: "./character/kingdom_hearts.png",
  },
  {
    name: "Kingdom Hearts: RE Chain of Memories",
    img: "./character/kingdom_hearts.png",
  },
  {
    name: "Kirby 64 - The Crystal Shards",
    img: "./character/kirby.png",
  },
  {
    name: "Kirby Super Star",
    img: "./character/kirby.png",
  },
  //K-On! After School Live!!
  {
    name: "League of Legends",
    img: "./character/league_legends.png",
  },
  //LADX Beta
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
  {
    name: "The Legend of Zelda: Skyward Sword",
    img: "./character/zelda_ocarina.png",
  },
  {
    name: "Lego Star Wars: The Complete Saga",
    img: "./character/star_wars_lego.png",
  },
  /*
Lingo 2
Little Witch Nobeta
*/
  { name: "Luigi's Mansion", img: "./character/luigi.png" },
  { name: "Mario is Missing (SNES)", img: "./character/luigi.png" },
  { name: "Mega Man X4", img: "./character/megaman.png" },
  //MetroCUBEvania
  { name: "Metroid Fusion", img: "./character/metroid.png" },
  { name: "Metroid: Zero Mission", img: "./character/metroid.png" },
  { name: "Minecraft", img: "./character/minecraft.png" },
  { name: "Minecraft Dig", img: "./character/minecraft.png" },
  { name: "Minishoot Adventures", img: "./character/minishoot.png" },
  /* Minit
Momodora: Moonlit Farewell
Monster Sanctuary
Noita - Enemysanity
Nonograhmm*/
  { name: "Ori and the Blind Forest", img: "./character/ori.png" },
  { name: "Ori and the Will of the Wisps", img: "./character/ori.png" },
  //Oxygen Not Included
  { name: "Paper Mario 64", img: "./character/super_mario.png" },
  {
    name: "Paper Mario: The Thousand Year Door",
    img: "./character/super_mario.png",
  },
  //Parkitect
  { name: "PEAK", img: "./character/peak.png" },
  //Piranesi Restoration Project (Luanti)
  { name: "Pizza Tower", img: "./character/pizza_tower.png" },

  //Placid Plastic Duck Simulator
  { name: "Plants vs. Zombies: GOTY", img: "./character/plant_zombie.png" },
  {
    name: "Plants vs. Zombies: Replanted",
    img: "./character/plant_zombie.png",
  },
  { name: "Plateup!", img: "./character/plateup.png" },
  { name: "Pokémon FireRed and LeafGreen", img: "./character/pokemon.png" },
  { name: "Pokémon Platinum", img: "./character/pokemon.png" },
  { name: "Pokémon Black and White", img: "./character/pokemon.png" },
  {
    name: "Pokémon Mystery Dungeon: Explorers of Sky",
    img: "./character/pokemon.png",
  },
  { name: "PokéPark Wii: Pikachu's Adventure", img: "./character/pokemon.png" },
  { name: "Portal 2", img: "./character/portal.png" },
  { name: "PowerWash Simulator", img: "./character/powerwash.png" },
  /*Prodigal
Pseudoregalia
Rabi-Ribi*/
  { name: "Rain World", img: "./character/rain_world.png" },

  { name: "Ratchet & Clank 2: Going Commando", img: "./character/ratchet.png" },
  {
    name: "Ratchet & Clank 3: Up Your Arsenal",
    img: "./character/ratchet.png",
  },
  { name: "Rayman 2: The Great Escape", img: "./character/rayman.png" },
  /*Refunct
Reventure
Rift of the Necrodancer
Rift Wizard
Rusted Moss
Sentinels of the Multiverse*/
  { name: "Shadow the Hedgehog", img: "./character/shadow.png" },
  //Simon Tatham's Portable Puzzle Collection
  { name: "The Simpsons: Hit & Run", img: "./character/simpson.png" },
  { name: "The Sims 4", img: "./character/sims.png" },
  { name: "Slime Rancher", img: "./character/slime_rancher.png" },
  {
    name: "Sly Cooper and the Thievius Raccoonus",
    img: "./character/sly_cooper.png",
  },
  { name: "Sly 2: Band of Thieves", img: "./character/sly_cooper.png" },
  { name: "Sonic the Hedgehog", img: "./character/sonic.png" },
  { name: "Sonic Adventure DX", img: "./character/sonic.png" },
  { name: "Sonic Heroes", img: "./character/sonic.png" },
  { name: "Sonic Rush", img: "./character/sonic.png" },
  /*SoulBlazer
A Space Archipelago
Spelunker
Spelunky 2
Spinball
Spyro 2: Ripto's Rage
Spyro 3: Year of the Dragon
Stacklands*/
  { name: "Star Fox 64", img: "./character/star_fox.png" },

  /*Super Cat Planet
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
Yacht Dice Bliss*/
  { name: "Yellow Taxi Goes Vroom", img: "./character/yellow_taxi.png" },
  /*Yooka-Laylee
YS VIII: Lacrimosa of Dana*/
  { name: "Yu-Gi-Oh! Dungeon Dice Monsters", img: "./character/yu_gi_oh.png" },
  { name: "Yu-Gi-Oh! Forbidden Memories", img: "./character/yu_gi_oh.png" },
  {
    name: "Zelda 2: The Adventure of Link",
    img: "./character/zelda_ocarina.png",
  },
  //Anno 1800

  //STABLE IN REVIEW

  //Autopelago
  { name: "Banjo-Tooie", img: "./character/banjo_kazooie.png" },
  /*BK Simulator
Candy Box 2*/
  { name: "ChecksMate (Chess)", img: "./character/chess.png" },
  /*Final Fantasy IV: Free Enterprise
Gauntlet Legends
Glover*/
  { name: "Hades", img: "./character/hades.png" },
  //Hexcells Infinite
  {
    name: "Hollow Knight - Beta APWorld",
    img: "./character/hollow_knight.png",
  },
  //Loonyland: Halloween Hill
  { name: "Metroid Prime", img: "./character/metroid.png" },
  //OpenRCT2
  { name: "Psychonauts", img: "./character/psychonauts.png" },
  /*Scooby-Doo! Night of 100 Frights
Shellipelago
Stick Ranger*/
  { name: "Trackmania", img: "./character/trackmania.png" },
  /*Void Sols
Wargroove 2
Wario Land 4*/

  //STABLE NOT PRING

  { name: "ANIMAL WELL", img: "./character/animal_well.png" },
  { name: "Archipeladoku (Sudoku)", img: "./character/sudoku.png" },
  //Bloons Tower Defense 6
  { name: "Clique", img: "./character/clique.png" },
  /*Cowtastic Cafe
Crystal Project
Dead Rising Deluxe Remastered*/
  { name: "Donkey Kong Country", img: "./character/donkey_kong.png" },
  {
    name: "Donkey Kong Country 2: Diddy's Kong Quest",
    img: "./character/donkey_kong.png",
  },
  { name: "Don't Starve Together", img: "./character/dont_starve.png" },
  /*
Dracomino
Dragon Warrior
*/
  {
    name: "The Elder Scrolls IV: Oblivion Remastered",
    img: "./character/oblivion.png",
  },
  /*Flipwitch
Frogmonster
Funi Raccoon Game*/
  { name: "Garfield Kart: Furious Racing", img: "./character/garfield.png" },

  /*The Guardian Legend
Huniepop
Huniepop 2: Double Date
Kindergarten 2
Lunacid*/
  { name: "Mario Kart: Double Dash", img: "./character/super_mario.png" },
  { name: "Mega Man X", img: "./character/megaman.png" },
  { name: "Mega Man X2", img: "./character/megaman.png" },
  { name: "Mega Man X3", img: "./character/megaman.png" },
  /*Nine Sols
osu!*/
  { name: "Outer Wilds", img: "./character/outer_wilds.png" },
  /* Path of Exile
Peaks of Yore*/
  { name: "Peggle Deluxe", img: "./character/peggle.png" },
  { name: "Peggle Nights", img: "./character/peggle.png" },
  { name: "Pikuniku", img: "./character/pikuniku.png" },
  //Pinball FX3
  { name: "Pokémon Crystal", img: "./character/pokemon.png" },
  /*Resident Evil 2 Remake
Resident Evil 3 Remake
Rogue Legacy
Skul: The Hero Slayer
Slay the Spire
*/
  { name: "Sonic Riders", img: "./character/sonic.png" },
  {
    name: "Spongebob Squarepants: Battle for Bikini Bottom",
    img: "./character/spongebob.png",
  },
  {
    name: "Super Mario World: Spicy Mycena Waffles",
    img: "./character/super_mario.png",
  },
  {
    name: "Tony Hawk's Pro Skater 1 + 2",
    img: "./character/tony_hawk.png",
  },
  /*
Touhou Koumakyou: The Embodiment of Scarlet Devil
Touhou Youyoumu ~ Perfect Cherry Blossom*/
  { name: "ULTRAKILL", img: "./character/ultrakill.png" },
  /*Unfair Flips
Zork: Grand Inquisitor*/

  // UNSTABLE

  { name: "FEZ", img: "./character/fez.png" },
  { name: "Forager", img: "./character/forager.png" },
];
var AVATAR_IMG_DEFAULT = "./character/unknown.png";
