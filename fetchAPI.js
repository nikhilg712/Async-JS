console.log("d");

console.log("v");

const getTodos = async () => {
  const response = await fetch("/todos/todoss.json");
  if(response.status===200){
    const data = await response.json();
    return data;
  }
  else{
    throw new Error('Cannot fetch')
  } 
  
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {console.log(err.message)});

console.log("d");
// fetch("/todos/todos.json").then((response)=>{
//     console.log(response)
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })
