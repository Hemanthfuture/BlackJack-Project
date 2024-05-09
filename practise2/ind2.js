let sentence=["Hello","my","name","is","Per"];
let newid=document.getElementById('newid');
for(let i=0;i<sentence.length;i++){
    newid.textContent +=sentence[i]+' ';
}