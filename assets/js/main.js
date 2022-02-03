document.addEventListener("DOMContentLoaded", (e) => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".list-items");
  let links = document.querySelectorAll(".item");
  let navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY.toFixed(2) > 200) {
      navbar.classList.add("scroll");
      /*  burger.classList.add("burger-scroll");
      burger.classList.remove("burger"); */
      burger.style.top = "0";
    } else {
      burger.style.top = "10%";
      navbar.classList.remove("scroll");
      /* burger.classList.remove("burger-scroll");
      burger.classList.add("burger"); */
    }
  });

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    closeNav(nav, burger, links);
  });

  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("href")) {
      closeNav(nav, burger, links);
    }
  });
  function closeNav(nav, burger, links) {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle("nav-active");

    //Animate links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s linear forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Toggle close button
    burger.classList.toggle("toggle");
  }
});
