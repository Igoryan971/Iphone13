const links = document.querySelectorAll(".header-menu__item a");
const link = document.querySelector(".card-details__link-characteristics");
seamless.polyfill();

links.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    const id = element.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    } else {
      seamless.scrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});
link.addEventListener("click", () => {
  seamless.scrollIntoView(document.querySelector("#characteristics"), {
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
});
