$(document).ready(function() {
  $.ajax({

    type: "get",
    url: "team.xml",
    beforeSend: function() {
      $("#team").html("Loading...");
    },
    timeout: 10000,
    error: function(xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "xml",
    success: function(data) {
      $("#team").html("");
      $(data).find("skillSet").children().each(function() {
        var xmlDoc = $(this);
        $("#team").append("<div class='skillContainer'><p class='skillHeader'>" +
          xmlDoc.find("name").text() + "</p><ul class='skillList'> <li>" +
          xmlDoc.find("title").text() + "</li><li>" +
          xmlDoc.find("title2").text() + "</li><li>" +
          xmlDoc.find("title3").text() + "</li><li>" +
          xmlDoc.find("title4").text() + "</li><li>" +
          xmlDoc.find("title5").text() + "</li><li>" +
          xmlDoc.find("title6").text() + "</li></ul></div><br>");

      });

    }

  });
});


