import { Box, Button, makeStyles, Modal, Typography } from '@material-ui/core';
import { WalletType } from 'types';

import Metamask from 'assets/images/metamask.svg';
import WConnect from 'assets/images/wallet-connect.svg';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 440,
		padding: 20,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: theme.palette.background.default,
		borderRadius: 10,
	},
	description: {
		marginBottom: 20,
		fontSize: 20,
	},
	buttonGroup: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	walletButton: {
		width: '100%',
		height: 48,
		marginTop: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 20px',
	},
	icon: {
		height: 32,
	},
}));

interface IWalletModal {
	open: boolean;
	onClose: () => void;
	onConnect: (type: WalletType) => void;
}

export const WalletModal: React.FC<IWalletModal> = ({ open, onClose, onConnect }) => {
	const classes = useStyles();

	return (
		<Modal open={open} onClose={onClose}>
			<Box className={classes.container}>
				<Typography className={classes.description}>Connect your wallet</Typography>

				<Box className={classes.buttonGroup}>
					<Button
						variant="outlined"
						color="primary"
						className={classes.walletButton}
						onClick={() => onConnect(WalletType.MetaMask)}
					>
						Connect to Metamask
						<img src={Metamask} alt="" className={classes.icon} />
					</Button>
					<Button
						variant="outlined"
						color="primary"
						className={classes.walletButton}
						onClick={() => onConnect(WalletType.WalletConnect)}
					>
						Use Wallet Connect
						<img src={WConnect} alt="" className={classes.icon} />
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
