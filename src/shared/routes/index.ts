import { Router } from "express";
import UserRoutes from "@src/modules/Users/routes/users.router";
import ProductRoutes from "@src/modules/Products/routes/ProductRoutes";
import OrderRoutes from "@src/modules/Orders/routes/OrderRoutes";

const routes = Router();

routes.use("/users", UserRoutes);
routes.use("/products", ProductRoutes);
routes.use("/order", OrderRoutes)

export default routes;
