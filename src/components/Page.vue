<template>
  <main class="main-content" v-if="page && page != ''" :key="page.id">

      <img :src="page.featured_image_url" />
      <h1>{{page.title.rendered}}</h1>
      <div v-html="page.content.rendered"></div>

  </main>
</template>

<script>
  import { HTTP } from './../environment';

  export default {
    name: 'Page',

    data() {
      return {
        page: []
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

        if ( this.$route.params.id === undefined ) {

          HTTP.get('wp/v2/pages?slug=front-page')
          .then((resp) => {
            this.page = resp.data[0]
          })
          .catch((err) => {
            console.log(err)
          })
        
        } else {

          HTTP.get('wp/v2/pages?slug='+this.$route.params.id)
          .then((resp) => {
            this.page = resp.data[0]
          })
          .catch((err) => {
            console.log(err)
          }) 
        }

      }
    }
  }
</script>