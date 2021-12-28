import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController";

const routes = Router();

const productsController = new ProductsController();

routes.get("/", productsController.index);
routes.post("/", productsController.create);
routes.put("/:id", productsController.update);
routes.get("/:id", productsController.show);
routes.delete("/:id", productsController.delete);

export default routes;
