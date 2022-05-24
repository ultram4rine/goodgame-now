<script>
  import { getFavoriteStreams } from "../api/streams";

  import Stream from "../components/Stream.svelte";

  let streamsPromise = getFavoriteStreams();
</script>

{#await streamsPromise then streams}
  {#each streams as stream (stream.id)}
    <Stream {stream} />
  {/each}
{/await}
