import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  createdAt: Date;
}

const projectSchema: Schema<IProject> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project: Model<IProject> = mongoose.model<IProject>('Project', projectSchema);

export default Project;