let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const deviceSelectionNxtBtn = document.getElementById('deviceSelectionNxtBtn')
const deviceSelectionDropDown = document.getElementById('deviceSelectionDropDown')
const audioSelectionDropDown = document.getElementById('audioSelectionDropDown')

deviceSelectionNxtBtn.addEventListener('click', function() {
    console.log(deviceSelectionDropDown)
    if (deviceSelectionDropDown.value == '') {
        alert("Bitte wähle dein genutztes Gerät aus");
    }
    else if (audioSelectionDropDown.value == '') {
        alert("Bitte Ausgabegerät auswählen");
    }
    else {
        nextSlide();
    }
})

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    function generateUniqueID() {
        const date = new Date();
        return date.getTime(); // Generates an ID based on the timestamp
    }

    const surveyIDField = document.getElementById('surveyID');
    surveyIDField.value = generateUniqueID(); // Sets the unique ID in the hidden input
});
