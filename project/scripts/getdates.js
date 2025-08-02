document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // intercale the background color of sections
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    if (index === 0) return; // omit the first section

    if (index % 2 === 1) {   // If the index is odd, apply light gray; if even, white background
      section.style.backgroundColor = "#ffffff";
    } else {
      section.style.backgroundColor = "#f0f0f0";
    }
    section.style.margin = "0";
  });

  // Set the last modified date
  const lastModifiedEl = document.getElementById("lastmodified");
  if (lastModifiedEl) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedEl.textContent = lastModifiedDate.toLocaleDateString(undefined, { dateStyle: "full" });
  }
});