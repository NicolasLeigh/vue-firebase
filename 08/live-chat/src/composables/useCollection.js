import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (coll) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    error.value = null;

    try {
      await addDoc(collection(db, coll), doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };

  return { error, addDocument };
};

export default useCollection;
