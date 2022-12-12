<script>
  import {store} from "../stores/videoMedia";
  import VideoPlayer from 'svelte-video-player';
  const sources = [
    "https://download-a.akamaihd.net/files/media_publication/8f/osg_E_075_r360P.mp4",
    "https://download-a.akamaihd.net/files/media_publication/ee/jwb-090_E_12_r360P.mp4",
  ];
  let selectedSource;

  store.subscribe(v => {
    const {selectedSource: source} = {...v.selected.source}
    console.log(`Subscribed source ${source}`);
    if (!source) {
      return;
    }

    selectedSource = source;
    console.log(`selected source ${selectedSource}`);
  })

  function onSelectChange() {
    $store.selected['source'] = { selectedSource }
  }
</script>

<div>
  <h1>Video Media</h1>
  <select bind:value={selectedSource} on:change={onSelectChange}>
    {#each sources as source, index}
      <option value="{source}">Source {index}</option>
    {/each}
  </select>
  {#key selectedSource}
    <VideoPlayer source="{selectedSource}" />
  {/key}
</div>

<style>

</style>