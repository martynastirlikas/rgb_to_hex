
// Function which takes inputs value after button press & checks for botchy input
function getVal() {
  var input = document.getElementsByName('array[]');
  var valid_input = 0;
  var in_arr = [];
  var out_arr = [];
  
  // Check for botchy input
  for (var i=0; i<input.length; i++){
	var input_line = input[i];
	var val = input_line.value;
	if (Number.isInteger(+val)){
		if (val >= 0 && val <= 255){
			in_arr[i] = val;
			valid_input += 1;
		} else {
			console.log(val + ' number is out of range. Enter between 0 and 255.');
		}
	} else {
		console.log(val + ' number is not integer');
	} 
  }
  
  if (valid_input == input.length){
	for (var i=0; i<input.length; i++){
		out_arr[i] = in_arr[i];
	}
	return out_arr;
  } else {
	return null;
  }
}

// Function which converts RGB inputs to Hex
function convertToHex(){
	var in_arr = getVal();
	var out_hex = "#";
	if (in_arr != null){
		for (var i=0; i<in_arr.length; i++){
			var hex = Number(in_arr[i]).toString(16);
			if (hex.length < 2){
				hex = "0" + hex;
			}
			out_hex += hex; 
		}
	} else {
		out_hex = "Check Console for wrong input identification";
	}
	
	document.getElementById("hex").innerHTML = out_hex;
}
