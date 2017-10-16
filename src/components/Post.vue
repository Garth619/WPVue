<template>
  <main class="main-content" v-if="post && post != ''" :key="post.id">
    <img :src="post.better_featured_image.source_url" />
    <h1 v-html="post.title.rendered"></h1>
    <div v-html="post.content.rendered"></div>
  </main>
</template>
<script>
  import { HTTP } from './../environment';

  export default {
    name: 'Post',

    data() {
      return {
        post: []
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
        HTTP.get('wp-json/wp/v2/posts?slug='+this.$route.params.id)
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