import mongoose from "mongoose";

class MongooseConnection {
  Connection() {
    const connectionString = process.env.CONNECTION_STRING;

    mongoose.connect(`${connectionString}`, {
      useUnifiedTopology: true,
    });

    var db = mongoose.connection;
    
    if (!db) console.log("Error connecting db");
    else console.log("Db connected successfully");
  }
}

export default new MongooseConnection();
