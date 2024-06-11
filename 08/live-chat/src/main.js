import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

let app;

// wait for firebase auth to init before creating the app
onAuthStateChanged(auth, () => {
  if (!app) app = createApp(App).use(router).mount("#app");
});
