# WPVue

WP Vue is a simple web app that uses Vue.js and a WordPress installation to provide content.  It's intended to be a starter for projects as well as be a companion to a WordCamp talk.  

# Installation

* Download or clone this repository to your computer and unarchive it.  
* At your command prompt, navigate to its directory and enter `npm install`
* Open up the /src folder and edit the environment.js file there.  Change the http://yoursite.com/ to the URL to your site.
* Back in the command prompt enter `npm run dev` to start up the development server.
* Visit <http://localhost:8080> in your broswer to see the site.

# WordPress Setup

* This app does require two WordPress plugins in order to function as expected: Better REST API Featured Images <https://wordpress.org/plugins/better-rest-api-featured-images/> and WP REST API Menus <https://wordpress.org/plugins/wp-api-menus/>.
* For your navigation menu, create one like you normally would and save it.  Look in the URL of your browser while editing that menu and hopefully the URL will end with something like ?action=edit&menu=2 .  Here 2 is the ID of our menu.  To load up our navigation menu, edit the App.vue file in the SRC folder and you'll see a line like this: 
`HTTP.get('wp-json/wp-api-menus/v2/menus/2')`  
Change the 2 there to the ID of your navigation menu and save your changes.
* You will need to create a page called "Front Page" to serve as the front page of your app.  You do not need to add that page to the navigation menu as the home link is already included in the app.

---

That should have your development environment hooked up to the WordPress installation.  You can now edit the files to create your site.  All of the CSS is located in the main.css file which is in the static directory.  

When you've finished your app and are ready to deploy, open up a command prompt and enter `npm run build`.  This will create a dist folder where your completed app is ready for production.  Please note this folder has to be run on a web server.  Simply opening up the index.html file there will not load up the app. 

If you'd like a turn key web app, WP Web Apps <https://wpwebapps.com> is the first seller of commercial web apps for WordPress.  