import express from 'express';
import { config } from 'dotenv';
const app = express();

config({
    path: './data/config.env'
});


export { app };

