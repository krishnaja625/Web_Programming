function func(){
	var objComm = [];
	var savedpasswrd = "Krish12.";
	var valu_name = document.getElementById('nameD').value;
	var valCmt = document.getElementById('comment').value;
	var key_value = document.getElementById('datapassrd').value;
	var obj = new Object();
	obj.namep = valu_name;
	obj.commentp = valCmt;

	if(savedpasswrd === key_value) {
		if(valu_name == "") {
			alert("Enter the name");
			return false;
		}
		if(valCmt == "") {
			alert("Enter any comment");
			return false;
		}
		objComm.push(obj.commentp);
		objComm.push(obj.namep);
		
		document.getElementById('comments').insertAdjacentHTML('afterend','<div id="comment_alert" class="row">'+objComm+'</div>');
		 document.getElementById("formdata").reset();
	} else {
		alert("Enter a valid password");
	reload();
	}
}

function reset() {
	location.reload()
}