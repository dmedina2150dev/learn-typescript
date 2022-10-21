// Tipo Explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo Inferido
let otherId;
otherId = 2;
otherId = '2'
console.log('otherId', otherId);


let surprise: any = 'hello TypeScript';
// surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log('res', res);
