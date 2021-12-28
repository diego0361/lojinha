import { Request, response, Response } from "express";
import {
  CreateProductService,
  DeleteProductService,
  ListProductsService,
  ShowProductService,
  UpdateProductService,
} from "../services";

interface Data {
  name: string;
  shelf_life: string;
  price: number;
  brand: string;
  stock: number;
}

export class ProductsController {
  public async index(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const product = await listProductsService.execute();

    res.json(product);
  }

  public async create(req: Request, res: Response) {
    const { name, shelf_life, price, brand, stock } = req.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      shelf_life,
      price,
      brand,
      stock,
    });

    res.json(product);
  }

  public async update(req: Request, res: Response) {
    const { name, shelf_life, price, brand, stock } = req.body;

    const { id } = req.params;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute(+id, {
      name,
      shelf_life,
      price,
      brand,
      stock,
    });

    res.json(product);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const showProductService = new ShowProductService();

    const product = await showProductService.execute(+id);

    res.json(product);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();

    const product = await deleteProductService.execute(+id);

    res.json(product);
  }
}
