const todoForm = document.getElementById("todo-form");
const todoListDiv = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input:first-child");

const TODO_LIST = "todoList";
let todoList = [];


const saveTodos = () => {
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
}
const deleteTodo = (event) => {
    const li = event.target.parentNode;
    todoList = todoList.filter(x => x.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}
const paintTodo = (todo) => {
    const li = document.createElement("li");
    li.id = todo.id;

    const span = document.createElement("span");
    span.innerText = todo.text;
    todoListDiv.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "REMOVE";
    deleteBtn.addEventListener("click", deleteTodo)

    li.appendChild(span);
    li.appendChild(deleteBtn);    
}
const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    todoList.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodoList = localStorage.getItem(TODO_LIST);

if (savedTodoList !== null) {
    const parsedTodoList = JSON.parse(savedTodoList);
    todoList = parsedTodoList;
    todoList.forEach(paintTodo);
} 
