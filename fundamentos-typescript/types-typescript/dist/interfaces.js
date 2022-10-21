"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
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
});
function showPicture2(picture) {
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
});
function generatePicture(config) {
    let picture = { title: 'Default', date: '000000' };
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-06' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'dmedina', isPro: true };
console.log('user', user);
user.username = 'vefy';
console.log('user', user);
