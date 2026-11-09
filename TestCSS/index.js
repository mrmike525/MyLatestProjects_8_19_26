const parentDiv = document.querySelector(".parentDiv");



function createClickHandler() {
    let toggleValue = false;
    const childDiv = document.querySelector('.childDiv');
    
    const toggle = (value = true) => {
    return !value
}

const changeVisibility = (value) => {
    if (value === true) {
        return "visible"
    } else {
        return "hidden"
    }
}
    return () => {
        toggleValue = toggle(toggleValue);

        childDiv.style.visibility = changeVisibility(toggleValue);
        console.log(toggleValue);
    };
}
parentDiv.addEventListener("click", createClickHandler());

function state(){
    let hidden = true;
    let num = 0;
    console.log(hidden);
    return () => {
        hidden = !hidden;
        console.log(hidden);
        hidden ? smiley.style.visibility = "hidden" : smiley.style.visibility = "visible";
    }

}
const smiley = document.createElement('span');
smiley.innerText = "😍";
smiley.style.position = "absolute";
smiley.style.left = "50%";
smiley.style.top = "30%";
smiley.style.fontSize = "50px";

const newButton = document.createElement('button');
const body = document.body;
body.append(smiley)
newButton.innerText = "Click Me!";
body.append(newButton);
newButton.style.position = "absolute";
newButton.style.top = "50vh";
newButton.addEventListener('click', state());

function trueFalse(){
    let value = false;
    return () => {
        value = !value
        console.log(value)
    }
}
const toggle = trueFalse();
const divAlpha = document.createElement('div');
divAlpha.innerText = "😵‍💫";
divAlpha.style.position = "absolute";
divAlpha.style.left = "50vw";
divAlpha.style.top = "50vh";
// body.append(trueFalse() && divAlpha);
const buttonTrueFalse = document.createElement('button');
buttonTrueFalse.innerText = "TrueFalse";
buttonTrueFalse.style.position = "absolute";
buttonTrueFalse.style.left = "55vw";
buttonTrueFalse.style.top = "55vh";
body.append(buttonTrueFalse);
body.append(divAlpha)
buttonTrueFalse.addEventListener('click', () => {
    toggle();
    toggle ? console.log("yes") : console.log("no")
    // toggle ? body.append(divAlpha) : divAlpha.remove();
})

const showApple = () => {
    let value = true;
    return () => value = !value;
};

const Apple = showApple();
const emoji = "🍎";
    const span = document.createElement('span');
    span.innerText = emoji;

const runApple = () => {
    
    
    if (Apple()) {
        body.append(span);
        
        console.log("Apple added");
    } else {
        span.remove();
        console.log("Apple removed");
    }
    
};
    const interval = setInterval(runApple, 1500)

