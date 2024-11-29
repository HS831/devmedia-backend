import app from '../src/app';
import connectDB from './data/db';

connectDB();

app.listen(8000, () => {
    console.log('Starting the app ....');
})