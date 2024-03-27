import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import appget from './assets/routes/Trial.js';
const app = express();
app.use(express.json());
dotenv.config();
const MAIN_URL = process.env.MAIN_URL;
const PORT = process.env.PORT;


// app.use(cors({
//     origin: ["http://localhost:5173/"],
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     Credential: true
// }));
app.get('/', (req, res) => {
    res.send('This is it')
});
app.set(cors());

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