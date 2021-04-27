// task 1 1. Выведите столбец чисел от 1 до 50.

// let result = []
// for  (let i = 0; i< 20; i++){
//     result[i] = i+1
// }
// console.log(result)
//
// task 2 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.

// let result = []
// for  (let i = 0; i< 10; i++){
//     result[i] = "x"
// }
// console.log(result)


// task 3 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.

// let array = [5, 3, 1, 2, 7]
// let result = []
// for  (let i = 0; i<array.length; i++){
//     result[i] = array[i]
// }
// console.log(result)

// task 4 4. Вам дан массив с элементами [5, 2, 1, 2].
//     С помощью цикла for найдите произведение элементов этого массива.

// let array = [5, 2, 1, 2]
//
// let result = 1
// for  (let i = 0; i<array.length; i++){
//     result = array[i] * result
// }
// console.log(result)
//
// task 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.


// for(let i = 0; i < 101; i = i +1){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// task 6 С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let result = 1
// for(let i = 0; i < 101; i = i +1){
//     if(i % 2 === 0){
//        result = result + i
//     }
// }
// console.log(result)

// task  7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
//     найдите сумму элементов этого массива. Запишите ее в переменную result.

// let array = [2, 4, 5, 6, 8]
//
// let result = 0
// for  (let i = 0; i<array.length; i++){
//     result = array[i] + result
// }
// console.log(result)

// task 8 8. Вам дан массив [3, 4, 6, 12, 3, 5].
//     С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
//     которые больше 3-х, но меньше 10.
//
// let array = [3, 4, 6, 12, 3, 5]
//
// let result = []
// for  (let i = 0; i<array.length; i++){
//     if(array[i]>3 && array[i]<10){
// result = [...result,array[i]]
//     }
// }
//
// console.log(result)


// task 9 Вам дан массив с числами.
//     Числа могут быть положительными и отрицательными.
//     Найдите сумму положительных элементов массива.

// let array = [-3, 4, -6, 12, 3, 5]
//
// let result = []
// for  (let i = 0; i<array.length; i++){
//     if(array[i]>0){
// result = [...result,array[i]]
//     }
// }
//
// console.log(result)

// task 10 Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if
//     проверьте есть ли в массиве элемент со значением,
//     равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

//
// let array = [5, 1, 3, 7, 6, 15, 3, 20]
//
// let result = []
// for  (let i = 0; i<array.length; i++){
//     if(array[i]===4){
//
//         result = "есть"
//         break
//     }
//     else {
//         result = "нет"
//     }
//
// }
// console.log(result)

// task 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
//     Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.


//
// let array = [10, 20, 30, 40, 135, 2000]
// for  (let i = 0; i<array.length; i++){
//     const firstNum = String(array[i])[0]
// if(firstNum === "1"|| firstNum === "2"||firstNum === "5" )
// {
//     console.log(array[i])
// }
// }




// task 12 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
// let str = ""
// for  (let i = 0; i<array.length; i++){
// if(i===array.length-1){
//     str = str + "-" + array[i] + "-"
// }
// else{
//     str = str + "-" + array[i]
// }
//
// }
//
// console.log(str)

// task 13 Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится?
//     Посчитайте количество итераций,
//     необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.

//
// let n=1000
// let result = 0
// while (n>50){
//     n=n/2
//     result++
// }
// console.log(result)

// task 14 Вам дан массив с числами [1, 2, 3, 7, 6, 9].
//     Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let array = [1, 2, 3, 7, 6, 9]
//
// let result = 0
// for  (let i = 0; i<array.length; i++){
//     result = (array[i] + result)/2
// }
// console.log(result)

// task 15 Вам дан массив с числами [1, 2, 3, 4, 5].
//     С помощью цикла найдите сумму квадратов элементов этого массива.


// let array = [1, 2, 3, 4, 5]
//
// let result = 0
// for  (let i = 0; i<array.length; i++){
//     result = array[i]**2 + result
// }
// console.log(result)

// task 16 Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
//     С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let array = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
//
// let result = []
// for  (let i = 0; i<array.length; i++){
//     if(array[i]>0 && array[i]<10){
//
//         result = [...result,array[i]]
//     }
//
// }
// console.log(result)

// task 17 Создайте переменную с пустым массивом,
//     заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

// let result = []
// for  (let i = 0; i< 10; i++){
//     result = [...result,Math.floor(Math.random()*10)]
// }
// console.log(result)

// task 18 Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// task 19 Вам дан массив  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
//     Создайте цикл, который выводит нечетные числа, которые больше 10.

// let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
//
// let result = []
// for  (let i = 0; i<array.length; i++){
//     if(array[i] % 2 !== 0 && array[i]<10){
//
//         result = [...result,array[i]]
//     }
//
// }
// console.log(result)

// task 20 Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.


// let str = 'jzvzszrzpz'
// let result = ""
// for  (let i = 0; i<str.length; i++){
//     if(i%2===0){
//         result = result+str[i]
//     }
//     else{
//         result = result+str[i].toUpperCase()
//     }
// }
// console.log(result)


////////////////////////////////////////////////////////