import { db } from "@/firebase/config";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getDocument = (coll, id) => {
  const document = ref(null);
  const error = ref(null);

  let q = query(doc(db, coll, id));
  const unsubscribe = onSnapshot(
    q,
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "that document does not exist";
      }
    },
    (err) => {
      console.log(err.message);
      error.value = "could not fetch the data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsubscribe from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsubscribe());
  });

  return { document, error };
};

export default getDocument;
