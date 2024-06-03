import express from 'express';
import { mintAndTransferNFT } from '../controllers/nftController.js';

const router = express.Router();

router.post('/mint-and-transfer', mintAndTransferNFT);

export default router;
