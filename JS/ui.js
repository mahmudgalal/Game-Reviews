import { detailPage } from "./details.js";

const rowData = document.querySelector("main");
const home = document.querySelector(".home");
const detail = document.querySelector(".details");
const detailData = document.getElementById("detailsContent");

class UI {
  constructor() {}
  renderHome(data) {
    home.innerHTML = " ";
    data.forEach((el) => {
      const html = ` <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 cards">
    <div class="card-body  h-100 border border-dark p-3 d-flex flex-column justify-content-between" data-id=${el.id}>
                <div>
                  <div>
                    <img
                      src="${el.thumbnail}"
                      alt="gamePhoto"
                      class="d-block w-100"
                    />
                  </div>
                  <div class="d-flex justify-content-between mt-4">
                    <p>${el.developer}</p>
                    <button class="btn btn-primary btnCard">Free</button>
                  </div>
                  <div class="mt-4 text-center border-top pt-2 border-dark">
                    <p class="fs-6 opacity-50">
                     ${el.short_description}
                    </p>
                  </div>
                </div>
                <div
                  class="d-flex  border-top py-2 border-dark justify-content-between align-items-center"
                >
                  <span class="badge text-uppercase rounded-1 bg-dark p-1">
                   ${el.genre}
                  </span>
                  <span class="text-uppercase badge rounded-1 bg-dark p-1 ">
                    ${el.platform}
                  </span>
                </div>
              </div>
  </div>`;

      home.insertAdjacentHTML("afterbegin", html);
    });

    const cards = document.querySelectorAll(".card-body");
    cards.forEach((el) => {
      el.addEventListener("click", function () {
        const id = el.dataset.id;
        home.classList.add("d-none");
        detail.classList.remove("d-none");
        detailPage.takeId(id);
      });
    });
  }
  renderDetail(result) {
    detailData.innerHTML = " ";
    const html = ` <div class="col-md-4">
              <div>
                <img
                  src="${result.thumbnail}"
                  class="d-block w-100"
                  alt="photoGame"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div>
                <h3>Title: ${result.title}</h3>
                <p class="cater">
                  Category:
                  <span class="p-1 ms-2 bg-primary rounded-2">${result.genre}</span>
                </p>
                <p class="cater">
                  Platform:
                  <span class="p-1 ms-2 bg-primary rounded-2">${result.platform}</span>
                </p>
                <p class="cater">
                  Status:
                  <span class="p-1 ms-2 bg-primary rounded-2">${result.status}</span>
                </p>
                <p>
                  ${result.description}
                </p>
                <a
                  href="${result.game_url}"
                  target="_blank"
                  class="text-decoration-none text-light border text-bg-warning border rounded p-2 mt-5"
                >
                  Show Game</a
                >
              </div>
            </div>`;
    detailData.insertAdjacentHTML("afterbegin", html);
  }
}

export const newObj = new UI();