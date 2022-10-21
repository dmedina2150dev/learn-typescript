var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (Es el molde del objeto)
var Camiseta = /** @class */ (function () {
    // Metodos (que son funciones o acciones que tendra el objeto)
    // consturctor
    function Camiseta(color, modelo, marca, talla, precio) {
        // Propiedades (Caracteristicas del objeto) 
        /**
         *  Si la propoedades esta public cualquier instancia de
         * la clase las puede modificar
         *
         * Si esta private solo los metodos de la dicha clase puede modificarlos
         *
         *
         * */
        this.color = "";
        this.modelo = "";
        this.marca = "";
        this.talla = "";
        this.precio = 0;
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
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    /**
     * getColor
     */
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
var camiseta = new Camiseta("Rojo", "manga larga", "nike", "L", 14);
camiseta.estampacion();
// camiseta.getColor();
// var plallera = new Camiseta("Azul", "Manga corta", "addidas", "M", 20);
// plallera.setColor("Azul");
// camiseta.getColor();
console.log(camiseta);
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.capucha = false;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("Negra", " Manga larga", "nike", "M", 16);
sudadera.setCapucha(true);
sudadera.getCapucha();
console.log(sudadera);
