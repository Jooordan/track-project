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
      var fiftyfiveOptions = {
        "data" : data["55m Dash"].all(),
        "pagination": 10,
        "tableDiv": "#fiftyfive",
        "filterDiv":"#fiftyfiveFilter"
        };
        Sheetsee.makeTable(fiftyfiveOptions);
        Sheetsee.initiateTableFilter(fiftyfiveOptions);

         var threehundredOptions = {
        "data" : data["300m dash"].all(),
        "pagination": 10,
        "tableDiv": "#threehundred",
        "filterDiv":"#threehundredFilter"
        };
        Sheetsee.makeTable(threehundredOptions);
        Sheetsee.initiateTableFilter(threehundredOptions);
        
         var sixhundredOptions = {
        "data" : data["600m run"].all(),
        "pagination": 10,
        "tableDiv": "#sixhundred",
        "filterDiv":"#sixhundredFilter"
        };
        Sheetsee.makeTable(threehundredOptions);
        Sheetsee.initiateTableFilter(threehundredOptions);
        
        var onethousandOptions = {
        "data" : data["1000m run"].all(),
        "pagination": 10,
        "tableDiv": "#onethousand",
        "filterDiv":"#onethousandFilter"
        };
        Sheetsee.makeTable(sixhundredOptions);
        Sheetsee.initiateTableFilter(sixhundredOptions);
        
        var onethousandOptions = {
        "data" : data["1000m run"].all(),
        "pagination": 10,
        "tableDiv": "#onethousand",
        "filterDiv":"#onethousandFilter"
        };
        Sheetsee.makeTable(onethousandOptions);
        Sheetsee.initiateTableFilter(onethousandOptions);
       
       var onethousandsixhundredOptions = {
        "data" : data["1600m sp"].all(),
        "pagination": 10,
        "tableDiv": "#onethousandsixhundred",
        "filterDiv":"#onethousandsixhundredFilter"
        };
        Sheetsee.makeTable(onethousandsixhundredOptions);
        Sheetsee.initiateTableFilter(onethousandsixhundredOptions);
        
         var onemileOptions = {
        "data" : data["1 mile"].all(),
        "pagination": 10,
        "tableDiv": "#onemile",
        "filterDiv":"#onemileFilter"
        };
        Sheetsee.makeTable(onemileOptions);
        Sheetsee.initiateTableFilter(onemileOptions);

        var fourbytwohundredrelayOptions = {
        "data" : data["4x200m relay"].all(),
        "pagination": 10,
        "tableDiv": "#fourbytwohundredrelay",
        "filterDiv":"#fourbytwohundredFilter"
        };
        Sheetsee.makeTable(fourbytwohundredrelayOptions);
        Sheetsee.initiateTableFilter(fourbytwohundredrelayOptions);
  

        var fourbyfourhundredrelayOptions = {
        "data" : data["4x4m relay"].all(),
        "pagination": 10,
        "tableDiv": "#fourbyfourhundredrelay",
        "filterDiv":"#fourbyfourhundredFilter"
        };
        Sheetsee.makeTable(fourbyfourhundredrelayOptions);
        Sheetsee.initiateTableFilter(fourbyfourhundredrelayOptions);
        
       
        
        

        
        
        

        


        }
      }
});	
