
$('#join').click(function(){
	var room = $('#roomId');
	var username = $('#username');
	var id = $('#id');
	if(!room.val()){
		room.addClass('error');
	}
	if(!username.val()){
		username.addclass('error');
	}
	if(room.val() && username.val() && id.val()){
		document.location.href = `/room?un=${username.val()}&roomid=${room.val()}&uid=${id.val()}`;
	}
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
