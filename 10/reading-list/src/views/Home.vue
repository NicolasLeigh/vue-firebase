<template>
  <div class="home">
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="handleDelete(book)">{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div :class="{ icon: true, fav: book.isFav }" @click="handleUpdate(book)">
          <span class="material-icons">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm />
  </div>
</template>

<script>
import { ref } from "vue";
import CreateBookForm from "@/components/CreateBookForm";
import { db } from "../firebase/config";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import getCollection from "../composables/getCollection";

export default {
  name: "Home",
  components: { CreateBookForm },
  setup() {
    // const books = ref([]);

    // const colRef = collection(db, "books");

    // getDocs(colRef).then((snapshot) => {
    //   let docs = [];
    //   snapshot.forEach((doc) => {
    //     docs.push({ ...doc.data(), id: doc.id });
    //   });
    //   books.value = docs;
    // });

    const { documents: books } = getCollection("books");

    const handleDelete = (book) => {
      const docRef = doc(db, "books", book.id);

      deleteDoc(docRef);
    };

    const handleUpdate = (book) => {
      const docRef = doc(db, "books", book.id);

      updateDoc(docRef, {
        isFav: !book.isFav,
      });
    };

    return { books, handleDelete, handleUpdate };
  },
};
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}
.icon.fav {
  color: tomato;
}
</style>
