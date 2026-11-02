const jeopardy = new Audio("./assets/Jeopardy.mp3");
function createTable( 
    category = "catTest", 
    value, 
    dollar) {

        // select body
    const body = document.body;
    body.classList.add("body")
    
    // creating structures of the table seperated by elements
    const tableDiv = document.createElement('div');
    tableDiv.classList.add("tableDiv");
    
    const table = document.createElement('table');
    table.classList.add("table");
    
    const caption = document.createElement('caption');
    caption.classList.add("caption");
    caption.innerText = "Jeopardy Clone";

    const tableHead = document.createElement('thead');
    caption.classList.add("tableHead");
    
    const headerRow = document.createElement('tr');
    caption.classList.add("headerRow");
    // assembly of the top of the table with category headers && thead
        body.append(tableDiv);
        tableDiv.append(table);
        table.append(caption);
        table.append(tableHead);
        tableHead.append(headerRow)
    // this needs to be in a loop to create one th for each category
    for(let x = 0; x <= category.length; x++){
        const categoryHeads = document.createElement('th');
        if (category[x] === undefined) {
            continue
        } else {
            categoryHeads.innerText = category[x].title;
            categoryHeads.classList.add("categoryHeads");
            headerRow.append(categoryHeads);

        }
    }

// begin clue building and tableBody
    const tableBody = document.createElement('tbody');
    tableBody.classList.add("tableBody");
    table.append(tableBody);
    //another loop for the amount of clues(question,answers,points object for each category) (outerLoop);
    for(let y = 0; y < value.length; y++){
        const clueRow = document.createElement('tr');
        clueRow.classList.add("clueRow");
        tableBody.append(clueRow)
        // InnerLoop  
    for(let x = 0; x < category.length; x++){
        const clue = document.createElement('td');
        clue.classList.add("clue");
        clue.innerText = dollar + value[y];
        clue.classList.add(`${category[x].title}`);
        clue.classList.add(`id:${category[x].id}`);
        
        clueRow.append(clue);
        
        }
    } 
    
    // bottom of the table separated by elements with playerOne and playerTwoScores in footer
    const tableFoot = document.createElement('tfoot');
    tableFoot.classList.add("tableFoot");

    const footerRow = document.createElement('tr');
    footerRow.classList.add("footerRow");

    const playerOneScore = document.createElement('th');
    playerOneScore.classList.add("playerOneScore")
    playerOneScore.setAttribute("colspan", "3");
    const scoreObject = [{Name: "PlayerOne", Score: 0},
        {Name: "PlayerTwo", Score: 0}
    ]
    playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;
    

    // ADD PLAYER 2 LOGIC IN LATER VERSION
    // const playerTwoScore = document.createElement('th');
    // playerTwoScore.classList.add("playerTwoScore");
    // playerTwoScore.setAttribute("colspan", "3");
    // playerTwoScore.innerText = scoreObject[1].Name + " " + scoreObject[1].Score;
    


    // bottom of table assembly
    table.append(tableFoot);
    tableFoot.append(footerRow);
    footerRow.append(playerOneScore);
    // footerRow.append(playerTwoScore);

    
    // active cell hover listener
    tableDiv.addEventListener('mouseover', (evt)=>{
        if(evt.target.tagName === "TD"){
        evt.target.classList.add("active-hover");
            
    }
    })
    tableDiv.addEventListener('mouseout', (evt) => {
        if (evt.target.tagName === "TD") {
            evt.target.classList.remove("active-hover");
        }
    });

    // logic to advance value/questions/answers/checkmark add to score
    tableDiv.addEventListener('click', async (evt) => {
            if(evt.target.tagName === 'TD'){
            let classID = evt.target.classList.value;
            let innerTextValue = evt.target.innerText;
          

            let id = classID.match(/\d+/g);
            id = +id;

            
            await preLoad(id);
            cluePopUp(id, innerTextValue);
            evt.target.innerText = "✅"
            jeopardy.play();
    
        } 
         
        
    })

    // create resetButton
    const resetButton = document.createElement('button');
    resetButton.classList.add("resetButton");
    resetButton.innerText = "Reset Game";
    body.append(resetButton);
    
    
    // event listener with logic to perform on click
    resetButton.addEventListener('click', (evt) => {
        tableDiv.remove();
        const popUp = document.querySelector('.popUp');
        updatePlayerOneScore("reset");
        
       
        try{
        popUp.classList.add('hidden');
        } catch (error){
            console.error("Popup does not currently exist")
        }
        const all = document.querySelectorAll('.popUp');
        for(items of all){items.remove()};
        makeStartButton();
        try{
        popUp.remove();
        }catch(error){}
        resetButton.remove();
        jeopardy.pause();
            jeopardy.currentTime = 0;
            
        
    })
}



const makeStartButton = () => {
    const body = document.body;

    const startButtonDiv = document.createElement('div');
    startButtonDiv.classList.add("startButtonDiv");
    const startButton = document.createElement('button');
    startButton.classList.add("startButton");
    startButton.innerText = "Click Me to start a game of Jeopardy!";
    body.append(startButtonDiv);
    startButtonDiv.append(startButton);
    const categorySelect = document.createElement('select');
    categorySelect.id = "numberOfCategories";
    categorySelect.classList.add('numberOfCategories');
    const label = document.createElement('label');
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('labelDiv')
    label.classList.add('categoryLabel')
    label.setAttribute('for', 'numberOfCategories');
    label.innerText = "Choose number of Categories before pressing Start"
    for(let x = 1; x <= 14; x++){
        const selectOption = document.createElement('option');
        selectOption.setAttribute('value', `${x}`);
        selectOption.innerText = x
        categorySelect.append(selectOption);
    }
    body.append(labelDiv);
    labelDiv.append(label)
    label.append(categorySelect);


    startButtonDiv.addEventListener('click', (evt) => {
        const numberOfCategories = document.querySelector('.numberOfCategories');
        const label = document.querySelector('label');
        
        const divLabel = document.querySelector('.labelDiv');
        // divLabel.classList.add('hidden')
        label.classList.add('hidden')
        setTimeout(()=>{numberOfCategories.remove(); label.remove()}, 6000)
        startButtonDiv.remove();
        const spinner = document.getElementById("spinner");
        spinner.classList.remove("hidden");
        setTimeout(()=>firstLoad(), 4000 )
        setTimeout(()=>{
            spinner.classList.add("hidden")
        }, 5000);

        
    })
}

makeStartButton();

const scoreObject = [{PlayerOneScore: 0, PlayerOne: "Player One:" }, {PlayerTwoScore: 0, PlayerTwo: "Player Two:"}]
// cluePopup
function cluePopUp(classIDValue, innerTextValue) {
    let value = innerTextValue.match(/\d+/g);
    value = +value
    const extractedClue = extractedValues.clues.find(clue => clue.value === value );
    
    
    

    // create Items
    const body = document.body;
    const popUp = document.createElement('div');
    popUp.classList.add("popUp");
    const musicDisclaimer = document.createElement('p');
    musicDisclaimer.innerText = `Jeopardy Sound effect from https://quicksounds.com`;
    const musicDisclaimerLink = document.createElement('a');
    musicDisclaimerLink.innerText = "Music";
    musicDisclaimerLink.setAttribute('href', "https://quicksounds.com");
    musicDisclaimerLink.setAttribute('target', "_blank");
    musicDisclaimerLink.classList.add('musicDisclaimerLink');
    musicDisclaimer.classList.add('musicDisclaimer');

    const question = document.createElement('p');
    question.classList.add("question");
    question.innerText = extractedClue.question;
    const answerInput = document.createElement('input');
    answerInput.classList.add("answerInput");
    answerInput.placeholder = "Enter your answer Here";
    
    const answerButton = document.createElement('button');
    answerButton.classList.add("answerButton");
    answerButton.innerText = "Submit Answer";

    const answerDiv = document.createElement('div');
    answerDiv.classList.add("answerDiv");

    // append items
    body.append(popUp);
    popUp.append(question);
    popUp.append(answerDiv);
    answerDiv.append(answerInput);
    answerDiv.append(answerButton);
    answerDiv.append(musicDisclaimer);
    answerDiv.append(musicDisclaimerLink);
    
    // event listener
    answerButton.addEventListener('click', (evt) => {
        
        if(question.innerText === extractedClue.question){
            jeopardy.pause();
            jeopardy.currentTime = 0;
            question.innerText = extractedClue.answer;
            answerInput.remove();
            answerButton.innerText = `You answered: ${answerInput.value}`;
            answerDiv.style.display = "flex";
            answerDiv.style.justifyContent = "center";
            answerDiv.style.flexDirection = "column";
            answerButton.style.position = "relative";
            answerButton.style.fontSize = "30px";
            // answerButton.style.left = "10%";
        } else if(question.innerText === extractedClue.answer)
            {popUp.classList.add('hidden');
                const clueAnswer = extractedClue.answer;
                const clueValue = answerInput.value
            updatePlayerOneScore(value, clueAnswer, clueValue);
        
        }
    }); 
    
   
    
   
    }
 // update score function currently only first player supported
    function updatePlayerOneScore(value = 0, clueAnswer = "",clueValue = "") {
       
         const totalTableDataCellsCount = document.querySelectorAll('td').length;
        const totalTableDataCells = document.querySelectorAll('td')
        let count = 0
        
        for(items of totalTableDataCells){
            if(items.innerText === "✅"){
                count++;
            }
        }
        const PlayerOne = document.querySelector('.playerOneScore');
        const lowerCaseAnswer = clueAnswer.toLowerCase();
        const lowerCaseValue = clueValue.toLowerCase();
        const table = document.querySelector('.table');
        const tableHead = document.querySelector('.tableHead');
        if(value === "reset"){
            scoreObject[0].PlayerOneScore = 0;
            return
        } else 
            if(lowerCaseAnswer === lowerCaseValue){
        scoreObject[0].PlayerOneScore += value;
         
        PlayerOne.innerText = scoreObject[0].PlayerOne + " " + scoreObject[0].PlayerOneScore;
             } else {
        scoreObject[0].PlayerOneScore -= value;
        PlayerOne.innerText = scoreObject[0].PlayerOne + " " + scoreObject[0].PlayerOneScore;
        }
        if(totalTableDataCellsCount === count){
            count = 0;
            alert(`GAME OVER, Final Score Tally is ${PlayerOne.innerText}`);
            table.style.backgroundColor = "red"
            tableHead.style.backgroundColor = "red"
                // and ${scoreObject[1].PlayerTwo + " " + scoreObject[1].PlayerTwoScore}`); 
        } 
    };
function returnPopUp() {
    const popUp = document.querySelector('.popUp');
    popUp.classList.remove("hidden");
}
    

// get main categorys and individual categorys
let extractedCategorys = [];
let extractedValues = [];



// firstLoad calls secondLoad to get data and call createTable **Preloading data**** and send it to createTable
const preLoad = async (id) => {
    await getIndividualCategories(id)
}
const firstLoad = async () => {
    await secondLoad();
    await getIndividualCategories();
    createTable(extractedCategorys,
        extractedValues.clues.map(({value})=> value),
        "$"    
    );
};



    async function secondLoad(){
        const numberOfCategories = document.querySelector('.numberOfCategories').value;
    let y = await getCategories(numberOfCategories);
    extractedCategorys = [];
        y.forEach(
            function({title, id}){
            const titleAddDash = title.replaceAll(" ", "-");
                extractedCategorys.push({title: `${titleAddDash}`, id})
    })
    }

async function getCategories(count = 100) {
    let result = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=${count}`);
    let extracted = await result.data;
    const categories = [];
        categories.push(
            ...extracted.map(({ id, title, clues_count }) => ({
                id, 
                title, 
                clues_count 
            }))
        );
    return categories
}

async function getIndividualCategories(id = 2) {
        let result = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?
id=${id}`);
const {data} = result;
const clues = data.clues
extractedValues = {category: data.title, id: data.id, clues: [...clues]};
};

