// 100x100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000';

// let smallPicture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';

console.log('small', smallPicture);
console.log('medium', mediumPicture);
console.log('large', largePicture);