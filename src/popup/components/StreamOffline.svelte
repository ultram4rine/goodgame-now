<script>
  export let stream = {};

  let day = "";
  let hour = "";
  let minutes = "";
  if (stream.broadcast !== false) {
    let date = new Date(stream.broadcast.start * 1000);

    if (new Date().getDay() == date.getDay()) {
      day = "Сегодня в ";
    } else if (new Date().getDay() == date.getDay() + 1) {
      day = "Завтра в ";
    } else {
      let d = date.getDate().toString();
      if (d.length == 1) {
        d = "0" + d;
      }
      let month = (date.getMonth() + 1).toString();
      if (month.length == 1) {
        month = "0" + month;
      }
      day = d + "." + month + " в ";
    }

    hour = date.getHours().toString();
    if (hour.length == 1) {
      hour = "0" + hour;
    }

    minutes = date.getMinutes().toString();
    if (minutes.length == 1) {
      minutes = minutes + "0";
    }
  }
</script>

<a target="_blank" rel="noopener noreferrer" href={stream.link}>
  <div name={stream.streamer.nickname} class="inactive">
    <img
      alt="avatar"
      src="https://static.goodgame.ru{stream.streamer.avatar}"
    />
    {#if stream.hosting === false}
      <div class="nickname">{stream.streamer.nickname}</div>
      {#if stream.broadcast !== false}
        <div class="start">{`${day}${hour}:${minutes}`}</div>
      {/if}
    {:else}
      <span class="streamer-block">
        <span class="pull-left">
          <span class="streamer ng-binding">{stream.streamer.nickname}</span>
          <img
            alt="lightning"
            src="https://goodgame.ru/images/svg/ic-lightning.svg"
          />
          <span class="streamer ng-binding"
            >{stream.hosting.streamer.nickname}</span
          >
        </span>
      </span>
    {/if}
  </div>
</a>

<style>
  .streamer-block {
    width: 100%;
    overflow: hidden;
    display: block;
  }
  .streamer-block .pull-left {
    width: calc(100% - 80px);
    overflow: hidden;
    text-overflow: ellipsis;
    float: left !important;
  }
  .streamer {
    margin-right: 3px;
    color: #73adff;
    text-overflow: ellipsis;
  }
  .streamer-block img {
    display: inline-block;
    vertical-align: top;
    margin: 4px 3px 0 0;
  }

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
