const mongoose = require("mongoose");
const dotEnv = require('dotenv')

dotEnv.config()

module.exports = connectDb = () => {
  mongoose.connect(process.env.MONGODB_CONNECTION , { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongodb connected..!"))
  .catch(err => console.log("mongdb not connection..!", err));
};