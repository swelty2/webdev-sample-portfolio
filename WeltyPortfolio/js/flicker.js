	$(document).ready(function() {
	  var searchTerm;
	  $("#btnSearch").click(function() {

	    // Set the search term
	    searchTerm = "";
	    if ($("#search").val() == "") {
	      alert("You must enter one or more tags!");
	    } else {
	      searchTerm = $("#search").val();
	      // Build the URL based on the search term
	      var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
	        "format=json&jsoncallback=?&tags=technology" + "&tagmode=all";

	      $.getJSON(url, function(data) {
	        var html = "";
	        $.each(data.items, function(i, item) {

	          html += "<img src=" + item.media.m + ">";

	        });
	        $("#photos").html(html);
	      });
	    }
	  });
	});
