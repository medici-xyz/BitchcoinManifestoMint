import production from './development.config';
const env = 'production';

const config = {
	production,
};

export default config[env];
