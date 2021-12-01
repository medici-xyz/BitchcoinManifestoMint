import { Box, Button, makeStyles, Modal, Typography } from '@material-ui/core';
import { useNft, useWallet } from 'contexts';
import { useState } from 'react';

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
		alignItems: 'center',
		justifyContent: 'space-around',
	},
}));

interface IMintModal {
	open: boolean;
	onClose: () => void;
}

export const MintModal: React.FC<IMintModal> = ({ open, onClose }) => {
	const classes = useStyles();
	const { connected, connect } = useWallet();
	const { mint } = useNft();

	const [loading, setLoading] = useState(false);

	const handleMint = async () => {
		setLoading(true);
		mint();
		setLoading(false);
		if (onClose) {
			onClose();
		}
	};

	return (
		<Modal open={open} onClose={() => !loading && onClose()}>
			<Box className={classes.container}>
				<Typography className={classes.description}>
					{connected ? 'Press Mint to get manifesto' : 'Press Connect Wallet to mint'}
				</Typography>

				<Box className={classes.buttonGroup}>
					<Button variant="outlined" color="primary" disabled={connected || loading} onClick={() => connect()}>
						Connect Wallet
					</Button>

					<Button variant="outlined" color="primary" disabled={!connected || loading} onClick={handleMint}>
						 Mint
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
