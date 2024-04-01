import { io } from 'socket.io-client';
import { config } from 'dotenv';

config();

const WS_PORT = process.env.WS_PORT;
const socket = io(`http://localhost:${WS_PORT}`);

socket.on('queue:socket', (payload) =>
  console.log('ws-client', JSON.parse(payload))
);
