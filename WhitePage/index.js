const text = document.querySelector('.text');
const button = document.querySelector('.toggle');
const root = document.querySelector('.root');
let state = false;
const toggleYell = () => {
    
    const toggleState = ()=>state = !state;
    toggleState();
    if(state === true){
        text.innerText = text.innerText.toUpperCase();
        
    } else if(state === false){
        text.innerText = text.innerText.toLowerCase();
    }
}
button.addEventListener('click', (e) => {
    toggleYell()
})

const createAList = (...value) => {
    const listContents = [...value];
    const ul = document.createElement('ul');
    ul.className = "unordered-list";
    const ulContainer = document.createElement('div')
    ulContainer.className = "ulContainer"

    root.append(ulContainer);
    ulContainer.append(ul)
    listContents.map((item)=>{
        const li = document.createElement('li');
        li.innerText = item
        ul.append(li);
        
    })
}
createAList('help', 'me', 'spongeBob');
createAList('please');
createAList('your My ONLY HOPE!')