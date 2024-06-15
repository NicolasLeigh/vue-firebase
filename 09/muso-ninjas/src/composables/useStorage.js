import { storage } from "@/firebase/config";
import { ref as firebaseRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from "vue";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = firebaseRef(storage, filePath.value);

    try {
      const res = await uploadBytes(storageRef, file);
      url.value = getDownloadURL(storageRef);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { error, url, filePath, uploadImage };
};

export default useStorage;
