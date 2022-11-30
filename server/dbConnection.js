const mongoose = require("mongoose");

const db = async () => {
  mongoose.connect(
    "mongodb+srv://irineu:OZKTiOHrXltxZV27@firsttime.98lnd7b.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  console.log("Database Connected");
};

module.exports = db;
