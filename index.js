module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	globals: {
		document: true,
		window: true,
		__IS_BROWSER__: true,
		IS_DEV: true,
		IS_LIVE: true,
	},
	plugins: ['jest'],
	env: {
		'jest/globals': true,
	},
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

		// Imports
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,

		// React
		'react/forbid-prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-filename-extension': 0,
		'react/no-unused-prop-types': 1,
		'react/sort-comp': [
			1,
			{
				order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
			},
		],
		'react/no-string-refs': 0,
		'react/require-default-props': 0,
		'react/no-multi-comp': 0,
		'react/prop-types': 0,
		'react/prefer-stateless-function': 0,

		// JSX-a11y
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-quotes': [1, 'prefer-single'],
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/iframe-has-title': 0,
		'jsx-a11y/click-events-have-key-events': 0,
	},
};
