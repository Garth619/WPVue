<template>

  <main class="main-content" id="blog-archive" v-if="posts && posts.length" :key="currentPage">

    <article v-for="post of posts" class="row row-no-padding">

      <div class="column featured-image">
        <router-link :to="{ name: 'Post', params: { id: post.slug }}">
          <img :src="post.featured_image_url" />
        </router-link>
      </div>

      <div class="column title-excerpt">
        <h2>
          <router-link :to="{ name: 'Post', params: { id: post.slug }}">
            {{post.title.rendered}}
          </router-link>
        </h2>
        <div v-html="post.excerpt.rendered"></div>
      </div>

    </article>

    <div class="pagination">
      <router-link :to="{ name: 'Blog', params: { id: prevPage }}" v-if="!firstPage" class="previous">Previous</router-link>
      <router-link :to="{ name: 'Blog', params: { id: nextPage }}" v-if="!lastPage" class="next">Next</router-link>
    </div>

  </main>
    
</template>
<script>
  import { HTTP } from './../environment';

  export default {
    name: 'Archive',

    data() {
      return {
        posts: {}
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
        HTTP.get('wp/v2/posts?page='+this.$route.params.id)
        .then((resp) => {
          this.posts = resp.data
          this.totalPages = resp['headers']['x-wp-totalpages']

          this.currentPage = this.$route.params.id

          if ( this.currentPage == this.totalPages ) {
            this.lastPage = true
          } else {
            this.lastPage = false
          }

          if ( this.currentPage == 1 ) {
            this.firstPage = true
          } else {
            this.firstPage = false
          }

          this.pageNumber = this.$route.params.id;
          this.nextPage = parseInt(this.pageNumber) + 1;
          this.prevPage = parseInt(this.pageNumber) - 1;

        })
        .catch((err) => {
          console.log(err)
        })
      }

    }
  }
</script>