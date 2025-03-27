const {z} =require("zod");

const contactSchema=z.object({
  username: z.string({required_error:"username is required"}).trim().min(3,"username greater than 3 words"),
  email: z.string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Please enter a valid email address" }),
  message: z.string({message:"message is at least above 3 characters"}).min(3).max(500)
 });

 module.exports=contactSchema;