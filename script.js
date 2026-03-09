
/* =========================
   Smooth scrolling
========================= */

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

})

})

})



/* =========================
   Certificate image zoom
========================= */

const images = document.querySelectorAll(".gallery img")

images.forEach(img => {

img.addEventListener("click", ()=>{

let overlay = document.createElement("div")
overlay.style.position="fixed"
overlay.style.top="0"
overlay.style.left="0"
overlay.style.width="100%"
overlay.style.height="100%"
overlay.style.background="rgba(0,0,0,0.9)"
overlay.style.display="flex"
overlay.style.alignItems="center"
overlay.style.justifyContent="center"

let bigImage = document.createElement("img")
bigImage.src = img.src
bigImage.style.maxWidth="90%"
bigImage.style.maxHeight="90%"

overlay.appendChild(bigImage)

overlay.addEventListener("click",()=>{

overlay.remove()

})

document.body.appendChild(overlay)

})

})



/* =========================
   Petri dish colony growth
========================= */

const dish = document.getElementById("dish")

if(dish){

function createColony(){

let colony = document.createElement("div")

colony.classList.add("colony")

let x = Math.random()*380
let y = Math.random()*380

colony.style.left = x + "px"
colony.style.top = y + "px"

dish.appendChild(colony)

setTimeout(()=>{

colony.remove()

},15000)

}

setInterval(createColony,2000)

}



/* =========================
   Floating microbes effect
========================= */

function createMicrobe(){

let microbe = document.createElement("div")

microbe.style.position="fixed"
microbe.style.width="6px"
microbe.style.height="6px"
microbe.style.background="#00eaff"
microbe.style.borderRadius="50%"
microbe.style.left=Math.random()*window.innerWidth+"px"
microbe.style.top=window.innerHeight+"px"
microbe.style.opacity="0.7"

document.body.appendChild(microbe)

let speed = Math.random()*2+1

let move = setInterval(()=>{

let top = parseFloat(microbe.style.top)

microbe.style.top = top - speed + "px"

if(top < -10){

microbe.remove()
clearInterval(move)

}

},20)

}

setInterval(createMicrobe,500)

