function convert() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerText = `${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}
