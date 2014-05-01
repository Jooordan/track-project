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
  if (typeof Tabletop !== "undefined"){
    var key= "0AoLw7h0UrV0cdFl2aHR5NUVIRXFvLTRDZ0trQTFyUWc" 
    Tabletop.init( { key: key, callback: showinfo, parseNumbers: true } );
    function showinfo(data) {
      console.log(data)
    }
  }
 

});	
