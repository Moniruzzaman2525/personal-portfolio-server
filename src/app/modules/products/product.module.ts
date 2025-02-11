import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

// Stationery Product Schema
const productsSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  user: {
    type: String,
    required: [true, 'User is required'],
  },
  liveLink: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Image is required'],
  },
},
  {
    timestamps: true,
  },
);

// Stationery Product Model
export const Products = model<TProduct>('Products', productsSchema);
