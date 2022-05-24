let style = localStorage.getItem("ggnowstyle");
let time = localStorage.getItem("ggnowtimeupdate");

if (style == null) {
  style = "goodgame";
  localStorage.setItem("ggnowstyle", style);
}

if (time == null) {
  time = "5";
  localStorage.setItem("ggnowtimeupdate", time);
}
