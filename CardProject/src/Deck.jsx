import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Deck = ({cardCount = 5}) => {
    const [fiveCard, setFiveCard] = useState([]);
    const [fullDeck, setFullDeck] = useState([]);
    const [filteredDeck, setFilteredDeck] = useState([]);
    const suit = ["\u2665", "\u2660", "\u2663", "\u2666"  ];
    // order is hearts, spades, clubs, diamonds
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const setupDeck = () => {
        const hearts = {suits: "\u2665", allNumbers: [...numbers]};
        const spades = {suits: "\u2660", allNumbers: [...numbers]};
        const clubs = {suits: "\u2663", allNumbers: [...numbers]};
        const diamonds = {suits: "\u2666", allNumbers: [...numbers]}
        setFullDeck([hearts, spades, clubs, diamonds]);
    }

    const chooseRandomFive = (loop = 5) => {
        
        const cardValues = [];
        for(let times = 1; times <= loop; times++){
            const randomSuitIndex = Math.floor(Math.random() * suit.length);
        const randomNumberIndex = Math.floor(Math.random() * numbers.length);
            cardValues.push({randomSuitIndex, randomNumberIndex})
            console.log(cardValues)
        }
        return cardValues
    }

    const pickFive = () => {
    return fiveCard.map(({ randomSuitIndex, randomNumberIndex }) => {
        const suitGroup = fullDeck[randomSuitIndex];

        return {
            suit: suitGroup.suits,
            number: suitGroup.allNumbers[randomNumberIndex]
        };
    });
};

    useEffect(()=>{
        setupDeck();
        setFiveCard(chooseRandomFive());
    }, [])
    useEffect(()=>{
        console.log(fullDeck);
        console.log(fiveCard)
    }, [fullDeck, fiveCard])

    return (
        <>
        
       
       {fullDeck.length > 0 &&
            pickFive().map(({ suit, number }, index) => (
                <Card
                    key={index}
                    number={number}
                    suit={suit}
                />
                
            ))
        }
        <input type="text" id="numOfCards"/>
        <button onClick={()=>setFiveCard(chooseRandomFive(numOfCards.value))}>Deal</button>
        </>
    )
}

export default Deck;