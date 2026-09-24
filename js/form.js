const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  preview.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `Telepon: ${data.get("telepon")}`,
    `Paket / Layanan: ${data.get("paket")}`,
    `Topik: ${data.get("topik")}`,
    `Waktu: ${data.get("waktu")}`,
    `Pesan: ${data.get("pesan")}`,
  ].join("\n");
});