import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebsocketProvider } from "y-websocket";
import {svelteSyncedStore} from "@syncedstore/svelte";

const slidersStore = syncedStore({
  events: {}
})
export const store = svelteSyncedStore(slidersStore)

const doc = getYjsValue(slidersStore)
export const wsProvider = new WebsocketProvider(
  "wss://sync-poc-ws.cde.zquintana.com",
  "events",
  doc
)
