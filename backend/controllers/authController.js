const User =require("../models/userModel")


const register = async (req, res) => {
  const {username,phone,email,password} = req.body;
  if(!username || !phone || !email || !password) {
    return res.status(400).json({message:"All fields are required"});
  }
  try {
   const existinguser=await User.findOne({email});
   if(existinguser){
    return res.status(400).json({message:"user already exists"});
   }
  
   const newUser=await User.create({
     username,
     phone,
     email,
     password
    });
  const user=await newUser.save();
  console.log(user);
  res.status(201).json({ message: "User created successfully",user, token:await newUser.generateToken() });
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};
const login=async(req,res)=>{
  try{
    let {name,password}=req.body;
    console.log(req.body);
     res.json(`name ${name} password ${password}`);
  }catch(err){
  res.status(500).json({message: err.message});
  }
}

module.exports={register,login};