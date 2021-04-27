
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let myImg = document.querySelector(".myImg")
let input = document.querySelector(".input")

let currentEffect




btn1.addEventListener("click", () =>{
    myImg.style.filter = "blur()";
})
btn2.addEventListener("click", () =>{
    myImg.style.filter = "sepia()";
})
btn3.addEventListener("click", () =>{
    myImg.style.filter = "invert()";
})


input.addEventListener("input", () =>{
    if(currentEffect==="blur") blur()

    if(currentEffect==="sepia") sepiaEffect()

    if(currentEffect==="blur") invertEffect()


})

function generateFilter(){

    myImg.style.filter = `blur(${input.value}%)`
    currentEffect="blur"
}

generateFilter()
function sepiaEffect(){

    myImg.style.filter = `sepia(${input.value}%)`
    currentEffect="sepia"
}

sepiaEffect()



function invertEffect(){

    myImg.style.filter = `invert(${input.value}%)`
    currentEffect="invert"
}

invertEffect()




//
// function generateShadow(){
//     let property = `${horizontal.value}px ${vertical.value}px ${spread.value}px ${blur.value}px ${color.value}`
//     box.style.boxShadow = property
//     box_shadow_code.textContent = `box-shadow:${property};`
// }
//
// generateShadow()
