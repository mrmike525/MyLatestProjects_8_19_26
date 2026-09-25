const numbers = [2, 3, 5, 22, 4096, 50, 2001, 40079, 8192, 16384, 32768];

const mainDiv = document.querySelector('.main');

mainDiv.innerText = numbers.filter((item) => item % 2 === 0);
const testArray = [{ suit: "\u2665", Numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] }];

const returnNewArray = (value) => testArray.map((items) => ([items.suit, items.Numbers.filter((even) => even % 2 === 0), { [value]: value }]))

const batman = [returnNewArray('tickTock'), returnNewArray('chirp')];

const dinnerOptions = ["Tacos", "Pot Roast", "Sloppy Joes", "Grilled Cheese and Tomatoe Soup", "Bacon and Pancakes"]

const p = document.createElement('p');
mainDiv.append(p)
p.innerText = "Mike is the GOAT. THE GREATEST OF ALL TIME!"
p.innerText = numbers.map((num)=>num * 2 + "help")
const mainParagraph = document.querySelector('.main-paragraph');
mainParagraph.innerText = "MOOOO"