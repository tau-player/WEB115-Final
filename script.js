const div=document.getElementById("playSpace");
let p = document.createElement('p'); // placeholder test element
div.appendChild(p); // placeholder test element
const cards=['HB','OS','TS','RS','FS','IS','SS','VS','GS','NS','ES','JS','QS','KS','AS','OH','TH','RH','FH','IH','SH','VH','GH','NH','EH','JH','QH','KH','AH','OD','TD','RD','FD','ID','SD','VD','GD','ND','ED','JD','QD','KD','AD','OC','TC','RC','FC','IC','SC','VC','GC','NC','EC','JC','QC','KC','AC'];
/*O,T,R,F,I,S,V,G,N,E,J,K,Q,A,S,H,D,C
One, Two, thRee, Four, fIve, Six, seVen, eiGht, Nine, tEn, Jack, Queen, King, Ace, Spades, Hearts, Diamonds, Clubs
ex: 5 of spades --> IS, 3 of diamonds --> RD, 8 of clubs --> GC, 10 of hearts --> EH*/

for(let i=0; i<cards.length; i++){
    p.innerHTML+=cards[i]+'.png'
}