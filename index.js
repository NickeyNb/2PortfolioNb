const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nv");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

