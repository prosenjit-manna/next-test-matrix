const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  users: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    role: {
      type: String,
      enum: ['Owner', 'Admin', 'Member', 'Viewer'],
      required: true,
      default: 'Member',
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Workspace = mongoose.model('Workspace', workspaceSchema);

module.exports = Workspace;
