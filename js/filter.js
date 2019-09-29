$(document).ready(function() {
  $(document).on("input", "#search", function(ev) {
    if ($(ev.target).val().length > 0) {
      var name = $(ev.target).val();
      $("a div[name]").hide();
      $("a div[name^=" + name + "]").show();
    } else {
      $("a div[name]").show();
    }
  });

  $("#search").focus(function() {
    $("#filter").addClass("focused");
  });

  $("#search").focusout(function() {
    $("#filter").removeClass("focused");
  });
});
