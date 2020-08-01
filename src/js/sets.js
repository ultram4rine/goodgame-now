$(document).ready(function() {
  $("#sets").click(function() {
    var btn = $(this);
    btn
      .parent()
      .children()
      .css("background-color", "#1C2644");
    btn.css("background-color", "#52709C");

    $("#refresh").css("display", "none");
    $("#filter").css("display", "none");
    $("#pages").css("display", "none");

    var sets = $("#settings");
    sets
      .parent()
      .children()
      .css("display", "none");
    sets.css("display", "block");
  });

  var style = localStorage.getItem("ggnowstyle");
  if (style == "twitchnow") {
    $("input[value=twitchnow]").prop("checked", true);
  } else if (style == "goodgame") {
    $("input[value=goodgame]").prop("checked", true);
  }

  var time = localStorage.getItem("ggnowtimeupdate");
  $("#slide").val(time);
  $("#val").html(time + " мин.");
  $(document).on("input", "#slide", function() {
    $("#val").html($(this).val() + " мин.");
    localStorage.setItem("ggnowtimeupdate", $(this).val());
  });

  $("input[type=radio][name=style]").change(function() {
    if (this.value == "twitchnow") {
      $("#style[rel=stylesheet]").attr("href", "../css/twnow.css");
    } else if (this.value == "goodgame") {
      $("#style[rel=stylesheet]").attr("href", "../css/gg.css");
    }
    localStorage.setItem("ggnowstyle", this.value);
  });
});
