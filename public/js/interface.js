//Problem: User interaction doesn't provide desired results.
//Solution: Add behaviour so the user can manage daily task.

var taskInput = document.getElementByID('new-task'); // new-task
var addButton; // first button
var incompleteTasksHolder = document.getElementByID('incomplete-tasks'); // incomplete-tasks
var completedTasksHolder = document.getElementByID('completed-tasks'); // completed-tasks

//Add a new task
var addTask = function() {
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
  //When the user clicks on the Delete button
    //Remove the parent list item from the url
};

//Mark a task as complete
var taskCompleted = function() {
  //When the Checkbox is checked
    //Append the task list item to the #completed-tasks
};

//Mark a task as incomplete
var taskIncomplete = function() {
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
};
