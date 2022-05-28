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

<a target="_blank" rel="noopener noreferrer" href={stream.start}>
  <div name={stream.streamer.nickname} class="inactive">
    <img
      alt="avatar"
      src="https://static.goodgame.ru{stream.streamer.avatar}"
    />
    <div class="nickname">{stream.streamer.nickname}</div>
    {#if stream.broadcast !== false}
      <div class="start">{`${day}${hour}:${minutes}`}</div>
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
