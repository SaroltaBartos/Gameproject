
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
  enterHint.textContent = "Press Enter to begin your journey.";

 
  document.addEventListener("keydown", startGame);
}

function startGame() {
  document.removeEventListener("keydown", startGame);
  storyText.textContent = "The room fades in… Your game begins now.";
  enterHint.classList.add("hidden");
}

document.addEventListener("keydown", handleEnter);