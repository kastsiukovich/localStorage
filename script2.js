'use strict';

const countPos = document.getElementById('count+');
const countNeg = document.getElementById('count-');
const result = document.getElementById('result');

let res = 0;
window.addEventListener('storage', function (e) {
   console.log('change');
   let info = localStorage.getItem('date');
   info = JSON.parse(info);
   res = info;
   drow();
});

function drow() {
   let b = localStorage.getItem('date');
   b = JSON.parse(b);
   console.log(result.textContent = b);
}
drow();

function counterPos() {
   +result.textContent;
   result.textContent = ++res;
   localStorage.setItem('date', JSON.stringify(res));
}
function counterNeg() {
   +result.textContent;
   result.textContent = --res;
   localStorage.setItem('date', JSON.stringify(res));
}
countPos.addEventListener('click', counterPos);
countNeg.addEventListener('click', counterNeg);


