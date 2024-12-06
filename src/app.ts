import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/posts', router);


export default app;