export const FEATURE_PLOP = {
    GENERATORS: {
        FEATURE: {
            NAME: 'feature',
            CONFIG: {
                description: 'Create new feature',
                prompts: [{
                    type: 'input',
                    name: 'name',
                    message: 'Feature name:'
                }, {
                    type: 'input',
                    name: 'description',
                    message: 'Describe this feature:'
                }],
                actions: [{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/index.js',
                    templateFile: 'plop_Templates/index.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/components/index.js',
                    templateFile: 'plop_Templates/index.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/styles/index.js',
                    templateFile: 'plop_Templates/style.hbs'
                },
                    {
                        type: 'add',
                        path: 'src/features/{{properCase name}}/__tests__/index.test.js',
                        templateFile: 'plop_Templates/test.hbs'
                    }
                ]
            }
        }
    },
    ACTIONTYPES: {
        COMPONENT: {
            NAME: 'feature',
            DESCRIPTION: 'Create new feature'
        }
    }
}