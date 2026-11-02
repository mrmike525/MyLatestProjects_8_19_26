const images = 
[
    {id: 1, imageLocation: "./Photos/MikeProfessional.jpeg", title: "Me"},
    {id: 2, imageLocation: "./Photos/Family.jpeg", title: "Daughter, Fiance, & Me"},
    {id: 3, imageLocation: "./Photos/ShadowBox.jpeg", title: "Medals"},
    {id: 4, imageLocation: "./Photos/MeInZone.png", title: "Me in Baghdad Iraq"},
    
]

function extractData(id){
    const data = images.filter(item => item.id === id);
    const [justObject] = data
    return justObject
};

function setImage(data){
    
    const MikeContainer = document.body.querySelector('.MikeContainer');
    
    MikeContainer.style.backgroundImage = `url('${data.imageLocation}')`;
    const h3 = document.querySelector('.MikeContainer h3');
    h3.innerText = data.title

}



const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.addEventListener('click', (e) => {
    let [id] = e.target.id;
    const object = extractData(Number(id));
    try {
    setImage(object)
    } catch (error) {
        console.error("tried to set Image, Failed!")
    }
    
})



