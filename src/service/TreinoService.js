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
    await new TreinoRepository().insert(treino);

    return treino;
  }

  async update(id, treino) {
    await this.findById(id);

    treino = await new TreinoRepository().update(id, treino);

    return treino;
  }

  async delete(id) {
    await this.findById(id);

    const treino = await new TreinoRepository().delete(id);

    return treino;
  }
}
