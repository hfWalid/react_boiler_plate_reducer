export const COMPONENT_PLOP = {
    GENERATORS: {
        COMPONENT: {
            NAME: 'component',
            CONFIG: {
                description: 'Create new react component',
                prompts: [{
                    type: 'input',
                    name: 'name',
                    message: 'Component name:'
                }, {
                    type: 'input',
                    name: 'description',
                    message: 'Describe this component:'
                }],
                actions: [{
                    type: 'add',
                    path: 'src/components/{{properCase name}}/index.js',
                    templateFile: 'plop_Templates/component.hbs'
                },{
                    type: 'add',
                    path: 'src/components/{{properCase name}}/style.js',
                    templateFile: 'plop_Templates/style.hbs'
                },
                    {
                        type: 'add',
                        path: 'src/components/{{properCase name}}/__tests__/index.test.js',
                        templateFile: 'plop_Templates/test.hbs'
                    }
                ]
            }
        }
    },
    ACTIONTYPES: {
        COMPONENT: {
            NAME: 'component',
            DESCRIPTION: 'Create new react component'
        }
    }
}