"use strict";
const addBtn = document.querySelector(".push");
addBtn.addEventListener("click", () => {
  if (document.querySelector(".newtask input").value.length == 0) {
    alert("Please Enter a Task.");
  } else {
    document.querySelector(".tasks").innerHTML += `
    <div class="task">
          <span id='taskname'>${
            document.querySelector(".newtask input").value
          }</span>
          
          <button class='delete'>
              <i class="mdi mdi-delete-outline"></i>
          </button>
      </div>`;

    const currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    const tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector(".newtask input").value = "";
  }
});
