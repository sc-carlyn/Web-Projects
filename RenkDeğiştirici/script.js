const btn = document.getElementById("degistirBtn");
const kod = document.getElementById("renkKod");

function rastgeleRenk() {
  const renk = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = renk;
  kod.textContent = renk;
}

btn.addEventListener("click", rastgeleRenk);
rastgeleRenk();
