// Welcome user
const userConfirmed = confirm('Welcome on Lucie\'s Midterm Project. \nAre you ready to continue?') ?
    alert('Great! Let\'s dive into this.') : alert('Goodbye then... Actually, we\'ll still check this out!');

document.addEventListener("DOMContentLoaded", (evt) => {
    console.log("DOM fully loaded and parsed");

    // Dark Mode for the page
    const darkModeToggle = document.getElementById("darkModeToggle");
    
    darkModeToggle.addEventListener("change", () =>
        darkModeToggle.checked ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    );

    // Color-Picker in HTML section
    const colorPicker = document.getElementById('color-picker');
    const coloredBox = document.querySelector('#html .bonus');

    colorPicker.addEventListener('input', () =>
        coloredBox.style.backgroundColor = colorPicker.value
    );

});