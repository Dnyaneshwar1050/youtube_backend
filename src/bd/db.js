import mongose from 'mongoose';
import { DB_NAME } from '../constants.js';


const DBconnection = async () => {
    try {
        await mongose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log('DB connected successfully');
    } catch (error) {
        console.log('DB connection failed', error);
    }
};

export default DBconnection;