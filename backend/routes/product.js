import express from 'express'
import { productModel } from '../model/productModel.js';


const router = express.Router();

//get products
router.get('/products', async(req, res, next)=>{

    try {
        const products = await productModel.find({}) 
       
            res.status(200).json({
                success : true,
                message : 'get products sucessfully',
                products
            })
       

    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Internal server error'
        })
    }
})

//get single product 
router.get('/products/:id', async(req, res, next)=>{
    // console.log(req.params.id, 'ID')
   try {
       const product = await productModel.findById(req.params.id)
      
        res.status(200).json({
            success : true,
            message : 'get single Product sucessfully',
            product
        })
      
    
   } catch (error) {
    res.status(500).json({
        success : false,
        message : 'Internal server error'
    })
    
   }

})

//



export const productRouter = router