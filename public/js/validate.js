$(document).ready(function(){

	$('#formSearch').submit(function(e){
		if( $('#exampleInputName1').val() == '' || $('#exampleInputName2').val() == '' || $('#exampleInputName3').val() == '' || $('#exampleInputName4').val() == '' )
		{
			alert('some fields are missing');
			return false ;
		}  

	});
	
});