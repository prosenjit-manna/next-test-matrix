import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProjectUser extends Document {
  projectId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
}

const projectUserSchema: Schema<IProjectUser> = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
});

const ProjectUser: Model<IProjectUser> = mongoose.model<IProjectUser>('ProjectUser', projectUserSchema);

export default ProjectUser;