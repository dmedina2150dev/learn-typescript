export {};

enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
};

// get y set

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(
        id: number, title: string, orientation: PhotoOrientation
    ){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id(){
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }

    get orientation(){
        return this._orientation;
    }

    set orientatio(o: PhotoOrientation) {
        this._orientation = o;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    };
}

// Album

class Album {
    // Propiedades
    private _id: number;
    private _title: string;
    private picture: Picture[];

    public constructor(
        id: number, title: string
    ){
        this._id = id;
        this._title = title;
        this.picture = [];
    }

    get id(){
        return this._id;
    }

    set id(id: number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(t: string){
        this._title = t;
    }



    public addPicture(picture: Picture) {
        this.picture.push(picture);
    }
}

const album: Album = new Album(1, 'Personal Picture');
const pic: Picture = new Picture(1, 'yo y mi esposa', PhotoOrientation.Square);
album.addPicture(pic);
console.log('Album', album);

console.log('picture.id', pic.id);


pic.id = 100; // private Error
pic.title = 'Another title'; // Private Error

album.title = 'Personal Activities'; // Error
console.log('Album modificado:', album);
