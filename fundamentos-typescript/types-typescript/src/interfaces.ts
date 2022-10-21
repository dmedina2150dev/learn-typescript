export {};
// Funcion para mostrar una fotografia
enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
    Square, // 2
    Panorama // 3
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation}){
    console.log(`
        [
            title: ${picture.title},
            date: ${picture.date},
            orientation: ${picture.orientation}
        ]`);
}

let myPic = {
    title: 'Test Title',
    date: '2021-02-24',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test Title 2',
    date: '2021-02-24',
    orientation: PhotoOrientation.Panorama,
    // extra: 'test' //Error
});


// Refactorizacion con Interfaces
function showPicture2(picture: Picture){
    console.log(`
        [
            title: ${picture.title},
            date: ${picture.date},
            orientation: ${picture.orientation}
        ]`);
}
showPicture2(myPic);
showPicture2({
    title: 'Test Title 4',
    date: '2021-02-24',
    orientation: PhotoOrientation.Panorama,
    // extra: 'test' //Error
});


interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
    let picture = {title: 'Default', date: '000000'};
    if (config.title) {
        picture.title = config.title
    }

    if (config.date) {
        picture.date = config.date;
    }

    return picture;
}

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);

picture = generatePicture({title: 'Travel Pic', date: '2021-06'});
console.log('picture', picture);


// READONLY

// INTERFACE USUARIO
interface User {
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;

user = {id: 10, username: 'dmedina', isPro: true};
console.log('user', user);

user.username = 'vefy';
// user.id = 20;// Error
console.log('user', user);



