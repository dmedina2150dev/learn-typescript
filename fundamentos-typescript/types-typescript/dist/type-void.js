"use strict";
function showInfo(user) {
    console.log('User info: ', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'dmedina', firstName: 'Dajan' });
function showFormattedInfo(user) {
    console.log('User info: ', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstName}
    `);
}
showFormattedInfo({ id: 1, username: 'dmedina', firstName: 'Dajan' });
let unusable;
unusable = undefined;
function handleError(code, message) {
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
