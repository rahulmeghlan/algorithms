function insertionSort(arr){
var temp = 0;
 for(var i = 1; i < arr.length; i++){
	for(var j = i-1; j >= 0; j--){
	  if(arr[i] < arr[j]){
	    temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
		i--; // This will look into the next element in the left part of the array
	  }
	}
 }
 return arr;
}