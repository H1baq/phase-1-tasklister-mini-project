document.addEventListener("DOMContentLoaded", () => {
  const form=document.getElementById('create-task-form');
  form.addEventListener('submit', function(e){e.preventDefault()
      addtask()
  })
  function addtask() {
      const text=document.getElementById('new-task-description');
      const tasktext=text.value.trim();
      
      const li = document.createElement('li');
      li.textContent=tasktext;
      const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.addEventListener('click', function () {
  const newTaskText = prompt("Edit your task:", li.firstChild.textContent); 
  if (newTaskText !== null && newTaskText.trim() !== '') {  
    li.firstChild.textContent = newTaskText.trim();  
  }
});

li.appendChild(editButton);  
      
      const deletebutton=document.createElement('button');
      deletebutton.textContent='x';
      deletebutton.addEventListener('click', function(){
          li.remove();
      })
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.addEventListener('change', function () {
        if (completeCheckbox.checked) {
          li.style.textDecoration = 'line-through';  
        } else {
          li.style.textDecoration = 'none';  
        }
      });
      li.insertBefore(completeCheckbox, li.firstChild);  
      li.appendChild(deletebutton)
      const tasklist=document.getElementById('tasks');
      tasklist.appendChild(li);
      
      text.value='';
  }
})