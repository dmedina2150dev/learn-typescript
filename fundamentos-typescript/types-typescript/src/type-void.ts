// Void

// Explicito
function showInfo(user: any): any {
    console.log('User info: ', user.id, user.username, user.firstName);
}

showInfo({id: 1, username: 'dmedina', firstName: 'Dajan'});

// inferido
function showFormattedInfo(user: any) {
    console.log('User info: ', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstName}
    `);
}

showFormattedInfo({id: 1, username: 'dmedina', firstName: 'Dajan'});

// tipo void, como tipo de dato en una variable
let unusable: void;
// unusable = null; // Error 
unusable = undefined;


// Tipo Never

function handleError(code: number, message: string): never {
    // proceso o logica de negocio para validar el error

    // generar un mensaje

    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {}


function sumNumbers(limit: number): never {
    let sum = 0;

    while (true) {
        sum++;
    }

    // return sum;
}

//sumNumbers(10);