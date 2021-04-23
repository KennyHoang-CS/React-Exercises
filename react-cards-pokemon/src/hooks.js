import React, { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

function useFlip(flipMe = true) {
    const [isFacingUp, setIsFacingUp] = useState(flipMe);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    // return a piece of state and the function to trigger it. 
    return [isFacingUp, flipCard];
}

function useAxios(url, INITIAL_STATE = [], optionalEnd = '') {
    const [cards, setCards] = useState(INITIAL_STATE);
    const addCard = async name => {
        if (optionalEnd !== '') {
            optionalEnd = `/${name}/`;
        }
        const response = await axios.get(`${url}${optionalEnd}`);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    // return a piece of state and the function to trigger it.
    return [cards, addCard];
}


    const addPokemon = async name => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}/`
        );
    };


export {
    useAxios,
    useFlip
}
