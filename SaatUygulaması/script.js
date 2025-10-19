function saatGuncelle() {
  const simdi = new Date();
  const saat = simdi.getHours().toString().padStart(2, '0');
  const dakika = simdi.getMinutes().toString().padStart(2, '0');
  const saniye = simdi.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").textContent = `${saat}:${dakika}:${saniye}`;
}

setInterval(saatGuncelle, 1000);
saatGuncelle();
