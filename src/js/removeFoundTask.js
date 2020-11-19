/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const allTasksList = document.querySelector('.all_Tasks_list');

const removeFoundTask = function () {
  const foundElements = [...allTasksList.querySelectorAll('.foundTask')];
  if (foundElements !== null) {
    for (const element of foundElements) {
      element.remove();
    }
  }
  return null;
};

export default removeFoundTask;
