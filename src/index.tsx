import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { myTheme } from './theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={myTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
