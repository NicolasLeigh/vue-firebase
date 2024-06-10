import { ref } from "vue";
import { db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await getDoc(doc(db, "posts", id));
      if (!res.exists()) throw Error("That post does not exist");
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
