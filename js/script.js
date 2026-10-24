document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const promoButton = document.querySelector("#promoButton");

  if (promoButton) {
    promoButton.addEventListener("click", () => {
      promoButton.textContent = "Beli 1 gratis 1!";
      console.log("Promo Kophie berhasil ditampilkan.");
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");

  if (toggle && menu) {
    const wide = window.matchMedia("(min-width: 42rem)");

    function setOpen(open) {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    wide.addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }
});