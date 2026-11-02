const main = document.querySelector('.main');

const MasterFunction = (links, headingText) => {
    
    const makeHeading = () => {
        const heading = document.createElement('h1');
        heading.innerText = headingText;
        heading.className = "headingText"
        main.append(heading);
    }
    const makeNavBar = () => {
        const nav = document.createElement('nav');
        nav.className = "nav";
        main.append(nav);
        for(const items of links){
            const anchor = document.createElement('a');
            anchor.className = "links";
            anchor.setAttribute('href', items.link);
            anchor.innerText = items.text;
            nav.append(anchor)
            if(items.link !== "#"){
            anchor.setAttribute('target', "_blank");
            } 
        }
}
makeNavBar();
makeHeading();

};
const links = [
    {link: "#", text: "Home"},
    {link: "#", text: "About"},
    {link: "#", text: "Contact"},
    {link: "https://mrmike525.github.io/MyLatestProjects_8_19_26/", text: "MyStory"},

]
MasterFunction(links, "Electric Wizardy Repair");

const regexArrayAlpha = ["foo", "moo", "coo", "doo", "poo", "loo", "boo", "hoo"];

for(const items of regexArrayAlpha){
    if(/[fcl]oo/.test(items)){
        console.log(items)
    }
}

const regexArrayZulu = [
    834, 
    519, 
    4874, 
    5, 
    89, 
    45687, 
    25, 
    645
];

for(const items of regexArrayZulu){
    if(/^[0-9]{3}$/.test(items)){
        console.log("Result Zulu:",items)
    }
}

const regexArrayYankee = [
   "lion",
   "tiger",
   "leopard",
   "fox",
   "Kangaroo",
   "bat",
   "mouse",
   "cuckoo",
   "deer"
];

for(const items of regexArrayYankee){
    if(/^[a-z]{4,6}$/.test(items)){
        console.log("Result Yankee:",items)
    }
}
for(const items of regexArrayYankee){
    if(/^[^l].*r$/.test(items)){
        console.log("Result Quebec:",items)
    }
}

// ^ designates the beginning
// $ designates the end (in result Zulu)
// a{m} represents exactly 'm' repitions of whatever immediately precedes this, i.e. 'a'
// a{m, n} represents at least 'm' and at most 'n' repititions of whatever immediatley precedes this, i.e. 'a'