$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
	
$("ul").on("click","span",function(event){
		//.parent() will give us the li and remove whole li if not used than only span element will get removed . 
	$(this).parent().fadeOut( 500 ,function(){
		$(this).remove();
	});
		//stopPropagation() stops the span from taking above mention function of li. As well as div , container , body this is k/as Event Bubbling 
	event.stopPropagation();
});

$("input").keypress(function(event){
	if( event.which === 13 ){
		var todoText=($(this).val());
		$(this).val("");
		$("ul").append( "<li><span> X </span>" +todoText+ "</li>" )
	}	
});