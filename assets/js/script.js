'use strict';

/**
 * navbar toggle in mobile
 */

const /**{Node Element} */ $navbar =document.querySelector("[data-navbar]");
const /**{NodeElement} */  $navToggler =document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click",function (){
    $navbar.classList.toggle("active");
});


/** 
 * Header scroll state 
  */
 

const /**{NodeElement} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll" ,e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
})