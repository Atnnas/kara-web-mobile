$( document ).ready(function() {

	$("#openNav").click(function() {
	  openNav();
	});

    $("#closeNav").click(function() {
      closeNav();
    });

    $( '.sidenav a' ).on("click", function(){
        closeNav();
    });	
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}