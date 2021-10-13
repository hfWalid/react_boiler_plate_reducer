export const STORE_PLOP = {
    GENERATORS: {
        STORE: {
            NAME: 'store',
            CONFIG: {
                description: 'Create new store',
                prompts: [{
                    type: 'input',
                    name: 'name',
                    message: 'store name:'
                }],
                actions: [{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/saga.js',
                    templateFile: 'plop_Templates/saga.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/reducer.js',
                    templateFile: 'plop_Templates/reducer.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/actions.js',
                    templateFile: 'plop_Templates/actions.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/constants.js',
                    templateFile: 'plop_Templates/constants.hbs'
                },
                    {
                        type: 'add',
                        path: 'src/features/{{properCase name}}/__tests__/saga.test.js',
                        templateFile: 'plop_Templates/tests/saga_test.hbs'
                    }
                ]
            }
        }
    },
    ACTIONTYPES: {
        COMPONENT: {
            NAME: 'store',
            DESCRIPTION: 'Create new store'
        }
    }
}