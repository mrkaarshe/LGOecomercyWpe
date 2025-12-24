import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Async thunk for placing order
export const placeOrder = createAsyncThunk(
  'orders/placeOrder',
  async (orderData, thunkAPI) => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.post(
        'https://lgoecomercywpe.onrender.com/api/order/orders',
        orderData, // order object
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        }
      )
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
  }
)

const initialState = {
  orders: [],
  status: 'idle',
  error: null
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder(state, action) {
      state.orders.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.orders.push(action.payload)
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export const { addToOrder } = ordersSlice.actions
export default ordersSlice.reducer
