import Treino from "../models/Treino";

class TreinoController {    
    async insert(req, res){
        const treino = await Treino.create(req.body);
        
        const treinos = await Treino.find();

        return res.json(treinos);
    }
}

export default new TreinoController();