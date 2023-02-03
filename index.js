const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nv");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


const sr = ScrollReveal({
  distance:'50px',
  duration:2000,
  reset:true
})

sr.reveal('.left, .Project, .contactInfo, .last',{delay:170, origin:'left'});
sr.reveal('.right, .contactForm, .endIcons, .mySkills1, .arrow_btn',{delay:170, origin:'right'});

// sr.reveal('.left, .about-col-1, .Project, .contactInfo, .last',{delay:170, origin:'left'});
// sr.reveal('.right,.about-col-2, .contactForm, .endIcons, .mySkills1, .arrow_btn',{delay:170, origin:'right'});
// sr.reveal('.headingAbout, .publish',{delay:170, origin:'top'});
// sr.reveal(', .publish, .arrow_btn',{delay:170, origin:'bottom'});



// window.addEventListener('scroll', 
// function() {
//   var navBarr = document.getElementById('navBarr');
//   if(window.pageYOffset >= 738.9) {
//     navBarr.classList.add('sticky');

//   } else {
//     navBarr.classList.remove("sticky");
//   }
// })
