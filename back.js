import { handler } from './build/handler.js';
import express from 'express';
import dotenv from "dotenv"
dotenv.config()
import {hello} from"./rust/test/index.js"
const app = express();

// add a routes that lives separately from the SvelteKit app
app.get('/hello', (req, res) => {
    res.end(hello());
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
// app.use(handler); must be after all other routes and middlewares
app.use(handler);

app.listen(process.env.PRIVATE_port, () => {
    console.log(`site can be accessed at ${process.env.PRIVATE_dev?"http://127.0.0.1:"+process.env.PRIVATE_port:PUBLIC_baseUrl}`);
});