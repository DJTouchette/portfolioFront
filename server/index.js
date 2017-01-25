const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const applyMiddlewares = require('./middlewares/index');
const port = 8080 || process.env.port;
const Events = require('./sockets/index');
const Post = require('./models/Post');
require('dotenv').config();

applyMiddlewares(app);

app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

server.listen(port, () => {
  console.log('listening on port ' + port);
//   const post = new Post({
//     content: "<p>This is my first blog post and I'm going to use it as a quick introduction. I'm web developer who specializes in API development, along with that I'm also a consultant. The main focus of these writings will be to document my learnings and tutorials on thing like React/Redux, Node and any other language or frameworks I can get my hands on.<\/p><p>Currently My main focus is to get this blog up and running, along with some adjustments to this site. If you have any suggestions, comment below! Assuming I got to putting the comment section in... In the meantime you can head over to <a href='https://damientouchette.io/contact'>to the contact page<\/a><\/p><p>Cheers<\/p>",
//     heroImg: "https://i.ytimg.com/vi/PO26A3XOglE/maxresdefault.jpg",
//     title: "First Time For Everything",
//     published: true
// });
//
// post.save((err) => {
//   console.log(err);
//   console.log('saved');
// })
});

io.on('connection', function (socket) {

  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });

  Events(socket);
  // PostEvents(socket);
});
