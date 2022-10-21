import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(10, 'dmedina', 'Dajan', true);

const album = new Album(1, 'Album Personal');

const picture = new Picture(1, 'boda', '20-11-2021', PhotoOrientation.Square);

// Creamos relaciones

user.addAlbum(album);

album.addPicture(picture);

console.log('user', user);

user.removeAlbum(album);
console.log('user sin album:', user);

