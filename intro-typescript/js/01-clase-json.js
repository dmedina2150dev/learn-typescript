console.log("Clase js");

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevoColor) {
        // bicicleta.color = nuevoColor;

        this.color = nuevoColor;
        console.log(this);
    },
};

bicicleta.cambiaColor('azul');
console.log(bicicleta);