import { createApp } from "vue";
import App from "./App.vue";
import { LDPlugin } from "launchdarkly-vue-client-sdk";

import "./assets/main.css";

const app = createApp(App);
app.use(LDPlugin, { clientSideID: "6446935175a6a5129f32e752" });
app.mount("#app");
