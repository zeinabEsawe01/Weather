const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://127.0.0.1:27017/weather", {
  useNewUrlParser: true,
});


const weatherSchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})



const Weather = mongoose.model("weather", weatherSchema)


module.exports = Weather

