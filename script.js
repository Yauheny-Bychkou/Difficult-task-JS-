document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const select = document.getElementById("cars"),
    cards = document.querySelector(".cards");

  const films = new Set();
  let arr = [];
  let newArr = [];

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
      arr.push(item);
      if (item.movies !== undefined) {
        item.movies.forEach((movie) => {
          films.add(movie);
        });
      }
    });
    films.forEach((film) => {
      select.insertAdjacentHTML("beforeend", `<option value="${film}">${film}</option>`);
    });
    const renderFunc = (data) => {
      data.forEach((item) => {
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
      });
    };
    renderFunc(arr);
    const removeCards = () => {
      const card = document.querySelectorAll(".card");
      card.forEach((elem) => {
        elem.remove();
      });
    };

    select.addEventListener("change", () => {
      removeCards();
      renderFunc(
        arr.filter((elem) => {
          if (elem.movies !== undefined) {
            elem.movies.forEach((item) => {
              if (select.value === item) {
                console.log(elem);
                return true;
              } else {
                return false;
              }
            });
          }
        })
      );
    });

    select.addEventListener("change", () => {
      if (select.value === "no films") {
        removeCards();
        renderFunc(
          arr.filter((item) => {
            if (item.movies !== undefined) {
              return true;
            } else {
              return false;
            }
          })
        );
      } else if (select.value === "all films") {
        removeCards();
        renderFunc(arr);
      }
    });
  };
  const urlPhotos = "./dbHeroes.json";
  getData(urlPhotos)
    .then(outputPhotos)
    .catch((error) => console.log(error));
});
