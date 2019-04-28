var style = localStorage.getItem("ggnowstyle");
var time = localStorage.getItem("ggnowtimeupdate");
console.log("sets")
if (time == null) {
    time = '5';
    localStorage.setItem("ggnowtimeupdate", time);
}
if (style == null) {
    style = "twitchnow";
    localStorage.setItem("ggnowstyle", style);
}