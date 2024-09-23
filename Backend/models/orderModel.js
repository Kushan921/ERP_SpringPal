const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: {
        type: String,
        unique: true,
    },
    customId: {
        type: String,
        required: true
    },
    customer: {
        customerName: {
            type: String,
            required: true,
        },
        customerMobile: {
            type: String,
            required: true,
        },
        customerAddress: {
            type: String,
            required: true,
        }
    },
    productName: {
        type: String,
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        price: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        advance: {
            type: Number,
            required: true,
        },
        balance: {
            type: Number,
            required: true,
        }
    },
    shipping: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    placeDate: {
        type: Date,
        required: true,
    },
    deliverDate: {
        type: Date,
        required: true,
    },
    placeBy: {
        type: String,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
    },
    factoryStatus: {
        type: String,
        required: true,
    },
    note: {
        type: String
    },
    lorryNo: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
