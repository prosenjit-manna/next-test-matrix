import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: { type: [String], default: ['user'] },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;