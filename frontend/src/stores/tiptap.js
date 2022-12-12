import * as Y from 'yjs'
import { WebsocketProvider } from "y-websocket";
import * as awarenessProtocol from 'y-protocols/awareness.js'

export const ydoc = new Y.Doc()
export const awareness = new awarenessProtocol.Awareness(ydoc);
export const wsProvider = new WebsocketProvider(
  'wss://sync-poc-ws.cde.zquintana.com',
  'tiptap',
  ydoc,
  { awareness }
);
