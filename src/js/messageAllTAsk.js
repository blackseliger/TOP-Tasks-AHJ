const messageAllTask = document.querySelector('.messageAllTask');

const messageAllTaskAction = function (action) {
  if (action.toLowerCase() === 'show') {
    if (messageAllTask.classList.contains('messageAllTask_hidden')) {
      messageAllTask.classList.remove('messageAllTask_hidden');
    }
  } else if (action.toLowerCase() === 'remove') {
    if (messageAllTask.classList.contains('messageAllTask_hidden') === false) {
      messageAllTask.classList.add('messageAllTask_hidden');
    }
  }
};

export default messageAllTaskAction;
