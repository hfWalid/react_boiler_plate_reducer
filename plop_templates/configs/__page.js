export const PAGE_PLOP = {
    GENERATORS: {
        PAGE: {
            NAME: 'page',
            CONFIG: {
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
                    templateFile: 'plop_Templates/Page.js.hbs'
                }]
            }
        }
    },
    ACTIONTYPES: {
        COMPONENT: {
            NAME: 'page',
            DESCRIPTION: 'Create new page'
        }
    }
}