import { Int32 } from "bson";
import mongoose from "mongoose";

const treinoSchema = new mongoose.Schema({
    nome: String,
    exercicios: [
        {
            nome: String,
            musculo: String,
            sets: [
                {
                    repeticoes: Int32,
                    isKg: Boolean,
                    peso: Int32
                }
            ]
        }
    ]
})

const Treino = mongoose.model('Treino', treinoSchema);

export default Treino;