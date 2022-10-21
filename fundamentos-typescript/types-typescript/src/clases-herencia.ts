export {};

enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
};

// Super clase para  herencia
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    /*   set id(id: number){
        this._id = id;// Error porque se coloco readonly
    } */

    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }
}

class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    // Propiedades
    private _orientation: PhotoOrientation;

    public constructor(
        id: number, title: string, orientation: PhotoOrientation
    ){
        super(id, title);
        this._orientation = orientation;
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

class Album extends Item {
    // Propiedades
    private picture: Picture[];

    public constructor(
        id: number, title: string
    ){
        // constructor de super clase
        super(id, title);
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

console.log('picture.id', pic.id);


//pic.id = 100; // private Error y otro error luego or el readonly
pic.title = 'Another title'; // Private Error

album.title = 'Personal Activities'; // Error
console.log('Album modificado:', album);

//const item = new Item(2, 'test title');// Al colocar el abstract delante de la clase no permite hacer instancia de esa clase
//console.log('Item', item);



// miembro static
console.log('PhotoOrientation', Picture.photoOrientation.Square);