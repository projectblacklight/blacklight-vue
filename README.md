# VueJS for Blacklight


## Create a project using Vue JS CLI

Then add sass support:
```
yarn add sass-loader node-sass
```

Then add routes. In main.js add the following:
```
import VueRouter from 'vue-router'

Vue.use(Blacklight)
Vue.use(VueRouter)

const router = new VueRouter({
  BlacklightRoutes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

## Install dependencies

```
npm install
```
