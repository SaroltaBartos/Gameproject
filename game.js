
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
      "Entry from the priestess's journal: I have locked him away, deep within the mountain, using the strongest spells under my command.",
      "The chains hold him down... but I can feel it — they are weakening as I write these lines.",
      "I know the time will come when the Demon Lord will break free and bring evil upon our world.",
      "This is why I am writing this book — to you, the one upon whom this crucial task now falls.",
      "Heed my words, follow my instructions, and... good luck."
    ],
    "https://i.ibb.co/CsQHWKsy/Chat-GPT-Image-Apr-23-2025-11-40-40-AM.png"
  );

const gameintro = new SceneIntro(
    "Intro2",
    [
     "High above the world, on a mountain peak, stood a great castle. It was home to the priestesses who once protected the kingdom.",
     "It was a peaceful land, until one day the Demon Lord, who was sealed away by a powerful pristess a thousand years ago, managed to break free.",
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
    constructor(name, image) {
      this.name = name;                 
      this.image = image;               
      this.scene = null;                
      this.items = [];                             
    }
}

const tower = new Room(
  "Tower",
  "https://i.ibb.co/BVBx704K/Chat-GPT-Image-Apr-23-2025-11-42-54-AM.png"
);
tower.scene = [
 "You're in the high tower with the old priestess. The air feels heavy with magic.",
  "She hands you an old book — the journal of the priestess who defeated the demon lord a thousand years ago. It is preserved by magic.",
  "The old priestess also hands you the first Relic: a knife with a red gem in its handle that seems to glow with the flame of another world.",
  "She warns you that you must follow the instructions in the book to find the missing relic and defeat the demon lord.",
  "Type FOLLOW INSTRUCTIONS if you wish to look for the missing relic.",
  "If you wish to face the Demon Lord now, type GO TO DEMON LORD."
];

const library = new Room(
  "Library",
  "https://i.ibb.co/HDfBc3pf/Chat-GPT-Image-Apr-24-2025-03-32-39-PM.png"
);
library.scenePart1 = [
  "The instructions in the book have led you to the Library. The air smells of old books, and sunlight filters through the windows, as if the world were still peaceful — still untouched by evil.",
  "It takes hours, but you finally find a hidden room in the Library. In the middle of it stands a small, richly decorated chest adorned with symbols you have never seen before.",
  "There is a heavy lock on the chest, which you try to force open with your bare hands.",
  "Realizing that you’ll need a key, you look for answers in the book — and discover that the thick binding can be opened.",
  "A small key falls to the floor in front of you.",
  "Type COLLECT KEY to pick up the key and open the chest.",
];

library.scenePart2 = [
  "You have received the second relic: a knife with a gem in its handle — a blue so deep, it evokes long nights when all the light seems to disappear from the world.",
  "You now hold both relics. Type GO TO DEMON LORD.",
];

const throneRoom = new Room( 
  "Throne Room",
  "https://i.ibb.co/Z6kr0YsB/Chat-GPT-Image-Apr-23-2025-11-34-07-AM.png"
);
throneRoom.scene = [
  "The power of the relics leads you to the demon lord, who has taken over the Throne Room of the castle. He is perched on the throne as if it has always belonged to him, ready to claim the rest of the world.",
  "He has ice-cold eyes and skin that seems to melt off his bones.",
  "The demon lord faces you, boredom in his gaze, and he motions with his hand, sending magic your way.",
  "You can feel its malice, and you would have died on the spot if not for the relics casting a protective shield around you.",
  "He seems puzzled by the shield — until he sees the relics in your possession. He lets out an enraged scream, and like lightning, he is in front of you, lifting his sword to strike.",
  "A strange magic begins to take over your body. Perhaps it's the power of the relics... or maybe the spirit of the priestess, who has lingered in this world for the past 1,000 years, knowing this day would come.",
  "You feel the knives gravitate toward each other. Following their pull, you hold them together by the tips of their handles.",
  "The gems inside melt and merge, forming a swirling vortex of red and blue — a single, double-bladed knife.",
  "Type USE KNIFE to defeat the demon lord.",
];

const throneRoomAlternative = new Room( 
  "Throne Room",
  "https://i.ibb.co/Z6kr0YsB/Chat-GPT-Image-Apr-23-2025-11-34-07-AM.png"
);
throneRoomAlternative.scene = [
  "Led by the sole relic in your hand and the confidence in your veins, you finally find the demon lord in the Throne Room. He is perched on the throne as if it has always belonged to him, ready to take over the rest of the world. His eyes are ice cold, and his skin seems to melt off his bones.",
  "The demon lord faces you, boredom in his gaze, and he motions with his hand, sending magic your way.",
  "You can feel its malice, and you suddenly regret your hasty decision to approach the demon lord without the second relic.",
  "As his magic envelops you, the single relic slips from your hands, and you scream out in pain—",
  "It seems you were not ready to face the demon lord yet.",
];


let currentRoom = null; 

function startFirstRoom() {
  currentRoom = tower;
  sceneImage.src = tower.image;
  storyText.innerHTML = tower.scene.map(p => `<p>${p}</p>`).join("");

  const inputBox = document.getElementById("command-input");
  inputBox.classList.remove("hidden");
  inputBox.focus();
  tower.items.push("relic1");
}

function enterRoom(room) {
  currentRoom = room;
  sceneImage.src = room.image;

  const inputBox = document.getElementById("command-input");
  inputBox.classList.remove("hidden");
  inputBox.focus();

  if (room === library) {
    storyText.innerHTML = library.scenePart1.map(p => `<p>${p}</p>`).join("");
  } else {
    storyText.innerHTML = room.scene.map(p => `<p>${p}</p>`).join("");
  }
}

const inputBox = document.getElementById("command-input");

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = inputBox.value.trim().toLowerCase();
    handleCommand(command);
    inputBox.value = ""; 
  }
});

function handleCommand(command) {
  if (currentRoom === tower) {
    if (command === "follow instructions") {
      enterRoom(library);
    } else if (command === "go to demon lord") {
      if (tower.items.includes("relic1") && library.items.includes("relic2")) {
        enterRoom(throneRoom);
      } else {
        enterRoom(throneRoomAlternative);
        endGame();
      }
    } else {
      storyText.innerHTML += `<p class="text-red-500">Unknown command. Try "Follow Instructions" or "Go to Demon Lord".</p>`;
    }
  } else if (currentRoom === library) {
    if (command === "collect key") {
      storyText.innerHTML += `<p class="text-black">You pick up the key, open the chest, and receive the second Relic!</p>`;
      library.items.push("relic2");
      storyText.innerHTML += library.scenePart2.map(p => `<p>${p}</p>`).join("");
      inputBox.value = ""
    } else if (command === "go to demon lord") {
      if (tower.items.includes("relic1") && library.items.includes("relic2")) {
        enterRoom(throneRoom);
      } else {
        enterRoom(throneRoomAlternative);
        endGame();
      }
    } else {
      storyText.innerHTML += `<p class="text-red-500">Unknown command. Try "Collect Key" or "Go to Demon Lord".</p>`;
    } 
  } else if (currentRoom === throneRoom) {
    if (command === "use knife") {
      endGame();
    } else {
      storyText.innerHTML += `<p class="text-red-500">Unknown command. Try "Use Knife".</p>`;
    }
  }
}

function endGame() {
  const inputBox = document.getElementById("command-input");
  inputBox.disabled = true;
  inputBox.classList.add("hidden");

  const restartBtn = document.getElementById("restart-btn");
  restartBtn.classList.remove("hidden");

  if (tower.items.includes("relic1") && library.items.includes("relic2")) {
    storyText.innerHTML += `
      <p class="text-green-600 font-bold mt-4">
        With the final strike, the Demon Lord is defeated. The curse lifts, and light returns to the world.
      </p>
      <p>Congratulations, you have saved the kingdom!</p>
    `;
  } else {
    storyText.innerHTML += `
      <p>You lost the game. Better luck next time.</p>
    `;
  }
}

const restartBtn = document.getElementById("restart-btn");