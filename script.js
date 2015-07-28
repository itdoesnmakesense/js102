$(document).ready(function() {

function sortFunc(array){
  console.log(array.sort());
}


var higherFunc = function(array) {

  for(i=0; i < array.length; i++)
      if(array[i] > 25){
        // var newArray = [];
        var sortedArray = newArray.push(array[i]);
    console.log(array[i]);
    console.log(sortedArray);
     // sortFunc(sortedArray);
 
  }

}

$(function () {
    $('#button').on('click',function(){
        var text = $('#inputText').val();
        var textArray = text.split(",");  
               console.log("clicked");
          
            higherFunc(textArray);
    });
  });








});

  // var textArray = text.split(" ");
  // console.log(textInfo);





// $('#button').click(function(){
//   var text = $('#inputText').value;
//   var textInfo = " ";
//   console.log(textInfo);

//   var textArray = text.split(" ");
  
// });
