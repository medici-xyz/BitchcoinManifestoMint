import React, { useContext } from 'react';
import { useContracts } from './contracts';
import { useWallet } from './wallets';
import { toast } from 'react-toastify';

export interface INftContext {
	mint: () => void;
}

const NftContext = React.createContext<Maybe<INftContext>>(null);

export const NftProvider = ({ children = null as any }) => {
	const { nftContract } = useContracts();
	const { account } = useWallet();

	const mint = async () => {
		if (account) {
			try {
				await nftContract.contract.methods.mint(account).send({ from: account });
				toast.success('Mint successful');
			} catch (err) {
				console.error(err);
			}
		}
	};

	return <NftContext.Provider value={{ mint }}>{children}</NftContext.Provider>;
};

export const useNft = () => {
	const context = useContext(NftContext);

	if (!context) {
		throw new Error('Component rendered outside the provider tree');
	}

	return context;
};
