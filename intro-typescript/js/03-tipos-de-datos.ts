// tipos de datos

// string
let cadena: string = "Dajan Mdina";


// number
let edad: number = 28;


// boolean
let siono: boolean = true;


// any
let cualquiera: any = 23;



// array
var lenguajes: Array<string> = ["php","js", "ts"]; 


// otra forma
let years: number[] = [12, 34, 56];

// multiples tipos de datos
// string
let cadena2: string | number = "Dajan Mdina";
console.log(cadena2);
cadena2 = 20;
console.log(cadena2);


// tipos de datos personalizados
type letrasonumeros = string | number;

let cadena3: letrasonumeros = "Darwin Medina";
console.log(cadena3);

console.log(cadena, edad, siono, cualquiera, lenguajes, years, cadena2);

// let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}
console.log(numero1, numero2);