import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import appget from './assets/routes/Trial.js';
import TrialModal from './assets/modals/TrialModal.js';
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())
const MAIN_URL = process.env.MAIN_URL;
const PORT = process.env.PORT;


app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.get('/', (req, res) => {
    res.send('This is it')
});


app.use('/auth', appget);
app.get('/alltext', async(req, res) => {
    try {
        const result = await TrialModal.find()
        res.send({ result: result })
    } catch (e) {
        res.send(e)
    }
})






mongoose.connect(MAIN_URL).then(() => {
    console.log('Connected');
}).catch((e) => {
    console.log('Disconnected');
    console.log(e);
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})