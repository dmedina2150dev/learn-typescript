// identificadores de usuario number ò string
export {};
let idUser: number | string;

idUser = 10;
console.log(typeof idUser);

idUser = '10';
console.log(typeof idUser);

// buscar username dado un ID
function getUsernameById(id: number | string) {
    // logica de negocio
    return 'dmedina';
}

getUsernameById(20);
getUsernameById('30');