const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lorrySchema = new Schema({

    lorryNo: {
        type: String,
        unique: true,
    },
    driverName: {
        type: String,
       
    },
    isActive : {
        type : Boolean,
        default : true
    }
   
}, { timestamps: true });


module.exports = mongoose.model("Lorry", lorrySchema);
