// let heading = document.getElementById("heading")
// heading.innerHTML = "My new title"

// console.dir(heading)
//
// let title = document.getElementsByClassName("title")
// // heading.innerHTML = "My new title"
// console.log(title)
// console.log(title[0])
// console.log(title[1])

// let title = document.getElementsByTagName("title")
// heading.innerHTML = "My new title"
// console.log(tagExample)
// console.log(tagExample[0])
// console.log(tagExample[1])

//.querySelector()   первый подходящий элемент
//.querySelectorAll() все подходящие элементы

// let querySelectorExampleId = document.querySelector("#heading")
// console.log(querySelectorExampleId)
//
//
// let querySelectorExampleClass = document.querySelector(".title")
// console.log(querySelectorExampleClass)
//
// let querySelectorExampleTag = document.querySelector("h4")
// console.log(querySelectorExampleTag)
//
// let listSelector = document.querySelector("ul li")
// console.log(listSelector)


// let allTags = document.querySelectorAll("h4")
// console.log(allTags)
//
// let allClasses = document.querySelectorAll(".title")
// console.log(allClasses)


// изменить содержимое элемента
//.innerHTML
//.innerText
// .textContent


// let firstInput = document.getElementById("first")
// let secondInput = document.getElementById("second")
// let btn = document.getElementById("btn")
// let out = document.getElementById("out")
// let plus = document.getElementById("plus")
// let minus = document.getElementById("minus")
// let multiply = document.getElementById("multiply")
// let divide = document.getElementById("divide")
// plus.addEventListener("click",() =>{
//     out.textContent=Number(firstInput.value)+Number(secondInput.value)
// })
// minus.addEventListener("click",() =>{
//     out.textContent=Number(firstInput.value)-Number(secondInput.value)
// })
// multiply.addEventListener("click",() =>{
//     out.textContent=Number(firstInput.value)*Number(secondInput.value)
// })
// divide.addEventListener("click",() =>{
//     out.textContent=Number(firstInput.value)/Number(secondInput.value)
// })
// let out = document.getElementById("out")
// let btn = document.querySelectorAll(".btn")
// btn.forEach((button)=>{
//     let firstInput = document.getElementById("first")
//     let secondInput = document.getElementById("second")
// button.addEventListener("click",()=>{
//     let answer
//     let value1 = Number(firstInput.value)
//     let value2 = Number(secondInput.value)
//     let operation = button.textContent
//     if(operation=== "+")  answer = value1 + value2
//     if(operation=== "-")  answer = value1 - value2
//     if(operation=== "/")  answer = value1 / value2
//     if(operation=== "*")  answer = value1 * value2
//     if(operation=== "%")  answer = value1 % value2
//     out.textContent= answer
// })
// })


// let out = document.getElementById("out")
// let btn = document.querySelectorAll(".btn")
// btn.forEach((button)=>{
//     let firstInput = document.getElementById("first")
//     let secondInput = document.getElementById("second")
//     button.addEventListener("click",()=>{
//         let answer
//         let value1 = Number(firstInput.value)
//         let value2 = Number(secondInput.value)
//         let operation = button.textContent
//       switch (operation) {
//           case "+" : answer = value1 + value2;break
//           case "-" : answer = value1 - value2;break
//           case "/" : answer = value1 / value2;break
//           case "*" : answer = value1 * value2;break
//           case "%" : answer = value1 % value2;break
//           case "pow" : answer = value1 ** value2;break
//
//       }
//         out.textContent= answer
//     })
// })

// let range1 = document.querySelector(".range1")
// // range1.oninput = example
// range1.onchange = example
// function example(){
//     console.log(range1.value)
}
