module.exports = {
	extends: [
		'eslint-config-airbnb',
		'./imports/general',
		'./imports/rules/react',
	].map(require.resolve),
};
