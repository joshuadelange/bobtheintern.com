$(document).ready(function(){
	var colors = ['#EE4035', '#F37737', '#F9E97A', '#7AC043', '#9ED9F7'];
	var randomColor = function(){
		return colors[Math.floor(Math.random() * colors.length) ];
	};
	$.ajax({
		url: 'https://www.kimonolabs.com/api/5h87ns5c?apikey=ade40a23fb70523f951a0d582180bf3f',
		crossDomain: true,
		dataType: 'jsonp',
		success: function (response) {
			console.log(response.results.collection1);
			var allTweetsCombined = '';
			$.each(response.results.collection1, function(index, item){
				$('#tweets-here-please').append('<span style="background-color:' + randomColor() + '">' + item.tweet + '</span>');
				allTweetsCombined = allTweetsCombined + ' ' + item.tweet;
				if(index === (response.results.collection1.length - 1)){
					responsiveVoice.speak(allTweetsCombined, 'UK English Female');
				}
			});
		}
	});
});