import express from 'express'
import {createOrder, getOrders}  from '../controller/orderController.js'
const order = express.Router()

order.post('/orders',createOrder)

order.get('/getOrders',getOrders)
export default order