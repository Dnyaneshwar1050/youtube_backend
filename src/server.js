import dotenv from 'dotenv';
import DBConection from './bd/db.js';
import app from './app.js';


dotenv.config({
    path: './.env'
})
app.get('/', (req, res) => {
    res.send('Welcome!');
});
 
DBConection()
.then(() => {
    app.listen(process.env.PORT ||8000, ()=>{
        console.log(` Server is running at port : ${process.env.PORT}`)
    }) 
})
.catch((error) =>{
    console.error("Mongo db connection failed !!",error);
})
app.listen(process.env.PORT, () => {
    console.log(`\n🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${process.env.PORT}`);
    console.log(`📡 API: http://localhost:${process.env.PORT}`);
    console.log(`💚 Health Check: http://localhost:${process.env.PORT}/health`);
});
