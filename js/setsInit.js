var style = localStorage.getItem("ggnowstyle");
var time = localStorage.getItem("ggnowtimeupdate");
if (time == null) {
  time = "5";
  localStorage.setItem("ggnowtimeupdate", time);
}
if (style == null) {
  style = "goodgame";
  localStorage.setItem("ggnowstyle", style);
}
