import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import appget from './assets/routes/Trial.js';
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
const MAIN_URL = process.env.MAIN_URL;
const PORT = process.env.PORT;



app.get('/', (req, res) => {
    res.send('servere is started')
});

app.use('/auth', appget);







mongoose.connect(MAIN_URL).then(() => {
    console.log('Connected');
}).catch((e) => {
    console.log('Disconnected');
    console.log(e);
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})