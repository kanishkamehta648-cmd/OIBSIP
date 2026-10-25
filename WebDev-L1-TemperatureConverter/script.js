
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");

const errorMessage = document.getElementById("error");
const results = document.getElementById("results");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

// Run the conversion when the button is clicked.
convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
    // Read the user's input.
    const rawTemperature = temperatureInput.value;
    const temperature = Number(rawTemperature);
    const unit = unitSelect.value;

    // Clear the previous error and hide old results.
    errorMessage.textContent = "";
    results.hidden = true;

    // Check whether the input is empty or invalid.
    if (
        rawTemperature.trim() === "" ||
        !Number.isFinite(temperature)
    ) {
        errorMessage.textContent = "Please enter a valid temperature.";
        return;
    }

    // Convert the input into Celsius first.
    let celsius;

    if (unit === "C") {
        celsius = temperature;
    } else if (unit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Check the absolute-zero limit.
    if (celsius < -273.15) {
        errorMessage.textContent =
            "This temperature is below absolute zero. Please enter a valid temperature.";
        return;
    }

    // Calculate the other units from Celsius.
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results rounded to two decimal places.
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;

    // Show the results only after validation succeeds.
    results.hidden = false;
}
