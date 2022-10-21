"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
;
;
const album = {
    id: 1,
    title: 'Los mocosos',
    description: 'Estos son puros mocosos'
};
console.log('album', album);
const picture = {
    id: 20,
    title: 'Foto de la playa',
    orientation: PhotoOrientation.Square
};
console.log('picture', picture);
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'Luna';
newPicture.orientation = PhotoOrientation.Panorama;
console.log('new picture', newPicture);
