import {Router} from 'express';
import TreinoController from "./controllers/TreinoController"

const routes = Router();

routes.post("/treino", TreinoController.insert);
routes.get("/treino", TreinoController.find);
routes.get("/treino/:id", TreinoController.findById);
routes.put("/treino/:id", TreinoController.update);
routes.delete("/treino/:id", TreinoController.delete);

export {routes};