var arr;
var numB = ['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'];
var numI = ['I1','I2','I3','I4','I5','I6','I7','I8','I9','I10'];
var numN = ['N1','N2','N3','N4','N5','N6','N7','N8','N9','N10'];
var numG = ['G1','G2','G3','G4','G5','G6','G7','G8','G9','G10'];
var numO = ['O1','O2','O3','O4','O5','O6','O7','O8','O9','O10'];
var gen_nums = [];

//All rolls possible
var roll =['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10',
			'I1','I2','I3','I4','I5','I6','I7','I8','I9','I10',
			'N1','N2','N3','N4','N5','N6','N7','N8','N9','N10',
			'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10',
			'O1','O2','O3','O4','O5','O6','O7','O8','O9','O10'];
var gen_rolls = [];
var counter = 0;
$(document).ready(function(){
	gameBoardDraw();			//Draw the board on load 
	gameBoardClickHandler(); 	//Add click handler to tile
	$('#roll').on('click',function(){
		counter++;
		var value = get_rand(roll,gen_rolls);
		value = counter+". "+value;
		var newRoll = $('<h5></h5>')
		newRoll.text(value);
		$('#value').prepend(newRoll);
	});
});

/*
	Draw the board
*/
function gameBoardDraw(){
	var value = 0;
	$("#bingoBoard").empty();								//Empty the board	
	var row = $("<tr></tr>");
	for(var y = 0 ; y < 5 ; y++){										   	//Y coordinate	!!
		for(var x=0 ; x < 5 ; x++){ 										//X coordinate  !!
			var tile = $("<div class ='tile' idValue='"+value+"'></div>"); 	//Add the x and y coordinate together
			var value =  valueGen(x,y);
			$(tile).text(value);
			$(row).append(tile);											//Add the tile to the row 
			value++;
		}
		$("#bingoBoard").append(row);					//Append all tiles to the row 
		row = $("<tr></tr>");							//Reset 
	}
}

/*
	Click handler
*/
function gameBoardClickHandler() {
	$('.tile').click(function () {
		flip($(this), $(this).attr('idValue'));
	});
}


/*
	Give the board random text value
*/
function valueGen(x,y){
	var value = "";
	if(x === 0){
		value = get_rand(numB,gen_nums);
	}
	if(x === 1){
		value = get_rand(numI,gen_nums);
	}
	if(x === 2){
		value = get_rand(numN,gen_nums);
	}
	if(x === 3){
		value = get_rand(numG,gen_nums);
	}
	if(x === 4){
		value = get_rand(numO,gen_nums);
	}	 
	if(x ===2 && y == 2){
		value ="Free";
	}
	return value;
}


/*
	Flip listener to flip the card
*/
function flip(tile,id){
	tile.toggleClass("flip");
}


/*
	RANDOM FUNCTION FOUND ONLINE
	reference 
	http://stackoverflow.com/questions/3796786/random-number-generator-without-dupes-in-javascript
*/
function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++) 
       if(array[i] == el) 
       	return true;
   return false;
}

function get_rand(array,check) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(check,rand)) {
       check.push(rand); 
       return rand;
    }
    return get_rand(array,check);
}

