import express from 'express';
import nftRoutes from './routes/nftRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', nftRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
