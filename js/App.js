//Defines card animation

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

cardAnimation();
