class BinarySearch {
    constructor(
        private item: string, //Elemento a buscar
        private elements: string[], //Arreglo de elementos
    ){

    }
    public search(): string {
        var index: number; //índice o contador
        var bottom: number = 0; //Primera mitad
        var top: number = this.elements.length - 1; //Última mitad
        var mid: number; //Media

        while ( bottom <= top ) { //recorre arreglo
        		mid = Math.floor((top + bottom) / 2); //obtiene punto medio del arreglo
            if ( this.elements[mid] == this.item ) {
                index = mid; //indice se coloca en posición media
                break;
            } else {
                if ( this.elements[mid] < this.item ) {
                    bottom = mid + 1;  //busca desde el principio
                }
                else {
                    top = mid - 1; //busca desde el final
                }
            }
        }
        return item;
    }
}

let elements = ['manzana', 'plátano', 'cereza', 'fechas', 'huevos', 'higos', 'uvas']; //arreglo de elementos
let item = 'cereza'; //elemento a comparar
