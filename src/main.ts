import "normalize.css";
import "./styles/reset.css";
import "./styles/tailwind.css";

import { createApp } from "vue";
import { setupStore } from "./stores";
import { setupRouter, router } from "./router";
import { setupRouterGuards } from "./router/guards";
import App from "./App.vue";

const app = createApp(App);

setupStore(app);
setupRouter(app);
setupRouterGuards(router);

app.mount("#app");
