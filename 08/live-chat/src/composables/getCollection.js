import { db } from "@/firebase/config";
import { collection, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from "vue";

const getCollection = (coll) => {
  const documents = ref(null);
  const error = ref(null);

  let q = query(collection(db, coll), orderBy("createdAt"));
  onSnapshot(
    q,
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // wait for the server to create a timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch the data";
    }
  );

  return { documents, error };
};

export default getCollection;
