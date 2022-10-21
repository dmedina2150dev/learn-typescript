// Explicita
let nullVariable: null;

nullVariable = null;
// nullVariable = 1; // Error

let otherVariable = null;

otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);


// Undefined

let undefinedVariable: undefined = undefined;

// undefinedVariable = 'test'; // Error

let otherUndefined = undefined;

otherUndefined = 'Prueba';

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined como subtipos


// --strictNullChecks tenemos un listado para validar donde tenemos los errores de tipado

let albumName: string;
// albumName = null; // Error
// albumName = undefined;// Error