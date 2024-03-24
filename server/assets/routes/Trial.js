import { createtext } from "../controllers/TrialController.js";
import express from 'express';
const app = express();
const appget = app.put('/text', createtext);
export default appget;