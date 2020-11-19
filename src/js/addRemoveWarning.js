const warningMessage = document.querySelector('.warning');

const warningsAddRemove = function () {
  if (warningMessage.classList.contains('warning_hidden') === false) {
    warningMessage.classList.add('warning_hidden');
  } else if (warningMessage.classList.contains('warning_hidden')) {
    warningMessage.classList.remove('warning_hidden');
  }
};


export default warningsAddRemove;
