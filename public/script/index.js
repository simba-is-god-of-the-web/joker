$('#start').click(function(){
	let un = $('#username');
	if(un.val()){
		document.location.href = `/room?un=${$('#username').val()}&uid=${$('#id').val()}`;
	}else{
		un.addClass('error');
	}
});
$.get('/api/getNewId').then((e)=>{
	$('#id').val(e.id);
})
console.log('index.js loaded');
