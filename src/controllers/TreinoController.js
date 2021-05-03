import Treino from "../models/Treino";

class TreinoController {    
    async insert(req, res){
        const treino = new Treino(req.body);

        treino = await Treino.create(treino);

        return res.json(treino);
    }

    async find(req, res){
        const treinos = await Treino.find();

        return res.json(treinos);
    }
}

export default new TreinoController();