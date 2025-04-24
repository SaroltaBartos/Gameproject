
class SceneIntro {
    constructor(name, paragraph, image){
        this.name = name;
        this.paragraph = paragraph;
        this.image = image;
    }
}

const journalIntro = new SceneIntro(
    "Intro",
    [
      "I have locked him away, deep within the mountain, with the strongest spells acting on my command.",
      "The chains keep him down... but I can feel it—they are weakening as I write these lines.",
      "I know the time will come when eventually Azerak will be free and bring evil upon our world.",
      "This is why I am writing this book. To you, on whom this crucial task now falls.",
      "Heed my words, follow my instructions, and... good luck."
    ],
    "https://i.ibb.co/CsQHWKsy/Chat-GPT-Image-Apr-23-2025-11-40-40-AM.png"
  );

const gameintro = new SceneIntro(
    "Tower Awakening",
    [
     "High above the world, on a mountain peak, stood a great castle. It was home to the priestesses who once protected the kingdom.",
     "A thousand years after a powerful priestess sealed him away, the Demon Lord Azerak finally broke free from his chains.",
     "His dark presence quickly spread through the castle in the form of a strange mist.",
     "Everyone touched by the mist fell into an eternal sleep.",
     "You, a young priestess, managed to hide in one of the high towers with the help of an Elder — an old priestess who cast a protective spell over a few survivors."
    ],
    "https://i.ibb.co/CsQHWKsy/Chat-GPT-Image-Apr-23-2025-11-40-40-AM.png"
  );
  
 
  const sceneImage = document.getElementById("scene-image");
  const storyText = document.getElementById("story-text");
  const enterHint = document.getElementById("enter-hint");
  enterHint.classList.remove("hidden");

sceneImage.src = journalIntro.image;
storyText.innerHTML = journalIntro.paragraph.map(p => `<p>${p}</p>`).join("");

function handleEnter() {
  document.removeEventListener("keydown", handleEnter);

  sceneImage.src = gameintro.image;
  storyText.innerHTML = gameintro.paragraph.map(p => `<p>${p}</p>`).join("");
  enterHint.textContent = "Press Enter to continue.";

 
  document.addEventListener("keydown", startGame);
}

function startGame() {
    document.removeEventListener("keydown", startGame);
    enterHint.classList.add("hidden");
    startFirstRoom();
  }


document.addEventListener("keydown", handleEnter);

class Room {
    constructor(name, description, image) {
      this.name = name;                 
      this.description = description;   
      this.image = image;               
      this.scene = null;                
      this.items = [];                  
      this.character = null;            
    }
}

const tower = new Room(
  "Tower",
  "You're in the high tower where the old priestess lives. The air feels heavy with magic.",
  "Tower"
);
tower.scene = [
  "The old priestess stands by the window, her eyes filled with ancient wisdom.",
  "She hands you a glowing book — the one she spoke of in the stories.",
  "The first Relic has been passed to you, a gem that seems to glow with the flame of another world.",
  "She warns you that you have to follow the instructions in the book in order to find the missing relic.",
  "Without that you won't be able strengthen the chains on the demon lord.",
  "Type Follow Instrucitons if you wish to look for the missing relic.",
  "If you wish to face the Demon Lord now, type Go to Demon Lord.",
  //Out input form in html is currently hidden, have to update it.
];
tower.items.push("relic1");

const library = new Room(
  "Library",
  "The instructions in the book have led you to the Library. The air smells of old books, and there is sunlight filtering through the windows, as if the world was still peaceful, still untouched by evil.",
  "Library picture"
);
library.scene = [
  "It takes hours, but you finally find a hidden room in the Library, in the middle of it stands a small, but richly decorated chest andored with symbols you have never seen before.",
  "There is a heavy lock on the chest, which you try to force open with your bare hands.",
  "Realising that you will need to find the key to open it, you look for answers in the book - And find that there you can open the thick binding of the book.",
  "A small key falls on the floor in front of you.",
  "Type Collect Key to pick up the key and open the chest.",
  //here we need to wait for the user to type collect key and press enter --- somehow update parapgraph to the following:
  "You have received the second relic: a knife, with a gem in it's handle, the blue so deep, it reminds of long nights, when all the light seems to disappear fromt he world.",
  "You have both Relics now. Type Go To Demon Lord",
];
library.items.push("relic2");

const throneRoom = new Room( //only to be used if the win conditions are met
  "Throne Room",
  "The power in the relics lead you to the Azerak, who has taken over the Throne Room of the Castle. He is perched on the Throne, like it has always blonged to him, ready to take over the rest of the world. He has ice cold eyes, an sking that seems to melt off his bones.",
  "Throne Room picture"
);
throneRoom.scene = [
  "Azerak faces you, boredome in his gaze, and he motions with his hands, sending magic in your way.",
  "You can feel its malice, and you would have died right on the spot if it wasn't for the Relics casting a protective shield around you.",
  "Azerak seems puzzled by the shield, until he sees the Relics in your possession. He lets out an enraged scream, and swift like lightning, he is right in front of you in the next moment, lifting the sword in his hand to strike you down.",
  "A stange magic seems to take over you body. Perhaps it was the magic of the Relics. Or maybe the spirit of the priestess, who has somehow lingered in this world for the past 1000 years, knowing that this day would eventually come.",
  "You can feel the knives gravitate towards each other, following their pull, you hold the next to each other by the tip of their handle.",
  "The gems inside melt and merge together, creating a swirling vortex of red and blue, creating a single, double bladed knife.",
  "Type Use knife to defeat the demon lord.",
  //wait for user to type and press enter
  "With a simple motion you drive the knife forward, straight into the ribs of Azerak. With a light that is almost blinding, the demon lord disappears from this word once again.",
  "You standl alon in the Throne Room, but in the distance you can hear as people start to awaken, confused about why they were asleep in the first place.",
  "Congratulations, you have save the kingdom",
];


let currentRoom = null; // global tracker

function startFirstRoom() {
  currentRoom = tower;
  sceneImage.src = tower.image;
  storyText.innerHTML = tower.scene.map(p => `<p>${p}</p>`).join("");

  const inputBox = document.getElementById("command-input");
  inputBox.classList.remove("hidden");
  inputBox.focus();
}