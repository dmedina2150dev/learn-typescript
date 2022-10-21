console.log("Hola Dev");

// Number
// Explicito
let phone: number;
phone = 1;
phone = 54879522;
// phone = 'Hola' // Error


// inferido
let phoneNumber = 895452;

phoneNumber = 123;
// phoneNumber = true; // Error

let hex: number = 0xf00d; // Para valor hexadecimal
let binary: number = 0b1010; // Valor binario
let octal: number = 0o744;


// Boolean
// Explicito
let verdad: boolean;
verdad = true;
// verdad = 20; // Error

// Inferido
let siEsVerdad = false;
siEsVerdad = true;
// siEsVerdad = 20; // Error


// String
// Explicito
let myName: string = 'Dajan';
myName = "Vefy";
// myName = true; // Error


// Template String
// Uso de caracter back-tick `
let userInfor: string;
userInfor = `Tengo 50 años
    Porque me da la gana
    Y este es miu nombre: ${myName}
`;
console.log('userInfo', userInfor);
