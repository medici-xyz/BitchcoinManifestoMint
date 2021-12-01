import { createMuiTheme } from '@material-ui/core';

export const myTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffffff',
			light: '#2B076E',
		},
		secondary: {
			main: '#35068C',
			dark: '#491F98',
		},
		info: {
			main: '#42FFFF',
		},
		text: {
			primary: '#ffffff',
			secondary: '#0D0D2B',
		},
		background: {
			default: '#0D0D2B',
		},
		success: {
			main: '#6EDCB5',
		},
		error: {
			main: '#FD8589',
			dark: '#FF325F',
		},
	},
});

myTheme.overrides = {
	MuiAppBar: {
		colorPrimary: {
			color: myTheme.palette.text.primary,
		},
	},
	MuiButton: {
		root: {
			borderRadius: '30px',
			fontSize: '16px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 600,
			textTransform: 'none',
			lineHeight: 1.5,
			width: 200,
			padding: '0.75rem 1.25rem',
		},
		contained: {
			boxShadow: 'none',
		},
		text: {
			padding: '0.75rem 1.25rem',
		},
		disabled: {
			opacity: 0.5,
			cursor: 'not-allowed !important',
			color: 'white !important',
			border: '1px solid rgba(255, 255, 255, 0.5) !important',
		},
	},
	MuiCard: {
		root: {
			borderRadius: '10px',
			boxShadow: '0px 2px 4px rgba(51, 99, 120, 0.1)',
		},
	},
	MuiInput: {
		root: {
			color: myTheme.palette.text.secondary,
		},
	},
	MuiTypography: {
		colorPrimary: {
			color: myTheme.palette.primary.main,
		},
		colorSecondary: {
			color: myTheme.palette.info.main,
		},
		colorTextPrimary: {
			color: myTheme.palette.background.default,
		},
		colorTextSecondary: {
			color: '#828282',
		},
		root: {
			fontSize: '16px',
			lineHeight: '28px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
		},
		body1: {
			fontSize: '16px',
			lineHeight: '28px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
		},
		h1: {
			fontSize: '64px',
			lineHeight: '76px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 'bold',
			letterSpacing: '0.1rem',
		},
		h2: {
			fontSize: '40px',
			lineHeight: '150%',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 'bold',
			letterSpacing: '0.1rem',
		},
		h3: {
			fontSize: '32px',
			lineHeight: '150%',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 'bold',
			letterSpacing: '0.1rem',
		},
		h4: {
			fontSize: '24px',
			lineHeight: '29px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 'bold',
		},
		h5: {
			fontSize: '20px',
			lineHeight: '28px',
			fontFamily: 'Roobert, Helvetica, Roboto, Arial, sans-serif',
			fontWeight: 600,
			letterSpacing: '0.01em',
		},
	},
	MuiTableCell: {
		root: {
			color: 'black !important',
		},
	},
};
