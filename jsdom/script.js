let box = document.querySelector(".box")
let boxOverlay = document.querySelector(".box_overlay")
box.addEventListener("mousemove",(e)=>{
   boxOverlay.style.width = e.offsetX +"px"
})