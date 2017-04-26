import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Movie from '@/pages/Movie'
import MovieDetail from '@/pages/MovieDetail'
import Book from '@/pages/Book'
import Weather from '@/pages/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    }
  ]
})
