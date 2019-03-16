$(document).ready(function () {
  let add = $('#add-group');
  let name = $('.group-name');
  let container = $('.group-column-header');
  console.log('dddd')
  let tasksList = $('.tasks')
  let countTaskGroup = 0;
  $(function(){
        $.getJSON('tasks.json',function(data){
            console.log('success');
            $.each(data.task,function(i,task){
                $('.group-column-header').append('<input>'+task.name+'</input>');
            });
        }).error(function(){
            console.log('error');
        });
    });
  add.on('click', function () {
    if(name.val()){
      $(".group-column").append("<div class='tasks'><h1>"+name.val()+"</h1><input class='tasks-name'></input><button class='add-list'>ADD</input></div>");
    } else{
      alert('Please insert group name')
    }
  let tasks = $(".tasks")
  let addList = $('.add-list');
  let listName =$('.tasks-name');
  console.log('tasks',tasks, tasks.length)
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
  addList.on('click', function () {
    if(listName.val()){
      let newTask = document.createElement("input");
      newTask.className = "new-task";
      newTask.setAttribute("data-id",tasks.length++)
        this.parentElement.append(newTask);
      } else{
        alert('Please insert task name')
      }
   });
  });
})