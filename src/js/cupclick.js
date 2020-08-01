$(document).ready(function() {
  $("#cup").click(function() {
    var btn = $("#cup");
    btn
      .parent()
      .children()
      .css("background-color", "#1C2644");
    btn.css("background-color", "#52709C");

    $("#refresh").css("display", "block");
    $("#filter").css("display", "block");
    $("#pages").css("display", "none");

    var cups = $("#tournaments");
    cups
      .parent()
      .children()
      .css("display", "none");
    cups.css("display", "block");
  });
});
