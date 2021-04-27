const task = (arr)=>{
    return arr.filter((el,idx)=>{
        return arr.indexOf(el)===idx
    })
}
console.log(task([true,false,true,false]))



const task2 = (title,hello,arr)=>{
   return arr.filter(el=>el[title].includes(hello))
}
console.log(task2("title","hello",[{title:"hello world",rating:1},{title:"hellol world",rating:5},{title:"new world",rating:0}]))