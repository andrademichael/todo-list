//backend

function Task(description, doneness) {
  this.description = description;
  this.doneness = false;
};



Task.prototype.finish = function() {
  return this.textInput;
}

//   this.doneness = true;
//   ("#doneList").text(this.description);
//   ("#toDoList").slice(this, this+1);
// };
function resetField() {
  $("inputText").text("");
}

//frontend


$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    var addItem = $("#inputText").val();
    console.log(addItem);
    newTask = new Task(addItem, false);
    console.log(newTask);
    console.log(newTask.description);
    $("ul#toDoList").append("<li class='item'>" + newTask.description + "</li>")

    $(".item").last().click(function() {
      // $(".item").hide();
      newTask.doneness = true;
      console.log(newTask.doneness);
      $("#doneList").append("<li>" + newTask.description + "</li>");
      $(".item").last().hide();
      $("#toDoList").slice(this, this+1);

    });
    resetField();

  });

});
