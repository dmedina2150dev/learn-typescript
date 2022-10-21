// declaracion de variables en typeScript
let helloWorld: string = "Hello World!!";

// crear un objeto con un tipo inferido
interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Dajan Medina",
    id: 0
}

// Dado que JavaScript admite clases y programación orientada a objetos
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Vefy", 1);

// conjunto de tipos primitivos de Javascript
/**
 * boolean
 * bigint
 * null
 * number
 * string
 * symbol
 * undefined
 */

// TypeScript añade un par mas
/**
 * any: permitir cualquier cosa
 * unknown: asegurese de que alguien que usa este tipo declare cual es el tipo
 * never: no es posible que este tipo pueda suceder
 * void: una funcion que devuelve undefined o no retorna valor
 */

// Con TypeScript, puede crear tipos complejos combinando tipos simples
// UNIONS
type MyBool = true | false;

/**
 * Nota: si pasa el cursor por MyBoolencima, verá que está clasificado como boolean. 
 * Esa es una propiedad del Structural Type System. Más sobre esto a continuación.
 */

// otros ejemplos mas utilizados LITERAL STRING
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Las uniones tambien brindan una forma de manejar diferentes tipos
/**
 * Por ejemplo una funcion que tome un array o un string
 */

function getLength(obj: string | string[]){}

// para aprender el tipo de una variable usar typeof:

/**
 * Ejemplos:
 * typeof s === "string"
 * typeof n === "number"
 * typeof b === "boolean"
 * typeof undefined === "undefined"
 * typeof f === "function"
 * Array.isArray(a)
 */

function wrapInArray (obj: string | string[]){
    if(typeof obj === "string") {
        return [obj];
    }
    return obj;
}

// GENERICOS

/**
 * Los generico proporcionan variables a los tipos
 * Ejemplo común es una matriz sin genericos podria contener cualquier cosa
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;


// Puede declarar sus propios tipos que usan genéricos:

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// Esta línea es un atajo para decirle a TypeScript que hay un
// constante llamada `Backpack`, y no preocuparse por su procedencia.
declare const backpack: Backpack<string>;

// El objeto es una cadena, porque lo declaramos arriba como la parte variable de Backpack.
const object = backpack.get();

// Dado que la variable mochila es una cadena, no puede pasar un número a la función de suma.
//backpack.add(23);
backpack.add("23");// asi si


// SISTEMA DE TIPO ESTRUCTURAL
/**
 * Uno de los principios básicos de TypeScript es que la verificación de tipos
 * se centra en la forma que tienen los valores.
 */
// En un sistema de tipo estructural, si dos objetos tienen la misma forma, se considera que son del mismo tipo.

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);
/**
 * La pointvariable nunca se declara como un Pointtipo.
 * Sin embargo, TypeScript compara la forma de pointcon la forma de Pointen
 * la verificación de tipo. Tienen la misma forma, por lo que pasa el código.
 */

// Algo asi estaria mal
// const color = { hex: "#187ABF" };
// logPoint(color);


//No hay diferencia entre cómo las clases y los objetos se ajustan a las formas
class VirtualPoint {
    x: number;
    y: number;

    constructor( x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

const newPoint = new VirtualPoint(13,48);
logPoint(newPoint); // logs "13, 48"


// COMPILACION

/**
 * tsc nombre_file.ts
 * Genera un output con el mismo nombre (nombre_file.js)
 * Pasara todo el codigo a javascript aunque tenga errores en la compilacion
 */

/**
 * Si usamos este (--noEmitOnError) flag podremos evitar que se pase codigo que contenga errores
 * detrectados por typescript
 * tsc --noEmitOnError  nombre_file.ts
 */

/**
 * Si usamos este (--target {version ecma}) podemos cambiar a la version
 * de ECMA que queremos compilar
 * tsc  --target es2015 .\hello.ts
 * Por defecto TypeScript compila a la version ECMAScript 3 ES3
 */

/* function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}

greet("Dajan"); 
ESTA FUNCION ASI COMO ESTABA GENERABA ERROR
*/
