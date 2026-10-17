const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoButton.textContent = "Beli 1 gratis 1!";
    console.log("Promo Kophie berhasil ditampilkan.");
  });
}