// Import required modules
import { User } from "../models/Usermodel.js"; // Assuming you have a User model

// Controller for handling login logic
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists in database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if password is correct
    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    // Authentication successful
    res.status(200).json({ success: true, message: "Login successful", user });
  } catch (error) {
    // Handle errors
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
