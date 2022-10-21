// Corchetes []


// Tipo Explicito
let users: string[];
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // Error

// Tipos Inferidos
let otherUser = ['luixaviles', 'paparazzi', 'lensqueen'];
// otherUser = [1, true, 'test']; // Error

// Array<Tipo>
let pictureTitles: Array<string>;
pictureTitles = ['fafa', 'vacation', 'Landscape'];


// Como acceder a los valores del Array
console.log('first User: ',users[0]);
console.log('first title: ', pictureTitles[1]);


// Propiedades en Arrays
console.log('users.length', users.length);

// Uso de funciones en Arrays

users.push('TuMama');
users.sort(); // ordena el array
console.log('users', users);
