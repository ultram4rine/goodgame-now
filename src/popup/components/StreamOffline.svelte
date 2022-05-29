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

<div class="stream-info-wrap">
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={stream.link}
    class="stream-info-block flex"
  >
    <span class="avatar">
      <img
        alt="avatar"
        src="https://static.goodgame.ru{stream.streamer.avatar}"
      />
    </span>
    <span class="streamer-block">
      {#if stream.hosting !== false}
        <span class="pull-left">
          <span class="streamer">{stream.streamer.nickname}</span>
          <img
            alt="lightning"
            src="https://goodgame.ru/images/svg/ic-lightning.svg"
          />
          <span class="streamer">
            {stream.hosting.streamer.nickname}
          </span>
        </span>
      {:else}
        <span class="streamer streamer-offline">
          {stream.streamer.nickname}
        </span>
        {#if stream.broadcast !== false}
          <div class="start">{`${day}${hour}:${minutes}`}</div>
        {/if}
      {/if}
    </span>
  </a>
</div>

<style>
  .stream-info-wrap {
    position: relative;
  }
  .stream-info-wrap:hover {
    background-color: #2e3a58;
  }

  .stream-info-block {
    position: relative;
    display: block;
    padding: 8px 14px;
    white-space: nowrap;
    line-height: 22px;
    color: #dfecff;
  }
  .stream-info-block:after {
    content: "";
    display: table;
    clear: both;
  }
  .stream-info-block.flex {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  .stream-info-block .avatar {
    float: left;
    border-radius: 2px;
    width: 44px;
    height: 44px;
    margin-right: 14px;
    overflow: hidden;
    border: 2px solid #768ba9;
  }
  .stream-info-block.flex .avatar {
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .stream-info-block .avatar img {
    width: 100%;
    height: 100%;
  }

  .stream-info-block .streamer-block {
    width: 100%;
    overflow: hidden;
    display: block;
  }
  .stream-info-block .streamer-block .pull-left {
    width: calc(100% - 80px);
    overflow: hidden;
    text-overflow: ellipsis;
    float: left !important;
  }
  .stream-info-block .streamer {
    margin-right: 3px;
    color: #73adff;
    text-overflow: ellipsis;
  }
  .stream-info-block .streamer.streamer-offline {
    text-overflow: ellipsis;
    float: left !important;
  }
  .stream-info-block .streamer-block img {
    display: inline-block;
    vertical-align: top;
    margin: 4px 3px 0 0;
  }
</style>
