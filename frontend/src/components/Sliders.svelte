<script>
  import Event from './Event.svelte'
</script>

<div class="container">
    <h1>Interface Controls</h1>
    <h3>Drag to resize</h3>

    <div class="timeline">
        <Event x={-50} width={80} identifier="1"/>
        <Event x={10} width={80} identifier="2"/>
        <Event x={40} identifier="3"/>
        <Event x={-20} width={150} identifier="4"/>
    </div>
</div>

<style>
    :global(body) {
        display: flex;
        justify-content: center;
        place-items: center;
    }
    h1 {
        margin-bottom: 2.5rem;
        text-align: center;
    }
    .timeline {
        display: flex;
        flex-direction: column;
    }
    .timeline :global(svg) {
        border-bottom: solid 1px #ccc;
    }
    .timeline :global(:first-child) {
        border-top: solid 1px #ccc;
    }
</style>
