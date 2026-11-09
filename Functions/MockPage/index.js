function showOrHide() {
    let value = false;
    return ()=> value = !value 
}

const visible = showOrHide();
const projectButton = document.querySelector(".projects");
const projectDiv = document.querySelector(".projectDiv");
projectButton.addEventListener('click', () => {
    projectDiv.style.visibility = visible() ? "visible" : "hidden";
    console.log("clicked")
})
