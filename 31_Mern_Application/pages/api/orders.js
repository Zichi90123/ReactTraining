import Order from '../../models/Order'
import Product from "../../models/Product"

import jwt from 'jsonwebtoken'
import connectDb from '../../utils/connectDb'

connectDb()

export default async (req, res) => {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        console.log(userId)
        const orders = await Order.find({ user: userId }).sort({ createdAt: 'desc'}).populate({
            path: 'products.product',
            model: Product
        })
        console.log(orders)
        res.status(200).json({ orders })
    } catch (error) {
        console.error(error)
        res.status(403).send("Please login again")
    }
}