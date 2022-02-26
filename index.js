const express = require('express');
const db = require('mongoose');
const authRouter = require('./authRouter')
const authRoutes = require('./routes/routes')

const PORT = process.env.PORT || 3000;
require('dotenv/config');

const app = express();

app.use(express.json())
app.use('/auth', authRouter)
app.use('/routes', authRoutes)

const start =  () => {
    try {
        db.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
            console.log('connected to DB!')
          });          
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e){
        console.log(e);
    }
}

start();