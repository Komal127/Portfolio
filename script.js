let a = document.querySelector(".home");
let b = document.querySelector(".about");
let c = document.querySelector(".skill");
let d = document.querySelector(".connect");

let e = document.querySelector(".first-container");
let f = document.querySelector(".container2");
let g = document.querySelector(".container3");
let h = document.querySelector(".container4");
let i = document.querySelector(".second-container");



// e.style.display = "inherit"
f.style.display = "none"
g.style.display = "none"
h.style.display = "none"


b.addEventListener(('click'), () => {
    e.style.display = "none"
    f.style.display = "inherit"
    g.style.display = "none"
    h.style.display = "none"

})

c.addEventListener(('click'), () => {
    e.style.display = "none"
    f.style.display = "none"
    g.style.display = "inherit"
    h.style.display = "none"

})

d.addEventListener(('click'), () => {
    e.style.display = "none"
    f.style.display = "none"
    g.style.display = "none"
    h.style.display = "inherit"

})