$(document).ready(function () {
  let add = $('#add-group');
  let name = $('.group-name');
  let container = $('.group-column-header');
  console.log('dddd')
  let tasksList = $('.tasks')
  let countTaskGroup = 0;

  add.on('click', function () {
    if(name.val()){
      $(".group-column").append("<div class='tasks'><h1>"+name.val()+"</h1><input class='tasks-name'></input><button class='add-task'>ADD</input></div>");
    } else {
      alert('Please insert group name')
    }
    let gorup_id  = tasks.length
    addTask.onclick = function() {
      this.newTask(group_id)
    };
    if (tasks.length>1){
      let x,y, newx, newy,move
      console.log('ddd',$(tasks))
      $(tasks).on('mousedown',function(el){
        if (el.target.className =='new-task'){
          move=true;
        }
      })
      $(tasks).on('onmouseup',function(el){
        if (el.target.className =='new-task'){
          move=false;
        }
      })
      $(tasks).on('mousemove',function(el){
        if(move){
         if (el.target.className =='new-task') {
            console.log('k',el.target)
            x = el.offsetX;
            y = el.offsetY;
            console.log('x',x)
            newx = el.pageX - x;
            newy = el.pageY - y;
            console.log('x',newx)
            this.style.left = newx + 'px';
            this.style.top = newy + 'px';
          }
        }
       
      });
    }
  });
  let tasks = $(".tasks")
  let listName = $('.tasks-name');
  newTask (group_id) {
    if(listName.val()){
      let newTask = document.createElement("input");
      newTask.className = "new-task";
      newTask.setAttribute("value",listName.val()); 
      newTask.setAttribute("type", 'button');
      newTask.setAttribute("data-id",tasks.length++);
        this.parentElement.append(newTask);
      } else {
        alert('Please insert task name')
      }
  };
})