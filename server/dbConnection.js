const mongoose = require("mongoose");

const db = async () => {
  mongoose.connect(process.env.DATABASE_ACESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database Connected");
};

module.exports = db;
