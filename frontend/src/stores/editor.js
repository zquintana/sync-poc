import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
import {svelteSyncedStore} from "@syncedstore/svelte";
import * as awarenessProtocol from 'y-protocols/awareness.js'


const editorStore = syncedStore({
  text: 'text'
})
export const store = svelteSyncedStore(editorStore)

const doc = getYjsValue(editorStore)
export const awareness = new awarenessProtocol.Awareness(doc);
export const wsProvider = new WebsocketProvider(
  'wss://sync-poc-ws.cde.zquintana.com',
  'editor',
  doc,
  { awareness }
);
