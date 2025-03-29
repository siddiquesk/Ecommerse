const adminMiddleware=async (req,res,next)=>{
  try{
  console.log(req.user);
  const adminRole=req.user.isAdmin;
  if(!adminRole){
    return res.status(403).json({message:"Unauthorized Access Current User Not Admin"});
  }
   next();
  }catch(err){
    next(err);
  }
}
module.exports=adminMiddleware;