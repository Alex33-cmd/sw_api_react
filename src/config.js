// Configuration for SWAPI API

const SWAPI_URL = "https://swapi.dev/api/";

// const myComponent = function (data) {
//   const myArr = data.results.map(
//     (planet) =>
//       `Planet: ${planet.name}
//       Terrain: ${planet.terrain}
//       Climate: ${planet.climate}
//       `
//   );

//   document.getElementById("app").innerHTML = myArr.join("</br>");
// };

// fetch(SWAPI_URL)
//   .then((response) => response.json())
//   .then((data) => myComponent(data));

// Fetching planet by ID
const apiSettings = {
  fetchPlanet: async (planetId) => {
    const endpoint = `${SWAPI_URL}planets/${planetId}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
