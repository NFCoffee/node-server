import { mintAndTransfer } from '../services/web3Service.js';

const mintAndTransferNFT = async (req, res) => {
    const { recipient, tokenURI } = req.body;

    try {
        await mintAndTransfer(recipient, tokenURI);
        res.status(200).send(`NFT minted and transferred to ${recipient}`);
    } catch (error) {
        res.status(500).send(`Error minting and transferring NFT: ${error.message}`);
    }
};

export { mintAndTransferNFT };
