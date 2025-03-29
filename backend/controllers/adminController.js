const Contact =require("../models/contactModel");
const User =require("../models/userModel");

const getUser=async(req,res,next)=>{
try{
const users=await User.find({},{password:0});
console.log(users);
if(!users){
  return res.ststus(404).json({message:"User not found"});
}
 return res.status(200).json(users);
}catch(err){
next(err);
}
}
const getContact=async(req,res,next)=>{
  try{
  const contact=await Contact.find();
  console.log(contact);
  if(!contact){
    return res.ststus(404).json({message:"User not found"});
  }
   return res.status(200).json(contact);
  }catch(err){
  next(err);
  }
  }

module.exports={getUser,getContact};