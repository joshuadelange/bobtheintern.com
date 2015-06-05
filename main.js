$(document).ready(function(){
	var colors = ['#EE4035', '#F37737', '#F9E97A', '#7AC043', '#9ED9F7'];
	var randomColor = function(){
		return colors[Math.floor(Math.random() * colors.length) ];
	};
	$.ajax({
		url: 'https://www.kimonolabs.com/api/8l8odqqy?apikey=ade40a23fb70523f951a0d582180bf3f',
		crossDomain: true,
		dataType: 'jsonp',
		success: function (response) {
			console.log(response.results.collection1);
			var allTweetsCombined = '';
			$.each(response.results.collection1, function(index, item){
				$('#tweets-here-please').append('<span style="color:' + randomColor() + '">' + item.property1 + '</span>');
				// $('#tweets-here-please').append(' ' + item.property1);
				console.log(index, response.results.collection1.length);
				allTweetsCombined = allTweetsCombined + ' ' + item.property1;
				if(index === (response.results.collection1.length - 1)){
					responsiveVoice.speak(allTweetsCombined);
				}
			});
		}
	});
});