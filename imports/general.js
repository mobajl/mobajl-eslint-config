module.exports = {
	extends: [
		'./plugins',
		'./globals/base',
		'./rules/base',
		'./rules/import',
	].map(require.resolve),
	parser: 'babel-eslint',
};
