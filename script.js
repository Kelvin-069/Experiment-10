const dogBtn = document.getElementById("dogBtn");
const dogImage = document.getElementById("dogImage");
const dogName = document.getElementById("dogName");
const funnyCaption = document.getElementById("funnyCaption");

const funnyLines = [
  "Caught stealing socks again!",
  "Thinking about world domination.",
  "Professional napper since birth.",
  "Bark first, think later.",
  "Certified treat inspector.",
  "Zoomies level: Expert.",
  "Not guilty... probably.",
  "That face when the vet says 'shots.'",
  "Dreaming of bacon.",
  "When you realize it's Monday."
];

dogBtn.addEventListener("click", async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  const imageUrl = data.message;

  dogImage.src = imageUrl;

  const parts = imageUrl.split("/");
  const breed = parts[parts.indexOf("breeds") + 1].replace(/-/g, " ");
  dogName.textContent = breed;

  const randomCaption = funnyLines[Math.floor(Math.random() * funnyLines.length)];
  funnyCaption.textContent = randomCaption;
});
