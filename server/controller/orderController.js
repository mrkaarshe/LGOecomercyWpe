
import Orders from "../models/Orders.js"

export const createOrder = async (req, res) => {
  try {
    const { products, info, status } = req.body;

    const newOrder = new Orders({
      products,
      info,
      status
    });

    await newOrder.save();

    res.status(201).json({ message: "Order created", order: newOrder });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};



export const getOrders = async(req,res)=>{
    const userOrders = await Orders.find()
    res.status(201).json({ message: "all orders", userOrders });
}


