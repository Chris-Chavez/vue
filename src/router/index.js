import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agregar-genero',
    name: 'Agregar-genero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AgregarG.vue')
    }
  },
  {
    path: '/agregar-peliculas',
    name: 'Agregar-peliculas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AgregarP.vue')
    }
  },
    {
    path: '/peliculas',
    name: 'peliculas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Peliculas.vue')
    }
  },
    {
    path: '/Generos',
    name: 'Generos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Generos.vue')
    }
  },
    {
    path: '/Generos/EditarG/:id',
    name: 'EditarG',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EditarG.vue')
    }
  },
  {
  path: '/peliculas/EditarP/:id',
  name: 'EditarP',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function () {
    return import(/* webpackChunkName: "about" */ '../views/EditarP.vue')
  }
}
]

const router = new VueRouter({
  routes
})

export default router
