// Usermodel.js

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  twoFactorAuth: {
    type: Boolean,
    default: false
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

userSchema.methods.generateResetToken = async function() {
  try {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = resetToken;
    this.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await this.save();
    return resetToken;
  } catch (error) {
    throw error;
  }
};

userSchema.statics.findByResetToken = async function(token) {
  try {
    return await this.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() } // Token should not be expired
    });
  } catch (error) {
    throw error;
  }
};

userSchema.statics.findByEmail = async function(email) {
  try {
    return await this.findOne({ email });
  } catch (error) {
    throw error;
  }
};

userSchema.statics.signup = async function(name, email, password) {
  try {
    const user = new this({ name, email, password });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export { User };