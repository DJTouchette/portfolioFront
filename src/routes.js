import Home from './containers/Home/index';
import About from './containers/About/index';
import Technologies from './containers/Technologies/index';
import Projects from './containers/Projects/index';
import Contact from './containers/Contact/index';
import Blog from './containers/Blog/index';
import Testimonials from './containers/Testimonials/index';
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
    path: '/Testimonials',
    name: 'testimonials',
    component: Testimonials,
  },
  {
    path: '/cv/:action',
    name: 'download cv',
    onEnter: () => {
      if (window.innerWidth < 450)
        return window.location.replace('https://www.visualcv.com/1lz1cq4kuiq');

    },
    component: Home,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes;
