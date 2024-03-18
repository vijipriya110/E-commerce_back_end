import express from 'express'
import dotenv from 'dotenv'
import { productRouter } from './backend/routes/product.js';
import { orderRouter } from './backend/routes/order.js';
import { dbConnection } from './db.js';
import cors from "cors";


dotenv.config()
const PORT = process.env.PORT;


const app = express()

//middleware
app.use(express.json());
app.use(cors());

dbConnection()

app.use('/api',productRouter)
app.use('/api',orderRouter)



app.listen(PORT, ()=> console.log("sever listing port localhost", `${PORT}`));