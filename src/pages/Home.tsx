import { useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { MintModal } from './MintModal';

import manifestoImg from 'assets/images/manifesto.png';
import logoImg from 'assets/images/logo.svg';
import logoImg1 from 'assets/images/dminti_logo.png';

const useStyles = makeStyles(() => ({
	container: {
		position: 'relative',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		boxSizing: 'border-box',
	},
	image: {
		maxWidth: '100%',
		maxHeight: 'calc(100% - 90px)',
		width: 'auto',
		height: 'auto',
	},
	button: {
		marginBottom: 40,
	},
	footer: {
		position: 'absolute',
		width: '100%',
		left: 0,
		bottom: 0,
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	footerContent: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		marginLeft: 8,
		height: 32,
	},
}));

export const Home = () => {
	const classes = useStyles();
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Box className={classes.container}>
				<img src={manifestoImg} alt="" className={classes.image} />

				<Button variant="outlined" color="primary" className={classes.button} onClick={() => setShowModal(true)}>
					Mint Manifesto
				</Button>

				<Box className={classes.footer}>
					<a href="https://dminti.com" target="_blank" rel="noreferrer">
						<img src={logoImg1} alt="" style={{ height: 30 }} />
					</a>

					<a href="https://medicilabs.xyz" target="_blank" rel="noreferrer">
						<Box className={classes.footerContent}>
							<Typography>Launch by </Typography>
							<img src={logoImg} alt="" className={classes.icon} />
						</Box>
					</a>
				</Box>
			</Box>

			<MintModal open={showModal} onClose={() => setShowModal(false)} />
		</>
	);
};
