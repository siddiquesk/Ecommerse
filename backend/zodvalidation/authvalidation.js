const { z } = require("zod");
const signUpSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password cannot exceed 20 characters" }),
});

module.exports=signUpSchema;