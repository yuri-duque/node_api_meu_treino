import Treino from "../models/Treino";

class TreinoController {
  async insert(req, res) {
    const treino = new Treino(req.body);

    try {
      // inserindo treino
      await Treino.create(treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  async find(req, res) {
    try {
      // busca todos os treinos
      let treinos = await Treino.find();

      return res.json(treinos);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  async findById(req, res) {
    const { id } = req.params;

    try {
      // busca o treino pelo id
      let treino = await Treino.findById(id);

      if (treino) return res.json(treino);
      else return res.status(404).json({ message: "Treino não encontrado!" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    let treino = new Treino(req.body);

    try {
      // encontra e atualiza o treino
      treino = await Treino.findByIdAndUpdate(id, treino);

      return res.json(treino);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      // encontra e deleta o treino
      const treino = await Treino.findByIdAndDelete(id);

      return res.status(200);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}

export default new TreinoController();
