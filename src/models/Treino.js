import mongoose from "mongoose";

const treinoSchema = new mongoose.Schema({
    nome: String 
})

const Treino = mongoose.model('Treino', treinoSchema);

export default Treino;