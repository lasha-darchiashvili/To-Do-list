// adding task using insertAdjacentHTML

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const task = document.querySelector(".text").value;
//   console.log(task);
//   const taskText = document.querySelector(".taskText");
//   const tasks = document.querySelector(".tasks");
//   const text = `
//     <div class="task">
//     <input type="task-text" class="task-text" value="${task}" readonly />
//     <button class="edit button">EDIT</button>
//     <button class="delete button">DELETE</button>
//     </div>`;
//   tasks.insertAdjacentHTML("beforeend", text);
// });

// focusing on task adding field
window.addEventListener("load", function () {
  document.querySelector(".text").focus();
});

// event
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const task = document.querySelector(".text").value;
  const tasks = document.querySelector(".tasks");
  const popup = document.querySelector(".popup");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");
  console.log(popup.classList);

  // activating popup in case of submiting empty form
  if (!task) {
    popup.style.display = "block";
    overlay.classList.add("active");
    const close = document.querySelector(".close-popup");
    close.addEventListener("click", function () {
      popup.style.display = "none";
      overlay.classList.remove("active");
    });

    return;
  }

  // creating task div element
  let task_el = document.createElement("div");
  task_el.classList.add("task");
  tasks.append(task_el);

  // creating task input element
  let input_el = document.createElement("input");
  input_el.classList.add("task-text");
  input_el.setAttribute("type", "text");
  input_el.setAttribute("readonly", true);
  input_el.setAttribute("value", `${task}`);
  task_el.append(input_el);

  // creating task edit button element
  let edit_el = document.createElement("button");
  edit_el.classList.add("edit", "button");
  edit_el.innerText = "EDIT";
  task_el.append(edit_el);

  //   creating task delete button element
  let delete_el = document.createElement("button");
  delete_el.classList.add("delete", "button");
  delete_el.innerText = "DELETE";
  task_el.append(delete_el);

  // edit event
  edit_el.addEventListener("click", () => {
    if (edit_el.innerText.toLowerCase() == "edit") {
      const end = input_el.value.length;
      input_el.setSelectionRange(end, end);

      input_el.removeAttribute("readonly");
      input_el.focus();
      edit_el.innerText = "SAVE";
    } else {
      input_el.blur();
      edit_el.innerText = "EDIT";
      input_el.setAttribute("readonly", true);
    }
  });

  // delete event
  delete_el.addEventListener("click", () => {
    task_el.remove();
  });

  //   clearing task input
  document.querySelector(".text").value = "";
});
