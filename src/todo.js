// Load the page, Define the add button
window.onload = function(){
  addButton = document.getElementById("add-item");
  newTask = document.getElementById("new-task-field");
  addButton.onclick = function(){
    console.log("Click");
    // Get the value of the input field
    addedTask = newTask.value;
    toDoApp.createTask(addedTask);
  };
};

// Cloning todos
function create(parent){
  var Clone = function(){};
  Clone.prototype = parent;
  return new Clone();
}

// Contains methods for To Do App
var toDoApp = {
  toDoList: [],
  createTask: function(addedTask){
    var newToDoItem = create(toDoItem);
    newToDoItem.setTaskText = addedTask;
    console.log(newToDoItem);
    this.toDoList.push(newToDoItem);
    this.appendTask(newToDoItem);
  },
  appendTask: function(newToDoItem){
    if (newToDoItem.setTaskText !== ""){
      toDoItem.render(newToDoItem);
      document.getElementById("todo-items").appendChild(liTag);
    }
  }
};

var toDoItem = {
  completed: false,
  render: function(){
    var liTag = document.createElement("li");
    liTag.innerText = this.setTaskText;
    return liTag;
  }
};


