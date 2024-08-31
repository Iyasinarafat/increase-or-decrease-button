const counter = document.getElementById('counter');
const plusbtn = document.getElementById('plusbtn');
const minusbtn = document.getElementById('minusbtn');

let counte = 0;
plusbtn.addEventListener('click', () =>{
    counte = counte + 1;
    counter.textContent = counte;
})
minusbtn.addEventListener('click', () => {
    counte = counte - 1;
    counter.textContent = counte;


})