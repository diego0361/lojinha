import { getCustomRepository } from "typeorm";

import Product from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/ProductsRepository";

interface Iprops {
    name: string,
    shelf_life: string,
    price: number,
    brand: string,
    stock: number
}

export class CreateProductService {
    public async execute({ name, shelf_life, price, brand, stock }:Iprops): Promise <Product>{
        const productsRepository = getCustomRepository(ProductsRepository);

        const product = productsRepository.create({
            name,
            shelf_life,
            price,
            brand,
            stock
        })

        await productsRepository.save(product)

        return product;
    }
}
