/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
import addTasksAllList from './addTasksAlllist';
import { hiddenAllTasks, showAllTasks } from './hiddenTasks';
import messageAllTaskAction from './messageAllTAsk';
import { messagePinnedAddHidden, messagePinnedRemoveHidden } from './messagePinnedTask';
import removeFoundTask from './removeFoundTask';

const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks_control');
const allTasksList = document.querySelector('.all_Tasks_list');
const pinnedTasks = document.querySelector('.pinnedTasks');

const commonTaskArray = [];


document.addEventListener('DOMContentLoaded', () => {
  messageAllTaskAction('show');
})

tasksControl.addEventListener('submit', (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  removeFoundTask();
  showAllTasks();
  if (!(tasksInput.value === '')) {
    const tasksInputValue = tasksInput.value.toLowerCase();
    if (commonTaskArray.includes(tasksInputValue) === false) {
      addTasksAllList(tasksInputValue);
      messageAllTaskAction('remove');
      commonTaskArray.push(tasksInputValue);
    }
  }
  element.reset();
});

tasksControl.addEventListener('input', (e) => {
  e.preventDefault();
  const inputText = tasksInput.value.toLowerCase();
  const checkOldTask = commonTaskArray.find((element) => element.includes(inputText));
  if (checkOldTask !== undefined) {
    hiddenAllTasks();
    messageAllTaskAction('remove');
    allTasksList.insertAdjacentHTML('beforeend', `<div class="pinnedTask foundTask">
      <div class="pinnedTaskName">
      <label>
            ${checkOldTask}
           <input type="checkbox" class="pinned">
      </label>
      </div>
  </div>`);
  } else {
    messageAllTaskAction('show');
    removeFoundTask();
  }
});

allTasksList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('pinned')) {
    const pinnedCheckBox = target.closest('.pinnedTask').querySelector('.pinned');
    if (pinnedCheckBox.checked === true) {
      const pinnedElement = target.closest('.pinnedTask');
      const pinnedText = pinnedElement.innerText.trim();
      const pinnedIndex = commonTaskArray.indexOf(pinnedText);
      if (pinnedIndex > -1) {
        commonTaskArray.splice(pinnedIndex, 1);
      }
      pinnedTasks.insertAdjacentElement('beforeend', pinnedElement);
      messagePinnedAddHidden();
    }
  }
});

pinnedTasks.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('pinned')) {
    const pinnedCheckBox = target.closest('.pinnedTask').querySelector('.pinned');
    if (pinnedCheckBox.checked === false) {
      const pinnedElement = target.closest('.pinnedTask');
      const pinnedText = pinnedElement.innerText;
      commonTaskArray.push(pinnedText);

      allTasksList.insertAdjacentElement('beforeend', pinnedElement);
      messagePinnedRemoveHidden();
    }
  }
});
