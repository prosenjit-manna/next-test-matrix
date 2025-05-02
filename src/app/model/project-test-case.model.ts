import mongoose, { Document, Schema, Model } from 'mongoose';

interface ITestStep {
  step: string;
  expectedResult: string;
}

export interface IProjectTestCase extends Document {
  projectId: mongoose.Types.ObjectId;
  workspaceId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  steps: ITestStep[];
  createdAt: Date;
}

const projectTestCaseSchema: Schema<IProjectTestCase> = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  workspaceId: { // Added workspaceId field
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  steps: [{
    step: { type: String },
    expectedResult: { type: String },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProjectTestCase: Model<IProjectTestCase> = mongoose.model<IProjectTestCase>('ProjectTestCase', projectTestCaseSchema);

export default ProjectTestCase;