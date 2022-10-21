export {};

enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
};

// clases

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(
        id: number, title: string, orientation: PhotoOrientation
    ){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    };
}

// Album

class Album {
    // Propiedades
    public id: number;
    public title: string;
    public picture: Picture[];

    public constructor(
        id: number, title: string
    ){
        this.id = id;
        this.title = title;
        this.picture = [];
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const pic: Picture = new Picture(1, 'yo y mi esposa', PhotoOrientation.Square);
album.addPicture(pic);
console.log('Album', album);

// Accediendo a los miembros publicos de las clases

pic.id = 100; // public
pic.title = 'Another title'; // public

album.title = 'Personal Activities';
console.log('Album modificado:', album);
