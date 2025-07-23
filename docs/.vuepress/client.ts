import type {Router} from "vue-router";

interface ClientConfig {
    enhance?: (context: {
        app: any;
        router: Router;
        siteData: any;
    }) => void | Promise<void>;
    setup?: () => void;
}