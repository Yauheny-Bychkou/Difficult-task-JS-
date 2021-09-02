document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const select = document.getElementById("cars"),
    cards = document.querySelector(".cards");

  const films = new Set();

  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.addEventListener("readystatechange", () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          resolve(response);
        } else {
          reject(request.statusText);
        }
      });
      request.send();
    });
  };

  const outputPhotos = (data) => {
    data.forEach((item) => {
      if (item.movies !== undefined) {
        item.movies.forEach((movie) => {
          films.add(movie);
        });
      }
    });
    films.forEach((film) => {
      select.insertAdjacentHTML("beforeend", `<option value="${film}">${film}</option>`);
    });

    data.forEach((item) => {
      if (item.movies !== undefined) {
        let arr = item.movies.join(", ");
        cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <img src="${item.photo}" alt="" class="photo" />
          <h2><span>${item.name}</span></h2>
          <h3 class="real-name">Real name: <span>${item.realName}</span></h3>
          <h3 class="status">Status: <span>${item.status}</span></h3>
          <h3>Movies: <span class="movies">${arr}</span></h3>
        </div>`
        );
      } else {
        cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
        <img src="${item.photo}" alt="" class="photo" />
        <h2><span>${item.name}</span></h2>
        <h3 class="real-name">Real name: <span>${item.realName}</span></h3>
        <h3 class="status">Status: <span>${item.status}</span></h3>
        <h3 class="movies">Movies: <span>${item.movies}</span></h3>
      </div>`
        );
      }
    });
    const card = document.querySelectorAll(".card");

    data.forEach((item) => {
      if (item.movies !== undefined) {
        item.movies.forEach((a) => {
          select.addEventListener("change", () => {
            if (select.value === a) {
              let arr = item.movies.join(", ");
              cards.innerHTML = "";
              cards.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                  <img src="${item.photo}" alt="" class="photo" />
                  <h2><span>${item.name}</span></h2>
                  <h3 class="real-name">Real name: <span>${item.realName}</span></h3>
                  <h3 class="status">Status: <span>${item.status}</span></h3>
                  <h3>Movies: <span class="movies">${arr}</span></h3>
                </div>`
              );
            }
          });
        });
      }
    });
  };
  const urlPhotos = "./dbHeroes.json";
  getData(urlPhotos)
    .then(outputPhotos)
    .catch((error) => console.log(error));
});
