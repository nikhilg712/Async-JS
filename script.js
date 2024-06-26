const getTodos = (resource) => {
  return new Promise((resolve,reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Couldn't fetch data");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

console.log(1);
console.log(2);

getTodos("todos/todos.json").then((data)=>{
    console.log(data)
    return getTodos("todos/todos1.json")
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
});

console.log(3);
console.log(4);
