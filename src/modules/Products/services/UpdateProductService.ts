import { getCustomRepository } from "typeorm"
import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository"

interface Iprops {
    name: string,
    shelf_life: string,
    price: number,
    brand: string,
    stock: number
}

export class UpdateProductService {
    public async execute(id: number, { name, shelf_life, price, brand, stock }:Iprops): Promise<Product>{
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findById(id);

        if(!product){
            throw new Error('Produto não existe!')
        }

        product.name = name || product.name
        product.shelf_life = shelf_life || product.shelf_life
        product.price = price || product.price
        product.brand = brand || product.brand
        product.stock = stock || product.stock

        await productsRepository.update(id, product)

        return product;
    }
}

export default UpdateProductService;