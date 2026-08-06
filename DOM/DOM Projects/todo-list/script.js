const inp = document.querySelector("input");
const btn = document.querySelector("#add");

const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;
  
   todoBox.innerHTML += ` <div class="li">
                <h3>${value}</h3>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn delete">Delete</button>
                </div>
            </div>`

  inp.value = "";

  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove();
    });
  });

  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const h3 = btn.parentElement.previousElementSibling;
      const newValue = prompt("Edit your todo:", h3.textContent);
      if (newValue !== null && newValue.trim() !== "") {
        h3.textContent = newValue;
      }
    });
  });
});
