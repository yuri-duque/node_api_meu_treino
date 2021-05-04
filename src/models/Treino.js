import mongoose from "mongoose";

const treinoSchema = new mongoose.Schema({
    nome: String,
    exercicios: [
        {
            nome: String,
            musculo: String,
            sets: [
                {
                    repeticoes: Number,
                    isKg: Boolean,
                    peso: Number
                }
            ]
        }
    ]
});

const Treino = mongoose.model('Treino', treinoSchema);

export default Treino;