<script>
  import {wsProvider as eventProvider } from "../stores/events";
  import {wsProvider as videoProvider } from "../stores/videoMedia";
  import {wsProvider as imageProvider} from "../stores/imageViewer";
  import {wsProvider as tipTapProvider} from "../stores/tiptap";

  let connected = true;

  function onClick() {
    if (connected) {
      tipTapProvider.disconnect();
      eventProvider.disconnect();
      videoProvider.disconnect();
      imageProvider.disconnect();
    } else {
      tipTapProvider.connect();
      eventProvider.connect();
      videoProvider.connect();
      imageProvider.connect();
    }

    connected = !connected;
  }
</script>

<div>
  <button on:click={onClick}>{connected ? 'Online' : 'Offline'}</button>
</div>
