  /*------------------------------------
    Back to top button
-------------------------------------- */
const toTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


 /*------------------------------------
   pageloader
-------------------------------------- */
var loader = document.getElementById("pageloader");
window.addEventListener("load",function(){
 loader.style.display = "none";
});

  /*------------------------------------
   Change nav bg
-------------------------------------- */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
})