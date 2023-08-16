import { Model, Schema, Types, model } from "mongoose";

export interface IIssue {
  title: string;
  description: string;
  priority: number;
  user: Types.ObjectId;
  createdAt: Date;
}

const IssueSchema = new Schema<IIssue>({
  title: {
    type: String,
    required: [true, "El tititulo es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "la description es obligatoria"],
  },
  priority: {
    type: Number,
    required: [true, "la Prioridad es obligatoria"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Issue: Model<IIssue> = model<IIssue>("Issue", IssueSchema);

export default Issue;
