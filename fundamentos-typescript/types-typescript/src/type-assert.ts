// <> // Angle Bracket syntax

let nombreUser: any;
nombreUser = 'dmedina';

// asumimos que tenemos una cadena TS confia en mi!
let message: string = (<string>nombreUser).length > 5 ?
                    `Welcome ${nombreUser}` :
                    'Nombre de usuario corto';
console.log('message', message);


// otro ejemplo
let userNameWithId: any = 'dmedina 2';
// como obtener el username?
nombreUser = (<string>userNameWithId).substring(0, 7);
console.log('Username only', nombreUser);


// sintaxis AS

let message2: string = (nombreUser as string).length > 5 ?
                    `Welcome ${nombreUser}` :
                    'Nombre de usuario corto';
console.log('message', message2);

// otro de AS

let helloUser: any;
helloUser = 'Hellos paparazzi';
nombreUser = (helloUser as string).substring(6);
console.log('username', nombreUser);
