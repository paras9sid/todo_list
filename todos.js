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
    console.log(`${newTodo}: Added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter index to delete todo!"));
    // const index = parseInt(indexStr);
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok , deleted: ${deleted[0]}`);
    } else {
      console.log("Unknow Index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("Quit the app");
