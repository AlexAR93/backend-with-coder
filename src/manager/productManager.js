import fs from "fs";
const createJsonFile = async () => {
  if (!fs.existsSync("../db/products.json")) {
    return await fs.promises.writeFile("../db/products.json", "[]");
  }
};
createJsonFile();

export class ProductManager {
  constructor() {
    this.path = "../db/products.json";
    this.products=[];
    this.autoId=0;
  }

  async addProduct(newArray){

    // 
    if(((newArray.title&&newArray.description&&newArray.price&&newArray.stock&&newArray.thumbnail!=undefined)||(newArray.title&&newArray.description&&newArray.price&&newArray.stock&&newArray.thumbnail!=null))&&((newArray.title.length>1&&newArray.description.length>1&&newArray.thumbnail.length>1)==true)){ 
      this.autoId+=1  
      newArray.id=this.autoId;
      const productFile = await fs.promises.readFile(this.path, "utf-8");
      this.products=JSON.parse(productFile);
      this.products.push(newArray);
      await fs.promises.writeFile(this.path,JSON.stringify(this.products));
      }else{
          return alert(`producto numero ${this.autoId} incompleto, revisa que esten los campos completos`)
      }
    //
    
}

  async getProducts() {
    const productFile = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(productFile)
  }

  async getProductById(id) {
    const productFile = await fs.promises.readFile(this.path, "utf-8");
    const productFileParse = JSON.parse(productFile);
    let productSearch=productFileParse.find(p=>p.id==id)
        return productSearch!=undefined?productSearch:(console.log('Not found'),alert('Este id no pertenece a ningun producto'))
  }

  async updateProduct(id,title,price,description,stock,thumbnail) {
    const productFile = await fs.promises.readFile(this.path, "utf-8");
    const productFileParse = JSON.parse(productFile);

    let index=productFileParse.findIndex(p=>p.id==id)
    console.log(index)
    return index!=-1?(productFileParse[index]={
        ...productFileParse[index],
        title:title,
        price:price,
        description:description,
        stock:stock,
        thumbnail:thumbnail
    }):alert('Producto no encontrado')
  }

  async deleteProduct(id) {
    const productFile = await fs.promises.readFile(this.path, "utf-8");
    const productFileParse = JSON.parse(productFile);

    let index=productFileParse.findIndex(p=>p.id==id)
    index!=-1?productFileParse.splice(index,1):alert('Producto no encontrado para eliminar')
  }
}


// const gg= new ProductManager()
// gg.addProduct({
//   title:'Mouse',
//   price:3500,
//   description:'Este es un producto muy bueno',
//   stock:10,
//   thumbnail:'https://...'
// })


// !
// const productsValidation=(array,arrayContainer,autoId)=>{
//   if(((array.title&&array.description&&array.price&&array.stock&&array.thumbnail!=undefined)||(array.title&&array.description&&array.price&&array.stock&&array.thumbnail!=null))&&((array.title.length>1&&array.description.length>1&&array.thumbnail.length>1)==true)){
//       arrayContainer.push(array)
      
//       return array.id=autoId+1
//       }else{
//           alert(`producto numero ${autoId} incompleto, revisa que esten los campos completos`)
//           return autoId
//       }
// }