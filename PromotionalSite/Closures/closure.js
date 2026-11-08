const trueOrFalse = () => {
    let value = false;
    return ()=>{
        value = !value;
        // console.log(value);
        return value
    } 
};

const toggleVisible = trueOrFalse();

const parent = document.querySelector('.parent');
parent.addEventListener('click', () => {
    const child = document.querySelector('.child');
    
    
    !toggleVisible() ? child.style.visibility = "hidden" :  child.style.visibility = "visible";
})

