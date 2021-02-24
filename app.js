"use strict";
const mainContainer = document.querySelector(".main__container");
const starsContainer = document.querySelector(".stars");
const btnSearch = document.querySelector(".search__btn");
const inputSearch = document.querySelector(".search__input");
const inputOptions = document.querySelector(".search__options");
const btnTabPeople = document.querySelector(".btn__tab--people");
const btnTabFilm = document.querySelector(".btn__tab--films");
const btnTabPlanet = document.querySelector(".btn__tab--planets");
const btnTabSpecie = document.querySelector(".btn__tab--species");
const btnTabStarship = document.querySelector(".btn__tab--starships");
const btnTabVehicle = document.querySelector(".btn__tab--vehicles");
const btnTabs = document.querySelectorAll(".btn__tab");
const loader = document.querySelector(".loader");

let openedTab;
const stars = {
  people: [],
  starships: [],
  films: [],
  planets: [],
  species: [],
  vehicles: [],
};

// PERSON 🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑🧑
///////////////////////////////////////////////
//////////////////////////////////////////////
const renderPerson = function (el) {
  const html = `
  <div class="star person">
    <div class="star__tag">Person</div>
    <img src="img/person.png" alt="${el.name}" class="star__image" />
    <div class="star__details">
      <h3 class="star__name">${el.name}</h3>
      <ul class="star__details--list">
        <li class="star__details--item">Birth year: <span>${
          el.birth_year
        }</span></li>
        <li class="star__details--item">Eye color: <span>${
          el.eye_color
        }</span></li>
        <li class="star__details--item">Gender: <span>${el.gender}</span></li>
        <li class="star__details--item">Hair color: <span>${
          el.hair_color
        }</span></li>
        <li class="star__details--item">Height: <span>${el.height}</span></li>
        <li class="star__details--item">Mass: <span>${el.mass}</span></li>
        <li class="star__details--item">Skin color: <span>${
          el.skin_color
        }</span></li>
        <li class="star__details--item">
          Created: <span>${new Date(el.created)}</span>
        </li>
        <li class="star__details--item">
          Edited: <span>${new Date(el.edited)}</span>
        </li>
      </ul>
    </div>
  </div>  
`;
  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderStarship = function (el) {
  const html = `
        <div class="star starship">
        <div class="star__tag">Starship</div>
        <img src="img/starship.png" alt="${el.name}" class="star__image" />
        <div class="star__details">
          <h3 class="star__name">${el.name}</h3>
          <ul class="star__details--list">
            <li class="star__details--item">MGLT: <span>10${el.MGLT}</span></li>
            <li class="star__details--item">
              Cargo Capacity: <span>${el.cargo_capacity}</span>
            </li>
            <li class="star__details--item">
              Consumables: <span>${el.consumables}</span>
            </li>
            <li class="star__details--item">
              Cost In Credits: <span>${el.cost_in_credits}</span>
            </li>
            <li class="star__details--item">
              Created: <span>${new Date(el.created)}</span>
            </li>
            <li class="star__details--item">Crew: <span>${el.crew}</span></li>
            <li class="star__details--item">
              Edited: <span>${new Date(el.edited)}</span>
            </li>
            <li class="star__details--item">
              Hyperdrive Rating: <span>${el.hyperdrive_rating}</span>
            </li>
            <li class="star__details--item">
              Manufacturer:
              <span
                >${el.manufacturer}</span
              >
            </li>
            <li class="star__details--item">
              Max Atmosphering Speed: <span>${el.max_atmosphering_speed}</span>
            </li>
            <li class="star__details--item">
              Model: <span>${el.model}</span>
            </li>
            <li class="star__details--item">
              Passengers: <span>${el.passengers}</span>
            </li>
            <li class="star__details--item">Pilots: <span>${
              el.pilots.length === 0 ? "nill" : el.pilots.join(", ")
            }</span></li>
            <li class="star__details--item">
              Starship Class: <span>${el.starship_class}</span>
            </li>
          </ul>
        </div>
      </div>
  `;
  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderFilm = function (el) {
  const html = `
      <div class="star film">
        <div class="star__tag">Film</div>
        <img src="img/film.png" alt="${el.title}" class="star__image" />
        <div class="star__details">
          <h3 class="star__name">${el.title}</h3>
          <ul class="star__details--list">
            <li class="star__details--item">
              Characters: <span><a href="${
                el.characters[0]
              }">View more details</a>
              </span>
            </li>
            <li class="star__details--item">
              Created: <span>${new Date(el.created)}</span>
            </li>
            <li class="star__details--item">
              Director: <span>${el.director}</span>
            </li>
            <li class="star__details--item">
              Edited: <span>${new Date(el.edited)}</span>
            </li>
            <li class="star__details--item">Episode ID: <span>${
              el.episode_id
            }</span></li>
            <li class="star__details--item">
              Opening Crawl:
              <span>
              ${el.opening_crawl
                .replaceAll("\n", " ")
                .replaceAll("\\", " ")}</span>
            </li>
            <li class="star__details--item">
              Planets: <span><a href="${
                el.planets[0]
              }">View more details</a></span>
            </li>
            <li class="star__details--item">
              Producer: <span>${el.producer}</span>
            </li>
            <li class="star__details--item">
              Release Date:
              <span>${el.release_date}</span>
            </li>
            <li class="star__details--item">
              Species: <span><a href="${
                el.species[0]
              }">View more details</a></span>
            </li>
            <li class="star__details--item">
              Starships: <span><a href="${
                el.starships[0]
              }">View more details</a></span>
            </li>
            <li class="star__details--item">
              Species: <span><a href="${
                el.species[0]
              }">View more details</a></span>
            </li>
            <li class="star__details--item">
              vehicles: <span><a href="${
                el.vehicles[0]
              }">View more details</a></span>
            </li>
          </ul>
        </div>
      </div>
  `;
  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderPlanet = function (el) {
  const html = `
     <div class="star planet">
        <div class="star__tag">Planet</div>
        <img src="img/planet.png" alt="${el.name}" class="star__image" />
        <div class="star__details">
          <h3 class="star__name">${el.name}</h3>
          <ul class="star__details--list">
            <li class="star__details--item">Climate: <span>${
              el.climate
            }</span></li>
            <li class="star__details--item">
              Created: <span>${new Date(el.created)}</span>
            </li>
            <li class="star__details--item">Diameter: <span>${
              el.diameter
            }</span></li>
            <li class="star__details--item">
              Edited: <span>${el.edited}</span>
            </li>
            <li class="star__details--item">
              Films: <span><a href="${el.films[0]}">View more details</a></span>
            </li>
            <li class="star__details--item">
              Gravity:
              <span>${el.gravity}</span>
            </li>
            <li class="star__details--item">
              Orbital Period: <span>${el.orbital_period}</span>
            </li>
            <li class="star__details--item">
              Population: <span>${el.population}</span>
            </li>
            <li class="star__details--item">
              Residents:
              <span><a href="${el.residents[0]}">View more details</a></span>
            </li>
            <li class="star__details--item">
              Rotation Period: <span>${el.rotation_period}</span>
            </li>
            <li class="star__details--item">Surface Water: <span>${
              el.surface_water
            }</span></li>
            <li class="star__details--item">Terrain: <span>${
              el.terrain
            }</span></li>
          </ul>
        </div>
      </div>
  `;
  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderSpecie = function (el) {
  const html = `
      <div class="star specie">
        <div class="star__tag">Specie</div>
        <img src="img/specie.png" alt="${el.name}" class="star__image" />
        <div class="star__details">
          <h3 class="star__name">${el.name}</h3>
          <ul class="star__details--list">
            <li class="star__details--item">
              Average Height: <span>${el.average_height}</span>
            </li>
            <li class="star__details--item">
              Average Lifespan: <span>${el.average_lifespan}</span>
            </li>
            <li class="star__details--item">
              Classification: <span>${el.classification}</span>
            </li>
            <li class="star__details--item">
              Created: <span>${new Date(el.created)}</span>
            </li>
            <li class="star__details--item">
              Designation: <span>${el.designation}</span>
            </li>
            <li class="star__details--item">
              Edited: <span>${new Date(el.edited)}</span>
            </li>
            <li class="star__details--item">
              Eye Color: <span>${el.eye_colors}</span>
            </li>
            <li class="star__details--item">
              Hair Color: <span>${el.hair_colors}</span>
            </li>
            <li class="star__details--item">
              Language:
              <span>${el.language}</span>
            </li>
            <li class="star__details--item">
            Films:
            <span><a href="${el.films[0]}">View more details</a></span>
          </li>
            <li class="star__details--item">Skin Color: <span>${
              el.skin_colors
            }</span></li>
          </ul>
        </div>
      </div>
  `;

  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderVehicle = function (el) {
  const html = `
        <div class="star vehicle">
          <div class="star__tag">vehicle</div>
          <img src="img/vehicle.png" alt="${el.name}" class="star__image" />
          <div class="star__details">
            <h3 class="star__name">${el.name}</h3>
            <ul class="star__details--list">
              <li class="star__details--item">
                Cargo Capacity: <span>${el.cargo_capacity}</span>
              </li>
              <li class="star__details--item">
                Consumables: <span>${el.consumables}</span>
              </li>
              <li class="star__details--item">
                Cost in Credits: <span>${el.cost_in_credits}</span>
              </li>
              <li class="star__details--item">
                Created: <span>${new Date(el.created)}</span>
              </li>
              <li class="star__details--item">Crew: <span>${el.crew}</span></li>
              <li class="star__details--item">
                Edited: <span>${new Date(el.edited)}</span>
              </li>
              <li class="star__details--item">Length: <span>${
                el.length
              }</span></li>
              <li class="star__details--item">
                Manufacturer: <span>${el.manufacturer}</span>
              </li>
              <li class="star__details--item">
                Max Atmosphering Speed:
                <span>${el.max_atmosphering_speed}</span>
              </li>
              <li class="star__details--item">
                Model: <span>${el.model}</span>
              </li>
              <li class="star__details--item">Passengers: <span>${
                el.passengers
              }</span></li>
              <li class="star__details--item">Pilots: <span>${
                el.pilots
              }</span></li>
              <li class="star__details--item">
                Films: <span><a href="${
                  el.films[0]
                }">View more details</a></span>
              </li>
              <li class="star__details--item">
                Vehicle Class: <span>${el.vehicle_class}</span>
              </li>
            </ul>
          </div>
        </div>
  `;
  // starsContainer.innerHTML = "";
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  const html = `
      <div class="error">
        <p class="error__message">
          ${msg}
        </p>
      </div>
`;
  starsContainer.insertAdjacentHTML("beforeend", html);
};

const renderStar = async function (url, type) {
  try {
    //  starsContainer.innerHTML = "";
    loader.style.height = "10vw";
    loader.style.opacity = 1;

    let res, data;

    if (stars[type].length === 0) {
      res = await fetch(url);
      data = await res.json();

      if (!res.ok) throw new Error("Couldn't load resources");
    }

    let entries;

    if (stars[type].length > 0) {
      entries = stars[type];
    } else entries = data.results;

    entries.forEach((el, idx) => {
      // if (idx === 0) starsContainer.innerHTML = "";
      if (type === "people") {
        renderPerson(el);
        if (entries !== stars[type]) stars.people.push(el);
      }
      if (type === "starships") {
        renderStarship(el);
        if (entries !== stars[type]) stars.starships.push(el);
      }
      if (type === "films") {
        renderFilm(el);
        if (entries !== stars[type]) stars.films.push(el);
      }
      if (type === "planets") {
        renderPlanet(el);
        if (entries !== stars[type]) stars.planets.push(el);
      }
      if (type === "species") {
        renderSpecie(el);
        if (entries !== stars[type]) stars.species.push(el);
      }
      if (type === "vehicles") {
        renderVehicle(el);
        if (entries !== stars[type]) stars.vehicles.push(el);
      }
    });

    openedTab = type;
    loader.style.height = 0;
    loader.style.opacity = 0;

    if (stars[type].length === 0) {
      if (data.next) renderStar(data.next);
    }

    btnTabs.forEach((btn) => {
      btn.classList.remove("btn__tab--active");
      if (btn.classList.contains(`btn__tab--${type}`))
        btn.classList.toggle("btn__tab--active");
    });
  } catch (err) {
    renderError(err.message);
    loader.style.height = 0;
    loader.style.opacity = 0;
    btnTabs.forEach((btn) => btn.classList.remove("btn__tab--active"));
  }
};

btnTabPeople.addEventListener("click", function () {
  if (openedTab === "people" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/people/", "people");
});
// default load page display
(async function () {
  await renderStar("https://swapi.dev/api/people/", "people");
  await renderStar("https://swapi.dev/api/starships/", "starships");
  await renderStar("https://swapi.dev/api/planets/", "planets");
  await renderStar("https://swapi.dev/api/films/", "films");
  await renderStar("https://swapi.dev/api/species/", "species");
  await renderStar("https://swapi.dev/api/vehicles/", "vehicles");

  starsContainer.innerHTML = "";
  renderStar("_", "people");

  btnTabs.forEach((btn) => {
    btn.classList.remove("btn__tab--active");
    if (btn.classList.contains("btn__tab--people"))
      btn.classList.toggle("btn__tab--active");
  });
})();

btnTabStarship.addEventListener("click", function () {
  if (openedTab === "starships" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/starships/", "starships");
});

btnTabFilm.addEventListener("click", function () {
  if (openedTab === "films" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/films/", "films");
});

btnTabPlanet.addEventListener("click", function () {
  if (openedTab === "planets" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/planets/", "planets");
});

btnTabSpecie.addEventListener("click", function () {
  if (openedTab === "species" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/species/", "species");
});

btnTabVehicle.addEventListener("click", function () {
  if (openedTab === "vehicles" && starsContainer.children.length === 1) return;
  starsContainer.innerHTML = "";
  renderStar("https://swapi.dev/api/vehicles/", "vehicles");
});

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  const searchVal = inputSearch.value;
  const searchOpt = inputOptions.value;

  starsContainer.innerHTML = "";

  switch (searchOpt) {
    case "category":
      renderError(`Cannot search under the "Category",\
       please specify the right category`);

    case "people":
      const resultPeople = stars.people.filter((e) =>
        e.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      if (resultPeople.length > 0) {
        resultPeople.forEach((e) => renderPerson(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    case "starships":
      const resultStarships = stars.starships.filter(
        (e) =>
          e.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          e.model.toLowerCase().includes(searchVal.toLowerCase())
      );
      if (resultStarships.length > 0) {
        resultStarships.forEach((e) => renderStarship(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    case "films":
      const resultFilms = stars.films.filter((e) =>
        e.title.includes(searchVal)
      );
      if (resultFilms.length > 0) {
        resultFilms.forEach((e) => renderFilm(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    case "planets":
      const resultPlanets = stars.planets.filter((e) =>
        e.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      if (resultPlanets.length > 0) {
        resultPlanets.forEach((e) => renderPlanet(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    case "species":
      const resultSpecies = stars.species.filter((e) =>
        e.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      if (resultSpecies.length > 0) {
        resultSpecies.forEach((e) => renderSpecie(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    case "vehicles":
      const resultVehicles = stars.vehicles.filter(
        (e) =>
          e.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          e.model.toLowerCase().includes(searchVal.toLowerCase())
      );
      if (resultVehicles.length > 0) {
        resultVehicles.forEach((e) => renderVehicle(e));
      } else {
        renderError(
          `"${searchVal}" not found in Starwars "${searchOpt}" category`
        );
      }
      break;
    default:
      renderError(`"${searchVal}" does not exist in Starwars "${searchOpt}"`);
  }
});
