function isValidForm() {
	var isValid = true;
	var videoID = document.getElementById("video-id").value;
	var videoName = document.getElementById("video-name").value;
	var videoDesc = document.getElementById("video-desc").value;
	var videoKey = document.getElementById("video-keywords").value;
	var i;
	var videoGenres = document.getElementsByName('video-category[]');
	if (videoID.length < 10) {
		isValid = false;
		document.getElementById("video-id-alert").innerHTML = "Vui lòng không nhập ít hơn 10 ký tự";
	} else {
		document.getElementById("video-id-alert").innerHTML = "Hợp lệ";
		document.getElementById("video-id-alert").className = "msg-success";
		isValid = false;
	}
	
	if (videoName.length < 10) {
		isValid = false;
		document.getElementById("video-name-alert").innerHTML = "Vui lòng không nhập ít hơn 10 ký tự";
	} else if (videoName.length > 250) {
		document.getElementById("video-name-alert").innerHTML = "Vui lòng không nhập quá 250 ký tự"
	} else {	
		document.getElementById("video-name-alert").innerHTML = "Hợp lệ";
		document.getElementById("video-name-alert").className = "msg-success";
		isValid = false;
	}

	if (videoDesc.length < 10) {
		isValid = false;
		document.getElementById("video-desc-alert").innerHTML = "Vui lòng không nhập ít hơn 10 ký tự";
	} else if (videoDesc.length > 500) {
		document.getElementById("video-desc-alert").innerHTML = "Vui lòng không nhập quá 500 ký tự"
	} else {	
		document.getElementById("video-desc-alert").innerHTML = "Hợp lệ";
		document.getElementById("video-desc-alert").className = "msg-success";
		isValid = false;
	}

	if (videoKey.length < 10) {
		isValid = false;
		document.getElementById("video-keywords-alert").innerHTML = "Vui lòng không nhập ít hơn 10 ký tự";
	} else {
		document.getElementById("video-keywords-alert").innerHTML = "Hợp lệ";
		document.getElementById("video-keywords-alert").className = "msg-success";
		isValid = false;
	}

	for (i = 0; i < videoGenres.length; i++) {
		if (videoGenres[i].checked) {
			var alert = document.getElementById("video-category-alert").value;
			if (alert.style.display === 'block') {
				alert.style.display = 'none';
			} else {
				alert.style.display = 'block';
			}
			isValid = false;
		} else {
			isValid = false;
			document.getElementById("video-category-alert").innerHTML = "Vui lòng chọn 1 ô";
			
		}
	}
	return isValid;
}