<script>
  import {store} from "../stores/imageViewer";

  const images = [
    "https://assetsnffrgf-a.akamaihd.net/assets/m/2017090/univ/art/2017090_univ_lss_lg.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/102018021/univ/art/102018021_univ_lss_lg.jpg",
  ];
  let selectedImage;

  store.subscribe(v => {
    const { selectedImage: image } = { ...v.selected.image };
    if (!image) {
      return;
    }
    selectedImage = image;
  });

  function onChange() {
    $store.selected['image'] = { selectedImage }
  }
</script>

<div>
  <h1>Image Viewer</h1>

  <select bind:value={selectedImage} on:change={onChange}>
    {#each images as image, index}
      <option value="{image}">Image {index}</option>
    {/each}
  </select>

  <div class="image-display">
    {#key selectedImage}
      <img src="{selectedImage}" />
    {/key}
  </div>
</div>

<style>
    .image-display {
        overflow: hidden;
    }

    .image-display img {
        max-width: 290px;
    }
</style>
