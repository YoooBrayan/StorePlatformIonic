export interface Product{
    id?:number;
    nombre:string;
    descripcion:string;
    tipo:number;
    valor:number;
    cantidad:number;
    foto?:string;
    id_negocio?:number;
}