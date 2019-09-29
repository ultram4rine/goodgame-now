$(document).ready(function() {
  var cups = function() {
    $.get("https://goodgame.ru/api/4/", function(data) {
      var open = "";
      wrap = $("#tournaments");
      answercups = data;
      wrap.children("#open").html(open);
      for (var i = 0; i < answercups.cups.length; i++) {
        if (answercups.cups[i].started == false) {
          if (answercups.cups[i].color != null) {
            var color = "#" + answercups.cups[i].color;
          } else {
            var color = "#2baed7";
          }

          if (answercups.cups[i].gameTitle != null) {
            var game = answercups.cups[i].gameTitle;
          } else {
            var game = "Other games";
          }

          if (answercups.cups[i].prize_fund != null) {
            var prize = Math.trunc(answercups.cups[i].prize_fund);
          } else {
            var prize = 0;
          }

          if (answercups.cups[i].participants_type == "1") {
            if (
              answercups.cups[i].participants.toString().length == 2 &&
              answercups.cups[i].participants.toString().charAt(0) == "1"
            ) {
              var parts = answercups.cups[i].participants + " игроков";
            } else {
              switch (answercups.cups[i].participants.toString().slice(-1)) {
                case "1":
                  var parts = answercups.cups[i].participants + " игрок";
                  break;
                case "2":
                case "3":
                case "4":
                  var parts = answercups.cups[i].participants + " игрокa";
                  break;
                default:
                  var parts = answercups.cups[i].participants + " игроков";
              }
            }
          } else if (answercups.cups[i].participants_type == "2") {
            if (
              answercups.cups[i].participants.toString().length == 2 &&
              answercups.cups[i].participants.toString().charAt(0) == "1"
            ) {
              var parts = answercups.cups[i].participants + " команд";
            } else {
              switch (answercups.cups[i].participants.toString().slice(-1)) {
                case "1":
                  var parts = answercups.cups[i].participants + " команда";
                  break;
                case "2":
                case "3":
                case "4":
                  var parts = answercups.cups[i].participants + " команды";
                  break;
                default:
                  var parts = answercups.cups[i].participants + " команд";
              }
            }
          }

          var today = new Date();
          var date = new Date(+answercups.cups[i].start * 1000);
          var diffdate = Math.ceil(
            Math.abs(date.getTime() - today.getTime()) / (1000 * 60)
          );
          var d = date.getDate().toString();
          if (d.length == 1) {
            d = "0" + d;
          }
          var m = date.getMonth() + 1;
          var month = m.toString();
          if (month.length == 1) {
            month = "0" + month;
          }
          day = d + "." + month + ", ";
          var hour = date.getHours().toString();
          if (hour.length == 1) {
            hour = "0" + hour;
          }
          var minutes = date.getMinutes().toString();
          if (minutes.length == 1) {
            minutes = minutes + "0";
          }
          if (diffdate != 0) {
            var time = day + hour + ":" + minutes;
          } else {
            var time = "Уже идет";
          }

          var svg =
            '<svg style="fill: ' +
            color +
            ';" class="flag" width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="tournament-block" sketch:type="MSArtboardGroup" transform="translate(-378.000000, -78.000000)"><path d="M388,93 L378,78 L398,78 L398,101 L399,102 C399,102 405.111996,104.619427 408,106 C408.009521,106.863281 408.009521,108 408.009521,108 L378,108 L388,93 Z" id="flag" sketch:type="MSShapeGroup" transform="translate(393.004761, 93.000000) scale(-1, 1) translate(-393.004761, -93.000000) "></path></g></g></svg>';

          if (answercups.cups[i].logo != false) {
            open +=
              '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/cup/' +
              answercups.cups[i].id +
              '/"><div id="cups" name="' +
              answercups.cups[i].title +
              '"><img src="' +
              answercups.cups[i].logo +
              '"><div class="stripe" style="background-color: ' +
              color +
              '"><div id="cuptitle" title="' +
              answercups.cups[i].title +
              '">' +
              answercups.cups[i].title +
              "</div>" +
              svg +
              '</div></div></a><a><div id="cupdesc" name="' +
              answercups.cups[i].title +
              '"><div class="cupd">Tourney starts at: </div><div class="cuptime">' +
              time +
              '</div><div class="cupd">Game</div><div class="cupgame">' +
              game +
              '</div><div class="cupd">Prize pool</div><div class="cupaward">' +
              prize +
              ' <span class="rub-sign"></span></div><div class="cupd">Prize places</div><div class="cupplaces">' +
              answercups.cups[i].prize_places +
              '</div><div class="cupd">Participants</div><div class="cupparts">' +
              parts +
              "</div></div></a>";
          } else {
            open +=
              '<a target="_blank" rel="noopener noreferrer" href="https://goodgame.ru/cup/' +
              answercups.cups[i].id +
              '/"><div id="cups" name="' +
              answercups.cups[i].title +
              '"><div style="text-align: center; width: 267px; height: 190px; line-height: 190px; font-family: -apple-system, Open Sans, sans-serif; font-size: 30px; color: white; border: 1px solid ' +
              color +
              '">No Logo</div><div class="stripe" style="background-color: ' +
              color +
              '"><div id="cuptitle" title="' +
              answercups.cups[i].title +
              '">' +
              answercups.cups[i].title +
              "</div>" +
              svg +
              '</div></div></a><a><div id="cupdesc" name="' +
              answercups.cups[i].title +
              '"><div class="cupd">Tourney starts at: </div><div class="cuptime">' +
              time +
              '</div><div class="cupd">Game</div><div class="cupgame">' +
              game +
              '</div><div class="cupd">Prize pool</div><div class="cupaward">' +
              prize +
              ' <span class="rub-sign"></span></div><div class="cupd">Prize places</div><div class="cupplaces">' +
              answercups.cups[i].prize_places +
              '</div><div class="cupd">Participants</div><div class="cupparts">' +
              parts +
              "</div></div></a>";
          }
        }
      }
      wrap.children("#open").append(open);
    });
  };

  cups();

  $("#refresh").click(function() {
    var visible = $("#content div:visible");

    $({ deg: 0 }).animate(
      { deg: 360 },
      {
        duration: 200,
        step: function(now) {
          $(".icorefresh").css({
            transform: "rotate(" + now + "deg)"
          });
        }
      }
    );

    if (visible.attr("id") == "tournaments") {
      cups();
    }
  });
});
