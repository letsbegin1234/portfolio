AOS.init({
    offset:400,
    duration:2000
});



function colorChange(x) {
    document.body.style.backgroundColor = x;
    document.body.style.transitionDuration = "3s";
    

}
function bgcolor() {
    document.body.style.backgroundColor = "#D7E9F7";
    document.body.style.transitionDuration = "3s";

}

const menuToggle = document.querySelector('.menubar');
const menubar = document.querySelector(".mynav");
const links = document.querySelector(".links");
const links2 = document.querySelector(".links2");
const links3= document.querySelector(".links3");
const links4 = document.querySelector(".links4");
const links5 = document.querySelector(".links5");
const links6 = document.querySelector(".links6");


menuToggle.addEventListener('click',()=>{
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');

})
links.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
links2.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
links3.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
links4.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
links5.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
links6.addEventListener('click',()=> {
    menubar.classList.toggle('mynav2');
    menuToggle.classList.toggle('menubar2');
})
