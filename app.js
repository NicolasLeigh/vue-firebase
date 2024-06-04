const app = Vue.createApp({
  // template: '<h2>Hello World!</h2>',
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        {
          title: 'name of the kings',
          author: 'patrick sanderson',
          isFav: false,
        },
        {
          title: 'name of the empire',
          author: 'patrick sanderson',
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Radiance';
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
