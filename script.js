/* MOBILE NAV */
const navToggle=document.getElementById("navToggle");
const navMenu=document.getElementById("navMenu");

navToggle.onclick=()=>navMenu.classList.toggle("show");

/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll("#navMenu a").forEach(link=>{
link.addEventListener("click",()=>{
navMenu.classList.remove("show");
});
});


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
let selectedSize = 0; // default Small
const service=document.getElementById("service");
const extras=document.getElementById("extras");
const total=document.getElementById("total");

function updateTotal(){
total.innerText = Number(selectedSize) + Number(service.value) + Number(extras.value);
}

service.addEventListener("change",updateTotal);
extras.addEventListener("change",updateTotal);

function updateTotal(){
	const newTotal = Number(selectedSize) + Number(service.value) + Number(extras.value);
	
	const currentTotal = Number(total.innerText);
	
	animateValue(currentTotal, newTotal, 400); //400ms animation
};

function animateValue(start, end, duration) {

  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;

    const progress = currentTime - startTime;
    const percentage = Math.min(progress / duration, 1);

    const value = Math.round(start + (end - start) * percentage);

    total.innerText = value;

    if (percentage < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


/* VEHICLE CARD SELECTION */

const vehicleCards = document.querySelectorAll(".vehicle-card");

vehicleCards.forEach(card=>{
card.addEventListener("click",()=>{

vehicleCards.forEach(c=>c.classList.remove("active"));
card.classList.add("active");

selectedSize = card.dataset.size;
updateTotal();

});
});

/*BOOKING FORM*/

const serviceType = document.getElementById("serviceType");
const carOptions = document.getElementById("carOptions");
const outdoorOptions = document.getElementById("outdoorOptions");

serviceType.addEventListener("change", function() {

  if (this.value === "Outdoor") {
    outdoorOptions.style.display = "block";
    carOptions.style.display = "none";
  } else {
    outdoorOptions.style.display = "none";
    carOptions.style.display = "block";
  }

});

/* BOOKING VALIDATION */ 
//const form=document.getElementById("bookingForm"); 
//form.addEventListener("submit",e=>{ 
	//e.preventDefault(); 
		//if(!form.checkValidity()){ 
			//alert("Please fill all fields"); 
			//return; //} 

//document.getElementById("confirm").innerText="Booking received!"; 

const form = document.getElementById("bookingForm");
const modal = document.getElementById("thankYouModal");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    modal.style.display = "flex";
    form.reset();
  })
  .catch(() => {
    alert("Oops! Something went wrong.");
  });

});

function closeModal() {
  modal.style.display = "none";
}
 
//form.reset(); });


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
