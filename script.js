const div=document.getElementById("playSpace");
let p = document.createElement('p'); // placeholder test element
div.appendChild(p); // placeholder test element
const suits=["clubs", "diamonds", "hearts", "spades"];
const ranks=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
let cards=[];

for(let i=0; i<4; i++){
    for(let j=0; j<13; j++){
        cards.push(ranks[j]+'_'+suits[i]+'.png')
    }
}

console.log(cards)
class game{
    constructor(cards, size){
        this.cards=cards
        this.deck=[];
        this.size=size;
    }

    shuffle(){
        this.deck.push(this.cards)
        
        for(let i = this.deck.length -1; i>0; i--){
            let j = Math.floor(Math.random()*(i+1));
            let k = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = k;
        }
        console.log(this.deck)
    }
}

let t1 = new game(cards,1);

t1.shuffle()
