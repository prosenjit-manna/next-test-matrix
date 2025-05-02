import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProjectUserRole extends Document {
  projectId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  role: 'Admin' | 'Tester' | 'Manager' | 'Viewer';
}

const projectUserRoleSchema: Schema<IProjectUserRole> = new mongoose.Schema({
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
  role: {
    type: String,
    enum: ['Admin', 'Tester', 'Manager', 'Viewer'], // You can expand these roles as needed
    required: true,
  },
});

const ProjectUserRole: Model<IProjectUserRole> = mongoose.model<IProjectUserRole>('ProjectUserRole', projectUserRoleSchema);

export default ProjectUserRole;