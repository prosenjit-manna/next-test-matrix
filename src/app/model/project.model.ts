import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProject extends Document {
  name: string;
  workspaceId: mongoose.Types.ObjectId;
  description: string;
  createdAt: Date;
}

const projectSchema: Schema<IProject> = new mongoose.Schema({
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
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