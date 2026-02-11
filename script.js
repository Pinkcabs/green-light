/* MOBILE NAV */
const navToggle=document.getElementById("navToggle");
const navMenu=document.getElementById("navMenu");

navToggle.onclick=()=>navMenu.classList.toggle("show");

/* NAVBAR TOGGLE */
// Select all nav links and sections
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Function to highlight the current section
function highlightNav() {
  let scrollPos = window.scrollY + window.innerHeight / 2; // middle of screen

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute("id");

      // Remove active from all links
      navLinks.forEach(link => link.classList.remove("active"));

      // Add active to the link that matches the current section
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if (link) link.classList.add("active");
    }
  });
}

// Run on scroll and on page load
window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);


// Run on scroll and load
window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// Smooth scroll on click
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
    activeLink = link;
    moveUnderline(link);
  });

  // Hover effect: temporarily move underline
  link.addEventListener("mouseenter", () => moveUnderline(link));
  // Mouse leave: move back to active link
  link.addEventListener("mouseleave", () => moveUnderline(activeLink));
});

/*PACKAGING GLIDE AND SCALING */
//if(sec.id==="pricing"){
  //sec.querySelectorAll(".tier").forEach((c,i)=>{
    //setTimeout(()=>c.classList.add("show"), i*150);
  //});
//}

/*const animated = document.querySelectorAll(".section-animate");

function animate(){
  animated.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight*0.85){
      sec.classList.add("show");

      // Services cards
      if(sec.id === "services"){
        sec.querySelectorAll(".card").forEach((c,i)=>{
          setTimeout(()=> c.classList.add("show"), i*150);
        });
      }

      // Pricing tiers
      if(sec.id === "pricing"){
        sec.querySelectorAll(".tier").forEach((c,i)=>{
          setTimeout(()=> c.classList.add("show"), i*150);
        });
      }
    }
  });
}*/

window.addEventListener("scroll", animate);
window.addEventListener("load", animate);



/* LIVE CALCULATOR */
const size=document.getElementById("size");
const service=document.getElementById("service");
const total=document.getElementById("total");

function updateTotal(){
total.innerText=Number(size.value)+Number(service.value);
}

size.addEventListener("change",updateTotal);
service.addEventListener("change",updateTotal);
updateTotal();

/* BOOKING VALIDATION */
const form=document.getElementById("bookingForm");

form.addEventListener("submit",e=>{
e.preventDefault();

if(!form.checkValidity()){
alert("Please fill all fields");
return;
}

document.getElementById("confirm").innerText="Booking received!";
form.reset();
});

/* SCROLL ANIMATIONS */
const animated = document.querySelectorAll(".section-animate");

function animate(){
  animated.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight*0.85){
      sec.classList.add("show");

      // Services cards glide
      if(sec.id === "services"){
        sec.querySelectorAll(".card").forEach((c,i)=>{
          setTimeout(()=> c.classList.add("show"), i*150);
        });
      }

      // Pricing tiers glide
      if(sec.id === "pricing"){
        sec.querySelectorAll(".tier").forEach((c,i)=>{
          setTimeout(()=> c.classList.add("show"), i*150);
        });
      }
    }
  });
}

window.addEventListener("scroll", animate);
window.addEventListener("load", animate);


window.addEventListener("scroll",animate);
window.addEventListener("load",animate);
