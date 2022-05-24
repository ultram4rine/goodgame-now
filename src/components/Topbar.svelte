<script></script>

<div id="topbar">
  <div id="refresh"><span class="icorefresh" /></div>
  <div id="filter" style="display: none">
    <span class="icosearch" />
    <input id="search" type="text" />
  </div>
  <div id="userbar" style="display: none" />
  <div id="pages" style="display: none">
    <div id="prev">&#60;</div>
    <div id="next">&#62;</div>
  </div>
</div>

<style>
  #topbar {
    position: relative;
    width: 100%;
    height: 30px;
    background-color: #233056;
    color: #739fd6;
    font-family: -apple-system, Open Sans, sans-serif;
    border-bottom: 1px solid black;
  }
  #refresh {
    width: 20px;
    position: absolute;
    margin-top: 5px;
    margin-left: 170px;
  }
  #filter {
    width: 150px;
    height: 27px;
    float: left;
    margin-left: 10px;
    font-family: icomoon;
    color: white;
    background-color: #233056;
    border: 1px solid #233056;
  }
  #filter:hover {
    border: 1px solid rgb(62, 77, 113);
  }
  #filter #search {
    width: 100px;
    margin-top: 4.5px;
    border: 0;
    background-color: #233056;
    color: white;
  }
  #filter #search:focus {
    background-color: #0d1221;
    outline: none;
  }
  #filter.focused {
    background-color: #0d1221;
    border: 1px solid #768ba9;
  }
  #pages {
    width: 53px;
    height: 30px;
    line-height: 30px;
    margin-right: 20px;
    float: right;
    font-size: 14px;
    font-family: icomoon;
    font-size: 18px;
    background-color: #233056;
    color: #73adff;
  }
  #pages #prev {
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    line-height: 25px;
    float: left;
    margin-top: 2.5px;
    border-radius: 50%;
    background-color: #21273b;
  }
  #pages #next {
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    width: 25px;
    height: 25px;
    line-height: 25px;
    float: right;
    margin-top: 2.5px;
    border-radius: 50%;
    background-color: #21273b;
  }
  #pages .hover {
    background-color: #2e354c !important;
    color: #4f98ff !important;
  }
  #userbar {
    vertical-align: middle;
    width: 100px;
    height: 30px;
    line-height: 30px;
    float: right;
    font-size: 12px;
    font-family: -apple-system, Open Sans, sans-serif;
    color: #63a0fa;
    padding: 1px 0 0 0;
    margin: -1px auto 0 auto;
  }
  #userbar img {
    margin: 5px 5px 0 0;
    width: 20px;
    height: 20px;
    float: left;
  }
  #uservar #nickname {
    width: 70px;
    height: 30px;
    margin-left: 25px;
  }
</style>
