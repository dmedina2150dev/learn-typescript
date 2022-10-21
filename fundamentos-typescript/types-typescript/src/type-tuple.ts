/** supongamos que queremos represntar un par de valores
 * como el ID
 * Asociado al nombre de usuario
 */
export {};
// [1, 'user']
let user: [number, string];
user = [1, 'dmedina'];

console.log('user', user);

// como acceder a los valores
console.log('username', user[1]);
console.log('id', user[0]);


// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'alguien', true];
console.log('userInfo', userInfo);


// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'dmedina']);
array.push([2, 'papa']);
array.push([3, 'dmes']);

console.log('array tupla', array);

// considerar el uso de funciones de Array
// modificar un valor
// dmes --> ddoliveira
array[2][1] = array[2][1].replace("dmes","ddoliveira");
console.log('array tupla MODIFICADO', array);
