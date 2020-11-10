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
    <label>
          ${tasksInput.value}
         <input type="checkbox" class="pinned">
    </label>
    </div>
</div>`);
    element.reset();
    if (warningMessage.classList.contains('warning_hidden') === false) {
      warningMessage.classList.add('warning_hidden');
    }
  } else if (warningMessage.classList.contains('warning_hidden')) {
    warningMessage.classList.remove('warning_hidden');
  }
  if (messageAllTask.classList.contains('messageAllTask_hidden') === false) {
    messageAllTask.classList.add('messageAllTask_hidden');
  } else if (messageAllTask.classList.contains('messageAllTask_hidden')) {
    messageAllTask.classList.remove('messageAllTask_hidden');
  }
});

allTasksList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('pinned')) {
    const pinnedCheckBox = target.closest('.pinnedTask').querySelector('.pinned');
    if (pinnedCheckBox.checked === true) {
      const pinnedElement = target.closest('.pinnedTask');
      pinnedTasks.insertAdjacentElement('beforeend', pinnedElement);
    }
  }
  if (allTasksList.querySelector('.all_Tasks') === null) {
    if (messageAllTask.classList.contains('messageAllTask_hidden')) {
      messageAllTask.classList.remove('messageAllTask_hidden');
    };
  };
});

pinnedTasks.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('pinned')) {
    const pinnedCheckBox = target.closest('.pinnedTask').querySelector('.pinned');
    if (pinnedCheckBox.checked === false) {
      const pinnedElement = target.closest('.pinnedTask');
      allTasksList.insertAdjacentElement('beforeend', pinnedElement);
    }
  }
  if (messageAllTask.classList.contains('messageAllTask_hidden') === false) {
    messageAllTask.classList.add('messageAllTask_hidden');
  }
})


