module.exports = {
	rules: {
		// General
		'no-console': 0,

		// Code logic
		'no-unreachable': 1,
		'no-unused-vars': 1,
		'no-return-assign': 0,
		radix: 0,
		'class-methods-use-this': 0,
		'no-use-before-define': 0,
		'default-case': 0,
		'no-case-declarations': 0,
		'global-require': 0,

		// Code Style
		'max-len': [1, { code: 120 }],
		'no-tabs': 0,
		indent: [2, 'tab', { SwitchCase: 1 }],
		camelcase: 0,
		'no-underscore-dangle': 0,
		'arrow-parens': [1, 'as-needed'],
		'padding-line-between-statements': [1, { blankLine: 'always', prev: 'function', next: 'function' }],
	},
};
