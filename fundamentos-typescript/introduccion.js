// declaracion de variables en typeScript
var helloWorld = "Hello World!!";
var user = {
    name: "Dajan Medina",
    id: 0
};
// Dado que JavaScript admite clases y programación orientada a objetos
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Vefy", 1);
// Las uniones tambien brindan una forma de manejar diferentes tipos
/**
 * Por ejemplo una funcion que tome un array o un string
 */
function getLength(obj) { }
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
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
// El objeto es una cadena, porque lo declaramos arriba como la parte variable de Backpack.
var object = backpack.get();
// Dado que la variable mochila es una cadena, no puede pasar un número a la función de suma.
//backpack.add(23);
backpack.add("23"); // asi si
function logPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point = { x: 12, y: 26 };
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
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newPoint = new VirtualPoint(13, 48);
logPoint(newPoint); // logs "13, 48"
