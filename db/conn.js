const mongoose = require("mongoose")
require("dotenv").config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

async function main() {
    try {
        mongoose.set("strictQuery", true)
        await mongoose
        .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@partyt.nufucf2.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Coenctado ao banco!")
    } catch(error) {
        console.log(error)
    }
}

module.exports = main