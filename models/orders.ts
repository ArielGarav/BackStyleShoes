import { Model, Schema, Types, model } from "mongoose";

interface IShippingDetails {
  name: string;
  cellphone: string;
  location: string;
  address: string;
}

interface IItem {
  id: number;
  precio: number;
  quantity: number;
  nombre: string;
}

export interface IOrder {
  createAt: Date;
  user: Types.ObjectId;
  price: number;
  shippingCost: number;
  items: IItem[];
  shippingDetails: IShippingDetails;
  status: string;
  total: number;
}

const OrderSchema = new Schema<IOrder>({
  createAt: {
    type: "Date",
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  shippingCost: {
    type: "Number",
  },
  items: {
    type: [
      {
        id: {
          type: "Number",
          required: true,
        },
        precio: {
          type: "Number",
          required: true,
        },
        quantity: {
          type: "Number",
          required: true,
        },
        nombre: {
          type: "String",
          required: true,
        },
      },
    ],
    required: true,
  },
  shippingDetails: {
    name: {
      type: "String",
      required: true,
    },
    cellphone: {
      type: "String",
      required: true,
    },
    location: {
      type: "String",
      required: true,
    },
    address: {
      type: "String",
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
  total: {
    type: "Number",
    required: true,
  },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;
