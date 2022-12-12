import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
import {svelteSyncedStore} from "@syncedstore/svelte";

const videoMediaStore = syncedStore({
  selected: {},
})
export const store = svelteSyncedStore(videoMediaStore)

const doc = getYjsValue(videoMediaStore)
export const wsProvider = new WebsocketProvider(
  "wss://sync-poc-ws.cde.zquintana.com",
  "video-media",
  doc
)
