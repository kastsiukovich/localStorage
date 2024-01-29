'use strict'


const countPos = document.getElementById('count+');
const countNeg = document.getElementById('count-');
const result = document.getElementById('result');

const name = document.getElementsByClassName('name')[0];
const login = document.getElementsByClassName('login')[0];
const password = document.getElementsByClassName('password')[0];
const but = document.getElementById('i');
const but2 = document.getElementsByTagName('button')[1];
// if (!password || !login || !name || !password) {
//    console.log("hi");
// }
// localStorage.clear()
let res = 0;
function counterPos() {
   let plus = +result.textContent;
   console.log(typeof (+result.textContent))
   // localStorage.setItem('counter', res);
   return result.textContent = ++res;
}
function counterNeg() {
   let minus = +result.textContent;
   console.log(typeof (+result.textContent))
   // localStorage.setItem('counter', res);
   return result.textContent = --res;
}
countPos.addEventListener('click', counterPos);
countNeg.addEventListener('click', counterNeg);




if (!name || !login || !password || !but || but2) {

} else {
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

      let user = new User(userName, userLogin, userPassword);
      let creatUser = 'User' + userId(users);
      users[creatUser] = user;
      // let get = localStorage.getItem('u');
      // get = JSON.parse(get);
      // localStorage.clear()

      // localStorage.setItem('u', JSON.stringify(users));
      // console.log(get)

      // for (let key in get) {
      //    // console.log(get[key].login === userLogin)
      //    if (get[key].login !== userLogin) {
      //       return users[creatUser] = user;

      //    } else (alert('Пользователь с таким логином уже существует!'))
      //    // console.log(get[key].login);
      // }
      alert(`${userName} Вы зарегистрированы!`)
   }

   but.addEventListener('click', () => add());


}


