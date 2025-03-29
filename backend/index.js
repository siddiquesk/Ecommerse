const express=require('express');
const app = express();
const dotenv =require('dotenv');
const cors=require('cors');
dotenv.config();
const authRoutes=require('./routes/authRoutes');
const contactRoutes=require("./routes/contacRoutes");
const serviceRoutes=require('./routes/serviceRoutes');
const adminRoutes=require('./routes/adminRoutes');
const errorMiddleware=require("./Middleware/ErrorMiddlware");
const {connectDB}=require("./database/db");
const cookieParser = require('cookie-parser')
let PORT=8000

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5175'], // Allow requests from this origin
  credentials: true, // Allow session cookies from client to server
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
}));
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use('/',authRoutes);
app.use('/',contactRoutes);
app.use('/',serviceRoutes);
app.use('/admin',adminRoutes);
app.use(errorMiddleware)



connectDB().then(()=>{
console.log('db connected');
app.listen(PORT,()=>{
  console.log('Server is running on port 8000');
})
}).catch((err)=>{
  console.error(err);
 });
