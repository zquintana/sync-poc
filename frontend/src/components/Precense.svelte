<script>
  import {awareness, wsProvider} from "../stores/editor";
  let userTotal = 0;
  wsProvider.on('status', ({status}) => {
    console.log(`Status ${status}`);
    userTotal = awareness.getStates().size;
  });

  awareness.on('change', () => {
    userTotal = awareness.getStates().size;
  });
</script>

<div>
  <h3>Who's Online?</h3>
  <ul>
    {#each Array(userTotal) as _, index}
      <li>User {index}</li>
    {/each}
  </ul>
</div>