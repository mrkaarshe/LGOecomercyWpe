import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  info: {
    name: String,
    email: String,
    address: String,
    phone: String,
    city: String,
    postal: String
  },
  products: [
    {
      productId: String,
      productTitle: String,
      price: Number,
      quantity: Number
    }
  ],
  status: { type: String, default: "Pending" }
}, { timestamps: true });

export default mongoose.model('orders', OrderSchema);
