//when you load the site, it sets up the consts for DOM//
window.addEventListener("load", () => {
  const text = document.querySelector("#input-form-text");
  const form = document.querySelector("form");
  const container = document.querySelector(".container");
  //when you hit the submit button,, it will append the task into the container//
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (text.value == "") {
      alert("Please Enter Task"); //if you don't put a task in the input, it will alert you//
    } else {
      const task = text.value;
      // creates div class for task//
      const tasks = document.createElement("div");
      tasks.classList.add("task");
      container.appendChild(tasks);

      // creates a class to the actual div call called  "content"//
      const content = document.createElement("div");
      content.classList.add("content");
      tasks.appendChild(content);

      // The input box where you put your tasks in...(becomes the child of the content class)//
      const input_text = document.createElement("input");
      input_text.classList.add("input-text");
      input_text.type = "text";
      input_text.value = task;
      input_text.setAttribute("readonly", true); //You can only read//
      content.appendChild(input_text);

      //creates a div for the Add button (child of the task div)//
      const btn = document.createElement("div");
      btn.classList.add("btn");
      tasks.appendChild(btn);

      //for all of the buttons: Delete, Edit and Complete//
      const clear = document.createElement("button");
      clear.setAttribute("id", "done");
      clear.innerHTML = `<i class="fa-solid fa-check"></i>`;

      const edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

      const del = document.createElement("button");
      del.setAttribute("id", "del");
      del.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

      btn.appendChild(clear);
      btn.appendChild(edit);
      btn.appendChild(del);

      // on click for the complete button, it strikes out the task you completed//
      clear.addEventListener("click", () => {
        if (input_text.style.textDecoration == "none") {
          input_text.style.textDecoration = "line-through";
          tasks.style.backgroundColor = "#938f8f";
        } else {
          input_text.style.textDecoration = "none";
          tasks.style.backgroundColor = "#fff";
        }
      });
      // when you click edit, when you type it's supposed to turn red and allows you to edit text//
      edit.addEventListener("click", () => {
        if (
          input_text.style.color == "black" &&
          input_text.style.textDecoration == "none"
        ) {
          input_text.removeAttribute("readonly");
          input_text.style.color = "red";
          input_text.focus();
        } else {
          input_text.setAttribute("readonly", true);
          input_text.style.color = "black";
        }
      });
      //on click, clicking on the delete button will remove your task//
      del.addEventListener("click", () => {
        container.removeChild(tasks);
      });
      text.value = "";
    }
  });
});
