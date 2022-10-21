"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landscape = PhotoOrientation.Landscape;
const portrait = PhotoOrientation.Portrait;
const square = 2;
const panorama = 3;
console.log('landscape', landscape);
console.log('portrait', portrait);
console.log('Landscape', PhotoOrientation[0]);
console.log('Landscape o: ', PhotoOrientation[landscape]);
var Picture;
(function (Picture) {
    Picture[Picture["Landscape"] = 10] = "Landscape";
    Picture[Picture["Portrait"] = 11] = "Portrait";
    Picture[Picture["Square"] = 12] = "Square";
    Picture[Picture["Panorama"] = 13] = "Panorama";
})(Picture || (Picture = {}));
console.log('portrat', Picture.Portrait);
var SemanaLaboral;
(function (SemanaLaboral) {
    SemanaLaboral["Lunes"] = "monday";
    SemanaLaboral["Martes"] = "tuesday";
    SemanaLaboral["Miercoles"] = "wednesday";
    SemanaLaboral["Jueves"] = "thursday";
    SemanaLaboral["Viernes"] = "friday";
})(SemanaLaboral || (SemanaLaboral = {}));
const semana = [
    SemanaLaboral.Lunes,
    SemanaLaboral.Martes,
    SemanaLaboral.Miercoles,
    SemanaLaboral.Jueves,
    SemanaLaboral.Viernes
];
console.log('semana', semana);
