const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show','fade');
      } //else {
    //    entry.target.classList.remove('show','fade');
    //  }
  })
});

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElement = document.querySelectorAll('.Hfade')

 hiddenElements.forEach((el) => observer.observe(el));
 hiddenElement.forEach((el) => observer.observe(el));



const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".header-con nav ul");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
})


document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("active")
  menu.classList.remove("active")
}))