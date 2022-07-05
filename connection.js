const mongoose = require("mongoose")

const connectionString = "mongodb://127.0.0.1:27017/Human_Resources"

const connectionWithMongoose = async () => {
  try {
    const connection = await mongoose.connect(connectionString)
    console.log("Connected to Human_Resources Database.....")
    return connection
  } catch (e) {
    console.error("Error while connecting to Database.", e)
  }
}

module.exports = connectionWithMongoose
