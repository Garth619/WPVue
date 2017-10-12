<template>
  <div id="app" class="container">
    <header class="site-header row row-no-padding">
      <h1 class="branding column">
        <router-link :to="'/'">
          <img src="./assets/img/logo.png">
        </router-link>
      </h1>
      <nav class="main-nav column" v-if="navItems && navItems.length">

        <ul class="top-level">

          <li v-for="navItem of navItems">
            <router-link :to="navItem.url" exact>
              {{navItem.title}}
            </router-link>

          </li>
        
        </ul>
      
      </nav>
    </header>

    <transition class="router-wrap" name="fade">
      <router-view></router-view>
    </transition>
    <footer class="site-footer row">
      <div class="column footer-left">
        <p>&copy; 2017 WP Web Apps</p>
      </div>
      <div class="column footer-right">
        <p>Snappy slogan goes here.</p>
      </div>
    </footer>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data() {
      return {
        navItems: {}
      }
    },
    created() {
      this.fetchData()
    },

    methods: {
      fetchData() {
        axios.get('https://3sonsdevelopment.com/demo/artisan/wp-json/artisan-app-helper/v1/menu-locations/spa-main')
        .then((resp) => {
          this.navItems = resp.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>