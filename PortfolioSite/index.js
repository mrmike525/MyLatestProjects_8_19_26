

const projectButton = document.querySelector('.projectButton');
const projectDiv = document.querySelector('.projectDiv')
projectButton.addEventListener('click', (e) => {
    projectDiv.classList.toggle("hidden")
})