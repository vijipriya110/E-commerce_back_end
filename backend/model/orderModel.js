import mongoose, { model } from 'mongoose'

const orderSchema = new mongoose.Schema({
    cartItems : Array,
    amount : String,
    status : String,
    createdAt : Date
})

const orderModel = mongoose.model('Order', orderSchema)

export {orderModel}