import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useWallet } from 'contexts';
import { getShortWalletAddress } from 'utils';

const useStyles = makeStyles(() => ({
	appBar: {
		boxShadow: 'none',
		backgroundColor: 'transparent',
	},
	toolBar: {
		display: 'flex',
		alignItems: ' center',
		justifyContent: 'flex-end',
	},
	title: {
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		whiteSpace: 'nowrap',
	},
	address: {
		display: 'flex',
		alignItems: 'center',
	},
	status: {
		borderRadius: '50%',
		width: 12,
		height: 12,
		marginRight: 8,
		background: 'cyan',
	},
}));

const Header = () => {
	const classes = useStyles();

	const { account, connected } = useWallet();

	return (
		<>
			<AppBar position="relative" className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<Typography variant="h5" className={classes.title}>
						Bitchcoin Manifesto
					</Typography>

					{connected && account && (
						<Box className={classes.address}>
							<Box className={classes.status} />
							<Typography>{getShortWalletAddress(account)}</Typography>
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
