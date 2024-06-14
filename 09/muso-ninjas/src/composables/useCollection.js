import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (coll) => {
  const error = ref(null);
  const isPending = ref(false);

  const addDocument = async (doc) => {
    error.value = null;
    isPending.value = true;

    try {
      await addDoc(collection(db, coll), doc);
      isPending.value = false;
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
      isPending.value = false;
    }
  };

  return { error, addDocument, isPending };
};

export default useCollection;
