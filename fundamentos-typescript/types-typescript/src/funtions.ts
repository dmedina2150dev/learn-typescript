// funtion JavaScript
// Crear una fotografia
// function createPicture(title, date, size) {

// }

export { };
type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usando TS definimos tipos para parametros
function createPicture(title: string, date: string, size: SquareSize) {
    //     // se crea la foto
    console.log('create Picture using:', title, date, size);
}

createPicture('miFoto', '2021-09-01', '500x500');
//createPicture('miFoto', '2021-02-01'); // Error

// Refactorizacion Parametros Opcionales
function createPicture2(title: string, date: string, size?: SquareSize) {
    // se crea la foto
    console.log('create Picture using 2:', title, date, size);
}

createPicture2('miFoto2', '2021-09-01', '500x500');
createPicture2('miFoto', '2021-02-01');

// Flat Array Function
let createPic = (titulo: string, date: string, size: SquareSize): object => {
    return {
        titulo,
        date,
        size
    };
};

const photo = createPic('miFoto3', '2019-02-24', '1000x1000');
console.log('photo', photo);


// Tipo de Retorno con TS
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo o del mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has ocurred';
    }
}



try {
    let result = handleError(200, 'OK'); // retorne un string
    console.log('resultado', result);

    result = handleError(400, 'error'); // un valor never
    console.log('resultado', result);
} catch (error) {

}