const express= require("express")
const port=8000
const app=express();
app.set('view engine',"ejs")

const data={name:'Edunet',branch:'IT'}

app.get('/cal',(req,res)=>{
   res.render('cal')                                   //<%=Name %>
})
app.get('/home',(req,res)=>{
    res.render('home')                                   //<%=Name %>
 })

app.listen(port,()=>{
    console.log(`server running at port no ${port}`)
})