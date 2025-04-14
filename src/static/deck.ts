import { Deck } from "../types/deck.model";
import * as deck_1 from "../static/decks/deck_1.json";
import * as deck_2 from "../static/decks/deck_2.json";
import * as deck_3 from "../static/decks/deck_3.json";
import * as deck_4 from "../static/decks/deck_4.json";

export const decks:Deck[] = [
    {
        id: '234324d434',
        name: 'Random',
        file_name: 'deck_1.json',
        data: deck_1.deck
    },
    {
        id: '234324d4dasdf4',
        name: 'Food',
        file_name: 'deck_2.json',
        data: deck_2.deck
    },
    {
        id: '234331233d434',
        name: 'Sports',
        file_name: 'deck_3.json',
        data: deck_3.deck
    },
    {
        id: '23432423434d434',
        name: 'Music',
        file_name: 'deck_4.json',
        data: deck_4.deck
    }
]