console.log('d')

console.log('v')

const getTodos = async ()=>{
    const response = await fetch("/todos/todos.json")
    const data =  await response.json()
    console.log(data)

}

getTodos()

console.log('d')
// fetch("/todos/todos.json").then((response)=>{
//     console.log(response)
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })