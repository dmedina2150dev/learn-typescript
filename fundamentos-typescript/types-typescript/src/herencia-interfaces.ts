export {};

enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
};

interface Entity {
    id: number;
    title: string;
};

// representamos albunes
interface Album extends Entity {
    // Copia de los atributos de entity
    description: string;
};

interface Picture extends Entity {
    orientation: PhotoOrientation;
};

const album: Album = {
    id: 1,
    title: 'Los mocosos',
    description: 'Estos son puros mocosos'
};
console.log('album', album);

const picture: Picture = {
    id: 20,
    title: 'Foto de la playa',
    orientation: PhotoOrientation.Square
};

console.log('picture', picture);

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Luna';
newPicture.orientation = PhotoOrientation.Panorama;

console.log('new picture', newPicture);
