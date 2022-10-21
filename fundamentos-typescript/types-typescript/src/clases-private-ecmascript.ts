export {};

// A partir de la version 3.8 de TypeScript

enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
};

// clases

class Picture {
    // Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor(
        id: number, title: string, orientation: PhotoOrientation
    ){
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`;
    };
}

// Album

class Album {
    // Propiedades
    #id: number;
    #title: string;
    #picture: Picture[];

    public constructor(
        id: number, title: string
    ){
        this.#id = id;
        this.#title = title;
        this.#picture = [];
    }

    public addPicture(picture: Picture) {
        this.#picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const pic: Picture = new Picture(1, 'yo y mi esposa', PhotoOrientation.Square);
album.addPicture(pic);
console.log('Album', album);


// pic.id = 100; // private Error
// pic.title = 'Another title'; // Private Error

// album.title = 'Personal Activities'; // Error
// console.log('Album modificado:', album);
