
class Contenedor {
    constructor() {
        this.produdcts=[]

    }

    save(newArray){
        return this.produdcts.push(newArray)
    }
    getById(id){
        return this.produdcts.find(p=>p.id==id)
    }
    getAll(){
        return this.produdcts
    }
    deleteById(id){
        // Elimina el objeto con el id buscado
        let index=this.produdcts.findIndex(p=>p.id==id)
        this.produdcts.splice(index,1)
    }
    deleteAll(){
        // Elimina todos los objetos presente
        return this.produdcts.splice(0)
    }
  }

const produdctsContainer=new Contenedor()



const newArray={
    id:1,
    title:'Mouse',
    price:3500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray1={
    id:2,
    title:'Teclado',
    price:5500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray2={
    id:3,
    title:'Monitor',
    price:55500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray4={
    id:4,
    title:'Grafica',
    price:135500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};


produdctsContainer.save(newArray)

produdctsContainer.save(newArray1)

produdctsContainer.save(newArray2)

produdctsContainer.deleteById(2);
console.log(produdctsContainer)
produdctsContainer.save(newArray4)
console.log(produdctsContainer)
produdctsContainer.deleteAll()
console.log(produdctsContainer)
produdctsContainer.save(newArray)

produdctsContainer.save(newArray1)

produdctsContainer.save(newArray2)
console.log(produdctsContainer)