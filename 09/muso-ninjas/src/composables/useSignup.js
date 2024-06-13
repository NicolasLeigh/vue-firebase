import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) throw new Error("Could not complete the signup");
    await updateProfile(res.user, { displayName });
    error.value = null;
    // console.log(res.user);
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
