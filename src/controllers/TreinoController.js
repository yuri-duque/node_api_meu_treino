import Treino from "../models/Treino";
import TreinoService from "../service/TreinoService";
import ErroHandler from "../utils/ErroHandler";

class TreinoController {
  async insert(req, res) {
    const treino = new Treino(req.body);

    try {
      // inserindo treino
      await new TreinoService().insert(treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async find(req, res) {
    try {
      let treinos = await new TreinoService().find();

      return res.json(treinos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async findById(req, res) {
    const { id } = req.params;

    try {
      let treino = await new TreinoService().findById(id);

      return res.json(treino);
    } catch (err) {
      ErroHandler.retorno(res, err);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    let treino = new Treino(req.body);

    try {
      treino = await new TreinoService().findByIdAndUpdate(id, treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const treino = await new TreinoService().findByIdAndDelete(id);

      return res.status(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new TreinoController();
