const express = require('express');
const app = express();
const morgan =require('morgan');
const path = require('path')


app.set('port',process.env.PORT || 3000);



app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')))



app.listen(app.get('port'),()=>{
    console.log(`Server is listening in port : ${app.get('port')}`);
    
})




