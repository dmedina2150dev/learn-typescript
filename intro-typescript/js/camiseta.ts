// interface
interface CamisetaBase{
    setColor(color: any);
    getColor();
}

// decorador
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function():void{
            console.log("camiseta estampada con el logo de: "+logo);
        }
    }
}


// Clase (Es el molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    [x: string]: any;
    // Propiedades (Caracteristicas del objeto) 
    /**
     *  Si la propoedades esta public cualquier instancia de
     * la clase las puede modificar
     *  
     * Si esta private solo los metodos de la dicha clase puede modificarlos
     * 
     * 
     * */   
    private color: string = "";
    private modelo: string = "";
    private marca: string = "";
    private talla: string = "";
    private precio: number = 0;


    // Metodos (que son funciones o acciones que tendra el objeto)

    // consturctor
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.talla = talla;
        this.precio = precio;
    }

    /**
     * Metodo para cambiar el color
     * setColor
     */
    public setColor(color: string) {
        this.color = color;
    }

    /**
     * getColor
     */
    public getColor() {
        return this.color;
    }

}

var camiseta = new Camiseta("Rojo", "manga larga","nike", "L", 14);
camiseta.estampacion();
// camiseta.getColor();

// var plallera = new Camiseta("Azul", "Manga corta", "addidas", "M", 20);
// plallera.setColor("Azul");
// camiseta.getColor();

console.log(camiseta);
// clase hija
class Sudadera extends Camiseta{
    public capucha: boolean = false;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(): boolean{
        return this.capucha;
    }
}
var sudadera = new Sudadera("Negra", " Manga larga", "nike", "M", 16);
sudadera.setCapucha(true);
sudadera.getCapucha();
console.log(sudadera);





