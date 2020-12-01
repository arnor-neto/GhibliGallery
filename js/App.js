//Gets all movies from Ghibli API

const renderMovies = () => {
  let content = document.querySelector(".content");

  fetch("https://ghibliapi.herokuapp.com/films")
    .then((movies) => {
      return movies.json();
    })
    .then((movies) => {
      movies.forEach((movie) => {
        let posterURL = "";

        fetch(
          "http://www.omdbapi.com/?apikey=267a90c3&t=" +
            movie.title.split(" ").join("+")
        )
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            posterURL = data.Poster;
          })
          .then(() => {
            content.innerHTML +=
              "<div class='card'> <img src='" +
              posterURL +
              "' alt='movie poster'/> <div class='cardinfo'> <h2>" +
              movie.title +
              "</h2> <p>" +
              movie.description +
              "</p> <a href='https://www.wikipedia.org/wiki/" +
              movie.title.split(" ").join("_").split("'").join("%27") +
              "'>More Info</a> </div> </div>";
          })
          .then(() => {
            cardAnimation();
          });
      });
    });
};

//Defines card animations

const cardAnimation = () => {
  const cards = document.querySelectorAll(".card");
  const imgs = document.querySelectorAll(".card img");
  const cardinfos = document.querySelectorAll(".cardinfo");

  imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      cards[index].classList.toggle("expand");

      if (cardinfos[index].classList.contains("show")) {
        cardinfos[index].classList.remove("show");
        cardinfos[index].style.opacity = "0";
      } else {
        cardinfos[index].classList.add("show");
        setTimeout(() => {
          cardinfos[index].style.opacity = "1";
        }, 350);
      }
    });
  });
};

// Defines modal popup listeners

const modalListeners = () => {
  let aboutbtn = document.querySelector(".about-btn");
  let modal = document.querySelector(".modal");
  let closebtn = document.querySelector(".close");

  aboutbtn.addEventListener("click", () => {
    modal.style.display = "flex"; 
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 100);
  });

  closebtn.addEventListener("click", () => {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = "none";
    }, 500); 
  });
};

renderMovies();
modalListeners();
