<script>
  let style = "twitchnow";
  let minutes = 5;
</script>

<div id="settings">
  <div id="style" class="sets">
    Стиль вкладок<br />
    <input
      type="radio"
      id="twitchnow"
      bind:group={style}
      name="style"
      value="twitchnow"
    />
    <label for="twitchnow">Twitch Now style</label>
    <input
      type="radio"
      id="goodgame"
      bind:group={style}
      name="style"
      value="goodgame"
    />
    <label for="goodgame">GoodGame style</label>
  </div>
  <div id="time" class="sets">
    Автообновление через<br />
    <input
      type="range"
      id="slide"
      min="1"
      max="60"
      step="1"
      bind:value={minutes}
    />
    <span id="val">{minutes} минут.</span>
  </div>
</div>

<style>
  .sets {
    min-height: 35px;
    padding: 10px 20px;
    font-family: -apple-system, Open Sans, sans-serif;
    font-size: 14px;
    color: white;
    border-bottom: 1px solid black;
  }
  input[type="radio"] {
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
    float: left;
    clear: none;
    margin: 2px 2px 0 2px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 4px solid #1c2644;
    background: #1c2644;
    outline: none;
  }
  input[type="radio"]:checked {
    background: #52709c;
  }
  #style label {
    cursor: pointer;
    float: left;
    clear: none;
    padding: 2px 1em 0 0;
    color: #739fd6;
  }
  input[type="range"] {
    -webkit-appearance: none;
    width: 80%;
    background: transparent;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 4px solid #1c2644;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #52709c;
    cursor: pointer;
    margin-top: -7px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    border: 4px solid #1c2644;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #52709c;
    cursor: pointer;
    margin-top: -7px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  #val {
    margin-top: 5px;
  }
</style>
