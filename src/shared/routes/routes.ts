import { Router } from 'express';
import UserRoutes from '@src/modules/Users/routes/users.router'
import ProductRoutes from '@src/modules/Products/routes/ProductRoutes';

const routes = Router();

routes.use('/users', UserRoutes)
routes.use('/products', ProductRoutes)

export default routes;