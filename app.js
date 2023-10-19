// Variable declaration
const categoryButton = document.querySelectorAll(".category");
const cards = document.querySelector(".cards");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// Functions declaration
const checkCategory = (e) => {
  return e.target.innerText;
};
const showKeyValue = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    return `${key}: ${value}`;
  }
};
const showCards = async (val) => {
  const res = await fetch(`https://swapi.dev/api/${val}`);
  const data = await res.json();
  console.log(data.results);
  data.results.forEach((result) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");

    if (val != "films") {
      newDiv.innerHTML = `<h2 class="card-title" >${result.name}</h2>`;
    } else {
      newDiv.innerHTML = `<h2 class="card-title" >${result.title}</h2>`;
    }
    cards.appendChild(newDiv);
    console.log(showKeyValue(data));
    newDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      switch (val) {
        case "films":
          modal.innerHTML = `<div class="modal-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p class = "modal-txt">
      <h2>${result.title}</h2>
      <h3>Director</h3> : ${result.director}
      <h3>Director</h3> : ${result.producer}
      <h3>Release date</h3> : ${result.release_date}
      </p>
      
    </div>`;

          break;
        case "people":
          modal.innerHTML = `<div class="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class = "modal-txt">
          <h2>${result.name}</h2>
          <h3>Gender</h3> : ${result.gender}
          <h3>Height</h3> : ${result.height} cm
          <h3>Weight</h3> : ${result.mass} kg
          <h3>Hair Color</h3> : ${result.hair_color}
          </p>
        </div>`;

          break;
        case "planets":
          modal.innerHTML = `<div class="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class = "modal-txt">
          <h2>${result.name}</h2>
          <h3>Rotation period</h3> : ${result.rotation_period}
          <h3>Orbital period</h3> : ${result.orbital_period} 
          <h3>Diameter</h3> : ${result.diameter} 
          <h3>Climate</h3> : ${result.climate}
          <h3>Gravity</h3> : ${result.gravity}
          <h3>Terrain</h3> : ${result.terrain}
          <h3>Population</h3> : ${result.population}
          </p>
        </div>`;
          break;
        case "species":
          modal.innerHTML = `<div class="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p class = "modal-txt">
          <h2>${result.name}</h2>
          <h3>Classification</h3> : ${result.classification}
          <h3>Designation</h3> : ${result.designation} 
          <h3>Average height</h3> : ${result.average_height} cm
          <h3>Skin colors</h3> : ${result.skin_colors}
          <h3>Hair colors</h3> : ${result.hair_colors}
          <h3>Eye colors</h3> : ${result.eye_colors}
          <h3>Average lifespan</h3> : ${result.average_lifespan}
          <h3>Language</h3> : ${result.language}
          </p>
        </div>`;
          break;
        case "starships":
          modal.innerHTML = `<div class="modal-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p class = "modal-txt">
              <h2>${result.name}</h2>
              <h3>Model</h3> : ${result.model}
              <h3>Manufacturer</h3> : ${result.manufacturer} 
              <h3>Cost in credits</h3> : ${result.cost_in_credits} 
              <h3>Length</h3> : ${result.length}
              <h3>Max atmosphering speed</h3> : ${result.max_atmosphering_speed}
              <h3>Crew</h3> : ${result.crew}
              <h3>Passengers</h3> : ${result.passengers}
              <h3>Cargo capacity</h3> : ${result.cargo_capacity}
              </p>
            </div>`;
          break;
        case "vehicles":
          modal.innerHTML = `<div class="modal-close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p class = "modal-txt">
                  <h2>${result.name}</h2>
                  <h3>Model</h3> : ${result.model}
                  <h3>Manufacturer</h3> : ${result.manufacturer} 
                  <h3>Cost in credits</h3> : ${result.cost_in_credits} 
                  <h3>Length</h3> : ${result.length}
                  <h3>Max atmosphering speed</h3> : ${result.max_atmosphering_speed}
                  <h3>Crew</h3> : ${result.crew}
                  <h3>Passengers</h3> : ${result.passengers}
                  <h3>Cargo capacity</h3> : ${result.cargo_capacity}
                  </p>
                </div>`;
          break;
        default:
          break;
      }
      modal.classList.toggle("open");
      overlay.classList.toggle("open");
      const modalClose = document.querySelector(".modal-close");
      modalClose.addEventListener("click", (e) => {
        e.stopPropagation();

        modal.classList.toggle("open");
        overlay.classList.toggle("open");
      });
    });
  });
};
// Actions
categoryButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const btnContent = checkCategory(e);
    cards.innerHTML = "";
    showCards(btnContent);
  });
});
