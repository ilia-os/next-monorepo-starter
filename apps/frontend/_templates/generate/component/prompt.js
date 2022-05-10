module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Type the name of the component',
	},
	{
		type: 'select',
		name: 'folder',
		message: 'Select component folder...',
		choices: [
      'landing',
      'common',
      'layout',
      'utility',
      'typography',
      'approach',
      'about',
      'insights',
      'services',
      'methodologies'
    ],
	},
]
