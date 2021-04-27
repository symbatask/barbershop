// ##############niksam#######################
// task-1 Напишите функцию, которая принимает два числа и возвращает произведение этих двух чисел.

// const task2 = (a,b) => {
//
//     return  a * b
// }
// console.log(task2(6,7))


// task-2 Напишите функцию, которая принимает имя и
// возвращает строку по шаблону: Hello my dear {name}
// const task2 = (str) =>{
//     return `Hello my dear ${str}`
// }
// console.log(task2("Symbat"))

// task3 Напишите функцию, которая принимает все, что угодно и возвращает его тип данных:
// const task3 = (arr) => {
//     return arr.map((el) => {
//         return typeof el
//         })
// }
// console.log(task3(["string",6,true]))

// task-4 Напишите функцию, которая принимает два числа,
//     если первое число больше второго, вывести: a больше b,
//     если второе больше первого, то вывести : b больше a, иначе: Они равны
// const task4 = (a,b) =>{
//     if (a > b){
//         return "a больше b"
//     } else{
//         return "b больше a"
//     }
// }
// console.log(task4(3,4))


// task-5 Напишите функцию, которая принимает число и проверяет его кратность пяти.
//     Ответ представить в виде true или false:


// const task5 = (arr) => {
//     return arr.filter((el)=>{
//         return el%5 === 0
//     })
// }
// console.log(task5([9,-8,-7,5,45,50]))


// task-6 Напишите функцию, которая принимает строку и выводит последний символ в этой строке:
// const task6 = (str) =>{
//     return str[str.length-1]
// }
// console.log(task6("Hello World"))

// task-7 Напишите функцию, которая принимает число и выводит квадратный корень этого числа :
// const task7 = (num) =>{
//     return num.map((el)=>{
//         return Math.sqrt(el)
//
//     })
// }
// console.log(task7([4,9,16,36]))

// task-8   Напишите функцию, которая принимает число n и выводит целое число
// в диапазоне от -n до n :
// const task8 = (min,max)=>{
// let rand = min + Math.random() * (max-min)
//         return Math.floor(rand)
//
// }
// console.log(task8(-8, 8))
// console.log(task8(-9, 9))
// console.log(task8(-1, 1))

// task9 Напишите функцию, которая принимает число n и выводит количество цифр в числе :
// const task9 = (n)=>{
//     return n.map((el)=>{
//         return el.length
//
//         })
// }
// console.log(task9(["Hello","lorem","ipsum","dolor"]))


// task10 Напишите функцию, которая принимает четыре числа и выводит минимальное :
// const task10 = (a,b,c,d) =>{
//
//        return `${Math.min(a,b,c,d)} ${Math.max(a,b,c,d)}`
//
//
//
// }
// console.log(task10(7,9,5,19))

// // task11
// const finalValue = (exam,projects) =>{
// if (exam >= 90 && projects > 10
// ){
// return `final mark = 100`
// } else if(
//     exam >= 75 && projects > 5
// ){
//     return `final mark = 90`
// }else if(
//     exam >= 50 && projects > 2
// ){
//     return `final mark = 75`
// } else{
//     return `final mark = 0`
// }
//
// }
// console.log(finalValue(78,6))
// console.log(finalValue(0,0))
// console.log(finalValue(90,1))

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& classroom &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// task1
// task1 1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// const task1 = (arr) =>{
//     return arr.map((el)=>{
//         return el + el
//     })
// }
// console.log(task1([315, 64, 75, 43, 65, 63]))

// task2 2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
//     Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// const task2 = (arr) =>{
//     return arr.map((el)=>{
//         return el.split("").join("").toLowerCase().replace(/а/g,"я")
//     })
// }
// console.log(task2(['Аскар', 'Баяман', 'Калмамат']))


// task3 3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат'].
//     Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
// const task3 = (arr) =>{
//     return arr.filter((el)=>{
//      return el.toLowerCase().includes("к")
//
//     })
// }
// console.log(task3(['Аскар', 'Баяман', 'Калмамат']))

// task4 4. Вам дан массив: [4, 54, 49]. Сделайте из него массив,
//     состоящий из квадратов этих чисел.

// const task4 = (arr) =>{
//     return arr.map((el)=>{
//         return el ** 2
//     })
// }
// console.log(task4([4, 54, 49]))


// task5 5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.

// const task5 = (arr) =>{
//     return arr.filter((el)=>{
//      return el < 0
//
//     })
// }
// console.log(task5([3134, 4, -143, -245, -214]))


// task 6 6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.

// const task6 = (arr) =>{
//     return arr.filter((el)=>{
//      return el % 2 === 0
//
//     })
// }
// console.log(task6([3, 51, 30, 54, 60]))

// task7 7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].
//     Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const task7 = (arr) =>{
//     return arr.filter((el)=>{
//      return el.length>5
//
//     })
// }
// console.log(task7(['Бегимай', 'Баяман', 'Калмамат',"Musk"]))

// task8 8. Вам дан массив [-13, 96, -41, -28, 40].
//     Посчитайте количество отрицательных чисел в этом массиве.

// const task8 = (arr) =>{
//     return arr.filter((el)=>{
// {
//     return el<0
// }
//
//
//     }).length
// }
// console.log(task8([-13, 96, -41, -28, 40]))

// task9 9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
//     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.

// const task9 = (arr) => {
//     return arr.filter((el)=>{
//     return el > 0
//     }).map((el)=>{
//         if(el>30){
//             return Math.sqrt(el)
//         } else{
//            return el
//         }
//
//     })
// }
// console.log(task9([3, 51, -30, -54, 60]))
//
//
//
// task10 10. Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.


// const task10 = (arr) =>{
//     return arr.filter((el)=>{
// {
//     return arr.indexOf(el) === arr.lastIndexOf(el)
// }
//
//
//     })
// }
// console.log(task10([55, 44, 55, 44, 15, 49]))


// task11 11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null].
//     Создайте функцию, которая очищает массив от ложных (false)
// значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).

// const task11 = (arr) =>{
//     return arr.filter((el)=>{
// {
//      return !!el
//   // return   typeof el === "number"  && el !== 0 && el !== "undefined" && el !== "NaN"
// }
//
//
//     })
// }
// console.log(task11([NaN, 0, 77, false, -17, '',undefined, 99, null]))

// task12 12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.

// const task12 = (arr) => {
//     return arr.map((el) => {
//             return el.length
//     })
// }
// console.log(task12(['Бегимай', 'Баяман', 'Калмамат']))


// function addBinary(a,b) {
//     let x = a + b
//     let result = ""
//     while(Math.floor(x) !==0){
//         x =x / 2
//         let remainder = x - Math.floor(x)
//         x = Math.floor(x)
//
//         result += Math.ceil(remainder)
//
//     }
//     result = result.split("")
//     result = result.reverse()
//     result = result.join("")
//     return result
// }
//
// console.log(addBinary(7,2))



// function isPrime(num) {
//     if (num < 2)
//         return false
//     for (let i = 2; i <= Math.sqrt(num); i++)
//         if (num % i === 0)
//             return false
//     return true;
// }
// console.log(isPrime((4)))



