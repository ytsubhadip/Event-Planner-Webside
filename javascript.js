let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
menu.classList.toggle("fa-times");
navbar.classList.toggle("active");
};

window.onscroll = () =>{
    menu.classList.remove("fa-times");
navbar.classList.remove("active");

};