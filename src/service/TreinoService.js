import TreinoRepository from "../infrastructure/repository/TreinoRepository";
import {NotFoundError} from "../utils/Erros";

export default class TreinoService {
  async find() {
    const treinos = await new TreinoRepository().find();

    return treinos;
  }

  async findById(id) {
    const treino = await new TreinoRepository().findById(id);

    if (!treino) throw new NotFoundError("Treino não encontrado!");

    return treino;
  }

  async insert(treino) {
    await new TreinoRepository().create(treino);

    return treino;
  }

  async update(id, treino) {
    treino = await new TreinoRepository().findByIdAndUpdate(id, treino);

    return treino;
  }

  async delete(id) {
    const treino = await new TreinoRepository().findByIdAndDelete(id);

    return treino;
  }
}
