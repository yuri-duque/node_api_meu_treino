import {Router} from 'express';
import TreinoController from "./controllers/TreinoController"

const routes = Router();

routes.post("/treino", TreinoController.insert);

export {routes};