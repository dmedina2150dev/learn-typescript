// Object

let user: object;

user = {}; // Object

user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
}

console.log('user', user);
// console.log('user.username', user.username); // Error no se puede acceder a las propiedades

// Object vs object (Clase JS vs tipo TS)

const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // Clase Object de JavaScript
console.log('isIntance', isInstance);

console.log('myObj.username', myObj.username);





