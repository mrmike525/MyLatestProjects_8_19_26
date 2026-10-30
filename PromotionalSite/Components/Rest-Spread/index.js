function Results(...params) {
    return params.map((num)=>(Math.floor((num-32) * 5/9)))
}

function SpreadToPage(numOfDivs, ...links) {
    links.map(item => {
        const body = document.querySelector('body');
        for (let divs = 0; divs < numOfDivs; divs ++) {
            const div = document.createElement('div');
            body.append(div);
        }
        const div = document.querySelectorAll('div');
        const link = document.createElement('a');
        link.innerText = item;
        link.setAttribute('href', "#");
        for (let items of div) {
            items.append(link)
        }
        
    })
}

const nightToggle = (value = true) => {
    // console.log(!value)
    return !value
    
    
}

const button = document.createElement('button');
button.innerText = "Toggle";
button.setAttribute('value', "true")
const body = document.body;
body.append(button)


const addToggle = () => {
    let value = true
    button.addEventListener('click', (event) => {
        
        const interval = setInterval(() => {
            if (value === true) {
                body.style.backgroundColor = "red";
                value = !value
            }
            else if (value === false) {
                body.style.backgroundColor = "blue"
                value = !value
            }
            // console.log(value)
            addSmiley();
        }, 100);
        setTimeout(() => {
            clearInterval(interval)
        }, 10000)
    })
}
addToggle();

const addSmiley = () => {
    const smiley = document.createElement('span');
    smiley.innerText = "😵‍💫";
    smiley.style.fontSize = "60px";
    smiley.style.fontWeight = "600"
    body.append(smiley)
    smiley.addEventListener('click', (e) => {
        e.target.remove();
    })
}
const clearPage = () => {
    const all = document.body.querySelectorAll('*');
    
    const filtered = [...all]
        const removeButton = filtered.filter(item => item.tagName !== "BUTTON") 
        // console.log(removeButton)
    
    for (items of removeButton) {
        items.remove()
    }
}
const allClear = document.createElement('button');
allClear.innerText = "All Clear"
body.append(allClear);
allClear.addEventListener('click', (e) => {
    body.style.backgroundColor = "white"
    clearPage();
})
// clearPage();

const makeArray = (...array) => {
    return array
}

const numbers = makeArray(1, 2, 3, 4)
console.log(numbers)
const music = makeArray("Metallica", "Five Finger Death Punch", "Monster Magnet");
const MikesFavoriteFoods = makeArray("Tacos", "Burgers", "Omelettes");
console.log(MikesFavoriteFoods)
console.log(MikesFavoriteFoods.filter(item => item !== "Tacos"));

