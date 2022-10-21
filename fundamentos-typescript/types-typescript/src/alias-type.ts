export {};

type IdUser = number | string;
type UserName = string;
let idUser: IdUser;

idUser = 10;
console.log(typeof idUser);

idUser = '10';
console.log(typeof idUser);

// buscar username dado un ID
function getUsernameById(id: IdUser): UserName {
    // logica de negocio
    return 'dmedina';
}

getUsernameById(20);
getUsernameById('30');