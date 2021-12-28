import { Entity, EntityRepository, Repository } from "typeorm";

import Product from "../entities/Product";

interface Iprops {
  brand: string;
  shelf_life: string;
  stock: number;
}

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  public async findById(id: number) {
    const product = await this.findOne({
      where: {
        id,
      },
    });

    return product;
  }

  public async findByBrand(brand: string) {
    const product = await this.findOne({
      where: {
        brand,
      },
    });

    return product;
  }

  public async findByShelfLife(shelf_life: string) {
    const product = await this.findOne({
      where: {
        shelf_life,
      },
    });

    return product;
  }

  public async findByStock(stock: number) {
    const product = await this.findOne({
      where: {
        stock,
      },
    });

    return product;
  }

  public async findByBrandAndShelfLifeAndStock({
    brand,
    shelf_life,
    stock,
  }: Iprops) {
    const productBrand = await this.findByBrand(brand);
    if (productBrand) return true;

    const productShelfLife = await this.findByShelfLife(shelf_life);
    if (productShelfLife) return true;

    const productStock = await this.findByStock(stock);
    if (productStock) return true;

    return false;
  }
}
