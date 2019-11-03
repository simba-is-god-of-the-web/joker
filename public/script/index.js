$('#start').click(function(){
	document.location.href = `/room?un=${$('#username').val()}&uid=${$('#id').val()}`;
});
$.get('/api/getNewId').then((e)=>{
	$('#id').val(e.id);
})
console.log('index.js loaded');
