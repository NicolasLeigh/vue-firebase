import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user;
  console.log("User state changed. Current user is: ", user.value);
});

const getUser = () => {
  return { user };
};

export default getUser;
