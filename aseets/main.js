const user= document.querySelector('.js');
const numberUSer= document.querySelector('.js-user');

// if(numberUSer.style.display="none"){
//     user.onclick = function(){
//         numberUSer.style.display="flex";
//     }
// }
// if(numberUSer.style.display="flex"){
//     user.onclick = function(){
//         numberUSer.style.display="none";
//     }
// }
var counter = 1;
setInterval( function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>2){
        counter=1;
    }
},5000);

const btnNext = document.querySelector('btn-next');
const btnNext = document.querySelector('btn-pre');

btnNext.onclick = function(){
    
}

const ml100 =function(){
    place-slides.style.margin-left == '10%';
}
