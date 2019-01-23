# VueJS for Blacklight


[![npm version](https://img.shields.io/npm/v/blacklight-vue.svg)](https://www.npmjs.com/package/blacklight-vue)

See a demo usage of this library at https://github.com/projectblacklight/blacklight-vue-demo


## Getting started:

The first step is to create a project using [Vue JS CLI](https://cli.vuejs.org/guide/creating-a-project.html#vue-create).

Next add blacklight-vue:
```
yarn add blacklight-vue
```

Then add sass support:
```
yarn add sass-loader node-sass
```

Then add routes. In main.js add the following:
```js
import Blacklight from 'blacklight-vue'
import BlacklightRoutes from 'blacklight-vue/src/routes'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Blacklight)
Vue.use(VueRouter)

// Push your own "Home" page into the routes.
BlacklightRoutes.push({ path: '/', name: 'home', component: Home })
const router = new VueRouter({
  routes: BlacklightRoutes
})

// Add address to the API server
Vue.http.options.root = 'http://demo.projectblacklight.org'
Vue.http.options.headers = {
  Accept: 'application/json'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

Then in `App.vue` add the following to the template:
```html
<div id="app">
  <vue-progress-bar></vue-progress-bar>
  <router-view></router-view>
</div>
```

And `components/Home.vue` could look like this:

```vue
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

Finally, if you want to use bootstrap, install it.
I used these directions: https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e
But all you need to do is:

```
yarn add bootstrap
```

and then change the styles in `src/App.vue` to be:

```vue
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
@import '~blacklight-vue/scss/blacklight.scss';
</style>
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
