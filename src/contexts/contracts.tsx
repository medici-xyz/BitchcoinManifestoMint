import React, { useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';
import config from 'config';
import { IContract } from 'types';
import { Contract } from 'web3-eth-contract';

export interface IContractContext {
	web3: Web3;
	nftContract: IContract;
}

const ContractContext = React.createContext<Maybe<IContractContext>>(null);

const defaultWeb3 = new Web3((window as any).ethereum || config.providerUrl);

export const ContractProvider = ({ children = null as any }) => {
	const { library } = useWeb3React();

	const [web3, setWeb3] = useState<Web3>(defaultWeb3);
	const [nftContract, setNftContract] = useState<Contract>(
		new defaultWeb3.eth.Contract(config.nftAbi as any, config.nftContractAddress),
	);

	useEffect(() => {
		const web3Obj = new Web3(library?.provider || config.providerUrl);
		setWeb3(web3Obj);
		setNftContract(new web3Obj.eth.Contract(config.nftAbi as any, config.nftContractAddress));
	}, [library]);

	return (
		<ContractContext.Provider
			value={{
				web3,
				nftContract: { contract: nftContract, address: config.nftContractAddress },
			}}
		>
			{children}
		</ContractContext.Provider>
	);
};

export const useContracts = () => {
	const context = useContext(ContractContext);

	if (!context) {
		throw new Error('Component rendered outside the provider tree');
	}

	return context;
};
