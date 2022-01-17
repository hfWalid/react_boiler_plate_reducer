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
                    templateFile: 'plop_Templates/saga.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/reducer.js',
                    templateFile: 'plop_Templates/reducer.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/selector.js',
                    templateFile: 'plop_Templates/selector.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/store/actions.js',
                    templateFile: 'plop_Templates/actions.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/__tests__/reducer.test.js',
                    templateFile: 'plop_Templates/tests/reducer_test.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/__tests__/selector.test.js',
                    templateFile: 'plop_Templates/tests/selector_test.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/__tests__/saga.test.js',
                    templateFile: 'plop_Templates/tests/saga_test.js.hbs'
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