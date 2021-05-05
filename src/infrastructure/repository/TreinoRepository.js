import Treino from "../../models/Treino";

export default class TreinoRepository {
  async find() {
    const treinos = await Treino.find();

    return treinos;
  }

  async findById(id) {
    const treino = await Treino.findById(id);

    return treino;
  }

  async insert(treino) {
    await Treino.create(treino);

    return treino;
  }

  async update(id, treino) {
    treino = await Treino.updateOne(id, treino);

    return treino;
  }

  async delete(id) {
    const treino = await Treino.deleteOne(id);

    return treino;
  }
}
