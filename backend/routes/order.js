import express from 'express'
import { orderModel } from '../model/orderModel.js';
import { productModel } from '../model/productModel.js';


const router = express.Router();

//
router.post('/orders', async(req, res, next)=>{
// console.log(req.body, 'data')
    try {
        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc, item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
        // console.log(amount)
        const status = 'pending';

        const order = await orderModel.create({cartItems, amount, status })

        //updating stock qty
        cartItems.forEach(async(item) => {
            const product = await productModel.findById(item.product._id);
            product.stock = product.stock - item.qty;
            await product.save()
        });

        res.status(200).json({
            success : true,
            order 
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Internal server error'
        })
    }
    
})


export const orderRouter = router