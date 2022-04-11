const express = require('express');
const app =express();
const PORT=3000;
const path =require('path');
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')));
const bodyparser = require('body-parser');
 
const userRouter=require('./routes/users.router');

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use((req,res,next)=>{
    const date = Date.now();
    next();
    const delta = Date.now()- date;
    console.log(`${req.url} ${req.baseUrl}  ${delta} ms`);

});


app.use('/user',userRouter);

app.use(express.json());


app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`);
    
});
