import mongoose from "mongoose";

class MongooseConnection {
  Connection() {
    const connectionString = process.env.CONNECTION_STRING;
    const database = process.env.DATABASE;

    mongoose.connect(`${connectionString}/${database}`, {
        useUnifiedTopology: true
    });
  }
}

export default new MongooseConnection();
