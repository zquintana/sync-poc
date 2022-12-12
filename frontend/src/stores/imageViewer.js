import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
import {svelteSyncedStore} from "@syncedstore/svelte";

const imageViewerStore = syncedStore({
  selected: {},
})
export const store = svelteSyncedStore(imageViewerStore)

const doc = getYjsValue(imageViewerStore)
export const wsProvider = new WebsocketProvider(
  "wss://sync-poc-ws.cde.zquintana.com",
  "image-viewer",
  doc
)
