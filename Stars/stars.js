const body = document.body;
const name = document.createElement('p');
name.innerText = "Michael Lange";
const nameBox = document.createElement('div');
nameBox.className = "nameBox"
body.append(nameBox)
name.className = "name";
name.style.color = "grey"
nameBox.append(name)


const colorCycle = [
    "Crimson",
    returnRandomColor,
    "Gold",
    returnRandomColor,
    "OrangeRed",
    returnRandomColor,
    "MediumOrchid",
    returnRandomColor,
    "MediumBlue",
    returnRandomColor,
    
    
]

const cycleColors = (element) => {
    let index = 0;
    setInterval(() => {
        if (index === colorCycle.length) {
            index = 0
        }
        if (colorCycle[index] === returnRandomColor){
            element.style.color = colorCycle[index]();
            index++;
            console.log(index)
            return
        }
        element.style.color = colorCycle[index];
        index++
        console.log(index)
    }, 500)
}
cycleColors(name);

function randomColor(){
    return Math.floor(Math.random() * 256)
}
function returnRandomColor(){
    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    console.log(color)
    return color
}