module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Type the name of the component',
	},
	{
		type: 'select',
		name: 'folder',
		message: 'Select component folder...', // TODO add yours
		choices: [
      'home',
      'common',
      'layout',
      'utility',
      'typography',
    ],
	},
]
