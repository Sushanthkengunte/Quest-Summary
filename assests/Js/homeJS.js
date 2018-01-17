
$("#lgnBtn").on("click",function(){
    
    $("#SignUpForm").slideUp(500,function(){
    	$("#loginForm").slideToggle(500);
     });
	
	

});

$("#SignUp").on("click",function(){

    $("#loginForm").slideUp(500,function(){
    	$("#SignUpForm").slideToggle(500);
    });
	
	

});