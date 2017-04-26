/**
 * Created by littlestone on 2017/4/13.
 */
import axios from 'axios';
const API_ROOT = 'http://localhost:8080/api/';

const Movie = {
  // 正在热映    /v2/movie/in_theaters
  // 即将上映    /v2/movie/coming_soon
  // top250    /v2/movie/top250
  // 口碑榜     /v2/movie/weekly
  // 北美票房榜  /v2/movie/us_box
  getMovieByType : (type) => axios.get(API_ROOT+'movie/'+type),
  getMovieDetail : (id) => axios.get(API_ROOT+'movie/subject/'+id),
};

export default {
  Movie
}