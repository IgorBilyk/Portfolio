/* $(document).ready(function () {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 110,
      },
      800
    );
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
}); */
console.log(window.scrollY);
document.addEventListener("DOMContentLoaded", (e) => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".list-items");
  let links = document.querySelectorAll(".item");
  let navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    console.log(window.scrollY.toFixed(2));
    if (window.scrollY.toFixed(2) > 200) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
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
