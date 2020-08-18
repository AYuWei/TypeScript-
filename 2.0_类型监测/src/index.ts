type Color = '♠️' | '♥️' | '♣️' | '♦️';
type Deck = rules[];
type rules = {
    color : Color,
    num : number,
}

function card() : Deck{
    const deck : Deck = [];
    for(let i = 1 ; i <= 13 ; i ++){
        deck.push({
            num : i,
            color : "♠️"
        });
        deck.push({
            num : i,
            color : "♣️"
        });
        deck.push({
            num : i,
            color : "♥️"
        });
        deck.push({
            num : i,
            color : "♦️"
        });
    }
    return deck;
}

function printDeck(deck : Deck){
    let arr : string[];
    deck.forEach(item => {
       let str = item.color;
       if(item.num <= 10){
           str += item.num;
       } else if(item.num === 11){
           str += "J";
       } else if(item.num === 12){
           str += "Q";
       } else{
           str += "K";
       }
    //    arr.push(str);
       console.log(str)
    });
    // return arr
}

let aa = card();

let bb = printDeck(aa);
console.log(bb)