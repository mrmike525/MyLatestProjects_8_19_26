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
    "Gold",
    "OrangeRed",
    "MediumOrchid",
    "MediumBlue"
]

const cycleColors = (element) => {
    let index = 0;
    setInterval(() => {
        if (index === colorCycle.length) {
            index = 0
        }
        element.style.color = colorCycle[index];
        index++
        console.log(index)
    }, 2000)
}
cycleColors(name);