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

  const filterOldBtn = document.getElementById("filter-old");
  if (filterOldBtn) {
    filterOldBtn.addEventListener("click", () => {
      filterTemplesByOld();
      filterOldBtn.classList.add("active");
      filterNewBtn.classList.remove("active");
      filterLargeBtn.classList.remove("active");
      filterSmallBtn.classList.remove("active");
    });
  }

  const filterNewBtn = document.getElementById("filter-new");
  if (filterNewBtn) {
    filterNewBtn.addEventListener("click", () => {
      filterTemplesByNew();
      filterOldBtn.classList.remove("active");
      filterNewBtn.classList.add("active");
      filterLargeBtn.classList.remove("active");
      filterSmallBtn.classList.remove("active");
    });
  }

  const filterLargeBtn = document.getElementById("filter-large");
  if (filterLargeBtn) {
    filterLargeBtn.addEventListener("click", () => {
      filterTemplesByLarge();
      filterLargeBtn.classList.add("active");
      filterOldBtn.classList.remove("active");
      filterNewBtn.classList.remove("active");
      filterSmallBtn.classList.remove("active");
    });
  }

  const filterSmallBtn = document.getElementById("filter-small");
  if (filterSmallBtn) {
    filterSmallBtn.addEventListener("click", () => {
      filterTemplesBySmall();
      filterSmallBtn.classList.add("active");
      filterOldBtn.classList.remove("active");
      filterNewBtn.classList.remove("active");
      filterLargeBtn.classList.remove("active");
    });
  }

  const showAllBtn = document.getElementById("show-all"); 
  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      showAllTemples();
      filterOldBtn.classList.remove("active");
      filterNewBtn.classList.remove("active");
      filterLargeBtn.classList.remove("active");
      filterSmallBtn.classList.remove("active");
    });
  }

  // Display temples on page load
  displayTemples(temples);
});

// Toggle navigation menu for smaller screens
const nav = document.querySelector("header nav");
const navul = document.querySelector("header nav ul");
const toggleBtn = document.getElementById("toggle");
const titleEl = document.getElementById("title");

if (nav && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    titleEl.classList.toggle("hide");
    toggleBtn.style.marginLeft = nav.classList.contains("show") ? "0" : "auto";
    navul.style.width = nav.classList.contains("show") ? "80vw" : "100%";
  });
}

// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Guayaquil Ecuador Temple",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 45000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
  },
  {
    templeName: "Quito Ecuador Temple",
    location: "Quito, Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  },
];

// Function to create a temple card
function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.classList.add("temple-card");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName}`;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><span class="label">Location:</span> ${temple.location}</p>
    <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
    <p><span class="label">Size:</span> ${temple.area} sq ft</p>
  `;

  card.appendChild(caption);
  card.appendChild(img);

  return card;
}

// Function to display temples
function displayTemples(temples) {
  const container = document.querySelector(".res-grid");
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Create and append temple cards
  temples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Function to filter temples by old
function filterTemplesByOld() {
  const filteredTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear < 2000;
  });
  displayTemples(filteredTemples);
}

// Function to filter temples by new
function filterTemplesByNew() {
  const filteredTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(",")[0]);
    return dedicatedYear >= 2000;
  });
  displayTemples(filteredTemples);
}

// Function to filter temples by large
function filterTemplesByLarge() {
  const filteredTemples = temples.filter(temple => {
    return temple.area >= 100000;
  });
  displayTemples(filteredTemples);
}

// Function to filter temples by small
function filterTemplesBySmall() {
  const filteredTemples = temples.filter(temple => {
    return temple.area < 100000;
  });
  displayTemples(filteredTemples);
}

// Function to show all temples
function showAllTemples() {
  displayTemples(temples);
}