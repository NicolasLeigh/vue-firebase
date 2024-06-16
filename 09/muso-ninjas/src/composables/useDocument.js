import { db } from "@/firebase/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
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

  const updateDocument = async (updates) => {
    isPending.value = true;
    error.value = null;

    try {
      const res = await updateDoc(doc(db, coll, id), updates);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log(err.message);
      isPending.value = false;
      error.value = "could not update the document";
    }
  };

  return { error, isPending, deleteDocument, updateDocument };
};

export default useDocument;
