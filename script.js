// NAV SCROLL
const nav=document.querySelector(".navbar");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>50));

// ANIMATION
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add("show");}
});
},{threshold:0.2});

document.querySelectorAll(".hidden").forEach(el=>observer.observe(el));

// FORM CONFIRMATION
const form=document.querySelector(".reservation-form");
if(form){
form.addEventListener("submit",e=>{
e.preventDefault();
form.style.display="none";
document.querySelector(".form-success").style.display="block";
});
}
