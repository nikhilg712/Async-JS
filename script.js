const getTodos = (resource, callback) => {
  return new Promise((resolve,reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("Couldn't fetch data", undefined);
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

console.log(1);
console.log(2);

getTodos("todos/todos.json", (err, data) => {
  console.log(data);
  getTodos("todos/todos1.json", (err, data) => {
    console.log(data);
  });
});

console.log(3);
console.log(4);
