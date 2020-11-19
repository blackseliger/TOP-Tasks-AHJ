/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const allTasksList = document.querySelector('.all_Tasks_list');

const hiddenAllTasks = function () {
  const hiddenTasks = [...allTasksList.querySelectorAll('.pinnedTask')];
  for (const element of hiddenTasks) {
    element.classList.add('hiddenTasks');
  }
};

const showAllTasks = function () {
  const hiddenTasks = [...allTasksList.querySelectorAll('.pinnedTask')];
  for (const element of hiddenTasks) {
    if (element.classList.contains('hiddenTasks')) {
      element.classList.remove('hiddenTasks');
    }
  }
};

export { hiddenAllTasks, showAllTasks };
