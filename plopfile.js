// @flow

module.exports = (plop) => {

    plop.setGenerator('component',
        {
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
                templateFile: 'plop_templates/templates/component.js.hbs'
            },{
                type: 'add',
                path: 'src/components/{{properCase name}}/style.js',
                templateFile: 'plop_templates/templates/style.js.hbs'
            },{
                type: 'add',
                path: 'src/components/{{properCase name}}/__tests__/index.test.js',
                templateFile: 'plop_templates/templates/component-test.js.hbs'
            }]
        });

    plop.setGenerator('feature',
        {
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
                templateFile: 'plop_templates/templates/index.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/components/index.js',
                templateFile: 'plop_templates/templates/feature.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/styles/index.js',
                templateFile: 'plop_templates/templates/style.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/__tests__/index.test.js',
                templateFile: 'plop_templates/templates/feature-test.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/utils/constants.js',
                templateFile: 'plop_templates/templates/constants.js.hbs'
            }]
        });

    plop.setGenerator('page',
        {
            description: 'Create new page',
            prompts: [{
                type: 'input',
                name: 'name',
                message: 'Page name:'
            }, {
                type: 'input',
                name: 'description',
                message: 'Describe this page:'
            }],
            actions: [{
                type: 'add',
                path: 'src/pages/{{properCase name}}/index.js',
                templateFile: 'plop_templates/templates/Page.js.hbs'
            }]
        });

    plop.setGenerator('store',
        {
            description: 'Create new store',
            prompts: [{
                type: 'input',
                name: 'name',
                message: 'store name:'
            }],
            actions: [{
                type: 'add',
                path: 'src/features/{{properCase name}}/store/saga.js',
                templateFile: 'plop_templates/templates/saga.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/store/reducer.js',
                templateFile: 'plop_templates/templates/reducer.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/store/selector.js',
                templateFile: 'plop_templates/templates/selector.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/store/actions.js',
                templateFile: 'plop_templates/templates/actions.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/__tests__/reducer.test.js',
                templateFile: 'plop_templates/templates/reducer_test.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/__tests__/selector.test.js',
                templateFile: 'plop_templates/templates/selector_test.js.hbs'
            },{
                type: 'add',
                path: 'src/features/{{properCase name}}/__tests__/saga.test.js',
                templateFile: 'plop_templates/templates/saga_test.js.hbs'
            }
            ]
        });

    plop.setGenerator('hook',
        {
            description: 'Create new hook',
            prompts: [{
                type: 'input',
                name: 'name',
                message: 'hook name: (try to start with useHookName) !'
            }, {
                type: 'input',
                name: 'description',
                message: 'Describe this hook:'
            }],
            actions: [{
                type: 'add',
                path: 'src/hooks/{{properCase name}}.js',
                templateFile: 'plop_templates/templates/hook.js.hbs'
            }]
        });

};
