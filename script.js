'use strict'

const countPos = document.getElementById('count+');
const countNeg = document.getElementById('count-');
const result = document.getElementById('result');

const name = document.getElementsByClassName('name')[0];
const login = document.getElementsByClassName('login')[0];
const password = document.getElementsByClassName('password')[0];
const but = document.getElementById('i');
const but2 = document.getElementsByTagName('button')[1];

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

   const users = {};

   function User(name, login, password) {

      this.name = name;
      this.login = login;
      this.password = password;

   }
   function userId(users) {
      return Object.keys(users).length;
   };
   function add() {
      const userName = name.value;
      const userLogin = login.value;
      const userPassword = password.value;
      console.log(userName, userLogin, userPassword)
      let user = new User(userName, userLogin, userPassword);
      let creatUser = 'User' + userId(users);
      users[creatUser] = user;
      alert(`${userName} Вы зарегистрированы!`)
   }
   but.addEventListener('click', () => add());



