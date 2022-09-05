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


 // navbar scroll active section 
 var sections = document.querySelectorAll("section");

 onscroll = function () {
   var scrollPosition = document.documentElement.scrollTop;
 
   sections.forEach((section) => {
     if (
       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
       scrollPosition <
         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
     ) {
       var currentId = section.attributes.id.value;
       removeAllActiveClasses();
       addActiveClass(currentId);
     }
   });
 };
 var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};


 var removeAllActiveClasses = function () {
   document.querySelectorAll("nav a").forEach((el) => {
     el.classList.remove("active");
   });
 };
 
