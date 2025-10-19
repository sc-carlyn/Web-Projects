const input = document.getElementById("gorev");
const liste = document.getElementById("liste");
const ekleBtn = document.getElementById("ekleBtn");

ekleBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  
  li.addEventListener("click", () => {
    li.classList.toggle("tamamlandi");
  });
  
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  liste.appendChild(li);
  input.value = "";
});
