const dogBtn = document.getElementById("dogBtn")
const dogImage = document.getElementById("dogImage")

dogBtn.addEventListener("click", async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")
  const data = await res.json()
  dogImage.src = data.message
})
