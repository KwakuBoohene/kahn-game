export interface DeckData {
   word: string;
   describing_words: string[];
}

export interface Deck{
   id:string,
   name:string,
   file_name:string,
   data:DeckData[]
}

