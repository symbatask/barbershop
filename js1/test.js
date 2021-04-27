const task = (arr)=>{
    return arr.reduce((acc,el)=>{
        return acc + el
    },0)
}
console.log(task([5,15,315,2,13,20,9]))
console.log(task([15,315,2,13,20,9]))
console.log(task([315,2,13,20,9]))


const task2 = (arr)=>{
    return arr.map((el)=>{
        return el + el
    })
}
console.log(task2([315,64,75,43,65,63]))
console.log(task2([64,75,43,65,63]))
console.log(task2([75,43,65,63]))


const task4 = (arr)=>{
    return arr.filter((el,idx)=> {
        return arr.indexOf(el) === arr.lastIndexOf(el)

    })
}
console.log(task4([55,44,55,44,49,54]))
console.log(task4([44,55,44,55,67,76]))
console.log(task4([55,44,55,44,90,100]))


const task3 = (arr)=>{
    return arr.reduce((acc,el,idx)=>{
        if(arr.indexOf(el) === idx){
         return [...acc,el]
        }return acc
    },[])
}
console.log(task3([55,44,55,44,49]))
console.log(task3([44,55,44,55,67]))
console.log(task3([55,44,55,44,90]))





