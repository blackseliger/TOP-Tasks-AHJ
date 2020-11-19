
const messageAllTask = document.querySelector('.messageAllTask');

const messageAllTaskHidden = function () {
  if (messageAllTask.classList.contains('messageAllTask_hidden') === false) {
    messageAllTask.classList.add('messageAllTask_hidden');
  } else if (messageAllTask.classList.contains('messageAllTask_hidden')) {
    messageAllTask.classList.remove('messageAllTask_hidden');
  }
};


export default messageAllTaskHidden;