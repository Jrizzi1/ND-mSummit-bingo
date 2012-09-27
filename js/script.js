// Get login parameter and create a SEED for the randomizer
var netid = getParameterByName("n");
var CUSTOM_SEED = hashCode(netid);	
//If default or no parameter , redirect to login page
if(CUSTOM_SEED==0){
window.location.href='login.html';
}
//probably not necessary but keeping the seed in localstorage
localStorage.removeItem("customSeed");
localStorage.setItem("customSeed", CUSTOM_SEED);

//array of numbers for each of the 5 columns
var usedNums = new Array(76);

$(document).ready(function() {	
//debugger: localStorage.clear();

//Display variable settings
var twitterAppUri = "twitter://post?message=@NDMobileSummit%20I%20won%20!%20My%20board%20ID%20was%20"+netid;

	$('body').on('touchmove', true);
	$('#netid').append(netid);
	$('#twitApp').attr('href', twitterAppUri);	


//Generate Bingo Card
	newCard();
	
	$('div.square').tappable(function () {
		var squareStorageKey = $(this).attr('id');

      $(this).toggleClass('selected');
	  var selection;
      if ($(this).data('value') == 1) {
            //alert(event.target.id);
      		$(this).data('value', 0);
			localStorage.removeItem(squareStorageKey);
			 }
      else {
            //alert(event.target.id);
      		$(this).data('value', 1);
			 }
//set the square value in local storage so refreshing the page remembers what youve clicked
			localStorage.setItem(squareStorageKey, $(this).data('value'));
         
//Removed because chas Grundy thought it was annoying...clickSnd.play();

		var row1 = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value'));
		var row2 = ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value'));
		var row3 = ($('#sq10').data('value')+$('#sq11').data('value')+$('#sqfree').data('value')+$('#sq12').data('value')+$('#sq13').data('value'));
		var row4 = ($('#sq14').data('value')+$('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value'));	
		var row5 = ($('#sq19').data('value')+$('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value'));			

		var col1 = ($('#sq0').data('value')+$('#sq5').data('value')+$('#sq10').data('value')+$('#sq14').data('value')+$('#sq19').data('value'));
		var col2 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
		var col3 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sqfree').data('value')+$('#sq16').data('value')+$('#sq21').data('value'));
		var col4 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#sq12').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));	
		var col5 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));			

		var diag1 = ($('#sq0').data('value')+$('#sq6').data('value')+$('#sqfree').data('value')+$('#sq17').data('value')+$('#sq23').data('value'));	
		var diag2 = ($('#sq4').data('value')+$('#sq8').data('value')+$('#sqfree').data('value')+$('#sq15').data('value')+$('#sq19').data('value'));	
		
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
			/*$('#header').html(winText);
			$('#header').addClass("win");
			$('#header').attr('data-theme','b').removeClass('ui-bar-c').addClass('ui-bar-b');*/
			$.mobile.changePage($('#winner'), 'pop');	
	
//Removed because chas Grundy thought it was annoying...winSnd.play();
    		
    	} else {
/*			$('#header').html(headerText);
			$('#header').removeClass("win");
			$('#header').attr('data-theme','c').removeClass('ui-bar-b').addClass('ui-bar-c')*/
		}; 
    });
        
});
			
	

function newCard() {
// Cycle through 25 squares	
  for(var i=0 ; i<24 ; i++){
		if (i==12) {
//if 13, append the freesquare then move along			
			$('#board').append("<div data-value='1' class='selected freesquare' id='sqfree'></div>");
			setSquare(i);
		} else {

      setSquare(i);
    }
  }
}
  
function setSquare(thisSquare){

  var currentSquare = "sq" + thisSquare;
  var colPlace = new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
  var colBasis = colPlace[thisSquare] * 15;
  var newNum = colBasis + getNewNum() + 1;

  do{
    newNum = colBasis + getNewNum() + 1;
  }while(usedNums[newNum]);
  
  usedNums[newNum] = true;

			var classVal='';
			var dataVal = localStorage.getItem(currentSquare);
//attempted addClass but got unwanted CSS animation, moved entire board to append  HTML
			if (dataVal == 1)  classVal = ' selected';	
			$('#board').append("<div data-value='"+dataVal+"' class='square"+classVal+"' id='"+currentSquare+"'><div class='text'>"+newNum+"</div></div>");

}


function getNewNum() {
  return Math.floor(Random.next() * 15);
}
var Random =  
{
 seed : parseInt(localStorage.getItem('customSeed')),
 //Returns a random number between 0 and 1
 next : function(lower,upper)
 {
  var maxi = Math.pow(2,32);
  this.seed = (134775813 * (this.seed + 1))
     % maxi;
  var num = (this.seed) / maxi;
  if(typeof lower!='undefined')
  {
   var range = upper - lower;
   num *= range;
   num += lower;
  }
  return num;
 }
}



function hashCode(netid){
    var hash = 0;
	netid = netid.toLowerCase();
    if (netid.length == 0) return hash;
    for (i = 0; i < netid.length; i++) {
        char = netid.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
	//alert(Math.abs(hash));
    return Math.abs(hash);
}



function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
