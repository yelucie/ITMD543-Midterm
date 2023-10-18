document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");

    // Color-Picker in HTML section
    const colorPicker = document.getElementById('color-picker');
    const coloredBox = document.querySelector('#html .bonus');

    colorPicker.addEventListener('input', function () {
        coloredBox.style.backgroundColor = colorPicker.value;
    });
});
