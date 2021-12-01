/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import config from '../config';
import { WalletType } from 'types';
import { useLocalStorageState } from 'hooks';
import { useContracts } from './contracts';
import { WalletModal } from 'components/WalletModal';

export interface IWalletContext {
	connected: boolean;
	account: Maybe<string>;
	balance: number;
	chainId: Maybe<number>;
	connect: () => void;
	disconnect: () => void;
	updateBalance: () => void;
}

export const metamaskInjected = new InjectedConnector({
	supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1666600000, 1666700000],
});

export const walletconnect = new WalletConnectConnector({
	supportedChainIds: [config.networkId],
	rpc: {
		[config.networkId]: config.providerUrl,
	},
	bridge: 'https://bridge.walletconnect.org',
	qrcode: true,
	pollingInterval: 12000,
});

const WalletContext = React.createContext<Maybe<IWalletContext>>(null);

export const WalletProvider = ({ children = null as any }) => {
	const { web3 } = useContracts();
	const { activate, deactivate, active, chainId, account } = useWeb3React();

	const [walletType, setWalletType] = useLocalStorageState('wallet_type', '');
	const [connected, setConnected] = useState<boolean>(false);
	const [balance, setBalance] = useState<number>(0);
	const [showModal, setShowModal] = useState(false);

	const connect = useCallback(
		async (type: WalletType = WalletType.MetaMask) => {
			try {
				if (type === WalletType.MetaMask) {
					await activate(metamaskInjected);
				} else if (type === WalletType.WalletConnect) {
					await activate(walletconnect);
				}
				setWalletType(type.toString());
				setShowModal(false);
			} catch (err) {
				toast.error('Wallet connect failed!');
			}
		},
		[activate, setWalletType],
	);

	const disconnect = async () => {
		await deactivate();
		setWalletType(null);
	};

	useEffect(() => {
		if (walletType) {
			if (walletType === 'metamask') {
				connect(WalletType.MetaMask);
			} else if (walletType === 'walletconnect') {
				connect(WalletType.WalletConnect);
			}
		}
	}, [connect, activate, walletType]);

	useEffect(() => {
		if (active) {
			if (chainId) {
				if (chainId === config.networkId) {
					setConnected(true);
				} else {
					deactivate();
					toast.error(`Please connect ${config.networkName}!`);
				}
			}
		} else {
			setConnected(false);
		}
	}, [active, chainId, deactivate]);

	const updateBalance = useCallback(async () => {
		if (account) {
			const res = await web3.eth.getBalance(account);
			setBalance(Number(web3.utils.fromWei(res)));
		} else {
			setBalance(0);
		}
	}, [account]);

	useEffect(() => {
		updateBalance();
	}, [account]);

	return (
		<WalletContext.Provider
			value={{
				connected,
				account,
				balance,
				chainId,
				connect: () => !connected && setShowModal(true),
				disconnect,
				updateBalance,
			}}
		>
			{children}

			<WalletModal
				open={showModal}
				onClose={() => setShowModal(false)}
				onConnect={type => {
					connect(type);
				}}
			/>
		</WalletContext.Provider>
	);
};

export const useWallet = () => {
	const context = useContext(WalletContext);

	if (!context) {
		throw new Error('Component rendered outside the provider tree');
	}

	return context;
};
