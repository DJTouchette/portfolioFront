import Home from './containers/Home/index';
import About from './containers/About/index';
import Technologies from './containers/Technologies/index';
import Projects from './containers/Projects/index';
import Contact from './containers/Contact/index';

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
]

export default routes;