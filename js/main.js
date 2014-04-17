$(function(){
	if ($.fn.slidesjs){
	 $(".slideshow").slidesjs({
        width: 10,
        height: 5,
        pagination: {
     		active: false 
  		},
        callback: {
      		loaded: function(number) {
      		$(".slidesjs-previous").text("<");
$(".slidesjs-next").text(">");
      		}
  		}
      });
	}
});	
