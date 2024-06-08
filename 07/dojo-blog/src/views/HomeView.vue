<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>
<script>
import PostList from '../components/PostList.vue';
import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        title: 'welcome to my blog',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptatum doloribus hic eveniet atque enim id nihil error libero aliquam laudantium beatae, voluptas sequi! Harum sapiente fuga esse! Consequuntur nesciunt quam rerum quod odio blanditiis beatae, sunt totam dolore ipsa perspiciatis ut molestiae aliquam sint vel provident ab nulla repellendus vero. Fugiat aliquam blanditiis neque. Quis dolorum quidem iusto iure vel optio dolor sit modi libero, voluptates vero, quibusdam magnam ex, distinctio velit maxime excepturi dicta. Optio quam temporibus libero? Odit ratione unde sunt tenetur fugiat maxime aliquam in, adipisci quisquam quam natus numquam dolor magni molestias libero obcaecati assumenda quidem. Voluptate vel tempore dignissimos, unde quidem aspernatur recusandae autem repellendus quis, quisquam ipsam sequi quae deleniti? Ipsa perferendis sint maiores illo quia explicabo eaque corrupti unde iure ex commodi aspernatur sunt laborum minus, harum repellat. Excepturi corrupti possimus eligendi praesentium totam ea consequuntur iure, fugit quisquam ducimus rem maxime, at ad earum. Veritatis animi amet voluptatum praesentium nihil aspernatur natus repellendus quibusdam esse voluptate ea ut quasi accusantium exercitationem est, aperiam enim error saepe provident unde. Ratione unde culpa dolorum animi perferendis magnam! Accusantium deserunt illum laborum dolores dolorum architecto saepe natus libero voluptates, ad facere, dolor harum nostrum',
        id: 1,
      },
      { title: 'vue 3 is here', body: 'lorem ipsum...', id: 2 },
    ]);
    return { posts };
  },
};
</script>
