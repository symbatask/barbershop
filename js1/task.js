

// task-1 ###function###
//
// function checkVar(a){
//     if(a === 10){
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(checkVar(11))
// console.log(checkVar(10))
// console.log(checkVar(1))



// task-2 ####function####
// function difference(a,b) {
//     if (a > b) {
//         return 'a больше b'
//     }else if ( a < b) {
//         return 'a меньше b'
//     }
// }
// console.log (difference(50 , 100 ))
// console.log (difference(5 , 10 ))
// console.log (difference(9 , 5 ))


// task-3 ####function###
// function meaning(a){
//     if (a > 0 ) {
//         return 'positive'
//     }
//     if (a < 0 ) {
//         return "negative"
//     }
//     if (a === 0 ) {
//         return 'равно'
//     }
// }
// console.log(meaning(-2))
// console.log(meaning(2))
// console.log(meaning(0))


// task-4 #####function#####
// function remainder(number){
// if (number % 2 === 0 ) {
//     return "Четное число"
// } else  {
//     return "Нечетное число"
// }
// }
// console.log(remainder(-2))
// console.log(remainder(-3))
// console.log(remainder(-9))



// task-5 ####function#####
// function evenNumbers(a,b){
// if (a % b  === 0 ) {
//     return"Четное число"
// } else  {
//     return"Нечетное число"
// }
// }
// console.log(evenNumbers(10,2))
// console.log(evenNumbers(10,4))
// console.log(evenNumbers(10,8))



// task-6 #######function#####
// function typeOf(s){
//
// return s
//
// }
// console.log(typeOf(typeof  6))
// console.log(typeOf(typeof  "Kamil"))
// console.log(typeOf(typeof  false))





// task-7 #######function##########
// function trueFalse(a){
//     if (a > 1 && a < 9 ) {
//         return 'Верно'
//     } else {
//         return 'Неверно'
//     }
// }
// console.log(trueFalse(3))
// console.log(trueFalse(9))
// console.log(trueFalse(4))




// task-8 ######function######
// function task7(a){
// if (a === 3 || a === 7 ) {
//     return a + 7
// } else {
//     return a / 10
// }
// }
//
// console.log(task7(7))
// console.log(task7(57))
// console.log(task7(4))


// task-9 #####function######
// function task8(a,b){
// if (a <= 0 && b >= 5 ) {
//     return a + b
// } else {
//     return a - b
// }
// }
// console.log(task8(7,8))
// console.log(task8(10,14))
// console.log(task8(23,19))


// task-10
// function task10(a,b){
// if ((a >= 4 && a <= 10 ) || (b >= 7 && b <= 17)) {
//     return 'Верно'
// } else {
//     return'Неверно'
// }
// }
// console.log(task10(32,6))
// console.log(task10(17,1))
// console.log(task10(12,4))




// task-11 ####function#####

// function task11(month){
// if ((month > 0 && month <= 2) || month === 12){
//     return"winter"
// } else if (month > 2 && month <=5) {
//     return"spring"
// } else if (month > 5 && month <=8) {
//     return "summer"
// }
// else if (month > 8 && month <= 11) {
//     return "autumn"
// }
// else{
//     return "invalid value"
// }
// }
//
// console.log(task11(11))
// console.log(task11(1))
// console.log(task11(8))




// task-12 #####function#######

// function task12(day){
// if (day > 0 && day <= 10) {
//     return"first decade"
// } else if (day > 10 && day <=20) {
//     return "second decade"
// } else if (day > 20 && day <=31) {
//     return "third decade"
// }
// else{
//     return "invalid value"
// }
// }
//
// console.log(task12(12))
// console.log(task12(16))
// console.log(task12(27))



// task-13 #####function#####
//
//     function task13(a){
//
// if (a[0] == "1" || a[0] == "2" || a[0] == "3") {
//     return "да"
// } else  {
//     return "нет"
// }
//     }
//
// console.log(task13("12345"))
// console.log(task13("22345"))
// console.log(task13("32345"))
//
// // task 14 #######function#######
//
// // function task14(a){
//
// if(a >= 5 && a <= 20) {
//     return`Мне ${a} лет`
// }
// else if (a%10 <=4  && a%10 > 1) {
//     return `Мне ${a} года`
// }
// else if(a%10 === 1) {
//     return `Мне ${a} год`
// }
//
// else  {
//     return `Мне ${a} лет`
// }
//
// }
//
// console.log(task14(11))
// console.log(task14(17))
// console.log(task14(13))




// task15


// function task15(time){
// if (time > 0 && time <= 15) {
//     return "First quoter"
// } else if (time <= 30 && time >15) {
//     return "Second quoter"
// } else if (time <= 45 && time >30) {
//     return "Third quoter"
// }
// else if (time <= 60 && time >45) {
//     return "forth quoter"
// }
// else{
//     return "invalid value"
// }
// }
//
// console.log(task15(15))
// console.log(task15(34))
// console.log(task15(59))

// task16
// function task16(s){
// if(typeof s === "number"){
//     return "число"
// }
// else if (typeof s === "string"){
//     return "строка"
// }
// else {
//     return "булеан"
// }
// }
//
// console.log(task16(false))
//
// console.log(task16(1))
// console.log(task16("string"))





// task-1 function ###########
// function task1(task4){
//
// return task4.slice(0,5).length
//
// }
//
// console.log(task1("Nevis ITDB TECH"))

// console.log(task1("Nevis ITDB TEH"))
// console.log(task1("Nevis ITDB TEC"))

// task2

// function task2(str){
// return str.slice(11,18).toLowerCase()
// }
//
// console.log(task2('Максимально УЖАСНО'))
// console.log(task2('Максимально УЖАС'))

// console.log(task2('Максимально УЖС'))

// task 3
// function task3(str){
//
// return str.slice(11,18).toUpperCase()
// }
// console.log(task3('Максимально УЖАСНО'))
// console.log(task3('Максимально УЖАС'))

// task-4 #######function######
// function task4(str){
// return str.split('')
// }
// console.log(task4('Максимально Ужасно'))
// console.log(task4('Максимально Ужас'))


// task 5 function ############
// function task5(str){
// return str.split(' ')
//
// }
// console.log(task5('Максимально Ужасно переделывай'))
// console.log(task5('Максимально Ужасно пер'))

// task6
// function task6(str){
//  return str.slice(5,18)
//
// }
// console.log(task6('Максимально УЖАСНО'))
// console.log(task6('Максимально УЖ'))

// task7
// function task7(str){
// return str.charAt(12)
//
//
// }
// console.log(task7('Максимально Ужасно'))
// console.log(task7('Максимально Ужасн'))


// task8
// function task8(str,str2){
// return str.concat(str2)
//
// }
//
// console.log(task8('Максимально',' Ужасно'))
// console.log(task8('Максимально',' Ужсно'))

// task 9
// function task9(str){
// return str.slice(12,18)
//
// }
// console.log(task9('Максимально Ужасно'))
// console.log(task9('Максимально жасно'))

// task10


// function task10(str,symbol){
// if (str.indexOf(symbol) === -1){
//     return "встречается менее одного раза"
// } else if(str.indexOf(symbol) === str.lastIndexOf(symbol)){
//     return "встречается  1 раз"
// } else {
//     return "встречается более 1 раза"
// }
// }
//
// console.log(task10('Максимально Ужасно',"a"))
// console.log(task10('Максимально Ужасно',"h"))
// console.log(task10('Максимально Ужасно',"k"))

// task11
// function task11(str){
//
// return str.toUpperCase()
// }
// console.log(task11('Максимально Ужасно'))
// console.log(task11('Максимально Ужао'))
// console.log(task11('Максимально Уно'))

// task12
//
// function task12(str){
//
// return str.indexOf("а")
// }
// console.log(task12('Максимально Ужасно'))
// console.log(task12('Максимально Уж'))
// console.log(task12('Максльно Ужасно'))

// task13

// function task13(str){
// return [str.indexOf("о"),str.lastIndexOf("о")]
// }
//
// console.log(task13('Максимально Ужасно'))





// task14
// function task14(str) {
//     return str.slice(4, 7)
//
//
//
//
//
// }
// console.log(task14('aaa bbb ccc'))
//
// console.log(task14('a bbb ccc'))
// console.log(task14('aaa bbb s'))
//
// function task142(str) {
//
//
//
//     return str.substr(4,3)
//
//
// }
// console.log(task142('aaa bbb ccc'))
//
// console.log(task142('a bbb ccc'))
// console.log(task142('aaa bbb s'))
//
// function task142(str) {
//
//
//
//     return str.substring(4,9)
//
//
// }
// console.log(task142('aaa bbb ccc'))
//
// console.log(task142('a bbb ccc'))
// console.log(task142('aaa bbb s'))


// task15


// function task15(str){
// return str.replace(/-/g, "/")
//
// }
// console.log(task15('17-02-2021'))
// console.log(task15('17-0-2021'))
// console.log(task15('17-02-201'))




// task  16
// function task16(str){
// if(str.includes("в")){
//     return "Да"
// } else {
//     return "нет"
// }
// }
//
// console.log(task16('Максимально Ужасно'))

// console.log(task16('Максима Ужасно'))
// console.log(task16('Максимально Ужсно'))


// task 17


// function task17(str){
// if(str[0].toLowerCase() === str[str.length-1].toLowerCase()){
//     return "Совпадает"
// } else {
//     return "Не совпадает"
// }
// }
//
// console.log(task17('АаааааА'))
// console.log(task17('Ааааааb'))
// console.log(task17('Ааааааc'))


// task-18



// function task18(str,symbol){
//
// if(str.indexOf(symbol) < str.length/2  ){
//     return "В первой половине"
// } else {
//     return "Во второй половине"
// }
// }
//
// console.log(task18('Максимально',"л"))
// console.log(task18('Максимально',"l"))
// console.log(task18('Максимально',"m"))
// function getMiddle(str) {
//     if (str.length % 2 === 0) {
//         return str.slice(str.length / 2-1, str.length / 2+1)
//
//     } else {
//         return str.charAt(str.length / 2)
//
//     }
// }
// console.log(getMiddle("test"))
// let a = 3
// let b = 6
// let num = a + b
// let x = num/2
// let y = num % 2
// for (;x === 0;x++ ){
//     console.log(y)
// }

