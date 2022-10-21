"use strict";

// REFACTORIZACION

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Dajan", new Date());