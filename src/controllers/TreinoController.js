import Treino from "../models/Treino";
import TreinoService from "../service/TreinoService";
import ErroHandler from "../utils/ErroHandler";

class TreinoController {
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

  async insert(req, res) {
    const treino = new Treino(req.body);

    try {
      await new TreinoService().insert(treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    let treino = new Treino(req.body);

    try {
      treino = await new TreinoService().update(id, treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const treino = await new TreinoService().delete(id);

      return res.status(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new TreinoController();
