// Orientacion para fotografias
// como definiriamos naturalmente en JavaScript
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;


enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

// como utilizarlo en la aplicacion
const landscape: PhotoOrientation = PhotoOrientation.Landscape;
const portrait: PhotoOrientation = PhotoOrientation.Portrait;
const square = 2;
const panorama = 3;

console.log('landscape', landscape);
console.log('portrait', portrait);

// como accedaer a la representacion en cadena
console.log('Landscape', PhotoOrientation[0]);
console.log('Landscape o: ', PhotoOrientation[landscape]);

// Personalizacion
enum Picture {
    Landscape = 10, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

console.log('portrat', Picture.Portrait);


// otro ejemplo

enum SemanaLaboral {
    Lunes = 'monday',
    Martes = 'tuesday',
    Miercoles = 'wednesday',
    Jueves = 'thursday',
    Viernes = 'friday'
}

const semana: Array<string> = [
    SemanaLaboral.Lunes,
    SemanaLaboral.Martes,
    SemanaLaboral.Miercoles,
    SemanaLaboral.Jueves,
    SemanaLaboral.Viernes
];

console.log('semana', semana);