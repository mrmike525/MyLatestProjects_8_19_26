const test = () => {
    const card = document.querySelector('.card');
    const cardMainDivText = document.createElement('div');
    cardMainDivText.classList.add('card-text-main')
    const upperLeftNumberSpan = document.createElement('span');
    upperLeftNumberSpan.classList.add('')
    const upperLeftSuitSpan = document.createElement('span');
    const centerSpan = document.createElement('span');
    const lowerRightDiv = document.createElement('div');
    const lowerRightNumberSpan = document.createElement('span');
    const lowerRightSuitSpan = document.createElement('span');


    const div = document.createElement('div');
    const body = document.body;
    div.innerText = "*"
    div.style.fontSize = "50px"
    div.style.color = "orange"
    body.append(div)
}
test()


const notes = () => {
`
<section class="card">
        <div class="card-text-main">
            <span class="king">K </span><span class="spade">&#9827</span>
        </div>
        <span class="center">&#9827</span>
        <div class="card-text-sub">
            <span class="king">K </span><span class="spade">&#9827</span>
        </div>
    </section>
`
}