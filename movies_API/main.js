import express from "express"
import movieRoutes from "./routes/movies.js"
import connectDB from "./lib/db.js";
const app = express();
//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const Port = process.env.X_ZOHO_CATALYST_LISTEN_PORT;

app.get ("/",(req,res)=>
{
    res.json({msg:"Hello"})
})
//Routes
app.use('/movies',movieRoutes)
//Connection
connectDB();
app.listen(Port,()=>
{
    console.log(`server is running in http://localhost:${Port}`)
})