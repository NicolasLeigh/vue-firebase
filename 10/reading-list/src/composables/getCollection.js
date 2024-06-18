import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (coll) => {
  const documents = ref(null);

  let colRef = collection(db, coll);

  // Real-time listener
  const unsubscribe = onSnapshot(colRef, (snap) => {
    let results = [];
    snap.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { documents };
};

export default getCollection;
