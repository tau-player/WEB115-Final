const div=document.getElementById("playSpace");
let p = document.createElement('p'); // placeholder test element
div.appendChild(p); // placeholder test element
const suits=["clubs", "diamonds", "hearts", "spades"];
const ranks=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
let cards=[];

for(let i=0; i<4; i++){
    for(let j=0; j<13; j++){
        cards.push('./cards/'+ranks[j]+'_'+suits[i]+'.png')
    }
}

//console.log(cards)
class game{
    constructor(size){
        this.deck=[];
        this.size=size;
        this.td
        this.img
        this.row
        this.x
        this.up
    }

    shuffle(){
        this.deck=cards
        
        for(let i = this.deck.length -1; i>0; i--){
            let j = Math.floor(Math.random()*(i+1));
            let k = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = k;
        }
        console.log(this.deck);
    }

    upBack(i){
        if(i!=0){
            this.img.src=this.deck[i];
            this.td.appendChild(this.img);
            this.up=true;
        }else{
            this.img.src='./cards/cardback.png';
            this.td.appendChild(this.img);
            this.up=false;
        }
    }
    cardVals(){
        
    }

    setUp(){
        var space = document.getElementsByClassName('col');
        for(let i=1; i<=space.length; i++){
            this.x = 'c'+i;
            this.row = document.createElement('tr');
            for(let j=1; j<=this.x[1];j++){
                    this.td = document.createElement('td');
                    this.img = document.createElement('img');
                    for(let k=0; k<=space.length; k++){
                        if(j==this.x[1]){
                            this.upBack(i)
                        }else{
                            this.upBack(0)
                        }
                        this.row.appendChild(this.td)
                        space[i-1].appendChild(this.row);
                    }
            }
            //console.log(this.x);
        }
    //console.log(space)
    }

    start(){
        console.log(this.td)
    }



    
}

let t1 = new game(1);
t1.shuffle()
t1.setUp()
