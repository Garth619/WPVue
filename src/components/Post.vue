<template>
  <main class="main-content" :key="post.id">
    <div v-if="post">
      <img :src="post.featured_image_url" />
      <h1 v-html="post.title.rendered"></h1>
      <div v-html="post.content.rendered"></div>
    </div>
  </main>
</template>
<script>
  import { HTTP } from './../environment';

  export default {
    name: 'Post',

    data() {
      return {
        post: {}
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        HTTP.get('wp/v2/posts?slug='+this.$route.params.id)
        .then((resp) => {
          this.post = resp.data[0]
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>