import { Contract } from 'web3-eth-contract';

export interface IContract {
	contract: Contract;
	address: string;
}

export enum WalletType {
	MetaMask = 'metamask',
	WalletConnect = 'walletconnect',
}
