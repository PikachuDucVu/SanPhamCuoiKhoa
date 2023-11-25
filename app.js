const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "--";

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("change", (event) => {
  const data = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&unit=metric`
  ).then((res) => res.json());
  console.log(data);
});
