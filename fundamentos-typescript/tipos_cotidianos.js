/** EVERYDAY TYPES (TIPOS COTIDIANOS) */
/** TIPOS PRIMITIVOS (https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * string
 * number
 * boolean
*/
/**
 * Los tipo String, Number y Boolean (Comenzando en mayuscula) son legales
 * Solo que se refieren a alguna caracteristica especial incorporada
 * en los tipos que muy rara vez apareceran en el codigo.
 * Mejor usar siempre los tipos normales (string, number, boolean)
 */
/** MATRICES (ARRAYS)
 * Para las matrices la sintaxis funciona para cualquier tipo de la siguiente forma:
 * number[] o string[]
 * Tambien pueden ser representados de la siguiente forma:
 * Array<number> o Array<string>
 * Significan lo mismo.
*/
/** ANY
 * Es un tipo especial de Typescript que se puede usar para evitar
 * que un valor cause errores de verificacion.
 *
 * Cuando un valor es ANY puede acceder a cualquier propiedad del mismo
 * que a su vez sera ANY igualmente, llamarlo como una funcion asignarlo a o desde
 * un valor e cualquier tipo.
 *
 * Cuando no especifica un tipo y TypeScript no puede inferirlo
 * del contexto, normalmente utilizara de forma predeterminada ANY
 *
 * Sin embargo si se desea evitar eso porque any no verifica el tipo
 * se debe utilizar la bandera noImplicitAny en el compilador.
 */
// EJE. ANY:
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
/** ANOTACIONES EN VARIABLES
 * Cuando se declaran variables con const, var o let se pueden especificar
 * tipos explicitamente.
 *
 * TypeScript no usa declaraciones de tipo a la izquierda
 * int numero = 0;
 */
var myName = "Dajan";
/** FUNCIONES
 * TypeScript permite especificar los tipos de valores de entrada y salida
 * para funciones.
 */
// Anotaciones de tipo parametro
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// Anotaciones de tipo de retrono
function getFavoriteNumber() {
    return 26;
}
// Funciones anónimas
/**
 * Las funciones anónimas son un poco diferentes de las declaraciones
 * de funciones Cuando una funcion aparece en un lugar donde TypeScript puede
 * determinar como se llamara, los paramtros de esa funcion reciben tipos
 * automaticamente.
 *
 * Ejemplo:
 */
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
