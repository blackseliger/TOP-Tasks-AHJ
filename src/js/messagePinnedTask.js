const messagePinnedTask = document.querySelector('.messagePinnedTask');
const pinnedTaskTable = document.querySelector('.pinnedTasks');

const messagePinnedAddHidden = function () {
  if (messagePinnedTask.classList.contains('messagePin_hidden') === false) {
    messagePinnedTask.classList.add('messagePin_hidden');
  }
};

const messagePinnedRemoveHidden = function () {
  const pinnedTasks = [...pinnedTaskTable.querySelectorAll('.pinnedTask')];
  if (pinnedTasks.length <= 0) {
    if (messagePinnedTask.classList.contains('messagePin_hidden')) {
      messagePinnedTask.classList.remove('messagePin_hidden');
    }
  }
};

export { messagePinnedRemoveHidden, messagePinnedAddHidden };
