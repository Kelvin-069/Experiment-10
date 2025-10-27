const fetchBtn = document.getElementById("fetchBtn")
const carList = document.getElementById("carList")

fetchBtn.addEventListener("click", async () => {
  const cars = [
    {
      brand: "Lamborghini",
      model: "Aventador SVJ",
      topSpeed: "350 km/h",
      engine: "6.5L V12",
      price: "$517,000"
    },
    {
      brand: "Ferrari",
      model: "SF90 Stradale",
      topSpeed: "340 km/h",
      engine: "4.0L V8 Hybrid",
      price: "$507,000"
    },
    {
      brand: "Bugatti",
      model: "Chiron Super Sport",
      topSpeed: "440 km/h",
      engine: "8.0L W16 Quad-Turbo",
      price: "$3,900,000"
    },
    {
      brand: "McLaren",
      model: "P1",
      topSpeed: "350 km/h",
      engine: "3.8L V8 Hybrid",
      price: "$1,150,000"
    },
    {
      brand: "Porsche",
      model: "918 Spyder",
      topSpeed: "345 km/h",
      engine: "4.6L V8 Hybrid",
      price: "$845,000"
    }
  ]

  carList.innerHTML = ""
  cars.forEach(car => {
    const div = document.createElement("div")
    div.className = "car-card"
    div.innerHTML = `
      <h2>${car.brand} ${car.model}</h2>
      <p><strong>Top Speed:</strong> ${car.topSpeed}</p>
      <p><strong>Engine:</strong> ${car.engine}</p>
      <p><strong>Price:</strong> ${car.price}</p>
    `
    carList.appendChild(div)
  })
})
