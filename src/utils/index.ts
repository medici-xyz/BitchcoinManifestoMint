export const getShortWalletAddress = (account: string) => {
	return `${account.slice(0, 6)}...${account.slice(-4)}`;
};
