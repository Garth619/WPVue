<template>
  <div id="app" class="container">
    <header class="site-header row row-no-padding">
      <h1 class="branding column">
        <router-link :to="'/'">
          <img src="./assets/img/logo.png">
        </router-link>
      </h1>
      <nav class="main-nav column" v-if="navItems && navItems != ''">
        <ul class="top-level">
          <li>
            <router-link :to="'/'">Home</router-link>
          <li v-for="navItem of navItems.items" :key="navItem.object_slug">
            <router-link :to="'/' + navItem.object_slug" exact>
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
        <p><a href="https://wpwebapps.com" target="blank" rel="nofollow">&copy; 2017 WP Web Apps</a></p>
      </div>
      <div class="column footer-right">
        <p>WP + Vue.js = Amazing</p>
      </div>
    </footer>
  </div>

</template>

<script>
  import { HTTP } from './environment';
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
        HTTP.get('wp-json/wp-api-menus/v2/menus/2') // change the 2 here to match the ID of your navigation menu
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