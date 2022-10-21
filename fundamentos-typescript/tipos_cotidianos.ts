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
let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


/** ANOTACIONES EN VARIABLES
 * Cuando se declaran variables con const, var o let se pueden especificar
 * tipos explicitamente.
 *
 * TypeScript no usa declaraciones de tipo a la izquierda
 * int numero = 0;
 */

let myName: string = "Dajan";


/** FUNCIONES
 * TypeScript permite especificar los tipos de valores de entrada y salida
 * para funciones.
 */

// Anotaciones de tipo parametro
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// Anotaciones de tipo de retrono
function getFavoriteNumber(): number {
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
const names = ["Alice", "Bob", "Eve"];

names.forEach( function (s) {
    console.log(s.toUpperCase());
});

names.forEach( (s) => {
    console.log(s.toUpperCase());
});

/**
 * Aunque el parámetro (s) no tenía una anotación de tipo, TypeScript usó los tipos de la
 * función forEach, junto con el tipo inferido de la matriz, para determinar
 * el tipo (s) tendrá.
 * Este proceso se llama tipado contextual porque el contexto en el que ocurrió la función informa
 * qué tipo debe tener.
 */



/** TIPOS DE OBJETOS
 * El tipo primitivo mas comun. Para definir un tipo objeto simplemente enumeramos sus propiedades
 */

function printCoord( pt: {x: number, y: number}) {
    console.log("The coordinate's x value is: " + pt.x);
    console.log("The coordinate's y value is: " + pt.y);
}

printCoord({x: 5, y: 9});


/** Propiedades opcionales
 * LOS TIPOS DE OBJETO TAMBIEN PUEDEN ESPECIFICAR QUE ALGUNAS
 * O TODAS LAS PROPIEDADES SON OPCIONALES.
 * Para esto agregar el (?) despues del nombre de la propiedad
 */

function printName ( obj: { first: string, last?: string }) {
    /**
     *  JavaScript, si accede a una propiedad que no existe, obtendrá el valor en
     * undefined en lugar de un error de tiempo de ejecución. Debido a esto, cuando
     * lea una propiedad opcional, deberá verificar undefinedantes de usarla.
     */
    if (obj.last === undefined) {
        console.log("FullName: " + obj.first);
    } else {
        console.log("FullName: " + obj.first + " " + obj.last);
    }
}

printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});



/** TIPOS DE UNION
 * El sistema de tipos de TypeScript permite crear nuevos tipos a partir de los ya existentes.
 * Utilizando una gran variedad de operaciones.
 */

/**
 * Definicion de un tipo de union
 * Un tipo de unión es un tipo formado por otros dos o más tipos, que representan valores
 * que pueden ser cualquiera de esos tipos. Nos referimos a cada uno de estos tipos como 
 * miembros del sindicato .
 */