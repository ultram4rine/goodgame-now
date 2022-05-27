<script>
  export let stream = {};
</script>

<a target="_blank" rel="noopener noreferrer" href={stream.start}>
  <div name={stream.streamer.nickname} class="inactive">
    <img
      alt="avatar"
      src="https://static.goodgame.ru{stream.streamer.avatar}"
    />
    <div class="nickname">{stream.streamer.nickname}</div>
    {#if stream.start}
      <div class="start">{stream.start}</div>
    {/if}
  </div>
</a>

<style>
  .inactive {
    cursor: pointer;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid black;
    text-decoration: none;
    font-family: -apple-system, Open Sans, sans-serif;
    font-size: 14px;
    color: #63a0fa;
  }
  .inactive:hover {
    background-color: #2e3a58;
  }
  .inactive img {
    width: 35px;
    height: 35px;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid rgb(62, 77, 113);
  }
  .inactive .nickname {
    width: auto;
    margin-left: 5px;
    float: left;
  }
  .inactive .start {
    margin-right: 10px;
    float: right;
    color: #43b85b;
  }
</style>
