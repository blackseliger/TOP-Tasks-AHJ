/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
import addTasksAllList from './addTasksAlllist';
import { hiddenAllTasks, showAllTasks } from './hiddenTasks';
import { messagePinnedAddHidden, messagePinnedRemoveHidden } from './messagePinnedTask';
import removeFoundTask from './removeFoundTask';

const tasksInput = document.querySelector('.tasks__input');
const tasksControl = document.querySelector('.tasks_control');
const allTasksList = document.querySelector('.all_Tasks_list');
const pinnedTasks = document.querySelector('.pinnedTasks');

const commonTaskArray = [];

tasksControl.addEventListener('submit', (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  removeFoundTask();
  showAllTasks();
  if (!(tasksInput.value === '')) {
    const tasksInputValue = tasksInput.value.toLowerCase();
    if (commonTaskArray.includes(tasksInputValue) === false) {
      addTasksAllList(tasksInputValue);
      commonTaskArray.push(tasksInputValue);
      console.log(commonTaskArray);
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
    allTasksList.insertAdjacentHTML('beforeend', `<div class="pinnedTask foundTask">
      <div class="pinnedTaskName">
      <label>
            ${checkOldTask}
           <input type="checkbox" class="pinned">
      </label>
      </div>
  </div>`);
  }
});

allTasksList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('pinned')) {
    const pinnedCheckBox = target.closest('.pinnedTask').querySelector('.pinned');
    if (pinnedCheckBox.checked === true) {
      const pinnedElement = target.closest('.pinnedTask');
      const pinnedText = pinnedElement.innerText;
      console.log(pinnedText);
      const pinnedIndex = commonTaskArray.indexOf(pinnedText);
      console.log(commonTaskArray.includes(pinnedText));
      const test1 = commonTaskArray.findIndex((element) => element === `${pinnedText}`);
      console.log(test1);
      console.log(commonTaskArray);
      // Постоянно возвращает -1 или false. Не могу понять, что тут не так :\
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
