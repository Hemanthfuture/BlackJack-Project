
// let cards=[];
// let sum=0;
// let hasBlackJack=false;
// let isAlive=false;
// let message='';
// let player={
//     name : "Praveen",
//     coins : 145
// }
// let playerEl=document.getElementById('player-el');
// playerEl.textContent=(player.name+": $"+player.coins);
// function getRandomNumber(){
//     // if 1 retutn 11
//     // if 11 - 13 return 10
//     let rand= Math.floor(Math.random()*13)+1;
//     if(rand===1){
//         return 11;
//     }
//     else if(rand>10){
//         return 10
//     }
//     else{
//         return rand;
//     }
// }
// console.log(cards);
// function startGame(){
//     isAlive=true;
//     hasBlackJack=false;
//     let firstCard=getRandomNumber();
//     let secondCard=getRandomNumber();
//     cards=[firstCard,secondCard];
//     sum=firstCard+secondCard;
//     renderGame();
// }
// function renderGame(){
    
//     let msg=document.getElementById('message');
//     let sm=document.getElementById('sumcount');
//     let packcards=document.getElementById('cards');
//     if(sum<=20){
//         message='Do you want to draw a new card?';
//     }
//     else if(sum===21){
//         message="Wohoo!You've got Blackjack!";
//         hasBlackJack=true;
//     }
//     else{
//         message="You're out of the game";
//         isAlive=false;
//     }
//     msg.textContent=message;
//     sm.textContent='Sum : '+sum;
//     packcards.textContent='Cards : ';
//     for(let i=0;i<cards.length;i++){
//         packcards.textContent+=cards[i]+"  ";
//     }
// }
// function newCard(){
//     if(isAlive===true && hasBlackJack===false){
//         console.log("New card is drawn");
//         let card=getRandomNumber();
//         sum+=card;
//         cards.push(card);
//         console.log(cards);
//         renderGame();
//     }
    
// }

let hands=["rock","paper","scissor"];
 
function rand(){
    console.log(hands[Math.floor(Math.random()*3)]);
}
rand();