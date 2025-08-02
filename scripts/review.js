document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) : 0;
  count++;
  localStorage.setItem("reviewCount", count);

  const counterElement = document.getElementById("review-count");
  if (counterElement) {
    counterElement.textContent = `Reviews Completed: ${count}`;
  }

  // 🔽 Asegúrate de declarar esto antes de usarlo
  const container = document.getElementById("review-container");
  const selectedProduct = localStorage.getItem("reviewData");
  if (selectedProduct && container) {
    const data = JSON.parse(selectedProduct);
    container.innerHTML = `
      <h2>Review Summary</h2>
      <p><strong>Product:</strong> ${data.productName}</p>
      <p><strong>Rating:</strong> ${data.rating} star(s)</p>
      <p><strong>Useful Features:</strong> ${data.usefulFeatures.length > 0 ? data.usefulFeatures.join(", ") : "None"}</p>
      <p><strong>Installation Date:</strong> ${data.installationDate}</p>
      <p><strong>Written Review:</strong> ${data.writtenReview || "N/A"}</p>
      <p><strong>Name:</strong> ${data.reviewerName || "Anonymous"}</p>
    `;
  }
});
