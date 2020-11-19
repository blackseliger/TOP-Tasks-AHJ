const allTasksList = document.querySelector('.all_Tasks_list');



const addTasksAllList = function (text) {
  allTasksList.insertAdjacentHTML('beforeend', `<div class="pinnedTask">
    <div class="pinnedTaskName">
    <label>
          ${text}
         <input type="checkbox" class="pinned">
    </label>
    </div>
</div>`);
};

export default addTasksAllList;
