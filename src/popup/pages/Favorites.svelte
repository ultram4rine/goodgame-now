<script>
  import { onMount } from "svelte";

  import { getFavoriteStreams } from "../../api/streams";

  import { authenticated } from "../../stores/auth";

  import Stream from "../components/Stream.svelte";
  import StreamOffline from "../components/StreamOffline.svelte";

  let online = [];
  let retranslating = [];
  let soon = [];
  let offline = [];

  onMount(async () => {
    let streams = await getFavoriteStreams();

    online = streams.filter((s) => s.online === 1); // Filter online streams.
    streams = streams.filter((s) => !(s.online === 1)); // Reverse filter to remove from all streams.

    retranslating = streams.filter((s) => s.hosting !== false);
    streams = streams.filter((s) => !(s.hosting !== false));

    soon = streams.filter((s) => s.broadcast !== false);
    streams = streams.filter((s) => !(s.broadcast !== false));

    offline = streams.filter((s) => s.online === 0);
    streams = streams.filter((s) => !(s.online === 0));
  });
</script>

{#if !$authenticated}
  <div id="unauth">
    Вы не вошли<br />
    <a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru">
      <button id="login">Вход</button>
    </a>
  </div>
{:else}
  {#if online.length > 0}
    <div class="streams-wrapper">
      <div class="title">Каналы онлайн</div>
      {#each online as stream (stream.id)}
        <Stream {stream} />
      {/each}
    </div>
  {/if}

  {#if retranslating.length > 0}
    <div class="streams-wrapper">
      <div class="title">Ретрансляции</div>
      {#each retranslating as stream (stream.id)}
        <Stream {stream} />
      {/each}
    </div>
  {/if}

  {#if soon.length > 0}
    <div class="streams-wrapper">
      <div class="title">Скоро в эфире</div>
      {#each soon as stream (stream.id)}
        <Stream {stream} />
      {/each}
    </div>
  {/if}

  {#if offline.length > 0}
    <div class="streams-wrapper">
      <div class="title">Офлайн</div>
      {#each offline as stream (stream.id)}
        <StreamOffline {stream} />
      {/each}
    </div>
  {/if}
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

  .streams-wrapper {
    margin-bottom: 20px;
    margin-top: 5px;
  }
  .title {
    font-size: 18px;
    margin: 0 14px 5px;
    color: #dfecff;
  }
</style>
