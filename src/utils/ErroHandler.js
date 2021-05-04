import { NotFoundError } from "./Erros";

class ErroHandler {
  retorno(res, err) {
    if (err instanceof NotFoundError) {
      res.status(err.status).json({ message: err.message });
    } else {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new ErroHandler();
