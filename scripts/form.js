const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById("product-name");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Event listener for product selection
productSelect.addEventListener("change", function () {
const selectedName = this.value;

    // search for the selected product
    const selectedProduct = products.find(p => p.name === selectedName);

    if (selectedProduct) {
        // Save to localStorage
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        console.log("Product saved to localStorage:", selectedProduct);
    }
});

// Event listener to handle form submission
const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const reviewData = {
        productName: document.getElementById("product-name").value,
        rating: document.querySelector('input[name="review-rating"]:checked').value,
        installationDate: document.getElementById("date-of-installation").value,
        usefulFeatures: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(cb => cb.value),
        writtenReview: document.getElementById("review-written").value,
        reviewerName: document.getElementById("name").value
    };

    // save the review data to localStorage
    localStorage.setItem("reviewData", JSON.stringify(reviewData));
    console.log("Datos de la reseña guardados en localStorage:", reviewData);

    // Redirect to the review page after saving
    window.location.href = this.action;
});