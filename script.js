const counter = document.getElementById('counter');
const plusbtn = document.getElementById('plusbtn');
const minusbtn = document.getElementById('minusbtn');

let counte = 0;
const updateCounter = (value) => {
    counte = counte + value;
    counter.textContent = counte;

    if( counte >= 10){
        plusbtn.setAttribute('disabled', true)
    }
    else{
        plusbtn.removeAttribute('disabled', false)
    }
    //minus button code:
    
    if(counte <= 0){
        minusbtn.setAttribute('disabled', true)
    }
    else{
        minusbtn.removeAttribute('desabled',false)
    }

}
plusbtn.addEventListener('click', () =>{
    updateCounter(+1);
})
minusbtn.addEventListener('click', () => {
    updateCounter(-1);
    


})