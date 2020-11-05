const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks_control');
const allTasksList = document.querySelector('.all_Tasks_list');
const warningMessage = document.querySelector('.warning');
const pinnedTasks = document.querySelector('.pinnedTasks');
const messageAllTask = document.querySelector('.messageAllTask');

tasksControl.addEventListener('submit', (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  if (!(tasksInput.value === '')) {
    allTasksList.insertAdjacentHTML('beforeend', `<div class="pinnedTask">
    <div class="pinnedTaskName">
        ${tasksInput.value}
    </div>
    <a href="#" class="taskPin">&times;</a>
</div>`);
    element.reset();
    if (warningMessage.classList.contains('warning_hidden') === false) {
      warningMessage.classList.add('warning_hidden');
    }
  } else if (warningMessage.classList.contains('warning_hidden')) {
    warningMessage.classList.remove('warning_hidden');
  }
});

allTasksList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('taskPin')) {
    const pinnedElement = target.closest('.pinnedTask');
    pinnedTasks.insertAdjacentElement('beforeend', pinnedElement);
  }; 
});