const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    countryLocation: { type: String, required: true },
    recommendation: {type: String, required: true},
    food: {type: String, required: false},
    hotel: {type: String, required: false},
    feedback: {type: String, required: false},
    rating: {type: Number, required: true, max: 5}

}, { timestamps: true });

//  Create Model Schema
const User = mongoose.model('User', userSchema);

// Export Model
module.exports = User;