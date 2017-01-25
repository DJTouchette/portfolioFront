import io from 'socket.io-client';

export default function setupSocket() {
  const socket = io('http://damientouchette.io');

  return socket;
}
