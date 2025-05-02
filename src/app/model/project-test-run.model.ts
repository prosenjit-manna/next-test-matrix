import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProjectTestRun extends Document {
  projectId: mongoose.Types.ObjectId;
  testCaseId: mongoose.Types.ObjectId;
  workspaceId: mongoose.Types.ObjectId;
  runDate: Date;
  status: 'Passed' | 'Failed' | 'Skipped' | 'In Progress';
  executedBy: mongoose.Types.ObjectId;
  remarks?: string;
}

const projectTestRunSchema: Schema<IProjectTestRun> = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
  testCaseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProjectTestCase',
    required: true,
  },
  runDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Passed', 'Failed', 'Skipped', 'In Progress'],
    required: true,
  },
  executedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  remarks: {
    type: String,
  },
});

const ProjectTestRun: Model<IProjectTestRun> = mongoose.model<IProjectTestRun>('ProjectTestRun', projectTestRunSchema);

export default ProjectTestRun;