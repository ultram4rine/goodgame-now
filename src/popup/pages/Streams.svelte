<script>
  import { getTopStreamsOnPage } from "../../api/streams";

  import Stream from "../components/Stream.svelte";

  let currentPage = 0;
  $: streamsPromise = getTopStreamsOnPage(currentPage);
</script>

{#await streamsPromise then streams}
  {#each streams as stream (stream.id)}
    <Stream {stream} />
  {/each}
{/await}
