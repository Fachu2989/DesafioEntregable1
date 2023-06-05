class ProductManager{
    constructor(){
        this.products=[];
    }

    getProducts=()=>{
        return this.products;
    }

    addProducts=(title,description,price,thumbnail,code,stock)=>{
        const product={title,description,price,thumbnail,code,stock,products:[]}

        if(this.products.length===0){
            product.id=1
        } else{
            product.id=this.products[this.products.length -1].id+1
        }

        this.products.push(product)
    }

    getProductById=(categoriaId)=>{
        const indiProduct= this.products.findIndex(prod=>prod.id===categoriaId)
        if(indiProduct===-1){
            console.log('Not Found')
            return
        }
        const insertProduct= this.products[indiProduct].products.includes(categoriaId)
        if (insertProduct){
            console.log('producto Agregado')
            return
        }

        this.products[indiProduct].products.push(categoriaId)
    }
}
const createProducts= new ProductManager()

createProducts.addProducts('Camisa a cuadros','Una camisa de cuadros en tonos azules y rojos.',30,'Sin Imagen Disponible',72,11)
createProducts.addProducts('Buzo Gris','Un buzo de color gris perfecto para el invierno.',40,'Sin Imagen Disponible',39,5)
createProducts.addProducts('Remera Blanca','Una remera de color blanco con un estampado elegante.',25,'Sin Imagen Disponible',17,22)

createProducts.getProductById(1)
createProducts.getProductById(2)
createProducts.getProductById(3)

console.log(createProducts.getProducts())