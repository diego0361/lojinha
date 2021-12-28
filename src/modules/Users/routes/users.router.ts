import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

const routes = Router();

const usersController = new UsersController();

routes.get("/", usersController.index);
routes.post("/", usersController.create);
routes.put("/:id", usersController.update);
routes.get("/:id", usersController.show);
routes.delete("/:id", usersController.delete);

export default routes;
