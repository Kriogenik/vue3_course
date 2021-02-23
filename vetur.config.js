module.exports = {
	setting: {
		"vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
	},
	projects: [
		{
			root: './cmp-adv/',
			package: './package.json'
		},
		{
			root: './forms/',
			package: './package.json'
		}
	]
}