import setupSocket from './setup';
export const socket = setupSocket();

// export default function initiateSocket(ctx) {
//   socket.on('connect', () => console.log('hello blog'));
//   socket.on('Post:Incoming', (post) => {
//     const { posts } = ctx.state;
//     ctx.setState({ posts: posts.push(post) })
//   });
//
//   socket.on('Post:NewAll', (allPosts) => {
//     ctx.setState({
//       posts: allPosts,
//       show: null,
//     })
//   });
//
//   socket.on('Post:Show', (post) => {
//     ctx.setState({
//       show: post,
//       posts: null,
//     });
//   });
//
//   return socket;
// };
