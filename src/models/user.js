import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
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
    role: { 
        type: String,
        enum:['house_owner','broker','user'],
        default: 'user' 

    },
    number: { 
        type: Number,
        required:true 
    },
    photo: { 
        type: String 
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);