// @flow

import { COMPONENT_PLOP } from "./configs/__component";
import { FEATURE_PLOP } from "./configs/__feature";
import { PAGE_PLOP } from "./configs/__page";
import { STORE_PLOP } from "./configs/__store";
import { HOOK_PLOP } from "./configs/__hook";

module.exports = (plop) => {

    plop.setGenerator(COMPONENT_PLOP.GENERATORS.COMPONENT.NAME, COMPONENT_PLOP.GENERATORS.COMPONENT.CONFIG);

    plop.setGenerator(FEATURE_PLOP.GENERATORS.FEATURE.NAME, FEATURE_PLOP.GENERATORS.FEATURE.CONFIG);

    plop.setGenerator(PAGE_PLOP.GENERATORS.PAGE.NAME, PAGE_PLOP.GENERATORS.PAGE.CONFIG);

    plop.setGenerator(STORE_PLOP.GENERATORS.STORE.NAME, STORE_PLOP.GENERATORS.STORE.CONFIG);

    plop.setGenerator(HOOK_PLOP.GENERATORS.HOOK.NAME, HOOK_PLOP.GENERATORS.HOOK.CONFIG);

};