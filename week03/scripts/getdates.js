document.addEventListener("DOMContentLoaded", () => {
  // Footer date and last modified date
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();  // Set the current year
  }

  const lastModifiedEl = document.getElementById("lastmodified");
  if (lastModifiedEl) {
    const lastModifiedDate = new Date(document.lastModified);  // Get the last modified date
    lastModifiedEl.textContent = lastModifiedDate.toLocaleDateString(undefined, { dateStyle: "full" });  // Format the date
  }

  // Mostrar clima actual
  const weatherEl = document.getElementById("weather");
  if (weatherEl) {
    const lat = -0.25;
    const lon = -78.5;

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,apparent_temperature&timezone=auto`)
      .then(response => response.json())
      .then(data => {
        const current = data.current;

        const temperature = current.temperature_2m;
        const wind = current.windspeed_10m;
        // const windChill = current.apparent_temperature;
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
        const condition = mapWeatherCode(current.weathercode);

        weatherEl.innerHTML = `
          <strong>Temperature:</strong> ${temperature} °C<br>
          <strong>Conditions:</strong> ${condition}<br>
          <strong>Wind:</strong> ${wind} km/h<br>
          <strong>Wind Chill:</strong> ${windChill.toFixed(2)} °C
        `;
      })
      .catch(error => {
        console.error("Weather fetch error:", error);
        weatherEl.textContent = "Weather data unavailable.";
      });
  }

  // Función para traducir el código climático a texto
  function mapWeatherCode(code) {
    const conditions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      80: "Rain showers",
      95: "Thunderstorm"
    };
    return conditions[code] || "Unknown";
  }
});