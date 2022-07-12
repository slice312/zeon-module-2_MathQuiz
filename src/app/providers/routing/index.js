import {AppRouter} from "/src/pages/app-router";
import {AppLink} from "./app-link-tag";


export const configureRouting = () => {
    AppRouter.init();
    window.customElements.define("app-link", AppLink);
};