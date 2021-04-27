// Задание 1
// Напишите функцию, которая принимает массив и возвращает наименьшее число в массиве.
//
//     Пример входных данных: [3, 7,34, 2]
// Результат: 2


// let array = [3, 7,34, 2]
// let min = array[0]
// for (let i = 0;i<array.length;i++){
//     if(array[i]< min){
//         min = array[i]
//     }
// }
// console.log(min)


// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
//
//     Пример входных данных: "Hello"
// Результат: "ehllo"

// const task = (str)=>{
//     return str.toLowerCase().split("").sort((a,b)=>{
//         return a<b ? -1 : 1
//     }).join("")
// }
// console.log(task("Hello"))


// task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
//
// Пример входных данных: [1, 2, 3, 4, 5, 6]
// Результат: [2, 4, 6]


// const task = (array)=>{
//     return array.filter((el)=>{
//         return el % 2===0
//     })
// }
// console.log(task([1, 2, 3, 4, 5, 6]))
//
// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
//
//     Пример входных данных: ['text', 3, 7, 'github', 13, 'dev'] Результат: [3, 7, 13]
//
// const task = (array)=>{
//     return array.filter((el)=>{
//         return typeof el === "number"
//     })
// }
// console.log(task(['text', 3, 7, 'github', 13, 'dev']))

// c доски
// const task = (arr) =>{
//     return [Math.min(...arr),Math.max(...arr),arr.length,arr.reduce((acc,rec)=>{
//       return acc +rec / arr.length
//     },0)]
// }
// console.log(task([7, 13, 3, 77, 100]))

// task 5 Напишите функцию, которая принимает массив и возвращает:
//
//     Минимальный элемент
//
// Максимальный элемент
//
// Длину массива
//
// Среднее арифметическое
//
// Ответ должен быть в виде массива
//
// Пример входных данных: [7, 13, 3, 77, 100]
// Результат: [ 3, 100, 5, 40 ]
//


// let array = [7, 13, 3, 77, 100]
// let min = array[0]
// let max = array[1]
// let lengthArr = array.length
// let sum = 0
// for (let i = 0;i<array.length;i++){
//     sum=(array[i]+sum)
//     if(array[i]< min){
//         min = array[i]
//     }
//     else if(array[i]> min){
//         min = array[i]
//     }
//     sum=sum/lengthArr
// }
// console.log(max,min,lengthArr,sum)




// Задание 6
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//
//     Пример входных данных: "test"
// Результат: "tteesstt"

// const task = (str)=>{
//     return str.split("").map((el)=>{
//         return el.repeat(2)
//     }).join("")
// }
// console.log(task("test"))


// Задание 7
// Напишите функцию, которая принимает массив объектов и возвращает массив с пользователями, возраст которых старше 18
//
// Пример входных данных:
//
//     const persons = [
//         {name: 'Ivan', age: 27},
//         {name: 'Petya', age: 16},
//         {name: 'Erbol', age: 15},
//         {name: 'Aktai', age: 46},
//     ]
// Результат: Ivan, Aktai

// const task = (array)=>{
//     return array.filter((el)=>{
//         return el.age>=18
//     })
// }
// console.log(task([persons =  {name: 'Ivan', age: 27},
//          {name: 'Petya', age: 16},
//         {name: 'Erbol', age: 15},
//          {name: 'Aktai', age: 46},]))


// Задание 9
// Напишите функцию, которая принимает массив чисел и возвращает первое четное число.
//
//     Пример входных данных: [5, 7, 33, 88, 92]
// Результат: 88

// const task = (array)=>{
//     return array.find((el)=>{
//         if (el%2 === 0){
//             return el
//         }
//     })
// }
// console.log(task([5, 7, 33, 88, 92]))


// Задание 10
// Напишите функцию, которая принимает массив с объектами и возвращает возраст самого взрослого человека
//
// Пример входных данных:
//
//     const persons = [
//         {name: 'Ivan', age: 27},
//         {name: 'Petya', age: 16},
//         {name: 'Dima', age: 24}
//     ]
// Результат: 27

//
// const task = (array)=>{
//     return array.find((el)=>{
//         return Math.max(el.age)
//
//
//
//     }).age
//
//
// }
// console.log(task(  [persons =
//     {name: 'Ivan', age: 27},
//     {name: 'Petya', age: 16},
//     {name: 'Dima', age: 24}
// ]))

// const persons=[
//     {name: 'Ivan', age: 27},
//     {name: 'Petya', age: 16},
//      {name: 'Dima', age: 24}
// ]
//
// let result = persons.reduce((acc,el)=>{
//     return el.age > acc? el.age : acc
// },persons[0].age)
// console.log(result)