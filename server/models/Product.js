import mongoose from 'mongoose'
import {loadType} from 'mongoose-currency'

const Schema = mongoose.Schema
loadType(mongoose)

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency, // mongo currency multiples by 100
      currency: 'USD',
      get: (v) => v / 100, // so we divide by 100 when retrieving
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: 'USD',
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
      },
    ],
  },
  {timestamps: true, toJSON: {getters: true}}
)

const Product = mongoose.model('Product', ProductSchema)

export default Product
