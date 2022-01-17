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
                    templateFile: 'plop_Templates/index.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/components/index.js',
                    templateFile: 'plop_Templates/feature.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/styles/index.js',
                    templateFile: 'plop_Templates/style.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/__tests__/index.test.js',
                    templateFile: 'plop_Templates/feature-test.js.hbs'
                },{
                    type: 'add',
                    path: 'src/features/{{properCase name}}/utils/constants.js',
                    templateFile: 'plop_Templates/constants.js.hbs'
                }]
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