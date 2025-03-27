const express=require('express');
const app = express();
const dotenv =require('dotenv');
dotenv.config();
const basic=require('./routes/authRoutes');
const errorMiddleware=require("./ErrorMiddlware");
const {connectDB}=require("./database/db");
let PORT=8000

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/',basic);
app.use(errorMiddleware)


connectDB().then(()=>{
console.log('db connected');
app.listen(PORT,()=>{
  console.log('Server is running on port 8000');
})
}).catch((err)=>{
  console.error(err);
 });
