export const HOOK_PLOP = {
    GENERATORS: {
        HOOK: {
            NAME: 'hook',
            CONFIG: {
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
                    templateFile: 'plop_Templates/hook.js.hbs'
                }]
            }
        }
    },
    ACTIONTYPES: {
        COMPONENT: {
            NAME: 'hook',
            DESCRIPTION: 'Create new hook !'
        }
    }
}