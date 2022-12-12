<script>
	import Sliders from "./components/Sliders.svelte";
	import Editor from "./components/Editor.svelte";
	import TiptapEditor from "./components/TiptapEditor.svelte";
	import VideoMedia from "./components/VideoMedia.svelte";
	import ImageViewer from "./components/ImageViewer.svelte";
	import Precense from "./components/Precense.svelte";
	import ConnectivityButton from "./components/ConnectivityButton.svelte";
	export let name;
</script>

<main>
	<div class="small-column">
		<Precense />
	</div>
	<div class="column">
		<TiptapEditor />
		<Sliders />
	</div>
	<div class="column">
		<VideoMedia />
		<ImageViewer />
	</div>
	<div>
		<ConnectivityButton />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: flex;
		gap: 20px;
	}

	main .column {
		width: 300px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>