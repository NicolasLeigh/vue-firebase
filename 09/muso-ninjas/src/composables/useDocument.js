import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { ref } from "vue";

const useDocument = (coll, id) => {
  const error = ref(null);
  const isPending = ref(false);

  const deleteDocument = async () => {
    isPending.value = true;
    error.value = null;

    try {
      const res = await deleteDoc(doc(db, coll, id));
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending.value = false;
      error.value = "could not delete the document";
    }
  };

  return { error, isPending, deleteDocument };
};

export default useDocument;
