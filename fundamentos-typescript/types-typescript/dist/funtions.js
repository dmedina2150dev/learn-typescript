"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    console.log('create Picture using:', title, date, size);
}
createPicture('miFoto', '2021-09-01', '500x500');
function createPicture2(title, date, size) {
    console.log('create Picture using 2:', title, date, size);
}
createPicture2('miFoto2', '2021-09-01', '500x500');
createPicture2('miFoto', '2021-02-01');
let createPic = (titulo, date, size) => {
    return {
        titulo,
        date,
        size
    };
};
const photo = createPic('miFoto3', '2019-02-24', '1000x1000');
console.log('photo', photo);
function handleError(code, message) {
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    let result = handleError(200, 'OK');
    console.log('resultado', result);
    result = handleError(400, 'error');
    console.log('resultado', result);
}
catch (error) {
}
