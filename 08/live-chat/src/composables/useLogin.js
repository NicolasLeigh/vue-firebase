import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
