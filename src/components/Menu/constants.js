import about from '../../assets/images/about.svg';
import technology from '../../assets/images/technology.svg';
import projects from '../../assets/images/projects.svg';
import home from '../../assets/images/home.svg';
import contact from '../../assets/images/contact.svg';

const menuItems = [
  { text: 'Home', icon: home, route: '/' },
  { text: 'About Me', icon: about, route: '/about' },
  { text: 'Technologies', icon: technology, route: '/technologies' },
  { text: 'Projects', icon: projects, route: '/projects' },
  { text: 'Contact Me', icon: contact, route: '/contact' },
];

export { menuItems };