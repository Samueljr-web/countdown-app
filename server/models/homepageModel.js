const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const formSchema = new Schema({
    eventName: String,
    reason: String,
    date:Date
})

const Form = mongoose.model("Form", formSchema);

module.exports = Form;