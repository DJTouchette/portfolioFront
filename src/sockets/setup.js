import io from 'socket.io-client';

export default function setupSocket() {
  const socket = io('http://localhost:8080');

  return socket;
}
