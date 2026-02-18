import { error } from "console";
import { User } from "../models/user.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import bcrypt from "bcryptjs";
import fs from "fs";


const register = async (req, res) => {
    try {
        const { username, email, password, role, number } = req.body;
    
    if (!name || !email || !password || !role || !number) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    let photoUrl = '';
    if (req.file) {
        try {
        photoUrl = await uploadImage(req.file);
        }catch (error){
            return res.status(500).json({ message:error.message });
        }
    }
    const user = new User ({
        username,
        email,
        password,
        role,
        number,
        photo:photoUrl
    });
    await user.save();

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    return res.status(200).json({message:"User registered successfully", user:createdUser})
    }
    catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: error.message });
    }
};   

const login = async (req, res) => {
    const {email, username, password} = req.body;

    if(!username || !email){
        return res.status(400).json({message:"Please provide email and username"});
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        return res.status(404).json({message:"user does not exist"})
    }


} 
export { register, login };