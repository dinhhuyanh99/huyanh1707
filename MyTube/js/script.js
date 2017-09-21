var apiUrl = "http://youtube-video-api-1608.appspot.com/youtube/api";
(function($){
  $(function(){
  	var page = 1;
  	var limit = 200;
	$('.button-collapse').sideNav();
	$('.modal').modal();
	$('.modal-player').modal();
	$('select').material_select();
	$('#description').trigger('autoresize');
	// Get videos
	$.ajax({
		url: apiUrl + '?page=' + page + '&limit=' + limit,
		type: 'GET',
		success: function(data, status) {
			var addCardContent = '';
			for (var i = 0; i < data.length; i++) {
				addCardContent += '<div class="col s12 m6" id="' + i +'">';
				addCardContent += '<div class="card horizontal">';
				addCardContent += '<div class="card-image">';
				addCardContent += '<a href="#player-video-modal" class="modal-trigger waves-block waves-light waves-ripple waves-effect" onclick="addClipToPlayer('+ '&quot;' + data[i].videoId + '&quot;' + ',' + ' ' + '&quot;' + data[i].name + '&quot;' +  ',' + ' ' + '&quot;' + data[i].description + '&quot;' +');"><img src="https://i.ytimg.com/vi/' + data[i].videoId + '/hqdefault.jpg" width="253" height="197"></a>';
				addCardContent += '</div>';
				addCardContent += '<div class="card-stacked">';
				addCardContent += '<div class="card-content waves-block waves-dark waves-ripple waves-effect">';
				addCardContent += '<a href="#player-video-modal" class="modal-trigger" onclick="addClipToPlayer('+ '&quot;' + data[i].videoId + '&quot;' + ',' + ' ' + '&quot;' + data[i].name + '&quot;' +  ',' + ' ' + '&quot;' + data[i].description + '&quot;' +');">';
				addCardContent += '<span class="card-title activator grey-text text-darken-4">' + data[i].name + '</span>';
				addCardContent += '<p class="grey-text text-darken-2">' + data[i].description + '</p>';
				addCardContent += '</a>'
				addCardContent += '</div>';
				addCardContent += '<div class="card-action">';
				addCardContent += '<a href="#player-video-modal" class="modal-trigger waves-dark waves-ripple waves-effect" onclick="addClipToPlayer('+ '&quot;' + data[i].videoId + '&quot;' + ',' + ' ' + '&quot;' + data[i].name + '&quot;' +  ',' + ' ' + '&quot;' + data[i].description + '&quot;' +');">Xem</a>';
				addCardContent += '<a href="#" class="waves-dark waves-ripple waves-effect">Sửa</a>';
				addCardContent += '<a href="#" class="waves-dark waves-ripple waves-effect" onclick="deleteClip(' + '&quot;' + data[i].videoId + '&quot;' + ')">Xóa</a>';
				addCardContent += '</div>';
				addCardContent += '</div>';
				addCardContent += '</div>';
				addCardContent += '</div>';
				$('#videos').html(addCardContent);
			}
			Materialize.toast('Đã load xong tất cả video!', 2000);
		},
		error: function() {
			Materialize.toast('Không thể load video được', 4000);
		}
	});
  });
})(jQuery);
function addClipToPlayer(videoLink, videoTitle, videoDescriptionModal) {
	document.getElementById("video-player").innerHTML = '<iframe src=https://www.youtube.com/embed/' + videoLink + '?autoplay=1 frameborder="0" allowfullscreen>';
	document.getElementById("title-video").innerHTML = videoTitle;
	document.getElementById("playerDescription").innerHTML = videoDescriptionModal;

}
function deleteClip(oldVideoId) {
	$.ajax({
		url: apiUrl + '?id=' + oldVideoId,
		method: 'DELETE',
		success: function() {
			Materialize.toast('Đã xóa thành công video!', 3000);
		},
		error: function() {
			Materialize.toast('Xóa video không thành công!', 3000);
		}
	});
}

function closePlayer() {
	document.getElementById("video-player").innerHTML = ''; 
}

function handleForm() {
	var videoId = $("#video-id").val();
	var videoName = $("#video-name").val();
	var videoDescription = $("#description").val();
	var videoKeywords = $("#keywords").val();

	var video = {
		"videoId": videoId,
		"name": videoName,
		"description": videoDescription,
		"keywords": videoKeywords
	}

	$.ajax({
		url: apiUrl,
		data: JSON.stringify(video),
		type: 'POST',
		success: function(data,status) {
			Materialize.toast(videoName + " " +"đã được thêm!", 3000);

		},
		error: function() {
			Materialize.toast("Không thêm được video!",3000);
		}
	});
};

function resetForm() {
	document.getElementById("add-video-form").reset();
};
