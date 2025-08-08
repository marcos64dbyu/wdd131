document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Intercalate the background color of sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    if (index === 0) return; // omit the first section
    section.style.backgroundColor = index % 2 === 1 ? "#ffffff" : "#f0f0f0";
    section.style.margin = "0";
  });

  // Set the last modified date
  const lastModifiedEl = document.getElementById("lastmodified");
  if (lastModifiedEl) {
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedEl.textContent = lastModifiedDate.toLocaleDateString(undefined, {
      dateStyle: "full"
    });
  }

  // Function to update the image based on screen width
  function updateDesignToolImage() {
    const designToolImage = document.querySelector(".design-tool-image");
    if (!designToolImage) return;

    if (window.innerWidth < 801) {
      designToolImage.src = "images/design-tools-mobile.jpg";
      designToolImage.alt = "Design Tool Image - Mobile";
    } else {
      designToolImage.src = "images/design-tools.jpg";
      designToolImage.alt = "Design Tool Image";
    }
  }

  // Run once on load
  updateDesignToolImage();

  // Run on window resize
  window.addEventListener("resize", updateDesignToolImage);
});

// Event listener to handle form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create the contact data object
  const contactData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
    reviewerName: document.getElementById("name").value // Optional extra property
  };

  // Get existing contact data from localStorage, or initialize empty array
  const existingData = JSON.parse(localStorage.getItem("contactDataList")) || [];

  // Add new data to the array
  existingData.push(contactData);

  // Save the updated array back to localStorage
  localStorage.setItem("contactDataList", JSON.stringify(existingData));

  // Log for debugging
  console.log("Form data saved in localStorage:", contactData);

  // Show success message
  alert("Form data saved in localStorage.");
});

