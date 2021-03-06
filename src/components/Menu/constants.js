import about from '../../assets/images/about.svg';
import technology from '../../assets/images/technology.svg';
import projects from '../../assets/images/projects.svg';
import home from '../../assets/images/home.svg';
import contact from '../../assets/images/contact.svg';
import blog from '../../assets/images/blog.svg';
import youtube from '../../assets/images/youtubelogo.png';

const menuItems = [
  { text: 'Home', icon: home, route: '/' },
  { text: 'Testimonials', icon: blog, route: '/testimonials' },
  { external: true, text: 'Youtube Channel', icon: youtube, route: 'https://www.youtube.com/channel/UCzTvUZmrkCrbOKHTATeJITg' },
  { text: 'About Me', icon: about, route: '/about' },
  { text: 'Technologies', icon: technology, route: '/technologies' },
  { text: 'Projects', icon: projects, route: '/projects' },
  { text: 'Contact Me', icon: contact, route: '/contact' },
  // { text: 'Blog', icon: blog, route: '/blog' },
];

export { menuItems };
