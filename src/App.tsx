import { Box, makeStyles } from '@material-ui/core';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import Header from 'components/Header';
import { ContractProvider, WalletProvider, NftProvider } from 'contexts';
import { Home } from 'pages';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100vh',
		background: 'linear-gradient(0.25deg, #0D0D2B, #6618E4 60%)',
		color: theme.palette.text.primary,
	},
	content: {
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		minHeight: 'calc(100vh - 64px)',
		height: 'calc(100vh - 64px)',
		padding: '0 20px 10px 20px',
	},
}));

function App() {
	const classes = useStyles();

	const getLibrary = (provider: any) => {
		const library = new Web3Provider(provider);
		library.pollingInterval = 8000;
		return library;
	};

	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<ContractProvider>
				<WalletProvider>
					<NftProvider>
						<main className={classes.root}>
							<Header />
							<Box className={classes.content}>
								<Home />
							</Box>
							<ToastContainer autoClose={2000} />
						</main>
					</NftProvider>
				</WalletProvider>
			</ContractProvider>
		</Web3ReactProvider>
	);
}

export default App;
