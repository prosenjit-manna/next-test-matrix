import { Schema, model, Types, Document } from 'mongoose';

// ---- Types ----
export type WorkspaceRole = 'Owner' | 'Admin' | 'Member' | 'Viewer';

interface WorkspaceUser {
  userId: Types.ObjectId;
  role: WorkspaceRole;
}

export interface WorkspaceDocument extends Document {
  name: string;
  ownerId: Types.ObjectId;
  users: WorkspaceUser[];
  createdAt: Date;
}

// ---- Subschema ----
const workspaceUserSchema = new Schema<WorkspaceUser>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role: {
    type: String,
    enum: ['Owner', 'Admin', 'Member', 'Viewer'],
    required: true,
    default: 'Member',
  },
}, { _id: false });

// ---- Main Schema ----
const workspaceSchema = new Schema<WorkspaceDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  users: {
    type: [workspaceUserSchema],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ---- Model ----
const WorkspaceModel = model<WorkspaceDocument>('Workspace', workspaceSchema);

export default WorkspaceModel;
