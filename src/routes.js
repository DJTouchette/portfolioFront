import Home from './containers/Home/index';
import About from './containers/About/index';
import Technologies from './containers/Technologies/index';
import Projects from './containers/Projects/index';
import Contact from './containers/Contact/index';
import Blog from './containers/Blog/index';
import NotFound from './containers/NotFound/index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/technologies',
    name: 'technologies',
    component: Technologies,
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/blog/:postID',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes;
