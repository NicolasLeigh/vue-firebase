import { storage } from "@/firebase/config";
import { deleteObject, ref as firebaseRef, getDownloadURL, uploadBytes } from "firebase/storage";
import { ref } from "vue";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    const timeStamp = new Date().getTime();
    filePath.value = `covers/${user.value.uid}/${timeStamp}/${file.name}`;
    const storageRef = firebaseRef(storage, filePath.value);

    try {
      const res = await uploadBytes(storageRef, file);
      url.value = await getDownloadURL(storageRef);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  const deleteImage = async (path) => {
    const storageRef = firebaseRef(storage, path);

    try {
      await deleteObject(storageRef);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  return { error, url, filePath, uploadImage, deleteImage };
};

export default useStorage;
