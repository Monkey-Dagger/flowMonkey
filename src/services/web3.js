import Portis from '@portis/web3';
import Web3 from 'web3';

export const portis = new Portis(process.env.REACT_APP_PORTIS_ID, 'ropsten');
// export const portis = new Portis('029771b5-abd0-48ce-9aec-bf4645dee56c', 'ropsten');
export const web3 = new Web3(portis.provider);

// const SuperfluidSDK = require("@superfluid-finance/js-sdk");

// export const sf = new SuperfluidSDK.Framework({
//     web3: web3,
//     tokens: ['fDAI', 'fUSDC']
// });

// from -> address
// to -> address
// value -> amount of coin
// coin  -> "dai" or "usdc"
// export const transaction = (from, to, value, coin) => {
//     web3.eth.sendTransaction({
//         from: from,
//         to: to, 
//         value: web3.toWei(value, coin), 
//     }, function(err, transactionHash) {
//         if (err) { 
//             console.log(err); 
//         } else {
//             console.log(transactionHash);
//         }
//     });
// }
