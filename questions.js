module.exports = [
    {
        name: 'title',
        message: 'What is the title of the project? '
    },
    {
        name: 'description',
        message: 'Briefly describe the project: '
    },
    {
        name: 'installation',
        message: 'How does one install the project?'
    },
    {
        name: 'usage',
        message: 'How does one use the project?'
    },
    {
        name: 'contribution',
        message: 'How should others contribute to the project?'
    },
    {
        name: 'test',
        message: 'How does one test the project?'
    },
    {
        name: 'license',
        message: 'Which license does the project need?',
        type: 'list',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        name: 'email',
        message: 'What is your email?',
    },

]