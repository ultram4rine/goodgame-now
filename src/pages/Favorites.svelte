<script>
  import { getFavoriteStreams } from "../api/streams";

  import { authenticated } from "../stores/auth";

  import Stream from "../components/Stream.svelte";

  $: streamsPromise = $authenticated
    ? getFavoriteStreams()
    : Promise.resolve([]);
</script>

{#if !$authenticated}
  <div id="unauth">
    Вы не вошли<br />
    <a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru">
      <button id="login">Вход</button>
    </a>
  </div>
{:else}
  {#await streamsPromise then streams}
    {#each streams as stream (stream.id)}
      <Stream {stream} />
    {/each}
  {/await}
{/if}

<style>
  #unauth {
    position: absolute;
    font-family: -apple-system, Open Sans, sans-serif;
    color: white;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #unauth button {
    width: 70px;
    height: 35px;
    margin-top: 3px;
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    font-family: -apple-system, Open Sans, sans-serif;
    font-size: 14px;
    background-color: #394466;
    color: #73adff;
  }
  #unauth button:hover {
    color: #458eff;
  }
  #unauth button:active {
    outline: none;
  }
</style>
