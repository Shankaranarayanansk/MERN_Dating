import express from "express"
import movieRoutes from "./routes/movies.js"
const app = express();

const Port = 7869;

app.get ("/",(req,res)=>
{
    res.json({msg:"Hello"})
})

app.use('/movies',movieRoutes)

app.listen(Port,()=>
{
    console.log(`server is running in http://localhost:${Port}`)
})