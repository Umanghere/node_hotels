const { default: mongoose } = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum:['sweet', 'salty', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: [],
        required: true
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const menuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = menuItem;