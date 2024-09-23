const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({

    lorryNo: {
        type: Schema.Types.ObjectId,  // Use ObjectId to reference another collection
        ref: 'Lorry',                 // Reference the Lorry model
        required: true,
        
    },
    driverName: {
        type: String
    },
    route: {
        type: String,
        required : true
       
    },
    paidForFuel: {
        type: Number,
        required : true
    },
    actualFuel: {
        type: Number,
        required : true
    },
    distance: {
        type: Number,
        required : true
    },
    date: {
        type: Date,
        required : true
    }   
   
}, { timestamps: true });


module.exports = mongoose.model("Route", routeSchema);
