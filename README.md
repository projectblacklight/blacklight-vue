# VueJS for Blacklight


## Create a project using Vue JS CLI

Then add sass support:
```
yarn add sass-loader node-sass
```

Then add routes. In main.js add the following:
```
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Blacklight)
Vue.use(VueRouter)

// Push your own "Home" page into the routes.
BlacklightRoutes.push({ path: '/', name: 'home', component: Home })
const router = new VueRouter({
  routes: BlacklightRoutes
})

new Vue({
  router,
  render: h => h(App),
  http: {
    root: 'http://demo.projectblacklight.org',
    headers: {
      Accept: 'application/json'
    }
  }
}).$mount('#app')
```

Then in `App.vue` add the following to the template:
```
<div id="app">
  <vue-progress-bar></vue-progress-bar>
  <router-view></router-view>
</div>
```

And `components/Home.vue` could look like this:

```
<template>
  <div class="hello">
    <Search />
  </div>
</template>

<script>

import Search from 'blacklight-vue/src/components/Search'

export default {
  name: 'Home',
  components: {
    Search
  }
}
</script>
```

## Install dependencies

```
npm install
```

## Configure

You can set the title field to use by doing:
```
Vue.prototype.$titleField = 'title_display'
```
