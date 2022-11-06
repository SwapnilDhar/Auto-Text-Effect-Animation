const containerEl = document.querySelector('.container')
const careers = ["Front-End Dev", "Back-End Dev", "UI-UX", "Java Dev"]
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`
    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if (careerIndex === careerIndex.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400)
}
