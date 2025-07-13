document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const lastModifiedEl = document.getElementById("lastmodified");
  if (lastModifiedEl) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedEl.textContent = lastModifiedDate.toLocaleDateString(undefined, { dateStyle: "full" });
  }
});

const nav = document.querySelector("header nav");
const toggleBtn = document.getElementById("toggle");

if (nav && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}