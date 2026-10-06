
const createAList = (heading = "The List!", ...liItems) => {
    const main = document.querySelector('.main');
    const id = () => Math.floor(Math.random() * 1000000)
    
    const listContainer = document.createElement('div');
    listContainer.className = "listContainer";
    const items = [];
    for (let values = 0; values < liItems.length; values++) {
        items.push({ id: id(), list: liItems[values] })
       
    }
    
    const ul = document.createElement('ul');
    ul.className = "mainList";
    main.append(listContainer);
    listContainer.append(ul);
    const listInput = document.createElement('input');
    listInput.className = "listInput";
    listContainer.append(listInput);
    const listButton = document.createElement('button');
    listButton.className = "listButton";
    listButton.innerText = "Add To List";
    listContainer.append(listButton);
    listButton.addEventListener('click', (e) => {

        items.push({ id: id(), list: listInput.value });
        render()
        
        const labelExists = () => {
            let listHead = listContainer.querySelector('h1');
            if (listHead === null) {
                const listLabel = document.createElement('h1');
                listLabel.innerText = heading;
                listLabel.className = "listLabel";
            listContainer.append(listLabel);
                } else {
                 return
            }
        }
        labelExists();
        

    });
    const render = () => {
        const liAll = ul.querySelectorAll('li');
        for (const eachItem of liAll) {
            eachItem.remove()
        };

        items.map((item) => {
            const li = document.createElement('li');
            li.innerText = item.list;
            li.id = item.id
            ul.append(li);
            
            li.addEventListener('click', (e) => {
                const target = e.target.id;
                const newItems = items.filter((targetId) => (targetId.id !== Number(target)));
                const itemsLength = items.length;
                for (let x = 0; x <= itemsLength; x++){
                    items.pop();
                    
                };
                items.push(...newItems);
                e.target.remove();
            })
        });
    }
}
createAList('ToDo');
createAList('TodoTwo');

const navSection = (links) => {
    const divCharlie = document.createElement('div');
    divCharlie.className = "divCharlie";
    document.body.append(divCharlie);
    const navBar = document.createElement('nav');
    navBar.className = "navBar";
    divCharlie.append(navBar);
    for (items of links) {
        const link = document.createElement('a');
        link.setAttribute('href', items.link);
        link.innerText = items.text;
        link.className = "nav-links"
        navBar.append(link);

    }

}
const linkArray = [
    { text: "Home", link: "#" },
    { text: "About", link: "#" },
    { text: "Contact", link: "#" },
    { text: "My Story", link: "#" },
]
const regexArray = [
    "foo",
    "moo",
    "coo",
    "doo",
    "poo",
    "loo",
    "boo",
    "hoo"
]
const regexArrayBeta = [
    "joo",
    "boo",
    "koo",
    "loo",
    "woo",
    "moo",
    "zoo",
    "coo",

]
const regexArrayCharlie = [
    "joo",
    "boo",
    "Koo",
    "Loo",
    "woo",
    "moo",
    "zoo",
    "coo",

]


navSection(linkArray);


for (const items of regexArray) {
    if (/[fcl]oo/.test(items)){
        console.log("Solution 1:",items)
    }
}

for (const items of regexArray) {
    if (/[fcdplb]oo/.test(items)){
        console.log("Solution 2:",items)
    }
}

for (const items of regexArray) {
    if (/[^mh]oo/.test(items)){
        console.log("Solution 3:", items)
    }
}

for (const items of regexArrayBeta) {
    if (/[j-m]oo/.test(items)){
        console.log("Solution 4:", items)
    }
}

for (const items of regexArrayBeta) {
    if (/[j-mz]oo/.test(items)){
        console.log("Solution 5:", items)
    }
}

for (const items of regexArrayCharlie) {
    if (/[j-mJ-Mz]oo/.test(items)){
        console.log("Solution 6:", items)
    }
}
const regexArrayDelta = [
    "xxx.yy",
    "xx.yyyy",
    "x.yy",
    "xy",
    "xxyy",
    "yyxx",
    "yx",
    "yxxx",

]
for (const items of regexArrayDelta) {
    if (/x*\.y*/.test(items)){
        console.log("Solution 7:", items)
    }
}

const regexArrayEcho = [
    "x#y",
    "x:y",
    "x.y",
    "x&y",
    "x%y",
]

for (const items of regexArrayEcho) {
    if (/x[#:.]y/.test(items)) {
        console.log("Solution 8:", items)
    }
}

const regexArrayFoxtrot = [
    "x#y",
    "x:y",
    "x^y",
    "x&y",
    "x%y",
]

for (const items of regexArrayFoxtrot) {
    if (/x[#:\^]y/.test(items)) {
        console.log("Solution 9:", items)
    }
}

const regexArrayGulf = [
    "x#y",
    "x\\y",
    "x^y",
    "x&y",
    "x%y",
]

for (const items of regexArrayGulf) {
    if (/x[#\\\^]y/.test(items)) {
        console.log("Solution 10 :", items)
    }
}

const regexArrayHotel = [
    "foo bar baz",
    "bar foo baz",
    "baz foo bar",
    "bar baz foo",
    "foo baz bar",
    "baz bar foo"
]

for (const items of regexArrayHotel) {
    if (/^foo.*/.test(items)) {
        console.log("Solution 11 :", items)
    }
}

const regexArrayIndia = [
    "foo bar baz",
    "bar foo baz",
    "baz foo bar",
    "bar baz foo",
    "foo baz bar",
    "baz bar foo"
]

for (const items of regexArrayIndia) {
    if (/.*bar$/.test(items)) {
        console.log("Solution 12 :", items)
    }
}

const regexArrayJuliet = [
    "foo",
    "foo bar",
    "baz foo",
    "foo bar baz",
    "baz bar foo",
]

for (const items of regexArrayJuliet) {
    if (/^foo$/.test(items)) {
        console.log("Solution 13 :", items)
    }
}

const regexArrayKilo = [
    "834",
    "519",
    "4874",
    "5",
    "89",
    "45687",
    "25",
    "645"
]

for (const items of regexArrayKilo) {
    if (/a*/.test(items)) {
        console.log("Solution 14 :", items)
    }
}

const regexArrayLima = [
    "ha",
    "hahahahaha",
    "hahaha",
    "hahahaha",
    "haha",
    "",
    "hahahahahaha",
    "hahahahahahahaha",
    "hahahahahahahahaha"
]

for (const items of regexArrayLima) {
    if (/^(ha){4,9}$/.test(items)) {
        console.log("Solution 15 :", items)
    }
}

const regexArrayMike = [
    "fooaaaabar",
    "fooabar",
    "hahaha",
    "hahahaha",
    "haha",
    "",
    "hahahahahaha",
    "hahahahahahahaha",
    "hahahahahahahahaha"
]

for (const items of regexArrayMike) {
    if (/^(ha){4,9}$/.test(items)) {
        console.log("Solution 16 :", items)
    }
}
// regex notes . = any character including space between them, 
// * = any characters preceding the star, 
// [] character class container, 
// ^ negates the character class [j-m]: value range in askii value order
// ^$*.[]()\ these characters should be escaped with with a backslash 
// if top of slash leans to right it is a forward slash;
// if top of slash leans to left it is a backslash;
//   "\" backslash;
//  "/" forward slash
// . inside class container intreprets the period as a literal period instead of a wildcard so there is no need to escape, however there are some symbols that have special meaning inside class containers.. so they will need to be escaped inside class containers
// ^ is a placeholder that signifies beginning of a line. the interpretation of ^ differs within square brackets and outside of it. Inside square brackets [], ^ stand for negation, Outside, it is a placeholder for beginning of line.
// $ is a placeholder that signifies the end of a line **put $ at the end!



// ---------The extended set vs (the upper regular set)-----
//  + One or more occurrences of the character that precedes this + symbol
// ? Zero or one occurence of the character that precedes this question mark
// pat1|pat2 Matches either the pattern pat1 or the pattern pat2
// () divides patterns into groups
// {m} Exactly 'm' occurences of whatever precedes
// {m,n} Atleast m and at most n occurences of whatever precedes Only one of m, n is mandatory. Other can be left blank.
// parenthesis () are used as a way to treat as a single entity


// chatgpt notes.. that "clarifies my notes"
// .  = any single character, except line breaks by default
// *  = zero or more of the previous token
// +  = one or more of the previous token
// [] = character class: match one character from this set
// [j-m] = character range
// [^mh] = anything except m or h
// ^  = start of string; inside [] at the beginning, means negation
// $  = end of string
// \  = escape character in regex
// /  = wraps a regex literal in JavaScript
// \. = literal period
// \\ = literal backslash
// . inside [] is already literal