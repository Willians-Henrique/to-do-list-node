import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { mainRouter } from './routes/main';


dotenv.config();

const server = express();


server.use(express.static(path.join(__dirname, 'public')));
server.use(mainRouter);

server.use((req, res)=> {
    res.status(404).send('Not Found');
});

server.listen(process.env.PORT || 3000);