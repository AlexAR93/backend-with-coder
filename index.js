
const productsValidation=(array,arrayContainer,autoId)=>{
    if(((array.title&&array.description&&array.price&&array.stock&&array.thumbnail!=undefined)||(array.title&&array.description&&array.price&&array.stock&&array.thumbnail!=null))&&((array.title.length>1&&array.description.length>1&&array.thumbnail.length>1)==true)){
        arrayContainer.push(array)
        return array.id=autoId+1
        }else{
            alert(`producto numero ${autoId} incompleto, revisa que esten los campos completos`)
            return autoId
        }
}

class Contenedor {
    constructor() {
        this.produdcts=[];
        this.autoId=0;
    }

    save(newArray){
        this.autoId=productsValidation(newArray,this.produdcts,this.autoId)
    }
    getById(id){
        let productSearch=this.produdcts.find(p=>p.id==id)
        return productSearch!=undefined?productSearch:(console.log('Not found'),alert('Este id no pertenece a ningun producto'))
    }
    getAll(){
        return this.produdcts
    }
    deleteById(id){
        // Elimina el objeto con el id buscado
        let index=this.produdcts.findIndex(p=>p.id==id)
        index!=-1?this.produdcts.splice(index,1):alert('Producto no encontrado para eliminar')
    }
    deleteAll(){
        // Elimina todos los objetos presente
        return this.produdcts.splice(0)
    }
    updateProduct(id,title,price,description,stock,thumbnail){
        // Actualiza determinado producto
        let index=this.produdcts.findIndex(p=>p.id==id)
        console.log(index)
        return index!=-1?(this.produdcts[index]={
            ...this.produdcts[index],
            title:title,
            price:price,
            description:description,
            stock:stock,
            thumbnail:thumbnail
        }):alert('Producto no encontrado')
    }
    
  }

const produdctsContainer=new Contenedor()



const newArray={
    title:'Mouse',
    price:3500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray1={
    title:'Teclado',
    price:5500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray2={
    title:'Monitor',
    price:55500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};
const newArray4={
    title:'Grafica',
    price:135500,
    description:'Este es un producto muy bueno',
    stock:10,
    thumbnail:'https://...'
};


produdctsContainer.save(newArray)

produdctsContainer.save(newArray1)

produdctsContainer.save(newArray2)



console.log(produdctsContainer)