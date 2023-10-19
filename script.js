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

    // Quote generator in JavaScript section
    const showQuoteButton = document.getElementById('showQuote');
    const quoteBox = document.querySelector('.quote-box');
    const quoteText = document.getElementById('quoteText');

    const quotes = [
        "We cannot solve problems with the kind of thinking we employed when we came up with them. \n— Albert Einstein",
        "Learn as if you will live forever, live like you will die tomorrow. \n— Mahatma Gandhi",
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. \n— Mark Twain",
        "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. \n— Eleanor Roosevelt",
        "When you change your thoughts, remember to also change your world. \n— Norman Vincent Peale",
        "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. \n— Walter Anderson",
        "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. \n— Diane McLaren",
        "Education is the most powerful weapon which you can use to change the world. \n— Nelson Mandela"
    ];

    showQuoteButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
        quoteBox.style.display = 'block';
    });

});