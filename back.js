import { handler } from './build/handler.js';
import express from 'express';
import {hello} from"./rust/test/index.js"
const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/hello', (req, res) => {
    res.end(hello());
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log('listening on port 3000');
});