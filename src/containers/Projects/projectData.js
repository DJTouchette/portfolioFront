const data = [
  { 
    title: 'Top 3', 
    img: 'https://s-media-cache-ak0.pinimg.com/originals/64/26/76/6426763e5bc66ea32a61598c05f8cf91.png' , 
    text: "You'll find my top 3 projects below feel free to browse around or check out my CV.", 
    links: [
      { 
        label: 'View CV', 
        href: 'https://www.visualcv.com/1lz1cq4kuiq' 
      }
    ] 
  },
  { 
    links: [
      {
        label: 'Back-End Code',
        href: 'https://github.com/DJTouchette/leadGen',
      },
      {
        label: 'One of the Front-Ends',
        href: 'http://axisvips.com'
      }
    ], 
    title: 'Lead Generation Platform', 
    text: 'Developed a website template to re use for different builders in the real estate market. The templates interact with a API to send emails and leads to agents. All websites are hosted on AWS  S3 using Cloudfront as a CDN and routing using Amazon Route53.', 
    img: 'https://workstory.s3.amazonaws.com/assets/1350704/avenu151.png'  
  },
  { 
    links: [
      {
        label: 'More Info About Thrifa',
        href: 'http://www.thrifa.net/',
      }
    ],  
    title: 'Thrifa', 
    text: 'Taking a lead on projects from Thrifa.net. A fully remote company that consults for varies componies.', 
    img: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/14963246_216332675444347_5118148216604406455_n.png?oh=1748e32dea4d294fba6e94335f1a1737&oe=59113209'  
  },
  { 
    links: [
      {
        label: 'VoteWise Front-end',
        href: 'https://votewise.net/#/welcome',
      }
    ],  
    title: 'VoteWise (Back-End)', 
    text: 'Forum where voters can ask questions to their politicians based on their location and  have discussions amongst themselves in different forum threads. My responsibilities were to create a RESTfull API so voters could find there representatives by town, county and jurisdiction. To accomplish this I used Node.js, Express.js and MongoDB.', 
    img: 'https://votewise.net/assets/images/voter.svg'  
  },
];

export default data;