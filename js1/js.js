// task1 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
//
// let  keys = Object.keys(obj)
// console.log(keys.length)

// task 2 2. Создайте объект  obj = {a: 1, b: 2, c: 3}.
//     Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(obj.c)
// console.log(obj["c"])

// task 3 3. Создайте объект заработных плат obj = {Ширин: '1000',
//     Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// let obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: '200'
//
// }
// console.log(obj.Atai)
// console.log(obj.Shirin)


// task 4 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Измените зарплату Атая на 500.
//
// let obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: '200'
//
// }
// obj.Atai = "500"
// console.log(obj.Atai)

// task 5 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Добавьте к объекту ключ Медет со значением 1500.
//
// let obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: '200'
//
// }
// obj.Medet = "1500"
// console.log(obj)

// task 6 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Выbведите значение ключа salary в консоль.

// let obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: {
//         salary: '500'}
//
// }
// console.log(obj.Atai.salary)

// task 7 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели
// (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let day = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
//
// }
// console.log(day["4"])


// task8   8. Пусть теперь номер дня недели хранится в переменной day,
//     например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let day = 3
// let obj = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
//
// }
// console.log(obj[day])

// task 9 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//         Получите все ключи объекта.

// obj = {
//         Shirin: '1000',
//         Aizhan:'500',
//         Atai: {
//         Salary: '500'
//               }
//     }
// let keys = Object.keys(obj)
// console.log(keys)

// // 10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: {
//         Salary: '500'
//     }
// }
// let values = Object.values(obj)
// console.log(values)

// task 11 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.

// obj = {
//     Shirin: '1000',
//     Aizhan:'500',
//     Atai: {
//         Salary: '500'
//     }
// }
// let entries = Object.entries(obj)
// console.log(entries)

// task 12 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// const task12 = (obj) => {
//    if ( Object.keys(obj).length % 2 ===0){
//        return 0
//    } return 1
//
// }
// console.log(task12({name: "Igor"}))

// task 13 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
//     Выведите все id в консоль через map.

// const task13 = (arr) =>{
//     return arr.map((el)=>{
//         return el.id
//     })
// }
// console.log(task13([{id: 3}, {id: 5}, {id: 6}, {id: 7}]))


// task14
// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}.
// Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.


//     let obj = {
//         name: 'Igor'
//     }
//     obj.age = 25
// obj.name="Azat"
// console.log(obj)



// task15  15. Вам дан объект product = {
//     name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// const task15 = (obj) => {
//
//    if ( product.price>100){
//        return product.price - product.price * 0.1
//    } return product.price - product.price * 0.07
//
// }
// console.log(task15(product = {name: "headphones", price: 100, discount: 0 }))