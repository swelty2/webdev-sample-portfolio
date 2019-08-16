	$(document).ready(function(){
		var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=technology";
	
			$.getJSON(url, function(data){
				var html = "";
				$.each(data.items, function(i, item){
					html += "<h2>" + item.title + "</h2>";	
					html += "<p>" + item.date_taken + "</p>";
					html += item.description;
				});
				$("#photos").html(html);
			});          
        });