<script>
  import { store } from '../stores/events'

  const grabberWidth = 10

  export let width = 60
  export let x = 20
  export let identifier

  let expanding = null
  let start = null, initial = null

  store.subscribe(v => {
    const e = v.events[identifier];
    if (!e) {
      return
    }

    width = e.width
    x = e.x
  })

  function updateStore(x, width) {
    $store.events[identifier] = {x, width}
  }

  function startExpand(type, event) {
    expanding = type
    start = event.pageX
    initial = { x, width }
  }

  function stopExpand() {
    updateStore(x, width)
    expanding = null
    start = null
    initial = null
  }

  function expand(event) {
    if (!expanding) return

    if (expanding == 'left') {
      const delta = start-event.pageX
      x = initial.x - delta
      width = initial.width + delta
      updateStore(x, width)

      return
    }

    if (expanding == 'right') {
      const delta = event.pageX-start
      width = initial.width + delta
      updateStore(x, width)

      return
    }
  }
</script>

<svelte:window on:mouseup={stopExpand} />

<svg viewBox="0 0 100 40" height=44 width=300 on:mousemove={expand} class:expanding>
    <rect x={x} y=2 width={width} height=36 class="step"/>
    <rect x={x} y=2 width={grabberWidth} height=36 fill=red class="grip" on:mousedown={startExpand.bind(this, 'left')}  class:active={expanding=='left'}/>
    <rect x={x+width-grabberWidth} y=2 width={grabberWidth} height=36 fill=blue class="grip" on:mousedown={startExpand.bind(this, 'right')} class:active={expanding=='right'}/>
</svg>

<style>
    .step {
        fill: #8884;
        stroke: #222a;
        rx: 2;
    }
    .expanding .step{
        stroke: #228e;
    }
    .grip {
        cursor: col-resize;
        fill: #fff0;
    }
    .grip.active, .grip:hover {
        fill: #2288;
    }
</style>
