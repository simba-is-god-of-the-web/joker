$('#join').click(function(){
	var room = $('#roomId');
	var username = $('#username');
	var id = $('#id');
	if(!room.val()){
		room.addClass('error');
	}
	if(!username.val()){
		username.addClass('error');
	}
	if(room.val() && username.val() && id.val()){
		$.get(`/api/createUser/${username.val()}/${id.val()}`);
		document.location.href = `/room/${room.val()}/${id.val()}`;
	}
});
$('#create').click(() => {
	$.get('/api/createRoom')
		.done(data => {
			$.get(`/api/createUser/${$('#username').val()}/${$('#id').val()}`);
			document.location.href = `/room/${data.rid}/${$('#id').val()}`;
		});
});
/*
$('#start').click(function(){
	le un = $('#username');
	if(un.val()){
		document.location.href = `/room?un=${$('#username').val()}&uid=${$('#id').val()}`;
	}else{
		un.addClass('error');
	}
});
*/
$.get('/api/getNewId').then((e)=>{
	$('#id').val(e.id);
})
console.log('index.js loaded');
