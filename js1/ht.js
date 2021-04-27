// task1

// 1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// const task1 = (arr) =>{
//     return arr.reduce((acc,el)=>{
//         return acc+el
//     },0)
// }
// console.log(task1([5,15,315,2,13,20,9]))

// task 2
//  2. Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.

// const task2 = (arr) =>{
//     return arr.reduce((acc,el)=>{
//         return el % 2 === 0? acc + el: acc
//     },0)
// }
// console.log(task2([5,15,315,2,13,20,9]))


// task3 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.


// const task3 = (arr) =>{
//     return arr.reduce((acc,el)=>{
//         return el > 10 ? acc + el: acc
//     },0)
// }
// console.log(task3([5,15,315,2,13,20,9]))

// task4 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
//
// const task4 = (arr) =>{
//     return arr.reduce((acc,el)=>{
//         return el > 10 ? acc - el: acc
//     },0)
// }
// console.log(task4([3,13,54,15,335, 39]))


// task 5 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.


// const task5 = (arr) =>{
//     return arr.reduce((acc,el)=>{
//         return acc.concat(el)
//     },"").length
// }
// console.log(task5(['Аскар', 'Баяман', 'Калмамат']))


// task6  6. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
//     Выведите все строки в верхнем регистре, используя map.

// const task6 = (arr) =>{
//     return arr.map((el)=>{
//         return el.toUpperCase()
//     })
// }
// console.log(task6(['Аскар', 'Баяман', 'Калмамат']))

// task7 7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат'].
//     Выведите все вторые строки в верхнем регистре.



// const evenIdx = (arr)=>{
//      return arr.map((el,idx)=>{
//          return   idx % 2 !== 0  ? el.toUpperCase() : el
//     },0)
// }
// console.log(evenIdx(['Аскар', 'Баяман', 'Калмамат']))



// const   evenUpper = (array)=>{
//     return array.reduce((acc,el,i)=>{
//         return i % 2 === 0 ? acc : [...acc,el.toUpperCase()]
//     },[])
// }
// console.log(evenUpper(["lorem","lorem","lorem","lorem"]))


// SAMOE VAJNOE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// tak8 8. Напишите функцию, которая принимает str, target. И возвращает true или false,
//     если target присутствует в str. Использовать .reduce для этого.
//
// const checkSymbol = (str,target)=>{
//     return str.split("").reduce((acc,el)=>{
//         return acc || el === target
//     },false)
// }
// console.log(checkSymbol("Ivan","a"))
// task 9 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат'].
//     Используйте заглавные буквы в каждом массиве имен.
///////////////////////////////пересмотри//////////////////////////////////////////////////
// const task9 = (arr) =>{
//     return arr.map((el)=>{
//         return `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`
//     })
// }
// console.log(task9(['асКар', 'бЯяман', 'калМамат']))

// task10 0. Вам дан массив со строками ['Баяман', 'Калмамат'].
//     Поменяйте местами первые буквы строк.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! очень очень важно
// task 10
// const task10 = (arr) =>{
//     let name1 = arr[0]
//     let name2 = arr[1]
//     return arr.map((el,idx)=>{
//         return  idx === 0? name2[0]+name1.slice(1):name1[0] + name2.slice(1)
//     })
// }
// console.log(task10(['Баяман', 'Калмамат']))

// const task10 = (arr) =>{
//     return arr.map((el,idx)=>{
//         return el[el.length-1] + el.slice(1,-1) + el[0]
//     })
// }
// console.log(task10(['Баяман', 'Калмамат']))

// const task10 = (arr) =>{
//     return arr.map((el,idx)=>{
//         return `${el[el.length-1]}${el.slice(1,-1)}${el[0]}`
//     })
// }
// console.log(task10(['Баяман', 'Калмамат']))


// task11 11. Вам дан массив [true, '1234', 325].
//     Напишите функцию, которая проверяет, все ли элементы массива относятся к одному типу данных.


// не сделано!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const task11 = (arr)=>{
//     return arr.reduce((acc,el,idx)=>{
//         if(idx !== arr.length-1){
//             return acc && typeof el === typeof arr[idx + 1]
//         }
//
// return acc
//     },true)
//
// }
// console.log(task11([1234, true, 1234]))

// task 12 12. Вам дана строка 'тестинг'. Ваша задача - вернуть средний символ слова. Если длина слова нечетная,
// верните средний символ. Если длина слова четная, вернуть 2 средних символа.
// const getMiddle = (str)=> {
//     let findStart = Math.floor(str.length / 2)
//     if (str.length % 2 === 0) {
//         return str.slice(findStart-1,findStart+1)
//
//     }
//         return str.slice(findStart,findStart+1)
//
//
// }
// console.log(getMiddle("testingghy"))


// task 13 13. Вам дан массив с числами [5, -3, 13, -7, 45]. Верните сумму всех положительных чисел.


// const task13= (arr)=>{
//     return arr.reduce((acc,el)=>{
//         if(el>0) {
//             return acc + el
//         }
//         return acc
//     },[])
// }
// console.log(task13([5, -3, 13, -7, 45]))


// task 14 14. Вам дан массив с числами [5, -54, 13, -7, 45, -15, -34].
//     Верните сумму всех отрицательных чисел, которые больше 10.

//
// const task14= (arr)=>{
//     return arr.reduce((acc,el)=>{
//         if(el<-10) {
//             return acc + el
//         }
//         return acc
//     },0)
// }
// console.log(task14([5, -54, 13, -7, 45, -15, -34]))


//
// task15 15. Вам дан массив с числами [1, 65, 13 , 30, 100]
// - все числа - доллары. Вам нужно обменять эти доллары по курсу сома и вывести все числа в сомах.


// const task15= (arr)=>{
//     return arr.map((el)=>{
//        let som = 75
//             return `${el * som}s`
//
//     })
// }
// console.log(task15([1, 65, 13 , 30, 100]))

// task16 16. Вам дан массив со строками
//     ['Оскар встретил Баямана за углом и вышел из угла с Калмаматом'].
//     Выведите каждый нечетный индекс в строке в верхнем регистре.

// const task16 = (arr)=>{
//     return arr.map((el)=>{
//         return el.split("")
//             .map((item,idx)=> idx % 2 === 0 ? item : item.toUpperCase())
//             .join("")
//
//
//     })
// }
// console.log(task16(["Оскар", "встретил", "Баямана", "за углом"]))

// task 17 17. Вам дан массив с строками ['Оскар', 'Баяман', 'Калмамат']. Добавьте к каждой строке нумерацию.

// const task17 = (arr)=>{
//     return arr.map((el,idx)=>{
//         return `${idx+1}. ${el}`
//     })
//
// }
// console.log(task17(['Оскар', 'Баяман', 'Калмамат']))

// task18 18. Вам дан массив с числами [2,456,6,8]. Напишите функцию ,
//     которая вставляет дефис (-) между каждыми двумя четными числами. Например, если вы принимаете 025468, на выходе должно быть 0-254-6-8.

// const evenIdx = (arr)=>{
//      return arr.reduce((acc,el,idx)=>{
//          if(arr[idx] % 2 === 0 && arr[idx+1] % 2 === 0  ) {
//              return acc + `${el}-`
//          } {
//              return  acc + el
//          }
//     },"")
// }
// console.log(evenIdx([2,456,6,8,12,11,12,4,6]))


// task19 19. Вам дан массив с числами. Узнайте сколько элементов с начала массива надо сложить,
//     чтобы в сумме получилось больше 10-ти.
// не сделано!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const evenIdx = (arr)=>{
//     return arr.reduce((acc,el,idx)=>{
//         if(acc + el < 10){
//         el.length
//         }
//
//     },0)
// }
// console.log(evenIdx([1,2,4,5,9,5]))

// 20. Вам дан массив с числами [5,15,315,2,13,20,9]. Посчитайте среднее арифметическое чисел в массиве.



// const task20 = (array)=>{
//     return array.reduce((acc,el)=>{
//         return acc + el / array.length
//     },0)
// }
// console.log(task20([5,15,315,2,13,20,9]))



