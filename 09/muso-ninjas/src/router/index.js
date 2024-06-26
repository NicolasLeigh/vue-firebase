import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreatePlaylist from "../views/playlists/CreatePlaylist.vue";
import { auth } from "@/firebase/config";
import PlaylistDetails from "../views/playlists/PlaylistDetails.vue";
import UserPlaylists from "../views/playlists/UserPlaylists.vue";

// route guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: "login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/playlist/create",
    name: "createPlaylist",
    component: CreatePlaylist,
    beforeEnter: requireAuth,
  },
  {
    path: "/playlist/:id",
    name: "playlistDetails",
    component: PlaylistDetails,
    beforeEnter: requireAuth,
    props: true,
  },
  {
    path: "/playlist/user",
    name: "userPlaylists",
    component: UserPlaylists,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
