// alert("To do app work started");

let input = prompt("What would you like to do?");
const todos = ["Prepare projects", "Apply for jobs related to skills"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*****************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*****************");
  } else if (input === "new") {
    const newTodo = prompt("Ok,What is new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
//   }else if(){

//   }
  input = prompt("What would you like to do?");
}
console.log("Quit the app");
