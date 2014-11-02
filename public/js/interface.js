//Problem: User interaction doesn't provide desired results.
//Solution: Add behaviour so the user can manage daily task.

var taskInput = document.getElementById('new-task'); // new-task
var addButton = document.getElementsByTagName('button')[0]; // first button
var incompleteTasksHolder = document.getElementById('incomplete-tasks'); // incomplete-tasks
var completedTasksHolder = document.getElementById('completed-tasks'); // completed-tasks

//Add a new task
var addTask = function() {
  console.log('Add task...');
  //When the user clicks on the button
  //Create a new list item with the text from #new-task:
    //input (checkbox)
    //label
    //input (text)
    //button.edit
    //button.delete
    //Each elements, needs modified and appended
};

//Edit an existing task
var editTask = function() {
  console.log('Edit task...');
  //When the user clicks on the Edit button
    //if the class of the parent is .editMode
      //Switch from editMode
      //label text become the input's value
    //else
      //Switch to editMode
      //input value becomes the label's text
    //Toggle .editMode on the parent
};

//Delete an existing task
var deleteTask = function() {
  console.log('Delete task...');
  //When the user clicks on the Delete button
    //Remove the parent list item from the url
};

//Mark a task as complete
var taskCompleted = function() {
  console.log('Complete task...');
  //When the Checkbox is checked
    //Append the task list item to the #completed-tasks
};

//Mark a task as incomplete
var taskIncomplete = function() {
  conosle.log('Task incomplete...');
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log('bind list item');
  //select taskListItem's children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  
};

//Set the click handler to the addTask function
addButton.onclick = addTask;

//cycle over incompletedTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
};

//cycle over completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item's children (taskIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
};
