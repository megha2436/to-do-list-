document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  const list = document.querySelector("#taskList");

  button.addEventListener("click", function () {
    const task = input.value.trim();
    if (task !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      list.appendChild(listItem);
      input.value = "";
    }
  });
});
