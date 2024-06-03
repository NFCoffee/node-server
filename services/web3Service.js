import Web3 from 'web3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 개인 키 설정 (0x로 시작하는 64자리 문자열)
const privateKey = '0x7a669a5d5ee7bb26f63ecf42659426ff24ddac87b51cfa62240619a12d004bcb'; // 실제 개인 키로 변경

const web3 = new Web3('http://localhost:7545');

// 개인 키를 사용하여 계정 추가
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

// 배포된 스마트 계약 주소 및 ABI
const contractAddress = '0xa18467d799a957fb3810120c3b380aa82e2bf5fe'; // 배포된 계약 주소로 변경
const plznftAbi = JSON.parse(fs.readFileSync(path.join(__dirname, '../PLZNFT_ABI.json'), 'utf8'));

// 스마트 계약 인스턴스 생성
const plznftContract = new web3.eth.Contract(plznftAbi, contractAddress);

const mintAndTransfer = async (recipient, tokenURI) => {
    try {
        // 민팅 및 전송 트랜잭션 보내기
        await plznftContract.methods.mintAndTransfer(recipient, tokenURI).send({ from: account.address });
        console.log(`NFT minted and transferred to ${recipient}`);
    } catch (error) {
        console.error(`Error minting and transferring NFT: ${error.message}`);
        throw error;
    }
};

export { mintAndTransfer };
