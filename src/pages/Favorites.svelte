<script>
  import { getFavoriteStreams, getTopStreamsOnPage } from "../api";

  import Stream from "../components/Stream.svelte";

  let streamsPromise = getTopStreamsOnPage(0);
</script>

{#await streamsPromise then streams}
  {#each streams as stream (stream.id)}
    <Stream {stream} />
  {/each}
{/await}
