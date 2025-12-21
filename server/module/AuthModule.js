import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    email:  { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    name:   { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('Auth', authSchema);