"use strict";
let nombreUser;
nombreUser = 'dmedina';
let message = nombreUser.length > 5 ?
    `Welcome ${nombreUser}` :
    'Nombre de usuario corto';
console.log('message', message);
let userNameWithId = 'dmedina 2';
nombreUser = userNameWithId.substring(0, 7);
console.log('Username only', nombreUser);
let message2 = nombreUser.length > 5 ?
    `Welcome ${nombreUser}` :
    'Nombre de usuario corto';
console.log('message', message2);
let helloUser;
helloUser = 'Hellos paparazzi';
nombreUser = helloUser.substring(6);
console.log('username', nombreUser);
