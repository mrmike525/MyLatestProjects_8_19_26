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