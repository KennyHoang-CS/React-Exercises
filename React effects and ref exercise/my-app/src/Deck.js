import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';

const DECK_API = 'https://deckofcardsapi.com/api/deck';

function randomNumber() {
    return Math.floor(Math.random() * 180) + 1;
}

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef();

    /* At mount: load deck into the deck state. */
    useEffect(() => {
        async function getDeck() {
            let res = await axios.get(`${DECK_API}/new/shuffle`);
            setDeck(res.data);
        }
        getDeck()
    }, [setDeck]);

    /* Draw a card */
    useEffect(() => {
        /* Get the card from the Deck API */ 
        async function getCard() {
            let { deck_id } = deck;
            
            try{
                let drawRes = await axios.get(`${DECK_API}/${deck_id}/draw/?count=1`);

                // check if there are no more cards to draw from current deck. 
                if (drawRes.data.remaining === 0) {
                    setAutoDraw(auto => !auto);
                    throw new Error('No more cards to draw.');
                }

                // get card data from draw. 
                const newCard = drawRes.data.cards[0];

                // put the card in our drawn pile. 
                setDrawn(cards => [
                    ...cards,
                    {
                        id: newCard.code,
                        image: newCard.image,
                        name: newCard.value + ' of ' + newCard.suit,
                        angle: randomNumber()  // angle is used for CSS styling.
                    }
                ]);
            } catch (e) {
                alert(e);
            }
        }

        // The interval to draw a card every 1 second. 
        if (autoDraw && !timerRef.current) {
            timerRef.current = setInterval(async() => {
                await getCard();
            }, 500)
        }

        // Clean up function. 
        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, [deck, autoDraw]);

    // Get a new array of drawn cards for a new React state. 
    const cards = drawn.map(({ id, image, name, angle }) => <Card key={id} id={id} image={image} name={name} angle={angle}/>);

    function drawAutoToggle() {
        setAutoDraw(auto => !auto);
    }

    return (
        <div className="Deck">
            <button onClick={ drawAutoToggle }>
            {autoDraw ? 'Stop ' : 'Start '}Drawing!
            </button>
            <div className="Cards-Area">{ cards }</div>
        </div>
    )
}

export default Deck;